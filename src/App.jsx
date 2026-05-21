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
import { calculateType } from "./data/mbtiData";
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
  const [resultCode, setResultCode] = useState(null);
  const [user, setUser] = useState(null);

  // Monitor Auth sessions
  useEffect(() => {
    if (isSupabaseConfigured) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null);
      });
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
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
    
    // Auto-update profile with type if logged in
    if (user) {
      if (isSupabaseConfigured) {
        supabase
          .from("profiles")
          .update({ mbti_type: calculated.code })
          .eq("id", user.id)
          .then();
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
        .then();
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
    setUser(null);
    setScreen("landing");
  }

  function restart() {
    setScreen("landing");
    setAnswers(null);
    setResultCode(null);
  }

  // Pre-calculate current result block in case of straight routing or refreshes
  const activeResult = calculateType(answers || Array(12).fill("a"));

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
