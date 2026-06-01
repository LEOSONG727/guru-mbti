// GURU-MBTI 12 Questions and 16 Personality Styles
export const QUESTIONS = [
  // M/F 축 (Macro / Fundamental)
  {
    id: 1,
    axis: "MF",
    q: "여행주 매수를 고민 중입니다. 제일 먼저 확인하는 건?",
    a: { label: "각국 입국 규제 완화 속도와\n항공 수요 회복 데이터", key: "M", icon: "globe" },
    b: { label: "해당 항공사의 부채 비율,\n가동률, 현금흐름", key: "F", icon: "building" },
  },
  {
    id: 2,
    axis: "MF",
    q: "연준이 금리를 0.5% 올렸습니다. 나의 반응은?",
    a: { label: "이게 시장 전반에\n어떤 파급 효과를 줄지 시뮬레이션한다", key: "M", icon: "trending-up" },
    b: { label: "내가 보유한 기업의\n이익과 부채 비용 변화를 계산한다", key: "F", icon: "calculator" },
  },
  {
    id: 3,
    axis: "MF",
    q: "지인이 \"이 회사 진짜 좋다\"고 추천했습니다. 가장 먼저 찾아보는 건?",
    a: { label: "그 산업이 지금\n경기 사이클 어디쯤에 있는지", key: "M", icon: "newspaper" },
    b: { label: "그 회사의 최근 실적 추이와\n사업 구조", key: "F", icon: "file-text" },
  },
  // T/C 축 (Trend / Contrarian)
  {
    id: 4,
    axis: "TC",
    q: "이유 불명의 시장 공포로 보유 종목이 한 달 만에 -35% 폭락했습니다.",
    a: { label: "추가 하락이 우려된다.\n일단 일부 매도해 현금을 확보한다", key: "T", icon: "shield" },
    b: { label: "이게 기회다.\n오히려 비중을 더 늘린다", key: "C", icon: "flame" },
  },
  {
    id: 5,
    axis: "TC",
    q: "2021년 초, 주변 모두가 테슬라·코인 대박이라며 흥분합니다. 당신은?",
    a: { label: "모멘텀이 살아있다.\n늦더라도 올라타는 게 낫다", key: "T", icon: "users" },
    b: { label: "이런 분위기일수록 무섭다.\n오히려 비중을 줄일 타이밍이다", key: "C", icon: "user-minus" },
  },
  {
    id: 6,
    axis: "TC",
    q: "3개월 만에 +40% 오른 종목. 분석상 추가 상승 여력이 있습니다.",
    a: { label: "추세가 살아있다.\n추가 매수한다", key: "T", icon: "zap" },
    b: { label: "목표가에 도달했으니\n분할 매도한다", key: "C", icon: "scissors" },
  },
  // G/V 축 (Growth / Value)
  {
    id: 7,
    axis: "GV",
    q: "둘 중 하나만 골라야 한다면?",
    a: { label: "3년째 적자지만 매출이\n매년 2배씩 성장하는 AI 인프라 기업", key: "G", icon: "rocket" },
    b: { label: "성장은 연 5%지만 PER 7배,\n배당 5%에 현금이 쌓이는 통신주", key: "V", icon: "anchor" },
  },
  {
    id: 8,
    axis: "GV",
    q: "10년 전으로 돌아간다면 어떤 투자를 하고 싶으세요?",
    a: { label: "2013년, 아무도 몰랐던\n아마존·넷플릭스를 일찍 알아보고 10년 보유", key: "G", icon: "sparkles" },
    b: { label: "2009년, 금융위기 직후\n저평가 우량주를 바닥에서 담기", key: "V", icon: "gem" },
  },
  {
    id: 9,
    axis: "GV",
    q: "투자 후보를 좁힐 때, 더 눈에 들어오는 문장은?",
    a: { label: "\"이 시장은 10년 후\n지금보다 10배 이상 커질 것이다\"", key: "G", icon: "line-chart" },
    b: { label: "\"이 주식은 현재\n청산가치의 절반 수준에 거래되고 있다\"", key: "V", icon: "scale" },
  },
  // S/A 축 (Solo / Allocator)
  {
    id: 10,
    axis: "SA",
    q: "내가 생각하는 이상적인 포트폴리오는?",
    a: { label: "가장 확신 있는 3~5개에 집중.\n많으면 수익이 희석된다", key: "S", icon: "target" },
    b: { label: "최소 15~20개 이상.\n한 종목이 망해도 전체는 살아야 한다", key: "A", icon: "layers" },
  },
  {
    id: 11,
    axis: "SA",
    q: "리서치 끝에 \"이건 진짜다\"는 확신이 드는 종목을 찾았습니다. 비중은?",
    a: { label: "최소 30% 이상.\n이런 기회는 자주 오지 않는다", key: "S", icon: "crosshair" },
    b: { label: "좋아도 10% 상한.\n틀릴 가능성은 항상 존재한다", key: "A", icon: "pie-chart" },
  },
  {
    id: 12,
    axis: "SA",
    q: "투자에서 더 후회스러운 경험은?",
    a: { label: "확신이 있었는데 비중이 작아\n수익이 미미했던 것", key: "S", icon: "x-circle" },
    b: { label: "한 종목을 너무 크게 담아\n포트폴리오 전체가 흔들렸던 것", key: "A", icon: "alert-triangle" },
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
