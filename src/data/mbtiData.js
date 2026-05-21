// GURU-MBTI 12 Questions and 16 Personality Styles
export const QUESTIONS = [
  // M/F 축 (Macro / Fundamental)
  {
    id: 1,
    axis: "MF",
    q: "투자를 시작할 때, 더 끌리는 건?",
    a: { label: "금리·환율·실업률 같은\n경제 흐름을 먼저 본다", key: "M", icon: "globe" },
    b: { label: "기업의 매출·이익·경쟁력을\n뜯어보는 게 먼저다", key: "F", icon: "building" },
  },
  {
    id: 2,
    axis: "MF",
    q: "주말에 더 자주 보는 것은?",
    a: { label: "FOMC 의사록,\n연준 의장 발언", key: "M", icon: "newspaper" },
    b: { label: "기업 IR 자료,\n10-K 사업보고서", key: "F", icon: "file-text" },
  },
  {
    id: 3,
    axis: "MF",
    q: "친구가 종목을 추천했을 때 첫 질문은?",
    a: { label: "\"지금 매크로 환경에\n그 섹터가 맞아?\"", key: "M", icon: "trending-up" },
    b: { label: "\"그 회사 ROE랑\n현금흐름은 어때?\"", key: "F", icon: "calculator" },
  },
  // T/C 축 (Trend / Contrarian)
  {
    id: 4,
    axis: "TC",
    q: "시장이 폭락해 내 주식이 반토막 났다. 나의 첫 행동은?",
    a: { label: "더 떨어지기 전에\n일단 일부 매도해 현금 확보", key: "T", icon: "shield" },
    b: { label: "공포에 사는 거다.\n분할 매수 시작", key: "C", icon: "flame" },
  },
  {
    id: 5,
    axis: "TC",
    q: "모두가 \"이 종목 대박\"이라고 외칠 때 나는?",
    a: { label: "흐름은 무시할 수 없다.\n조금이라도 따라 탄다", key: "T", icon: "users" },
    b: { label: "이쯤이 꼭지다.\n오히려 비중을 줄인다", key: "C", icon: "user-minus" },
  },
  {
    id: 6,
    axis: "TC",
    q: "내 종목이 한 달 새 +40%. 지금은?",
    a: { label: "추세가 살아있다.\n불타기로 더 담는다", key: "T", icon: "zap" },
    b: { label: "원래 목표가에 도달했다면\n일부 익절", key: "C", icon: "scissors" },
  },
  // G/V 축 (Growth / Value)
  {
    id: 7,
    axis: "GV",
    q: "둘 중 더 사고 싶은 종목은?",
    a: { label: "아직 적자지만 매출이\n매년 80% 성장하는 AI 기업", key: "G", icon: "rocket" },
    b: { label: "성장은 더디지만 PER 8배,\n배당 4% 주는 제조사", key: "V", icon: "anchor" },
  },
  {
    id: 8,
    axis: "GV",
    q: "투자에서 가장 짜릿한 순간은?",
    a: { label: "10년 뒤 시장을 바꿀\n혁신을 일찍 발견했을 때", key: "G", icon: "sparkles" },
    b: { label: "시장이 외면한 보석을\n반값에 주워 담았을 때", key: "V", icon: "gem" },
  },
  {
    id: 9,
    axis: "GV",
    q: "내가 더 자주 쓰는 기준은?",
    a: { label: "TAM, 매출 성장률,\n사용자 증가 곡선", key: "G", icon: "line-chart" },
    b: { label: "PBR, PER, 자산가치,\n안전마진", key: "V", icon: "scale" },
  },
  // S/A 축 (Solo / Allocator)
  {
    id: 10,
    axis: "SA",
    q: "내 포트폴리오는 몇 종목쯤이 좋을까?",
    a: { label: "확신 있는 3~5개에\n집중 투자한다", key: "S", icon: "target" },
    b: { label: "10~30개로 넓게 분산해\n리스크를 관리한다", key: "A", icon: "layers" },
  },
  {
    id: 11,
    axis: "SA",
    q: "확신이 95%인 종목을 발견했다. 비중은?",
    a: { label: "최소 30% 이상 베팅.\n기회는 자주 오지 않는다", key: "S", icon: "crosshair" },
    b: { label: "아무리 좋아도\n한 종목 10%를 넘기지 않는다", key: "A", icon: "pie-chart" },
  },
  {
    id: 12,
    axis: "SA",
    q: "가장 두려운 시나리오는?",
    a: { label: "기회를 알아봤는데\n비중이 작아 놓치는 것", key: "S", icon: "x-circle" },
    b: { label: "한 종목 잘못 골라서\n자산이 휘청이는 것", key: "A", icon: "alert-triangle" },
  },
];

