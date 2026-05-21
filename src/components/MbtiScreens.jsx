import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { QUESTIONS, TYPES, calculateType } from "../data/mbtiData";
import { GURUS_LIST } from "../data/gurusList";
import { GROUP_CONSENSUS } from "../data/groupConsensus";
import { getGuruReport, GURU_REPORTS } from "../data/guruReports";
import { supabase, isSupabaseConfigured, fallbackAuth } from "../utils/supabase";

// Dynamic Icon Mapper
export function Icon({ name, size = 20, className = "", strokeWidth = 2 }) {
  const map = {
    "globe": Icons.Globe,
    "building": Icons.Building,
    "newspaper": Icons.Newspaper,
    "file-text": Icons.FileText,
    "trending-up": Icons.TrendingUp,
    "calculator": Icons.Calculator,
    "shield": Icons.Shield,
    "flame": Icons.Flame,
    "users": Icons.Users,
    "user-minus": Icons.UserMinus,
    "zap": Icons.Zap,
    "scissors": Icons.Scissors,
    "rocket": Icons.Rocket,
    "anchor": Icons.Anchor,
    "sparkles": Icons.Sparkles,
    "gem": Icons.Gem,
    "line-chart": Icons.LineChart,
    "scale": Icons.Scale,
    "target": Icons.Target,
    "layers": Icons.Layers,
    "crosshair": Icons.Crosshair,
    "pie-chart": Icons.PieChart,
    "x-circle": Icons.XCircle,
    "alert-triangle": Icons.AlertTriangle,
    "chevron-left": Icons.ChevronLeft,
    "chevron-right": Icons.ChevronRight,
    "lock": Icons.Lock,
    "check": Icons.Check,
    "crown": Icons.Crown,
    "rotate-ccw": Icons.RotateCcw,
    "arrow-right": Icons.ArrowRight,
    "play-circle": Icons.PlayCircle,
    "star": Icons.Star,
    "shield-check": Icons.ShieldCheck,
    "external-link": Icons.ExternalLink,
    "user": Icons.User,
    "log-out": Icons.LogOut,
    "info": Icons.Info,
    "help-circle": Icons.HelpCircle,
    "mail": Icons.Mail,
    "key": Icons.Key,
    "bookmark": Icons.Bookmark,
    "bell": Icons.Bell,
    "smartphone": Icons.Smartphone,
    "share-2": Icons.Share2,
    "download": Icons.Download,
    "search": Icons.Search
  };

  const Comp = map[name] || Icons.HelpCircle;
  return <Comp size={size} className={className} strokeWidth={strokeWidth} />;
}

function axisLabel(axis) {
  return ({ MF: "거시 vs 기업분석", TC: "추세 vs 역발상", GV: "성장 vs 가치", SA: "집중 vs 분산" })[axis];
}

// ─────────────────────────────────────────
// CUSTOM DATA HOOK: DYNAMIC SUPABASE DATA FETCHING
// ─────────────────────────────────────────
function useSupabaseData(resultCode) {
  const [state, setState] = useState({
    gurus: [],
    consensus: null,
    isLive: false,
    loading: false
  });

  useEffect(() => {
    async function load() {
      if (!isSupabaseConfigured) return;
      setState(s => ({ ...s, loading: true }));
      try {
        // 1. Fetch matching gurus
        const { data: dbGurus, error: errGurus } = await supabase
          .from("gurus")
          .select("*")
          .eq("mbti_type", resultCode);

        if (errGurus || !dbGurus || dbGurus.length === 0) {
          setState(s => ({ ...s, loading: false }));
          return;
        }

        const guruIds = dbGurus.map(g => g.id);

        // 2. Fetch cash ratios
        const { data: dbHistory, error: errHistory } = await supabase
          .from("guru_portfolio_history")
          .select("*")
          .in("guru_id", guruIds)
          .order("quarter", { ascending: false });

        // Calculate average latest cash ratio
        const latestCashMap = {};
        dbHistory?.forEach(h => {
          if (!latestCashMap[h.guru_id]) {
            latestCashMap[h.guru_id] = h.cash_ratio;
          }
        });
        const cashValues = Object.values(latestCashMap);
        const avgCash = cashValues.length > 0 
          ? Math.round(cashValues.reduce((sum, v) => sum + Number(v), 0) / cashValues.length)
          : 12;

        // 3. Fetch overlapping holdings
        const { data: dbPortfolios, error: errPortfolios } = await supabase
          .from("guru_portfolios")
          .select("*")
          .in("guru_id", guruIds);

        const tickerCounts = {};
        const tickerNames = {};
        const tickerChanges = {};
        dbPortfolios?.forEach(p => {
          if (!tickerCounts[p.ticker]) {
            tickerCounts[p.ticker] = { count: 0, totalWeight: 0 };
            tickerNames[p.ticker] = p.company_name;
            tickerChanges[p.ticker] = p.change_type;
          }
          tickerCounts[p.ticker].count += 1;
          tickerCounts[p.ticker].totalWeight += Number(p.weight);
        });

        const sortedOverlaps = Object.entries(tickerCounts)
          .map(([ticker, info]) => ({
            ticker,
            name: tickerNames[ticker],
            description: `집단 내 ${info.count}개 매니저 오버랩 (평균 비중 ${(info.totalWeight / info.count).toFixed(1)}%)`,
            change: tickerChanges[ticker] || "유지"
          }))
          .sort((a, b) => b.count - a.count || b.weight - a.weight)
          .slice(0, 4);

        const defaultSectors = [
          { name: "금융", value: 42, color: "#4F46E5" },
          { name: "정보기술", value: 25, color: "#10B981" },
          { name: "헬스케어", value: 15, color: "#F59E0B" },
          { name: "에너지", value: 12, color: "#EF4444" },
          { name: "기타", value: 6, color: "#6B7280" }
        ];

        const dynamicConsensus = {
          groupName: (GROUP_CONSENSUS[resultCode] || GROUP_CONSENSUS.FCVS).groupName,
          summary: `Supabase 실시간 데이터베이스 연동 분석 결과. ${dbGurus.map(g => g.name_kr).join(", ")}의 매매 포지션을 역추적하여 실시간으로 계산한 통계입니다.`,
          averageCashRatio: avgCash,
          collectiveSentiment: avgCash > 20 ? "보수적 방어" : "공격적 매집",
          overlappingHoldings: sortedOverlaps,
          groupCharts: { sectors: defaultSectors }
        };

        const mappedGurus = dbGurus.map(g => ({
          id: g.id,
          nameEn: g.name_en,
          nameKr: g.name_kr,
          firmName: g.firm_name,
          cik: g.cik,
          mbtiType: g.mbti_type,
          description: g.description
        }));

        setState({
          gurus: mappedGurus,
          consensus: dynamicConsensus,
          isLive: true,
          loading: false
        });
      } catch (err) {
        console.error("Supabase live load error:", err);
        setState(s => ({ ...s, loading: false }));
      }
    }
    load();
  }, [resultCode]);

  return state;
}

