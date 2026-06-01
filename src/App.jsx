import React, { useState, useEffect } from "react";
import { 
  LandingScreen, 
  TestScreen, 
  ResultScreen, 
  AuthScreen, 
  ReportScreen,
  DesktopShell,
  AboutScreen,
  StylesScreen,
  Live13fScreen
} from "./components/MbtiScreens";
import { calculateType, TYPES } from "./data/mbtiData";
import { supabase, isSupabaseConfigured, fallbackAuth } from "./utils/supabase";

// Brand theme: Premium Fintech Indigo & Deep Slate
const BRAND_THEME = {
  name: "Indigo",
  bg: "#F9FAFB",
  bg2: "#E2E8F0",
  surface: "#FFFFFF",
  accent: "#4F46E5",
  accent2: "#7C3AED",
  accentSoft: "#EEF2FF",
  accent2Soft: "#F5F3FF",
  accentLite: "#818CF8",
  textStrong: "#1F2937",
  textMute: "#6B7280",
};

function App() {
  // App routing state
  const [screen, setScreen] = useState("landing"); // landing | test | result | auth | report | about | styles | live13f
  const [answers, setAnswers] = useState(null);
  const [resultCode, setResultCode] = useState(() => {
    return localStorage.getItem("guru_mbti_result") ||
           localStorage.getItem("guru_mbti_temp_result") || null;
  });
  const [user, setUser] = useState(null);

  // Monitor Auth sessions
  useEffect(() => {
    if (isSupabaseConfigured) {
      // 1. Initial Session Check
      supabase.auth.getSession().then(({ data: { session } }) => {
        const loggedInUser = session?.user ?? null;
        setUser(loggedInUser);
        
        const cachedResult = localStorage.getItem("guru_mbti_temp_result");
        if (loggedInUser && cachedResult) {
          supabase
            .from("profiles")
            .update({ mbti_type: cachedResult })
            .eq("id", loggedInUser.id)
            .then(() => {
              localStorage.removeItem("guru_mbti_temp_result");
              setScreen("report");
            });
        }
      });

      // 2. Auth State Change Listener (Catches OAuth redirects)
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        const loggedInUser = session?.user ?? null;
        setUser(loggedInUser);
        
        if (loggedInUser && (event === "SIGNED_IN" || event === "USER_UPDATED")) {
          const cachedResult = localStorage.getItem("guru_mbti_temp_result");
          if (cachedResult) {
            supabase
              .from("profiles")
              .update({ mbti_type: cachedResult })
              .eq("id", loggedInUser.id)
              .then(() => {
                localStorage.removeItem("guru_mbti_temp_result");
                setScreen("report");
              });
          } else {
            // Already logged in and no temp cache, go to report screen if route allows
            setScreen("report");
          }
        }
      });
      return () => subscription.unsubscribe();
    } else {
      setUser(fallbackAuth.getUser());
    }
  }, []);

  function start() {
    setScreen("test");
    setAnswers(null);
  }

  function completeTest(ans) {
    setAnswers(ans);
    const calculated = calculateType(ans);
    setResultCode(calculated.code);
    
    // Save to localStorage (both keys: temp for OAuth redirect, persistent for refresh)
    localStorage.setItem("guru_mbti_temp_result", calculated.code);
    localStorage.setItem("guru_mbti_result", calculated.code);
    
    // Auto-update profile with type if logged in
    if (user) {
      if (isSupabaseConfigured) {
        supabase
          .from("profiles")
          .update({ mbti_type: calculated.code })
          .eq("id", user.id)
          .then(() => {
            localStorage.removeItem("guru_mbti_temp_result");
          });
      } else {
        fallbackAuth.updateProfileMbti(calculated.code);
      }
      setScreen("report"); // Bypass sign-up since user is authenticated!
    } else {
      setScreen("result");
    }
  }

  function continueToAuth() {
    setScreen("auth");
  }

  function authLogin(provider, loggedInUser) {
    setUser(loggedInUser);
    
    const finalMbti = resultCode || "FCVS";
    if (isSupabaseConfigured) {
      supabase
        .from("profiles")
        .update({ mbti_type: finalMbti })
        .eq("id", loggedInUser.id)
        .then(() => {
          localStorage.removeItem("guru_mbti_temp_result");
        });
    } else {
      fallbackAuth.updateProfileMbti(finalMbti);
    }
    
    setScreen("report");
  }

  async function handleLogOut() {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    } else {
      await fallbackAuth.signOut();
    }
    localStorage.removeItem("guru_mbti_temp_result");
    setUser(null);
    setScreen("landing");
  }

  function restart() {
    setScreen("landing");
    setAnswers(null);
    setResultCode(null);
    localStorage.removeItem("guru_mbti_temp_result");
    localStorage.removeItem("guru_mbti_result");
  }

  // Pre-calculate current result: prefer saved resultCode over re-computing from answers
  const activeResult = (resultCode && TYPES[resultCode])
    ? { code: resultCode, scores: {}, ...TYPES[resultCode] }
    : calculateType(answers || Array(12).fill("a"));

  // Unified responsive router mapping
  const screenComponents = {
    landing: <LandingScreen onStart={start} theme={BRAND_THEME} />,
    test: <TestScreen onComplete={completeTest} onBack={() => setScreen("landing")} theme={BRAND_THEME} />,
    result: <ResultScreen result={activeResult} onContinue={continueToAuth} theme={BRAND_THEME} />,
    auth: <AuthScreen onLogin={authLogin} onBack={() => setScreen("result")} theme={BRAND_THEME} result={activeResult} />,
    report: <ReportScreen result={activeResult} onRestart={restart} theme={BRAND_THEME} />,
    about: <AboutScreen theme={BRAND_THEME} onStart={start} />,
    styles: <StylesScreen theme={BRAND_THEME} />,
    live13f: <Live13fScreen theme={BRAND_THEME} />,
  };

  return (
    <DesktopShell 
      theme={BRAND_THEME} 
      screen={screen} 
      onLogoClick={() => setScreen("landing")} 
      onNavigate={(target) => setScreen(target)}
      user={user} 
      onLogOut={handleLogOut}
    >
      {screenComponents[screen]}
    </DesktopShell>
  );
}

export default App;