export const TYPES = {
  FCVS: {
    name: "냉철한 가치 스나이퍼",
    emoji: "🎯",
    tagline: "안전마진이 확보된 그 한 발만, 정확하게.",
    desc: "당신은 기업의 본질가치를 끈질기게 파고드는 사냥꾼입니다. 시장의 소음에 흔들리지 않고, 확신이 설 때까지 기다렸다가 한 번에 큰 비중으로 들어갑니다.",
    strengths: ["기업 분석 깊이", "역발상 매수", "장기 보유 인내심"],
    weakness: "가치 함정(Value Trap)에 빠지거나, 너무 일찍 사서 오래 묻혀있을 위험",
    guru: "Warren Buffett",
    guruKr: "워렌 버핏",
    guruFirm: "Berkshire Hathaway",
    guruCount: 8
  },
  FCVA: {
    name: "꼼꼼한 분산 가치투자가",
    emoji: "📚",
    tagline: "수십 개의 저평가 종목으로 안전마진을 분산한다.",
    desc: "값싸고 안전한 기업들을 광범위하게 모아 시장을 이깁니다. 한 종목이 망해도 흔들리지 않는 견고한 포트폴리오를 추구합니다.",
    strengths: ["밸류에이션 감각", "리스크 분산", "원칙 준수"],
    weakness: "고성장 기회를 놓치는 경향",
    guru: "Benjamin Graham",
    guruKr: "벤저민 그레이엄",
    guruFirm: "Graham-Newman Legacy",
    guruCount: 6
  },
  FCGS: {
    name: "확신의 역발상 성장 헌터",
    emoji: "🦅",
    tagline: "모두가 외면할 때, 미래 성장주에 올인.",
    desc: "위기 속에 묻혀있는 미래 우량 성장주를 발굴해 집중 투자합니다. 확신이 서면 비중을 두려워하지 않습니다.",
    strengths: ["역발상 통찰", "집중 투자 담력", "스토리텔링"],
    weakness: "한 종목 베팅이 어긋날 때의 충격",
    guru: "Bill Ackman",
    guruKr: "빌 애크먼",
    guruFirm: "Pershing Square Capital",
    guruCount: 7
  },
  FCGA: {
    name: "균형잡힌 가치 성장 큐레이터",
    emoji: "🎨",
    tagline: "내 일상에서 발견한 10루타를 골고루.",
    desc: "성장성과 안전마진을 동시에 갖춘 종목을 다수 발굴해 포트폴리오로 묶습니다. 'GARP' 전략의 정석.",
    strengths: ["기업 발굴력", "유연한 사고", "포트폴리오 밸런스"],
    weakness: "너무 많은 종목 관리에 시간 소진",
    guru: "Peter Lynch",
    guruKr: "피터 린치",
    guruFirm: "Fidelity Magellan Legacy",
    guruCount: 2
  },
  FTVS: {
    name: "추세 추종 가치 사냥꾼",
    emoji: "⚡",
    tagline: "싸고, 좋고, 흐름까지 탄 그 한 종목.",
    desc: "저평가 종목 중에서도 시장의 관심이 살아나는 순간을 포착해 집중 매수합니다.",
    strengths: ["타이밍 감각", "퀀트적 사고", "압축 포트"],
    weakness: "단기 변동성에 흔들리기 쉬움",
    guru: "Joel Greenblatt",
    guruKr: "조엘 그린블라트",
    guruFirm: "Gotham Asset Management",
    guruCount: 1
  },
  FTVA: {
    name: "데이터 기반 가치 분산가",
    emoji: "📊",
    tagline: "팩터로 검증된 저평가 종목 바스켓.",
    desc: "정량적 기준으로 검증된 저평가 종목을 폭넓게 담아 시장보다 한 발 앞서 갑니다.",
    strengths: ["정량 분석", "체계적 리밸런싱", "감정 통제"],
    weakness: "팩터가 안 통하는 장세에서 부진",
    guru: "David Einhorn",
    guruKr: "데이비드 아인혼",
    guruFirm: "Greenlight Capital",
    guruCount: 2
  },
  FTGS: {
    name: "성장 모멘텀 저격수",
    emoji: "🚀",
    tagline: "혁신의 가속 페달이 밟히는 순간, 풀악셀.",
    desc: "파괴적 혁신 기업이 시장 주도주로 부상하는 시점을 포착해 집중 베팅합니다.",
    strengths: ["혁신 발굴", "고확신 베팅", "장기 비전"],
    weakness: "고밸류 구간에서의 급락 리스크",
    guru: "Cathie Wood",
    guruKr: "캐시 우드",
    guruFirm: "ARK Investment",
    guruCount: 4
  },
  FTGA: {
    name: "성장주 모멘텀 매니저",
    emoji: "🌱",
    tagline: "잘 자라는 풀밭을, 여러 곳에 심는다.",
    desc: "장기 성장 동력을 가진 우량주를 다수 발굴해 함께 키워가는 정원사형 투자자.",
    strengths: ["기업 인내", "성장 발굴", "분산 효과"],
    weakness: "조정장에서 함께 흔들림",
    guru: "Ken Fisher",
    guruKr: "켄 피셔",
    guruFirm: "Fisher Investments",
    guruCount: 2
  },
  MCVS: {
    name: "거시 역발상 콘트래리언",
    emoji: "🌊",
    tagline: "사이클의 정점에서 비우고, 바닥에서 채운다.",
    desc: "시장 사이클을 읽고, 모두가 도망갈 때 핵심 자산을 집중 매수합니다.",
    strengths: ["사이클 감각", "역발상 담력", "리스크 인식"],
    weakness: "타이밍이 너무 일찍 올 수 있음",
    guru: "Howard Marks",
    guruKr: "하워드 막스",
    guruFirm: "Oaktree Capital Management",
    guruCount: 3
  },
  MCVA: {
    name: "거시 분산 자산배분가",
    emoji: "⚖️",
    tagline: "어떤 계절이 와도 무너지지 않는 포트폴리오.",
    desc: "주식·채권·금·원자재를 거시 사이클에 맞춰 분산. 올웨더 전략의 신봉자.",
    strengths: ["자산 배분", "거시 분석", "리스크 패리티"],
    weakness: "강세장에서 상대적 수익 부진",
    guru: "Ray Dalio",
    guruKr: "레이 달리오",
    guruFirm: "Bridgewater Associates",
    guruCount: 1
  },
  MCGS: {
    name: "거시 테마 집중 투자가",
    emoji: "🎲",
    tagline: "거시의 큰 흐름이 바뀌면, 한 곳에 몰빵.",
    desc: "거시 변곡점에서 가장 큰 수혜를 볼 한 섹터/자산에 집중 베팅하는 매크로 헤지펀드형.",
    strengths: ["매크로 통찰", "베팅 사이즈", "유연성"],
    weakness: "잘못 읽었을 때의 충격이 큼",
    guru: "Stanley Druckenmiller",
    guruKr: "스탠리 드러켄밀러",
    guruFirm: "Duquesne Family Office",
    guruCount: 2
  },
  MCGA: {
    name: "거시 분산 성장 투자가",
    emoji: "🌍",
    tagline: "거시의 모순을 찾아, 여러 자산에 베팅.",
    desc: "거시 환경의 변화를 포착해 다양한 자산군에 동시 베팅하는 글로벌 매크로 스타일.",
    strengths: ["반사성 이론", "글로벌 시야", "유연한 포지셔닝"],
    weakness: "복잡성 관리의 어려움",
    guru: "George Soros",
    guruKr: "조지 소로스",
    guruFirm: "Soros Fund Management",
    guruCount: 1
  },
  MTVS: {
    name: "매크로 모멘텀 가치사냥꾼",
    emoji: "🏹",
    tagline: "거시 흐름을 등에 업은 저평가 한 방.",
    desc: "거시 환경이 우호적인 시기에 저평가된 핵심 자산을 집중 매수.",
    strengths: ["타이밍", "안전마진", "압축 포트"],
    weakness: "유동성 리스크",
    guru: "Seth Klarman",
    guruKr: "세스 클라르만",
    guruFirm: "Baupost Group",
    guruCount: 1
  },
  MTVA: {
    name: "글로벌 가치 분산가",
    emoji: "🗺️",
    tagline: "전 세계에서 가장 싼 자산군을 골고루.",
    desc: "각국·자산군의 상대 밸류에이션을 보고 폭넓게 분산하는 글로벌 가치투자가.",
    strengths: ["글로벌 시야", "장기 시계", "버블 감지"],
    weakness: "트렌드 추종 장세에서 부진",
    guru: "Jeremy Grantham",
    guruKr: "제레미 그랜섬",
    guruFirm: "GMO LLC",
    guruCount: 1
  },
  MTGS: {
    name: "테마 추세 집중가",
    emoji: "🔥",
    tagline: "거시의 큰 파도가 만든 한 줄기 추세에 베팅.",
    desc: "거시 변화가 만들어내는 핵심 테마에 집중적으로 베팅하는 트렌드 추종형.",
    strengths: ["추세 포착", "리스크 컷", "베팅 사이즈"],
    weakness: "추세 반전 시 손실 가능성",
    guru: "Paul Tudor Jones",
    guruKr: "폴 튜더 존스",
    guruFirm: "Tudor Investment Corp",
    guruCount: 1
  },
  MTGA: {
    name: "글로벌 트렌드 분산 투자가",
    emoji: "🛰️",
    tagline: "전 세계 메가 트렌드에 시스템적으로 분산.",
    desc: "AI·에너지·인구·기후 등 글로벌 메가 트렌드에 분산 베팅하는 시스템 투자자.",
    strengths: ["시스템 사고", "장기 트렌드", "분산 효과"],
    weakness: "단기 알파 부족",
    guru: "Ray Dalio (All Weather)",
    guruKr: "달리오 올웨더 시스템",
    guruFirm: "Bridgewater Associates",
    guruCount: 0
  },
};

export function calculateType(answers) {
  const score = { M: 0, F: 0, T: 0, C: 0, G: 0, V: 0, S: 0, A: 0 };
  answers.forEach((ans, i) => {
    if (!ans) return;
    const q = QUESTIONS[i];
    const key = q[ans].key;
    score[key]++;
  });
  const code =
    (score.F >= score.M ? "F" : "M") +
    (score.C >= score.T ? "C" : "T") +
    (score.V >= score.G ? "V" : "G") +
    (score.S >= score.A ? "S" : "A");
  return { code, scores: score, ...TYPES[code] };
}