function useSupabaseGuruReport(guruId) {
  const [state, setState] = useState({
    report: null,
    isLive: false,
    loading: false
  });

  useEffect(() => {
    async function load() {
      if (!isSupabaseConfigured || !guruId) return;
      setState(s => ({ ...s, loading: true }));
      try {
        const { data: dbPortfolios, error: errPortfolios } = await supabase
          .from("guru_portfolios")
          .select("*")
          .eq("guru_id", guruId);

        const { data: dbHistory, error: errHistory } = await supabase
          .from("guru_portfolio_history")
          .select("*")
          .eq("guru_id", guruId)
          .order("quarter", { ascending: true });

        if (errPortfolios && errPortfolios.length === 0) {
          setState({ report: null, isLive: false, loading: false });
          return;
        }

        const teaser = dbPortfolios?.find(p => p.is_teaser);
        const premiums = dbPortfolios?.filter(p => !p.is_teaser);
        const trendData = dbHistory?.map(h => Number(h.cash_ratio));

        const sectorMix = [
          { name: "금융", value: 45, color: "#4F46E5" },
          { name: "정보기술", value: 30, color: "#10B981" },
          { name: "소비재", value: 15, color: "#F59E0B" },
          { name: "기타", value: 10, color: "#6B7280" }
        ];

        setState({
          report: {
            hasChanges: true,
            filingDate: "2026-05-15",
            quarter: "2026 Q1",
            teaserTicker: teaser ? {
              ticker: teaser.ticker,
              name: teaser.company_name,
              reason: `최근 분기 ${teaser.change_type} 매집`,
              change: teaser.change_type,
              weight: teaser.weight
            } : null,
            premiumHoldings: premiums?.map(p => ({
              ticker: p.ticker,
              name: p.company_name,
              reason: `${p.change_type} 매칭비중 ${p.weight}%`,
              change: p.change_type,
              weight: p.weight
            })),
            sectorMix,
            trendData: trendData && trendData.length > 0 ? trendData : [5, 7, 8, 12, 15, 20, 24, 28, 30, 32, 35, 38],
            bearCase: [
              "특정 기업 및 특정 섹터군에 대한 자산 편향이 장기 방어율 훼손 가능성",
              "최근 거시경제 변곡점 부근의 방어적 현금 포지셔닝 전환 압박"
            ],
            actionPlan: [
              { title: "비중 상위 1~3위 종목 마진 추적", detail: "핵심 영업이익률 지탱 여부 및 어닝 콜 모니터링" },
              { title: "현금 확보 전략 동행", detail: "대가의 현금 보유 추세를 참조해 자산 분할 매수 현금 비중 리밸런싱" }
            ]
          },
          isLive: true,
          loading: false
        });
      } catch (err) {
        console.error("Supabase guru dynamic load error:", err);
        setState({ report: null, isLive: false, loading: false });
      }
    }
    load();
  }, [guruId]);

  return state;
}

// ─────────────────────────────────────────
// 1. RESPONSIVE LANDING SCREEN
// ─────────────────────────────────────────
export function LandingScreen({ onStart, theme }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column - Headline & CTA */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className={`inline-flex items-center gap-2 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
            <span className="px-3.5 py-1.5 rounded-full text-[12.5px] font-bold" style={{ background: theme.accentSoft, color: theme.accent }}>
              13F 공시 실시간 분석 연동
            </span>
          </div>

          <h1 className={`text-[32px] md:text-[50px] leading-[1.2] font-extrabold tracking-[-0.03em] transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ color: theme.textStrong }}>
            내 투자 본능은 <span style={{ color: theme.accent }}>워렌 버핏</span>일까,<br />
            아니면 <span style={{ color: theme.accent2 }}>캐시 우드</span>일까?
          </h1>

          <p className={`text-[15.5px] md:text-[18px] leading-relaxed transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ color: theme.textMute }}>
            12가지 투자 심리 기획 질문을 통해 나의 투자 DNA 유형을 찾고,<br className="hidden md:block" />
            나와 매칭되는 글로벌 대가 집단의 실제 포트폴리오(13F)를 실시간 분석해 보세요.
          </p>

          <div className={`pt-4 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <button 
              onClick={onStart} 
              className="h-[56px] px-8 rounded-2xl text-[16px] font-extrabold text-white transition-all hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-3 shadow-md"
              style={{ background: theme.accent }}
            >
              <span>나의 투자 본능 진단 시작</span>
              <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </div>

        {/* Right Column - Visual Mockup Card Stack */}
        <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}`}>
          <div className="rounded-[32px] p-6 md:p-8 shadow-2xl relative overflow-hidden border border-slate-100" style={{ background: theme.surface }}>
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-40" style={{ background: `radial-gradient(closest-side, ${theme.accentSoft}, transparent)` }}></div>
            
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider" style={{ color: theme.textMute }}>INVESTOR PROFILE</span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg" style={{ background: theme.bg2, color: theme.textMute }}>FCVS</span>
              </div>
              
              <div>
                <h3 className="text-[24px] font-extrabold" style={{ color: theme.textStrong }}>냉철한 가치 스나이퍼</h3>
                <p className="text-[13px] mt-1" style={{ color: theme.textMute }}>Warren Buffett · 가치투자형 집중 헌터</p>
              </div>

              {/* Traits visual block */}
              <div className="space-y-2">
                {[
                  { label: "기업분석 지향", value: 85 },
                  { label: "역발상 매수성향", value: 72 },
                  { label: "안전마진 가치지향", value: 90 },
                  { label: "소수종목 집중투자", value: 80 }
                ].map((t) => (
                  <div key={t.label} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold" style={{ color: theme.textStrong }}>
                      <span>{t.label}</span>
                      <span>{t.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${t.value}%`, background: theme.accent }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 13F Matching Item preview */}
              <div className="rounded-2xl p-4 flex items-center justify-between border border-slate-100" style={{ background: theme.bg }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[14px]" style={{ background: theme.accentSoft, color: theme.accent }}>
                    GOOGL
                  </div>
                  <div>
                    <div className="text-[13px] font-bold" style={{ color: theme.textStrong }}>Alphabet Inc.</div>
                    <div className="text-[11px]" style={{ color: theme.textMute }}>워렌 버핏 신규 +204% 대량 매집</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">NEW</span>
              </div>
            </div>
          </div>

          {/* Floating badge elements */}
          <div className="absolute -left-6 top-16 bg-white shadow-xl rounded-2xl p-3 flex items-center gap-2 rotate-[-6deg] border border-slate-100">
            <span className="text-xl">📈</span>
            <div>
              <div className="text-[11.5px] font-extrabold" style={{ color: theme.textStrong }}>+34.2%</div>
              <div className="text-[9.5px] text-slate-400">집단 연평균 성과</div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-12 bg-white shadow-xl rounded-2xl p-3 flex items-center gap-2 rotate-[4deg] border border-slate-100">
            <span className="text-xl">🧬</span>
            <div>
              <div className="text-[11.5px] font-extrabold" style={{ color: theme.textStrong }}>16가지 성향 매칭</div>
              <div className="text-[9.5px] text-slate-400">인문학적 설계 기반</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bullets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 md:mt-24">
        {[
          { icon: "🧬", title: "16가지 투자 스타일 분류", desc: "매크로/기업분석, 추세/역발상, 성장/가치, 집중/분산의 4축 성향 진단" },
          { icon: "👑", title: "42인 글로벌 투자 거장 매칭", desc: "버핏, 레이 달리오, 캐시 우드 등 월가의 전설적인 42명 매니저와 직접 비교" },
          { icon: "📊", title: "2단계 정밀 분석 리포트 제공", desc: "성향이 일치하는 집단의 공통 종목(Consensus)부터 개별 13F 상세 드릴다운까지" }
        ].map((f) => (
          <div key={f.title} className="p-6 rounded-3xl border border-slate-100 shadow-sm" style={{ background: theme.surface }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: theme.bg }}>{f.icon}</div>
            <h4 className="text-[15.5px] font-bold mb-1.5" style={{ color: theme.textStrong }}>{f.title}</h4>
            <p className="text-[13px] leading-relaxed" style={{ color: theme.textMute }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 2. RESPONSIVE TEST SCREEN
// ─────────────────────────────────────────
export function TestScreen({ onComplete, onBack, theme }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [selecting, setSelecting] = useState(null);

  const q = QUESTIONS[step];
  const progress = ((step + (selecting ? 1 : 0)) / QUESTIONS.length) * 100;

  function pick(choice) {
    if (selecting) return;
    setSelecting(choice);
    
    setTimeout(() => {
      const next = [...answers];
      next[step] = choice;
      setAnswers(next);
      
      if (step + 1 >= QUESTIONS.length) {
        onComplete(next);
      } else {
        setStep(step + 1);
        setSelecting(null);
      }
    }, 250);
  }

  function goBack() {
    if (step === 0) {
      onBack();
      return;
    }
    setStep(step - 1);
    setSelecting(null);
  }

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 py-8 flex flex-col space-y-6">
      {/* Test Header & Progress */}
      <div className="flex items-center gap-4">
        <button onClick={goBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200/50" style={{ color: theme.textStrong }}>
          <Icon name="chevron-left" size={24} />
        </button>
        
        <div className="flex-1 h-[7px] rounded-full overflow-hidden" style={{ background: theme.bg2 }}>
          <div className="h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%`, background: theme.accent }}></div>
        </div>
        
        <span className="text-[14px] font-bold tabular-nums" style={{ color: theme.textStrong }}>
          {step + 1}<span style={{ color: theme.textMute }}>/{QUESTIONS.length}</span>
        </span>
      </div>

      {/* Question Card */}
      <div className="rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl space-y-8" style={{ background: theme.surface }}>
        <div className="text-center md:text-left space-y-2">
          <span className="text-[12px] font-extrabold tracking-wider uppercase" style={{ color: theme.accent }}>
            Q{step + 1} · {axisLabel(q.axis)}
          </span>
          <h2 className="text-[20px] md:text-[28px] leading-[1.35] font-extrabold tracking-[-0.015em]" style={{ color: theme.textStrong, wordBreak: "keep-all" }}>
            {q.q}
          </h2>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["a", "b"].map((ch) => {
            const opt = q[ch];
            const isPicked = selecting === ch;
            const isDimmed = selecting && selecting !== ch;

            return (
              <button 
                key={ch} 
                onClick={() => pick(ch)} 
                disabled={!!selecting}
                className="w-full text-left rounded-2xl p-5 md:p-6 transition-all duration-200 flex flex-col gap-4 border-2 outline-none group hover:scale-[1.01]"
                style={{
                  background: isPicked ? theme.accentSoft : theme.surface,
                  borderColor: isPicked ? theme.accent : "rgba(226, 232, 240, 0.6)",
                  opacity: isDimmed ? 0.45 : 1,
                  boxShadow: isPicked ? `0 8px 24px -6px ${theme.accent}33` : "none",
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" 
                  style={{ 
                    background: isPicked ? "#fff" : theme.bg, 
                    color: isPicked ? theme.accent : theme.textStrong 
                  }}
                >
                  <Icon name={opt.icon} size={20} />
                </div>
                
                <div className="space-y-1.5">
                  <div className="text-[10px] font-extrabold tracking-widest uppercase" style={{ color: isPicked ? theme.accent : theme.textMute }}>
                    선택지 {ch.toUpperCase()}
                  </div>
                  <div className="text-[14.5px] md:text-[16px] leading-[1.5] font-bold whitespace-pre-line" style={{ color: theme.textStrong }}>
                    {opt.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      <p className="text-center text-[12.5px]" style={{ color: theme.textMute }}>
        스스로의 주관에 비추어 직관적으로 이끌리는 한 쪽을 골라주세요.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────
// 3. RESPONSIVE RESULT SCREEN
// ─────────────────────────────────────────
export function ResultScreen({ result, onContinue, theme }) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setRevealed(true); }, []);

  const consensus = GROUP_CONSENSUS[result.code] || GROUP_CONSENSUS.FCVS;

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 py-8 space-y-8">
      {/* Top title info */}
      <div className="text-center space-y-1">
        <span className="text-[11px] font-extrabold tracking-widest uppercase" style={{ color: theme.accent }}>
          YOUR INVESTOR DNA TYPE · {result.code}
        </span>
        <h1 className="text-[32px] md:text-[46px] font-extrabold tracking-[-0.03em]" style={{ color: theme.textStrong }}>
          당신은 <span style={{ color: theme.accent }}>{result.name}</span>
        </h1>
        <p className="text-[15.5px] md:text-[18px] font-semibold" style={{ color: theme.textMute }}>
          {result.tagline}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Description */}
          <div className="rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-6" style={{ background: theme.surface }}>
            <p className="text-[15px] md:text-[16px] leading-[1.7]" style={{ color: theme.textStrong }}>
              {result.desc}
            </p>
            
            {/* Strengths & Weakness */}
            <div className="border-t pt-5 space-y-5" style={{ borderColor: theme.bg2 }}>
              <div>
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wide block mb-2">대표적인 강점</span>
                <div className="flex flex-wrap gap-2">
                  {result.strengths.map((s) => (
                    <span key={s} className="px-3.5 py-1.5 rounded-xl text-[13px] font-bold" 
                      style={{ background: theme.accentSoft, color: theme.accent }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wide block mb-1.5">주의해야 할 리스크</span>
                <p className="text-[14px] leading-relaxed font-semibold" style={{ color: theme.textStrong }}>
                  {result.weakness}
                </p>
              </div>
            </div>
          </div>

          {/* Tier 1 Free consensus sample */}
          <div className="rounded-3xl p-6 md:p-8 border-2 border-emerald-500/20 shadow-sm space-y-4" style={{ background: theme.surface }}>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">FREE UNLOCKED</span>
              <span className="text-[12px]" style={{ color: theme.textMute }}>집단 스타일 공통점 일부 리포트</span>
            </div>
            
            <div>
              <h3 className="text-[18px] font-extrabold" style={{ color: theme.textStrong }}>
                {consensus.groupName}의 대표 매집 종목
              </h3>
              <p className="text-[13px] mt-1" style={{ color: theme.textMute }}>
                당신과 닮은 글로벌 대가 그룹이 포트폴리오에서 가장 많이 오버랩 보유 중인 1위 종목입니다.
              </p>
            </div>

            {consensus.overlappingHoldings && consensus.overlappingHoldings[0] && (
              <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: theme.bg }}>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-[13px] shrink-0">
                  {consensus.overlappingHoldings[0].ticker}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14.5px] font-extrabold text-slate-900">
                    {consensus.overlappingHoldings[0].name}
                  </div>
                  <div className="text-[12px] text-slate-500 truncate">
                    {consensus.overlappingHoldings[0].description}
                  </div>
                </div>
                <span className="text-[13px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg shrink-0">
                  {consensus.overlappingHoldings[0].change}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Guru Match Card */}
          <div className="rounded-[30px] p-6 md:p-8 text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})` }}>
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5"></div>
            <div className="absolute -bottom-16 -left-12 w-52 h-52 rounded-full bg-white/5"></div>

            <div className="relative space-y-4">
              <span className="text-[11px] font-bold tracking-widest text-white/70 uppercase">롤모델 거장 매칭</span>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[12px] text-white/60 font-bold mb-0.5">대표 거장</div>
                  <h3 className="text-[24px] font-extrabold leading-tight">{result.guruKr || "워렌 버핏"}</h3>
                  <p className="text-[12px] text-white/75 font-medium">{result.guru || "Warren Buffett"} · {result.guruFirm || ""}</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-4xl border border-white/20 shadow-inner shrink-0">
                  {result.emoji}
                </div>
              </div>

              {/* All gurus in this type */}
              {(() => {
                const groupGurus = GURUS_LIST.filter(g => g.mbtiType === result.code);
                return groupGurus.length > 0 ? (
                  <div className="border-t border-white/20 pt-3 space-y-2">
                    <div className="text-[10px] font-extrabold tracking-wider text-white/55 uppercase">
                      동일 성향 거장 · 총 {groupGurus.length}명
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {groupGurus.map(g => (
                        <span key={g.id} className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/15 text-white border border-white/20">
                          {g.nameKr}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null;
              })()}

              {/* Trait Scales */}
              <div className="space-y-2.5 pt-1">
                {[
                  { label: "거시 vs 기업분석", l: "거시", r: "기업", value: (result.scores.F - result.scores.M + 3) / 6 },
                  { label: "추세 vs 역발상", l: "추세", r: "역발상", value: (result.scores.C - result.scores.T + 3) / 6 },
                  { label: "성장 vs 가치", l: "성장", r: "가치", value: (result.scores.V - result.scores.G + 3) / 6 },
                  { label: "분산 vs 집중", l: "분산", r: "집중", value: (result.scores.S - result.scores.A + 3) / 6 },
                ].map((bar) => (
                  <div key={bar.label} className="space-y-1">
                    <div className="flex justify-between text-[11px] text-white/70 font-bold uppercase tracking-wider">
                      <span>{bar.l}</span>
                      <span>{bar.r}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/15 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full rounded-full bg-white transition-all duration-1000 ease-out"
                        style={{ width: revealed ? `${Math.max(8, Math.min(92, bar.value * 100))}%` : "0%" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium blocker stack */}
          <div className="rounded-3xl p-6 md:p-8 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-white/5"></div>
            
            <div className="relative space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-600 text-white">PREMIUM</span>
                <span className="text-[12px] text-slate-400">회원가입 시 무료 즉시 해제</span>
              </div>

              <h4 className="text-[18px] font-bold leading-snug">
                대가 그룹의 나머지 핵심 오버랩 종목들과<br />
                개별 거장들의 상세 13F 리포트 열기
              </h4>

              {/* Blurred items preview */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 filter blur-[3.5px] select-none">
                  <div className="w-8 h-8 rounded-lg bg-white/10"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-3 w-16 bg-white/20 rounded"></div>
                    <div className="h-2.5 w-32 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 filter blur-[3.5px] select-none">
                  <div className="w-8 h-8 rounded-lg bg-white/10"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-3 w-20 bg-white/20 rounded"></div>
                    <div className="h-2.5 w-24 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={onContinue}
                className="w-full h-[52px] rounded-xl text-white font-extrabold text-[15px] transition-all hover:opacity-95 active:scale-[0.99] flex items-center justify-center gap-2"
                style={{ background: theme.accent }}
              >
                <span>무료 가입하고 전체 분석 열람하기</span>
                <Icon name="arrow-right" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────
// 4. AUTH SCREEN
// ─────────────────────────────────────────
export function AuthScreen({ onLogin, onBack, theme, result }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("비밀번호는 최소 6자리 이상이어야 합니다.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      if (isSignUp) {
        if (isSupabaseConfigured) {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                mbti_type: result?.code || "FCVS"
              }
            }
          });
          if (error) throw error;
          
          if (data?.user) {
            await supabase
              .from('profiles')
              .update({ mbti_type: result?.code || "FCVS" })
              .eq('id', data.user.id);
          }
          
          onLogin("email", data.user);
        } else {
          const { data, error } = await fallbackAuth.signUp(email, password, result?.code || "FCVS");
          onLogin("email", data.user);
        }
      } else {
        if (isSupabaseConfigured) {
          const { data, error } = await supabase.auth.signInWithPassword({ email, password });
          if (error) throw error;
          onLogin("email", data.user);
        } else {
          const { data, error } = await fallbackAuth.signIn(email, password);
          onLogin("email", data.user);
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "인증 처리 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[480px] mx-auto px-4 py-8">
      <div className="rounded-[32px] p-6 md:p-10 border border-slate-100 shadow-2xl space-y-6" style={{ background: theme.surface }}>
        <button onClick={onBack} className="text-[13px] font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1">
          <Icon name="chevron-left" size={16} />
          <span>결과로 돌아가기</span>
        </button>

        <div className="space-y-2">
          <span className="text-[10px] font-extrabold tracking-widest uppercase" style={{ color: theme.accent }}>AUTHENTICATION</span>
          <h2 className="text-[22px] md:text-[26px] font-extrabold leading-tight" style={{ color: theme.textStrong }}>
            {isSignUp ? "분석 리포트를 무료로 해제하세요" : "계정에 로그인하세요"}
          </h2>
          <p className="text-[13px] leading-relaxed" style={{ color: theme.textMute }}>
            {isSignUp 
              ? "간단한 이메일 가입만으로 대가들의 분기별 최신 13F 리포트를 무제한 평생 열람할 수 있습니다." 
              : "등록된 이메일 계정을 통해 리포트를 바로 조회합니다."
            }
          </p>
        </div>

        {isSignUp && (
          <div className="rounded-2xl p-4.5 space-y-3" style={{ background: theme.bg }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-indigo-600" style={{ background: theme.accentSoft }}>
                <Icon name="bookmark" size={15} />
              </div>
              <span className="text-[12.5px] font-bold text-slate-700">진단 결과 평생 저장</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-indigo-600" style={{ background: theme.accentSoft }}>
                <Icon name="shield-check" size={15} />
              </div>
              <span className="text-[12.5px] font-bold text-slate-700">16종의 스타일 Consensus 리포트 무제한 해제</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase">이메일 주소</label>
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="investor@domain.com"
              className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none text-[14px] transition focus:border-slate-400"
              style={{ background: theme.surface, color: theme.textStrong }}
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase">비밀번호 (6자 이상)</label>
            <input 
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none text-[14px] transition focus:border-slate-400"
              style={{ background: theme.surface, color: theme.textStrong }}
            />
          </div>

          {errorMsg && (
            <div className="text-[12px] font-bold text-red-600 bg-red-50 p-3.5 rounded-xl flex items-center gap-2">
              <Icon name="alert-triangle" size={14} />
              <span>{errorMsg}</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full h-[50px] rounded-xl text-white font-extrabold text-[15px] transition-all active:scale-[0.99] flex items-center justify-center gap-2"
            style={{ background: theme.accent }}
          >
            {loading ? (
              <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
            ) : (
              <span>{isSignUp ? "무료 회원가입하고 리포트 보기" : "로그인하고 리포트 보기"}</span>
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <button 
            onClick={() => { setIsSignUp(!isSignUp); setErrorMsg(""); }}
            className="text-[13px] font-bold underline"
            style={{ color: theme.accent }}
          >
            {isSignUp ? "이미 계정이 있으신가요? 로그인하기" : "처음이신가요? 무료 회원가입하기"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 5. RESPONSIVE UNLOCKED REPORT SCREEN
// ─────────────────────────────────────────
export function ReportScreen({ result, onRestart, theme }) {
  const [selectedGuru, setSelectedGuru] = useState(null);

  // Dynamic state hooks for Supabase vs Offline Local data sources
  const dbData = useSupabaseData(result.code);

  const consensus = dbData.consensus || GROUP_CONSENSUS[result.code] || GROUP_CONSENSUS.FCVS;
  const groupGurus = dbData.gurus.length > 0 ? dbData.gurus : GURUS_LIST.filter(g => g.mbtiType === result.code);

  return (
    <div className="w-full max-w-[1150px] mx-auto px-4 py-8 space-y-8">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-900 flex items-center gap-1">
              <Icon name="crown" size={11} />
              <span>PREMIUM UNLOCKED</span>
            </span>
            {dbData.isLive ? (
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>LIVE DB</span>
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-100 text-slate-600 border border-slate-200">
                OFFLINE MASTER
              </span>
            )}
            <span className="text-[12px] text-slate-400">2026 Q1 공시 기준</span>
          </div>
          
          <h1 className="text-[26px] md:text-[36px] font-extrabold tracking-[-0.025em] leading-tight" style={{ color: theme.textStrong }}>
            {consensus.groupName} <span style={{ color: theme.accent }}>분석 리포트</span>
          </h1>
          
          <p className="text-[13.5px]" style={{ color: theme.textMute }}>
            동일 투자성향 대가들의 집합적 자산배분 및 공통 매집 종목(Consensus) 상세 분석입니다.
          </p>
        </div>

        <button onClick={onRestart} className="h-10 px-4 rounded-xl text-[13px] font-bold border border-slate-200 flex items-center justify-center gap-1.5 bg-white text-slate-600 hover:bg-slate-50 transition shrink-0">
          <Icon name="rotate-ccw" size={14} />
          <span>다시 진단</span>
        </button>
      </div>

      {/* Group Gurus Overview Card */}
      <div className="rounded-[28px] p-6 md:p-8 border border-slate-100 shadow-sm bg-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold tracking-wider text-indigo-600 uppercase">GURU DIRECTORY</span>
            <h2 className="text-[18px] md:text-[20px] font-extrabold text-slate-800">
              이 성향에 해당하는 대표 거장들 (총 {groupGurus.length}명)
            </h2>
            <p className="text-[12.5px] text-slate-400">
              아래 대가를 클릭하시면 해당 거장의 포트폴리오(13F) 분석 리포트로 즉시 화면이 연결됩니다.
            </p>
          </div>
          <div className="flex -space-x-2.5 overflow-hidden shrink-0">
            {groupGurus.map((g, idx) => (
              <div key={idx} className="w-8.5 h-8.5 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[11px] font-extrabold text-white" title={g.nameKr}>
                {g.nameKr[0]}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {groupGurus.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGuru(selectedGuru === g.id ? null : g.id)}
              className={`px-4 py-2.5 rounded-2xl text-[13px] font-bold border transition-all active:scale-[0.98] flex items-center gap-2 ${
                selectedGuru === g.id
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                  : "bg-slate-50 text-slate-700 border-slate-200/60 hover:bg-slate-100"
              }`}
            >
              <Icon name="user" size={13} />
              <span>{g.nameKr} ({g.firmName})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left pane: Consensus analysis dashboard */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-6 bg-white">
            
            {/* Summary */}
            <div className="space-y-1.5">
              <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">집단 요약 (Executive Summary)</h3>
              <p className="text-[14.5px] leading-relaxed text-slate-700">
                {consensus.summary}
              </p>
            </div>

            {/* Cash ratio bar */}
            <div className="border-t pt-5 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-[14px] font-extrabold text-slate-800">집단 평균 현금 비중</span>
                <span className="text-[22px] font-black tabular-nums" style={{ color: theme.accent }}>
                  {consensus.averageCashRatio}%
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${consensus.averageCashRatio}%`, background: theme.accent }}></div>
              </div>
              <div className="text-[12px] flex justify-between" style={{ color: theme.textMute }}>
                <span>시장 모멘텀 강도</span>
                <span>공동 판단: <b style={{ color: theme.textStrong }}>{consensus.collectiveSentiment}</b></span>
              </div>
            </div>

            {/* Top overlapping list */}
            <div className="border-t pt-5 space-y-3">
              <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-2">공동 오버랩 매집 자산</h3>
              <div className="space-y-3">
                {consensus.overlappingHoldings?.map((h, i) => (
                  <div key={h.ticker} className="p-4 rounded-2xl flex items-center gap-4 border border-slate-100 bg-slate-50">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-[13px] shrink-0">
                      {h.ticker}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-bold text-slate-900">{h.name}</div>
                      <div className="text-[11.5px] text-slate-400 truncate">{h.description}</div>
                    </div>
                    <span className="text-[12px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {h.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Mix */}
            {consensus.groupCharts && (
              <div className="border-t pt-5 space-y-3">
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">집단 포트폴리오 업종 분포</h3>
                <div className="h-5 rounded-xl overflow-hidden flex">
                  {consensus.groupCharts.sectors.map((s, idx) => (
                    <div 
                      key={idx} 
                      style={{ width: `${s.value}%`, background: s.color }} 
                      title={`${s.name}: ${s.value}%`}
                    ></div>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {consensus.groupCharts.sectors.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[12px]">
                      <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: s.color }}></div>
                      <span className="text-slate-600 truncate">{s.name}</span>
                      <span className="font-bold tabular-nums text-slate-900 ml-auto">{s.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right pane: Individual Guru list & selected detailed report */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm bg-white space-y-4">
            <div>
              <h3 className="text-[15.5px] font-extrabold" style={{ color: theme.textStrong }}>
                개별 거장 13F 상세 리포트
              </h3>
              <p className="text-[12px] text-slate-400 mt-1">
                아래 소속 거장을 선택하면 상세 13F 보유 현황과 차트를 확인합니다.
              </p>
            </div>

            {/* Interactive Grid List */}
            <div className="grid grid-cols-2 gap-3">
              {groupGurus.map((guru) => (
                <button 
                  key={guru.id} 
                  onClick={() => setSelectedGuru(selectedGuru === guru.id ? null : guru.id)}
                  className="p-4 rounded-2xl border text-left transition active:scale-[0.98] flex flex-col justify-between min-h-[100px]"
                  style={{ 
                    background: selectedGuru === guru.id ? theme.accentSoft : theme.surface,
                    borderColor: selectedGuru === guru.id ? theme.accent : "rgba(226, 232, 240, 0.6)",
                  }}
                >
                  <div>
                    <div className="text-[13px] font-bold text-slate-800">{guru.nameKr}</div>
                    <div className="text-[10px] text-slate-400 truncate">{guru.firmName}</div>
                  </div>
                  <div className="flex items-center justify-between w-full mt-3">
                    <span className="text-[9px] font-black px-1.5 py-0.5 rounded text-white" style={{ background: theme.accent }}>
                      13F
                    </span>
                    <Icon name={selectedGuru === guru.id ? "chevron-right" : "arrow-right"} size={12} style={{ color: theme.accent }} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Drill-down panel container */}
          {selectedGuru && (
            <div className="transition-all duration-300 animate-slide-in-right">
              <GuruDetailReport guruId={selectedGuru} theme={theme} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// DRILL DOWN: INDIVIDUAL GURU REPORT DETAIL
// ─────────────────────────────────────────
export function GuruDetailReport({ guruId, theme }) {
  const dbReport = useSupabaseGuruReport(guruId);

  const report = dbReport.report || getGuruReport(guruId);
  const guru = GURUS_LIST.find(g => g.id === guruId);

  if (!guru) return null;

  // Fallback Essay for historical/inactive/no-action gurus
  if (!report.hasChanges) {
    return (
      <div className="rounded-3xl p-6 md:p-8 border border-amber-300 shadow-xl space-y-6 bg-amber-50/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl shrink-0 font-bold">
            ⏳
          </div>
          <div>
            <div className="text-[14.5px] font-extrabold text-slate-800">{guru.nameKr} ({guru.firmName})</div>
            <div className="text-[11.5px] text-slate-400">이번 분기 매매 동향: 정중동 (靜중動)</div>
          </div>
        </div>

        {/* Long Philosophical Essay */}
        <div className="border-t pt-4 border-amber-200">
          <div className="text-[12px] font-bold text-amber-800 mb-2 uppercase">거장과의 철학적 만남</div>
          <div className="text-[14px] leading-[1.75] text-slate-700 font-serif italic pl-4 border-l-4 border-amber-400 bg-white/40 p-4 rounded-r-xl whitespace-pre-line">
            {report.essay}
          </div>
        </div>

        <p className="text-[11px] text-center text-slate-400">
          * 매매 변동 내역이 없을 시, 대가의 핵심 사상과 전략을 재조명하는 가이드 에세이가 제공됩니다.
        </p>
      </div>
    );
  }

  // Active Guru 13F premium content view
  const newBuys = [];
  const additions = [];
  const reductions = [];
  const unchanged = [];

  const allHoldings = [];
  if (report.teaserTicker) {
    allHoldings.push({ ...report.teaserTicker, isTeaser: true });
  }
  if (report.premiumHoldings) {
    allHoldings.push(...report.premiumHoldings);
  }

  allHoldings.forEach(h => {
    const changeStr = (h.change || "").toString().trim();
    if (changeStr.includes("신규") || changeStr.includes("New")) {
      newBuys.push(h);
    } else if (changeStr.includes("+") || changeStr.includes("추가") || changeStr.includes("확대") || changeStr === "추가") {
      additions.push(h);
    } else if (changeStr.includes("-") || changeStr.includes("축소") || changeStr.includes("감소") || changeStr === "축소") {
      reductions.push(h);
    } else {
      unchanged.push(h);
    }
  });

  return (
    <div className="rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl space-y-6 bg-white">
      
      {/* Bio Meta Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">13F PORTFOLIO</span>
            {dbReport.isLive && (
              <span className="px-1.5 py-0.5 rounded text-[8.5px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                LIVE DB
              </span>
            )}
          </div>
          <h3 className="text-[18px] font-bold text-slate-800">
            {guru.nameKr} 포트폴리오
          </h3>
          <p className="text-[12px] text-slate-400">
            공시일: {report.filingDate} · 기준: {report.quarter}
          </p>
        </div>
        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shrink-0">
          📊
        </div>
      </div>

      <p className="text-[13px] leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600">
        {guru.description}
      </p>

      {/* Holdings changes grouped */}
      <div className="space-y-4">
        <h4 className="text-[12.5px] font-bold text-slate-400 uppercase tracking-wide">핵심 매매 종목 동향</h4>
        
        {/* 1. New entry & Additions */}
        {(newBuys.length > 0 || additions.length > 0) && (
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider inline-block">
              신규 매수 및 비중 확대 (+)
            </span>
            <div className="space-y-2">
              {[...newBuys, ...additions].map((h, i) => (
                <div key={i} className={`p-3.5 rounded-xl border flex items-center justify-between ${h.isTeaser ? "bg-indigo-50/20 border-indigo-100" : "bg-emerald-50/10 border-emerald-100"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[12px] shrink-0 text-white ${h.isTeaser ? "bg-indigo-600 animate-pulse" : "bg-emerald-600"}`}>
                      {h.ticker}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-slate-800 flex items-center gap-1.5">
                        <span>{h.name}</span>
                        {h.isTeaser && <span className="px-1.5 py-0.5 rounded text-[8px] bg-indigo-600 text-white font-extrabold uppercase">Premium</span>}
                      </div>
                      <div className="text-[11px] text-slate-400">{h.reason}</div>
                    </div>
                  </div>
                  <span className="text-[12px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-lg shrink-0">
                    {h.change} ({h.weight}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Reductions */}
        {reductions.length > 0 && (
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider inline-block">
              비중 축소 및 일부 매도 (-)
            </span>
            <div className="space-y-2">
              {reductions.map((h, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold text-[12px] shrink-0">
                      {h.ticker}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-slate-800">{h.name}</div>
                      <div className="text-[11px] text-slate-400">{h.reason}</div>
                    </div>
                  </div>
                  <span className="text-[12px] font-extrabold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-lg shrink-0">
                    {h.change} ({h.weight}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Unchanged */}
        {unchanged.length > 0 && (
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider inline-block">
              비중 유지 (동결)
            </span>
            <div className="space-y-2">
              {unchanged.map((h, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-400 text-white flex items-center justify-center font-bold text-[12px] shrink-0">
                      {h.ticker}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-slate-800">{h.name}</div>
                      <div className="text-[11px] text-slate-400">{h.reason}</div>
                    </div>
                  </div>
                  <span className="text-[12px] font-extrabold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-lg shrink-0">
                    {h.change} ({h.weight}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sector mix donut chart */}
      {report.sectorMix && (
        <div className="space-y-3">
          <h4 className="text-[12.5px] font-bold text-slate-400 uppercase tracking-wide">포트폴리오 업종 비중</h4>
          <div className="flex items-center gap-6">
            <svg viewBox="0 0 100 100" className="w-[90px] h-[90px] shrink-0">
              {(() => {
                let acc = 0;
                const r = 38, c = 50;
                return report.sectorMix.map((s, idx) => {
                  const start = (acc / 100) * 360;
                  acc += s.value;
                  const end = (acc / 100) * 360;
                  const large = end - start > 180 ? 1 : 0;
                  const x1 = c + r * Math.cos((start - 90) * Math.PI / 180);
                  const y1 = c + r * Math.sin((start - 90) * Math.PI / 180);
                  const x2 = c + r * Math.cos((end - 90) * Math.PI / 180);
                  const y2 = c + r * Math.sin((end - 90) * Math.PI / 180);
                  return (
                    <path 
                      key={idx} 
                      d={`M ${c} ${c} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`} 
                      fill={s.color} 
                    />
                  );
                });
              })()}
              <circle cx="50" cy="50" r="22" fill="#fff" />
            </svg>
            <div className="flex-1 space-y-1.5">
              {report.sectorMix.map((s, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[11.5px]">
                  <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: s.color }}></div>
                  <span className="text-slate-600 truncate flex-1">{s.name}</span>
                  <span className="font-bold tabular-nums text-slate-800">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sparkline historical cash ratio */}
      {report.trendData && (
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-baseline">
            <h4 className="text-[12.5px] font-bold text-slate-400 uppercase tracking-wide">최근 12분기 현금 비중 추이</h4>
            <span className="text-[12.5px] font-bold text-slate-800">
              최근: {report.trendData[report.trendData.length - 1]}%
            </span>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <svg viewBox="0 0 300 80" className="w-full h-[80px]">
              {(() => {
                const w = 300, h = 80, p = 4;
                const min = Math.min(...report.trendData);
                const max = Math.max(...report.trendData);
                const range = (max - min) || 1;
                const pts = report.trendData.map((v, i) => {
                  const x = p + (i / (report.trendData.length - 1)) * (w - p * 2);
                  const y = h - p - ((v - min) / range) * (h - p * 2);
                  return [x, y];
                });
                const dPath = pts.map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`)).join(" ");
                const areaPath = `${dPath} L ${pts[pts.length - 1][0]} ${h} L ${pts[0][0]} ${h} Z`;
                return (
                  <>
                    <path d={areaPath} fill={theme.accentSoft} opacity="0.4" />
                    <path d={dPath} fill="none" stroke={theme.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="4" fill={theme.accent} />
                  </>
                );
              })()}
            </svg>
          </div>
        </div>
      )}

      {/* Bear risk points */}
      {report.bearCase && (
        <div className="border-t pt-4 border-slate-100 space-y-2">
          <div className="flex items-center gap-2 text-red-600">
            <Icon name="alert-triangle" size={14} />
            <h4 className="text-[12.5px] font-extrabold uppercase tracking-wide">리스크 체크포인트 (Bear Case)</h4>
          </div>
          <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-slate-600 list-disc pl-4.5">
            {report.bearCase.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Plan */}
      {report.actionPlan && (
        <div className="border-t pt-4 border-slate-100 space-y-3">
          <div className="flex items-center gap-2">
            <Icon name="check" size={14} style={{ color: theme.accent }} />
            <h4 className="text-[13px] font-extrabold text-slate-800 uppercase tracking-wide">
              행동지침 (Weekly Action Plan)
            </h4>
          </div>
          <div className="space-y-2">
            {report.actionPlan.map((plan, idx) => (
              <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-[12.5px] font-bold text-slate-800 flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white shrink-0" style={{ background: theme.accent }}>
                    {idx + 1}
                  </span>
                  {plan.title}
                </div>
                <p className="text-[11.5px] text-slate-500 pl-7 leading-relaxed">{plan.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// 6. DESKTOP WIDESCREEN SHELL
// ─────────────────────────────────────────
export function DesktopShell({ theme, screen, onLogoClick, onNavigate, user, onLogOut, children }) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50 font-sans" style={{ color: theme.textStrong }}>
      <header className="sticky top-0 z-40 backdrop-blur-md border-b bg-white/95 border-slate-200">
        <div className="max-w-[1150px] mx-auto px-6 h-[64px] flex items-center justify-between">
          
          {/* Logo */}
          <button onClick={onLogoClick} className="flex items-center gap-2.5 active:scale-[0.98] transition-transform">
            <div className="w-8.5 h-8.5 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})` }}>
              <span className="text-white text-[15px] font-bold">🧬</span>
            </div>
            <span className="text-[18px] font-black tracking-tight" style={{ color: theme.textStrong }}>GURU DNA</span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-bold" style={{ color: theme.textMute }}>
            <button 
              onClick={() => onNavigate("about")} 
              className={`hover:text-slate-800 transition py-1 relative ${screen === "about" ? "text-indigo-600" : ""}`}
            >
              <span>서비스 소개</span>
              {screen === "about" && (
                <span className="absolute bottom-[-10px] left-0 right-0 h-0.5 bg-indigo-600 rounded-full"></span>
              )}
            </button>
            <button 
              onClick={() => onNavigate("styles")} 
              className={`hover:text-slate-800 transition py-1 relative ${screen === "styles" ? "text-indigo-600" : ""}`}
            >
              <span>16가지 투자성향</span>
              {screen === "styles" && (
                <span className="absolute bottom-[-10px] left-0 right-0 h-0.5 bg-indigo-600 rounded-full"></span>
              )}
            </button>
            <button 
              onClick={() => onNavigate("live13f")} 
              className={`hover:text-slate-800 transition py-1 relative ${screen === "live13f" ? "text-indigo-600" : ""}`}
            >
              <span>실시간 13F 공시</span>
              {screen === "live13f" && (
                <span className="absolute bottom-[-10px] left-0 right-0 h-0.5 bg-indigo-600 rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Auth session controls */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: theme.accentSoft }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold" style={{ background: theme.accent }}>
                    U
                  </div>
                  <span className="text-[12.5px] font-bold" style={{ color: theme.textStrong }}>
                    {user.email?.split("@")[0]}님
                  </span>
                </div>
                <button onClick={onLogOut} className="text-[12px] font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1">
                  <Icon name="log-out" size={13} />
                  <span>로그아웃</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={onLogoClick} 
                className="h-[36px] px-4 rounded-xl text-[12.5px] font-extrabold text-white transition-all hover:shadow active:scale-[0.98]"
                style={{ background: theme.accent }}
              >
                무료 진단 시작
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile sub-nav */}
      <div className="md:hidden sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 px-4 overflow-x-auto flex gap-4 text-[12.5px] font-bold shrink-0">
        <button 
          onClick={() => onNavigate("about")}
          className={`px-3 py-1 rounded-xl transition ${screen === "about" ? "bg-indigo-50 text-indigo-700" : "text-slate-500"}`}
        >
          서비스 소개
        </button>
        <button 
          onClick={() => onNavigate("styles")}
          className={`px-3 py-1 rounded-xl transition ${screen === "styles" ? "bg-indigo-50 text-indigo-700" : "text-slate-500"}`}
        >
          16가지 투자성향
        </button>
        <button 
          onClick={() => onNavigate("live13f")}
          className={`px-3 py-1 rounded-xl transition ${screen === "live13f" ? "bg-indigo-50 text-indigo-700" : "text-slate-500"}`}
        >
          실시간 13F 공시
        </button>
      </div>
      
      {/* Content wrapper */}
      <main className="flex-1 w-full max-w-[1150px] mx-auto py-6">
        {children}
      </main>

      {/* Premium footer */}
      <footer className="py-10 border-t bg-white border-slate-200">
        <div className="max-w-[1150px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-[11.5px] gap-4" style={{ color: theme.textMute }}>
          <div>
            <b>© 2026 GURU DNA Lab. All rights reserved.</b><br />
            본 진단 및 리포트는 데이터 분석 학습용이며, 특정 상품의 매매를 권유하는 투자 조언이 아닙니다.
          </div>
          <div className="flex gap-4 font-bold shrink-0">
            <a className="hover:text-slate-800 transition cursor-pointer">이용약관</a>
            <a className="hover:text-slate-800 transition cursor-pointer">개인정보처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────
// 7. ABOUT SCREEN (서비스 소개)
// ─────────────────────────────────────────
export function AboutScreen({ theme, onStart }) {
  return (
    <div className="w-full max-w-[900px] mx-auto px-4 py-12 space-y-12 animate-slide-in-right">
      {/* Hero section */}
      <div className="text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full text-[12px] font-extrabold bg-indigo-50 text-indigo-700 tracking-wider uppercase">
          OUR MISSION & PHILOSOPHY
        </span>
        <h1 className="text-[28px] md:text-[40px] font-black tracking-tight text-slate-900 leading-tight">
          이성적 투자자들을 위한<br className="sm:hidden" /> <span style={{ color: theme.accent }}>데이터 베이스캠프</span>
        </h1>
        <p className="text-[15px] md:text-[16px] text-slate-500 max-w-[620px] mx-auto leading-relaxed">
          GURU DNA는 급등주 리딩방과 같이 시장의 일시적 광기에 휩쓸리는 투자가 아닌, 대가들의 공시 데이터를 분석하고 대중의 흐름을 역추적하는 투자 지성들의 정거장입니다.
        </p>
      </div>

      {/* 3 Core pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold">🎯</div>
          <h3 className="text-[15px] font-bold text-slate-800">1. 투자 DNA 진단</h3>
          <p className="text-[12.5px] text-slate-500 leading-relaxed">
            학술적 팩터 모형과 행동경제학 기반의 12개 질문을 통하여 매크로/기업 펀더멘털, 역발상/추세 선호 등 나의 투자 DNA 유형을 정밀 진단합니다.
          </p>
        </div>
        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold">📊</div>
          <h3 className="text-[15px] font-bold text-slate-800">2. 집단 매집 감지</h3>
          <p className="text-[12.5px] text-slate-500 leading-relaxed">
            나와 동일한 성향을 가진 수십 명의 글로벌 거장들의 포트폴리오를 실시간 결합(Consensus Overlap)하여, 대가들이 침묵 속에 모으고 있는 종목을 감지합니다.
          </p>
        </div>
        <div className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg font-bold">🧬</div>
          <h3 className="text-[15px] font-bold text-slate-800">3. 13F 정밀 분석</h3>
          <p className="text-[12.5px] text-slate-500 leading-relaxed">
            워렌 버핏, 캐시 우드 등 대가들의 SEC 13F 공시 데이터를 실시간 쿼리하여 그들이 늘리고 있는 추가매수 비중과 전량 청산 내역을 투명하게 공개합니다.
          </p>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="rounded-[28px] p-8 text-center space-y-4 border border-indigo-100 bg-indigo-50/20">
        <p className="text-[15.5px] font-serif italic text-slate-700 leading-relaxed max-w-[680px] mx-auto">
          "투자는 똑똑한 사람보다는 감정을 잘 통제하는 사람이 이기는 게임이다. 시장의 변동성에 흔들리지 않는 대가들의 발자취가 가장 확실한 나침반입니다."
        </p>
        <div className="text-[12px] font-bold text-indigo-600">— GURU DNA 리서치 센터</div>
      </div>

      <div className="text-center pt-4">
        <button 
          onClick={onStart}
          className="h-[50px] px-8 rounded-xl text-white font-extrabold text-[15px] transition-all hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]"
          style={{ background: theme.accent }}
        >
          지금 무료로 투자 DNA 진단하기
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 8. 16 INVESTMENT STYLES SCREEN (16가지 투자성향)
// ─────────────────────────────────────────
export function StylesScreen({ theme }) {
  return (
    <div className="w-full max-w-[1150px] mx-auto px-4 py-8 space-y-8 animate-slide-in-right">
      <div className="space-y-2 text-center max-w-[700px] mx-auto">
        <span className="text-[10px] font-extrabold tracking-wider text-indigo-600 uppercase">INVESTMENT TYPES DIRECTORY</span>
        <h1 className="text-[28px] md:text-[36px] font-black text-slate-900 leading-tight">
          16가지 <span style={{ color: theme.accent }}>글로벌 투자 DNA</span>
        </h1>
        <p className="text-[13.5px] text-slate-500 leading-relaxed">
          매크로/기업가치, 추세추종/역발상, 성장/가치, 집중/분산의 4대 핵심 축을 바탕으로 도출된 16가지 프리미엄 투자 스타일을 소개합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(TYPES).map(([code, style]) => {
          const gurus = GURUS_LIST.filter(g => g.mbtiType === code);
          return (
            <div key={code} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-200 transition">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{style.emoji}</span>
                  <span className="text-[11px] font-black font-mono bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md">
                    {code}
                  </span>
                </div>
                <h3 className="text-[15.5px] font-bold text-slate-800">{style.name}</h3>
                <p className="text-[11px] font-medium text-indigo-600 line-clamp-1">"{style.tagline}"</p>
                <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-3">
                  {style.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wide block">소속 대표 거장</span>
                <span className="text-[12px] font-bold text-slate-700">
                  {gurus.length > 0 ? gurus.map(g => g.nameKr).join(", ") : "계량 데이터 백테스트 그룹"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 9. LIVE 13F MONITOR SCREEN (실시간 13F 공시)
// ─────────────────────────────────────────
export function Live13fScreen({ theme }) {
  const [tickerSearch, setTickerSearch] = useState("");
  const [filterAction, setFilterAction] = useState("all");
  const [dbTx, setDbTx] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadFeed() {
      if (!isSupabaseConfigured) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("guru_portfolios")
          .select(`
            id,
            guru_id,
            ticker,
            company_name,
            weight,
            change_type,
            change_percent,
            is_teaser,
            gurus (
              name_kr,
              firm_name
            )
          `);

        if (!error && data && data.length > 0) {
          const mapped = data.map(item => {
            let changeVal = item.change_type || "유지";
            if (item.change_percent && item.change_percent !== 0) {
              const sign = item.change_percent > 0 ? "+" : "";
              changeVal = `${changeVal} (${sign}${item.change_percent}%)`;
            }
            return {
              guruId: item.guru_id,
              guruName: item.gurus?.name_kr || "알 수 없는 거장",
              firm: item.gurus?.firm_name || "Wall Street",
              ticker: item.ticker,
              companyName: item.company_name,
              weight: item.weight,
              change: changeVal,
              filingDate: "2026.05.15",
              quarter: "2026 Q1"
            };
          });
          setDbTx(mapped);
          setIsLive(true);
        }
      } catch (err) {
        console.error("Failed to query live 13f feed:", err);
      } finally {
        setLoading(false);
      }
    }
    loadFeed();
  }, []);

  const mockTx = [];
  Object.entries(GURU_REPORTS).forEach(([guruId, report]) => {
    const guru = GURUS_LIST.find(g => g.id === guruId);
    if (!guru || !report.hasChanges) return;

    if (report.teaserTicker) {
      mockTx.push({
        guruId,
        guruName: guru.nameKr,
        firm: guru.firmName,
        ticker: report.teaserTicker.ticker,
        companyName: report.teaserTicker.name,
        weight: report.teaserTicker.weight,
        change: report.teaserTicker.change,
        filingDate: report.filingDate,
        quarter: report.quarter
      });
    }

    if (report.premiumHoldings) {
      report.premiumHoldings.forEach(h => {
        mockTx.push({
          guruId,
          guruName: guru.nameKr,
          firm: guru.firmName,
          ticker: h.ticker,
          companyName: h.name,
          weight: h.weight,
          change: h.change,
          filingDate: report.filingDate,
          quarter: report.quarter
        });
      });
    }
  });

  const allTx = isLive ? dbTx : mockTx;

  const filtered = allTx.filter(tx => {
    const matchSearch = tx.ticker.toLowerCase().includes(tickerSearch.toLowerCase()) || 
      tx.companyName.toLowerCase().includes(tickerSearch.toLowerCase()) ||
      tx.guruName.includes(tickerSearch);

    const changeStr = (tx.change || "").toString();
    const isBuy = changeStr.includes("+") || changeStr.includes("신규") || changeStr.includes("추가") || changeStr.includes("확대");
    const isSell = changeStr.includes("-") || changeStr.includes("축소") || changeStr.includes("매도");
    const isHold = !isBuy && !isSell;

    if (filterAction === "buy") return matchSearch && isBuy;
    if (filterAction === "sell") return matchSearch && isSell;
    if (filterAction === "hold") return matchSearch && isHold;
    return matchSearch;
  });

  return (
    <div className="w-full max-w-[1150px] mx-auto px-4 py-8 space-y-8 animate-slide-in-right">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full animate-pulse ${isLive ? "bg-emerald-500" : "bg-slate-400"}`}></span>
            <span className={`text-[9.5px] font-black tracking-wider uppercase px-2 py-0.5 rounded border ${isLive ? "bg-emerald-100 text-emerald-800 border-emerald-200" : "bg-slate-100 text-slate-600 border-slate-200"}`}>
              {isLive ? "LIVE DB FEED" : "OFFLINE MASTER FEED"}
            </span>
          </div>
          <h1 className="text-[28px] font-black text-slate-900 leading-tight">
            대가들의 <span style={{ color: theme.accent }}>실시간 13F 공시 피드</span>
          </h1>
          <p className="text-[13.5px] text-slate-500">
            글로벌 최고 대가들의 2026 Q1 공시 정보를 통합하여 최신 매매동향을 단일 피드로 실시간 중계합니다.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl px-4 py-3 text-right">
          <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wide">총 감지 트랜잭션</span>
          <span className="text-[20px] font-black text-slate-800 tabular-nums">{loading ? "로딩..." : `${filtered.length}개`}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm">
        <div className="relative w-full md:w-[320px]">
          <input 
            type="text"
            value={tickerSearch}
            onChange={(e) => setTickerSearch(e.target.value)}
            placeholder="거장명, 티커, 종목명 검색..."
            className="w-full h-10 pl-9 pr-4 rounded-xl border border-slate-200 outline-none text-[13.5px] transition focus:border-indigo-400"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon name="search" size={14} />
          </div>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          {["all", "buy", "sell", "hold"].map((act) => (
            <button
              key={act}
              onClick={() => setFilterAction(act)}
              className={`flex-1 md:flex-none h-10 px-4 rounded-xl text-[12.5px] font-bold border transition ${
                filterAction === act
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100"
              }`}
            >
              {act === "all" && "전체"}
              {act === "buy" && "🟢 매수/추가"}
              {act === "sell" && "🔴 매도/축소"}
              {act === "hold" && "⚪ 유지"}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[28px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="bg-slate-50 text-slate-400 border-b border-slate-100 font-extrabold uppercase text-[10.5px] tracking-wider">
                <th className="px-6 py-4">공시일</th>
                <th className="px-6 py-4">거장 (운용사)</th>
                <th className="px-6 py-4">자산 티커</th>
                <th className="px-6 py-4">기업 이름</th>
                <th className="px-6 py-4">거래 유형</th>
                <th className="px-6 py-4 text-right">포폴 비중</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-bold text-slate-700">
              {filtered.length > 0 ? (
                filtered.map((tx, idx) => {
                  const changeStr = tx.change.toString();
                  const isBuy = changeStr.includes("+") || changeStr.includes("신규") || changeStr.includes("추가");
                  const isSell = changeStr.includes("-") || changeStr.includes("축소") || changeStr.includes("매도");

                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="px-6 py-4 text-slate-400 font-mono text-[12px]">{tx.filingDate}</td>
                      <td className="px-6 py-4">
                        <div className="text-[13.5px] text-slate-950">{tx.guruName}</div>
                        <div className="text-[11px] text-slate-400">{tx.firm}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-black font-mono text-[12.5px] px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                          {tx.ticker}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-900">{tx.companyName}</td>
                      <td className="px-6 py-4">
                        {isBuy ? (
                          <span className="text-[11.5px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-lg inline-block">
                            {tx.change}
                          </span>
                        ) : isSell ? (
                          <span className="text-[11.5px] font-extrabold text-rose-700 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-lg inline-block">
                            {tx.change}
                          </span>
                        ) : (
                          <span className="text-[11.5px] font-extrabold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-lg inline-block">
                            유지
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right text-slate-900 text-[13.5px] tabular-nums font-black">{tx.weight}%</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-12 text-slate-400 font-medium">
                    일치하는 매매 트랜잭션이 존재하지 않습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
