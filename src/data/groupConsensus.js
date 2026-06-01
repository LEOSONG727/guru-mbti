export const GROUP_CONSENSUS = {
  FCVS: {
    groupName: "가치 집중 스나이퍼 대가 연합",
    keyThesis: "40년을 보유할 수 없다면 40분도 보유하지 마라. 독점 해자가 확실한 기업에 확신이 설 때까지 기다렸다가 집중 매수한다.",
    summary: "본 그룹의 거장들(워렌 버핏, 리 루, 모니시 파브라이, 가이 스파이어, 척 아크레, 메릴 위트머, 글렌 그린버그, 톰 게이너 — 총 8명)은 극도의 확신을 바탕으로 포트폴리오를 대형 우량주 5개 내외로 농축하여 장기 복리를 쌓아가는 스타일을 공유합니다. 이번 Q1 2026 분기, 버핏은 GOOGL을 +204% 대량 신규 매집하며 AI 검색 패권에 베팅했고, 리 루는 구글 A+C 클래스 합산 44.8%의 압도적 비중을 유지했습니다. 집단 전반의 현금 비중은 역대 최고 수준으로, 다음 대폭락을 위한 실탄 비축 중입니다.",
    averageCashRatio: 26.8,
    collectiveSentiment: "인내와 현금 사재기 (철저한 관망 및 독점 비즈니스 매집)",
    quarterlyHighlight: {
      action: "신규 편입",
      ticker: "GOOGL",
      guruName: "워렌 버핏",
      description: "버핏이 GOOGL을 +204% 대량 신규 매집. AI 검색 패권과 클라우드 성장에 대한 강력한 확신 신호."
    },
    overlappingHoldings: [
      {
        ticker: "GOOGL", name: "Alphabet Inc.", avgWeight: 18.4, change: "추가/신규",
        guruCount: 5,
        description: "버핏(+204% 신규)과 리 루(22.85% 유지) 모두 공통 보유. AI 검색 패권과 클라우드 성장 확신.",
        why: "광고·클라우드·AI 3중 독점 해자. 이 타입은 '경쟁자가 10년 내 이길 수 없는 기업'에 집중 베팅한다."
      },
      {
        ticker: "AAPL", name: "Apple Inc.", avgWeight: 21.99, change: "축소",
        guruCount: 6,
        description: "버핏의 단일 최대 보유(21.99%)이나 일부 차익 실현 중. 아크레, 게이너 등도 공통 보유.",
        why: "하드웨어가 아닌 생태계 자물쇠 효과. 아이폰을 바꾸는 게 아니라 애플을 떠나는 게 불가능한 구조."
      },
      {
        ticker: "AXP", name: "American Express Co.", avgWeight: 17.43, change: "유지",
        guruCount: 4,
        description: "버핏이 17.43% 장기 보유 중. 프리미엄 카드 결제 네트워크의 영속적 경쟁 해자.",
        why: "프리미엄 고객층의 충성도와 양면 플랫폼 효과. 경기 침체에도 고소득자 소비는 마지막까지 버틴다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "금융", value: 39, prev: 35, delta: 4, color: "#3F5BFF" },
        { name: "IT/플랫폼", value: 28, prev: 22, delta: 6, color: "#0EA5E9" },
        { name: "소비재", value: 18, prev: 21, delta: -3, color: "#10B981" },
        { name: "현금/기타", value: 15, prev: 22, delta: -7, color: "#94A3B8" }
      ]
    }
  },
  FCVA: {
    groupName: "정통 가치 분산투자 대가 연합",
    keyThesis: "싼 주식이 없으면 아무것도 사지 않는다. 100개의 저평가 바스켓이 단 한 개의 실수도 치명적이지 않게 만든다.",
    summary: "본 그룹의 거장들(벤저민 그레이엄, 월터 슐로스, 토마스 루소, 도널드 잭트먼, 마리오 가벨리, 월리스 와이츠 — 총 6명)은 개별 종목의 정성적 성장 스토리보다는 정량적 밸류에이션(PBR, 청산가치 등)에 의존하여 리스크를 100여 개 종목으로 균등 배분합니다. 잭트먼은 방어적 소비재 저평가주를, 루소는 글로벌 명품·F&B 브랜드를, 가벨리는 M&A 촉매가 있는 가치주 바스켓을 집중 발굴하며 이번 분기도 보수적 현금 비중을 유지했습니다.",
    averageCashRatio: 38.5,
    collectiveSentiment: "정중동(靜中動)의 인내 (싼 주식이 없으면 매매하지 않는다)",
    quarterlyHighlight: {
      action: "비중 유지",
      ticker: "KO",
      guruName: "도널드 잭트먼",
      description: "소비재 방어주 비중 전략적 유지. 경기 불확실성 속 안정적 현금흐름 기업에 집중. 현금 비중 38.5%로 역대 최고."
    },
    overlappingHoldings: [
      {
        ticker: "KO", name: "Coca-Cola Co.", avgWeight: 8.2, change: "유지",
        guruCount: 4,
        description: "버핏 가문과 정통 가치투자자 공통 보유. 전 세계 소비 방어재의 영원한 해자 기업.",
        why: "200개국에 유통망, 교체 불가 브랜드 인지도. 이 타입은 '평가가 아무리 달라져도 사업 자체는 흔들리지 않는 기업'을 산다."
      },
      {
        ticker: "PG", name: "Procter & Gamble Co.", avgWeight: 6.1, change: "유지",
        guruCount: 3,
        description: "불황 방어 소비재 대표 종목. 잭트먼·와이츠 계열 공통 보유로 포트 안정성 확보.",
        why: "세제·기저귀·면도기는 경기 침체에도 팔린다. 이 타입은 '경기와 무관한 필수재'에서 안전마진을 찾는다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "필수소비재", value: 38, prev: 36, delta: 2, color: "#3F5BFF" },
        { name: "지주회사", value: 22, prev: 24, delta: -2, color: "#0EA5E9" },
        { name: "산업재", value: 20, prev: 18, delta: 2, color: "#10B981" },
        { name: "현금/기타", value: 20, prev: 22, delta: -2, color: "#94A3B8" }
      ]
    }
  },
  FCGS: {
    groupName: "역발상 성장주의 집중 사냥꾼들",
    keyThesis: "공포가 최고의 할인권이다. 독점 프랜차이즈가 패닉셀 될 때 집중 매집하고 경영에 직접 개입해 가치를 끌어올린다.",
    summary: "본 그룹의 대가들(빌 애크먼, 테리 스미스, 크리스토퍼 혼, 넬슨 펠츠, 카를 아이칸, 알렉스 로퍼스, 제프리 우벤 — 총 7명)은 시장의 일시적 패닉으로 폭락한 독점적 고성장 프랜차이즈 기업을 저점에서 낚아채 집중 지분을 인수한 뒤 활발한 경영 관여(행동주의)를 구사합니다. Q1 2026: 애크먼은 MSFT 565만 주 신규 편입, 혼은 GE 29.85%·V 20.39% 유지·확대, 펠츠는 JHG 42.4%로 자산운용사 행동주의 개입 강화.",
    averageCashRatio: 12.4,
    collectiveSentiment: "공격적 매집 (AI 패권주 신규 편입 및 과점 기업 비중 확대)",
    quarterlyHighlight: {
      action: "신규 편입",
      ticker: "MSFT",
      guruName: "빌 애크먼",
      description: "애크먼이 MSFT 565만 주 신규 편입. AI 클라우드 독점 프랜차이즈에 대한 확신 베팅. 분기 최대 신규 포지션."
    },
    overlappingHoldings: [
      {
        ticker: "GE", name: "GE Aerospace", avgWeight: 22.8, change: "추가",
        guruCount: 3,
        description: "크리스토퍼 혼(29.85%)과 넬슨 펠츠(29.6%) 공통 1위 보유. 글로벌 민항기 엔진 독점 과점.",
        why: "민항기 엔진 교체 사이클은 20~30년. 이 타입은 '진입 장벽이 너무 높아 경쟁자가 나타날 수 없는' 과점 기업을 사냥한다."
      },
      {
        ticker: "MSFT", name: "Microsoft Corp.", avgWeight: 15.3, change: "신규",
        guruCount: 2,
        description: "빌 애크먼이 565만 주 신규 편입. AI 클라우드 패권 판단에 따른 초집중 매집.",
        why: "Azure+OpenAI 결합의 기업 소프트웨어 잠금 효과. 이 타입은 B2B 생태계 독점이 만드는 이탈 불가 구조를 선호한다."
      },
      {
        ticker: "V", name: "Visa Inc.", avgWeight: 20.4, change: "추가",
        guruCount: 2,
        description: "크리스토퍼 혼의 20.39% 비중. 글로벌 결제 네트워크의 독점적 수수료 해자.",
        why: "전 세계 결제의 40%를 처리하는 양면 플랫폼. 이 타입이 가장 사랑하는 '아무것도 만들지 않고 수수료만 받는 독점 구조'."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "항공/인프라", value: 35, prev: 28, delta: 7, color: "#3F5BFF" },
        { name: "IT/플랫폼", value: 30, prev: 24, delta: 6, color: "#0EA5E9" },
        { name: "금융/결제", value: 20, prev: 22, delta: -2, color: "#10B981" },
        { name: "기타", value: 15, prev: 26, delta: -11, color: "#94A3B8" }
      ]
    }
  },
  FCGA: {
    groupName: "가치/성장 밸런스 큐레이터 연합",
    keyThesis: "내가 잘 아는 것에 투자하라. 일상에서 발견한 성장 기업을 합리적 가격에 담고 분산 보유하며 기다린다.",
    summary: "본 그룹의 거장들(피터 린치, 빌 게이츠 — 총 2명)은 GARP(합리적 가격의 성장주) 전략을 취하며 우리의 일상 속에서 직관적으로 고성장을 감지하되 주가 수익성(PER, PEG)이 타당한 수백 개 종목을 포트폴리오에 큐레이션합니다. 게이츠 재단은 WM(폐기물 관리), BRK.B, CNI 등 장기 인프라·독점 비즈니스를 공통 보유하며 버핏 철학의 분산 버전을 운용합니다.",
    averageCashRatio: 8.5,
    collectiveSentiment: "부지런한 발품 투자 (합리적 밸류에이션의 성장 기업 발굴)",
    quarterlyHighlight: {
      action: "비중 유지",
      ticker: "WM",
      guruName: "빌 게이츠 재단",
      description: "폐기물 인프라 독점기업 장기 보유 유지. 경기 무관 현금 창출 비즈니스의 복리 효과 꾸준히 축적 중."
    },
    overlappingHoldings: [
      {
        ticker: "WM", name: "Waste Management Inc.", avgWeight: 11.2, change: "유지",
        guruCount: 2,
        description: "게이츠 재단 핵심 보유주. 경기 사이클에 무관한 필수 환경 인프라 독점 사업.",
        why: "쓰레기 매립지 허가는 수십 년 동안 새로 나오지 않는다. 이 타입은 '이해하기 쉽고 대체 불가능한 지역 독점'을 선호한다."
      },
      {
        ticker: "BRK.B", name: "Berkshire Hathaway Class B", avgWeight: 7.8, change: "유지",
        guruCount: 2,
        description: "버핏 철학 신봉자들의 공통 분모 지주사 보유.",
        why: "버핏이 고르는 좋은 기업들을 한 번에 담는 메타 투자. 이 타입은 직접 고르는 것보다 검증된 큐레이터에 위임하는 것도 선택지로 본다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "IT 테크", value: 28, prev: 25, delta: 3, color: "#3F5BFF" },
        { name: "경기소비재", value: 26, prev: 28, delta: -2, color: "#0EA5E9" },
        { name: "헬스케어", value: 22, prev: 20, delta: 2, color: "#10B981" },
        { name: "기타", value: 24, prev: 27, delta: -3, color: "#94A3B8" }
      ]
    }
  },
  FTVS: {
    groupName: "추세 결합 우량 가치사냥꾼",
    keyThesis: "좋은 기업을 싸게 사라. 이익률 높고 저평가된 종목을 시스템이 알아서 찾아내면 추세가 확인될 때 집중한다.",
    summary: "본 그룹의 거장(조엘 그린블라트 — 1명)의 퀀트 가치 스타일은 자본수익률(ROC)이 높고 이익수익률(EY)이 높은 '좋고 싼 가치주'의 실적 추세가 터지는 시점에 초집중 정렬합니다. 고담 애셋의 이번 분기 마법공식 필터링 결과, 금융 팩터 및 의료 인프라 부문의 계량 지표가 최상위권으로 포착되어 해당 섹터 비중을 늘렸습니다.",
    averageCashRatio: 5.2,
    collectiveSentiment: "공식 기반 모멘텀 (고효율-저평가 기업의 추세 추종)",
    quarterlyHighlight: {
      action: "리밸런싱",
      ticker: "VRTX",
      guruName: "조엘 그린블라트",
      description: "마법공식 필터 상위에 오른 고마진 바이오텍 편입. 의료 인프라 팩터 비중 확대로 포트 리밸런싱."
    },
    overlappingHoldings: [
      {
        ticker: "VRTX", name: "Vertex Pharmaceuticals", avgWeight: 6.8, change: "리밸런싱",
        guruCount: 1,
        description: "마법 공식 시스템에 걸린 대표적인 고마진 바이오텍. 독점적 약품 권한으로 꾸준한 자본 효율 창출.",
        why: "희귀 유전질환 치료제 독점. 이 타입은 '시장이 인식하기 전에 숫자가 먼저 보여주는' 팩터를 신뢰한다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "정보기술", value: 32, prev: 28, delta: 4, color: "#3F5BFF" },
        { name: "산업재", value: 28, prev: 30, delta: -2, color: "#0EA5E9" },
        { name: "의료/생명공학", value: 25, prev: 20, delta: 5, color: "#10B981" },
        { name: "기타", value: 15, prev: 22, delta: -7, color: "#94A3B8" }
      ]
    }
  },
  FTVA: {
    groupName: "데이터 팩터 및 행동주의 가치동맹",
    keyThesis: "시장이 틀렸고 내 숫자가 맞다. 회계 왜곡을 발견하고 촉매 이벤트를 기다리며 분산 베팅한다.",
    summary: "본 그룹의 거장들(데이비드 아인혼, 대니얼 로브 — 총 2명)은 헤지펀드 기반 데이터 가치투자가로, 재무제표의 보이지 않는 왜곡을 찾아 팩터 포트폴리오를 다변화합니다. 그린라이트(아인혼)는 GRBK 등 주택건설 밸류에이션 기회를 공략하고, 서드포인트(로브)는 구조조정 이벤트 드리븐 포지션을 결합해 운용합니다.",
    averageCashRatio: 14.8,
    collectiveSentiment: "촉매가 있는 가치 추적 (행동주의 지배구조 개선 모멘텀 결합)",
    quarterlyHighlight: {
      action: "비중 확대",
      ticker: "GRBK",
      guruName: "데이비드 아인혼",
      description: "미국 주택 공급 부족 구조적 수혜주 추가 편입. 극도로 저평가된 소형 홈빌더에 집중 베팅 지속."
    },
    overlappingHoldings: [
      {
        ticker: "GRBK", name: "Green Brick Partners", avgWeight: 7.2, change: "유지/추가",
        guruCount: 1,
        description: "아인혼의 핵심 보유주. 미국 주택 수요 회복기 저평가 중소형 홈빌더 집중 베팅.",
        why: "미국 주택 공급 부족은 10년 구조 문제. 이 타입은 '시장이 무시하는 섹터에서 데이터로 검증된 저평가'를 찾는다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "부동산/건설", value: 34, prev: 28, delta: 6, color: "#3F5BFF" },
        { name: "테크 테마", value: 26, prev: 30, delta: -4, color: "#0EA5E9" },
        { name: "통신/미디어", value: 20, prev: 22, delta: -2, color: "#10B981" },
        { name: "기타", value: 20, prev: 20, delta: 0, color: "#94A3B8" }
      ]
    }
  },
  FTGS: {
    groupName: "파괴적 혁신성장 모멘텀 헌터",
    keyThesis: "5년 후를 보고 산다. 혁신이 폭발적으로 채택되는 변곡점에 남들이 두려워할 때 풀악셀을 밟는다.",
    summary: "본 그룹의 거장들(캐시 우드, 체이스 콜먼, 스티븐 만델, 로버트 카 — 총 4명)은 파괴적 혁신과 지수 성장이 시작되는 글로벌 테크/인터넷 트렌드에 비중을 풀베팅합니다. Q1 2026: 캐시 우드는 TSLA 축소(-10%)하고 AMD·CRSP 비중 확대, 콜먼은 AI 인프라 및 소프트웨어 테마에 집중하며 고성장 추세를 이어갔습니다.",
    averageCashRatio: 3.5,
    collectiveSentiment: "혁신성장에 풀악셀 (AI 컴퓨팅 및 소프트웨어 독주 매수)",
    quarterlyHighlight: {
      action: "비중 확대",
      ticker: "AMD",
      guruName: "캐시 우드",
      description: "AI GPU 시장 NVIDIA 대항마. +15% 추가 편입으로 데이터센터 점유 확대에 베팅. 분기 최대 비중 확대 종목."
    },
    overlappingHoldings: [
      {
        ticker: "PLTR", name: "Palantir Technologies", avgWeight: 7.2, change: "유지/축소",
        guruCount: 2,
        description: "ARK(우드)와 타이거글로벌(콜먼) 공통 보유. AIP 정부·민간 AI 채택 가속화.",
        why: "정부 데이터 분석 독점 계약에서 민간 AI 플랫폼으로 전환 중. 이 타입은 S커브 초기 변곡점을 남들보다 먼저 포착한다."
      },
      {
        ticker: "AMD", name: "Advanced Micro Devices", avgWeight: 9.5, change: "추가",
        guruCount: 3,
        description: "캐시 우드 +15% 추가 편입. AI GPU 시장 NVIDIA 대항마로 데이터센터 점유 확대.",
        why: "GPU 이분 경쟁 구도의 수혜. 이 타입은 '독점보다 경쟁이 생기는 시점이 오히려 시장을 키운다'는 논리로 2위주를 산다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "AI/소프트웨어", value: 48, prev: 40, delta: 8, color: "#3F5BFF" },
        { name: "반도체/HW", value: 26, prev: 24, delta: 2, color: "#0EA5E9" },
        { name: "생명공학/우주", value: 16, prev: 20, delta: -4, color: "#10B981" },
        { name: "기타", value: 10, prev: 16, delta: -6, color: "#94A3B8" }
      ]
    }
  },
  FTGA: {
    groupName: "글로벌 트렌드 매니저/성장 정원사",
    keyThesis: "전 세계 1등 기업들이 이미 답이다. 메가 플랫폼의 복리를 다양하게 담아 꾸준히 키워간다.",
    summary: "본 그룹의 거장들(필립 피셔, 켄 피셔 — 총 2명)은 압도적인 시장 점유율과 글로벌 확장성을 지닌 메가트렌드 성장주들을 광범위한 바스켓에 담아 관리합니다. 피셔 인베스트먼츠는 이번 분기에도 미국 대형 플랫폼 기업뿐 아니라 글로벌 주요 우량주 수백 종을 광범위하게 포함한 포트폴리오를 유지하며 균형 성장을 추구했습니다.",
    averageCashRatio: 4.8,
    collectiveSentiment: "성장 파도타기 (글로벌 1등 메가 플랫폼에 광범위한 탑승)",
    quarterlyHighlight: {
      action: "비중 확대",
      ticker: "MSFT",
      guruName: "켄 피셔",
      description: "AI+클라우드 결합 글로벌 1등 플랫폼 추가 편입. 장기 성장 동력 가장 확실한 종목 비중 지속 증대."
    },
    overlappingHoldings: [
      {
        ticker: "MSFT", name: "Microsoft Corp.", avgWeight: 6.4, change: "추가",
        guruCount: 2,
        description: "클라우드와 AI 결합의 실질적 지배자로, 글로벌 분산 성장 포트폴리오의 영순위 주력보유.",
        why: "전 세계 기업 소프트웨어 표준. 이 타입은 '10년 후에도 더 커져있을 비즈니스 모델'을 찾아 광범위하게 담는다."
      },
      {
        ticker: "NVDA", name: "NVIDIA Corp.", avgWeight: 4.8, change: "유지",
        guruCount: 2,
        description: "AI 반도체 인프라 대장주. 켄 피셔 포트폴리오 공통 편입 확인.",
        why: "AI 시대의 곡괭이와 삽. 이 타입은 특정 승자를 고르기보다 그 모두가 필요로 하는 인프라에 분산 투자한다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "글로벌 테크", value: 42, prev: 38, delta: 4, color: "#3F5BFF" },
        { name: "금융/결제", value: 22, prev: 24, delta: -2, color: "#0EA5E9" },
        { name: "소비재/의료", value: 20, prev: 20, delta: 0, color: "#10B981" },
        { name: "기타", value: 16, prev: 18, delta: -2, color: "#94A3B8" }
      ]
    }
  },
  MCVS: {
    groupName: "거시 사이클 역발상 동맹",
    keyThesis: "리스크를 모르면 수익도 없다. 시장 사이클의 최공포 구간에서만 유의미한 안전마진이 생기고, 그때가 유일한 매수 기회다.",
    summary: "본 그룹의 거장들(하워드 막스, 프렘 왓사, 존 폴슨 — 총 3명)은 대중이 광기에 차 있을 때 리스크 관리를 철저히 하고, 공포에 사로잡혀 자산 가격이 패닉셀될 때 우량 부실 자산을 헐값에 강하게 인수합니다. 오크트리(막스)는 글로벌 신용 긴축 속 부실채권을 매집 중이며, 왓사는 BABA 등 극단적 저평가 아시아 자산에 집중 베팅하고 있습니다.",
    averageCashRatio: 22.5,
    collectiveSentiment: "바닥에서의 줍줍 (사이클 극단에서의 대담한 역발상 매수)",
    quarterlyHighlight: {
      action: "비중 확대",
      ticker: "BABA",
      guruName: "프렘 왓사",
      description: "중국 플랫폼 극단적 저평가 국면에서 역발상 매집 지속. 정치적 공포가 만든 안전마진에 대담하게 베팅."
    },
    overlappingHoldings: [
      {
        ticker: "GLD", name: "SPDR Gold Shares", avgWeight: 9.4, change: "추가",
        guruCount: 2,
        description: "폴슨의 금 비중 확대. 달러 약세 및 지정학 리스크 헤지를 위한 공통 안전자산 포지션.",
        why: "달러가 흔들릴 때 금은 오른다. 이 타입은 사이클 고점에서 '모든 것이 잘못될 경우'를 대비하는 헤지를 먼저 챙긴다."
      },
      {
        ticker: "BABA", name: "Alibaba Group Holding", avgWeight: 10.8, change: "추가",
        guruCount: 1,
        description: "왓사(페어팩스)의 핵심 역발상 포지션. 극도의 중국 자산 저평가 국면에서 대담한 매집.",
        why: "중국 이커머스 독점이 정치적 이유로 60% 폭락. 이 타입은 '사업은 멀쩡한데 공포만 있는 자산'을 집중적으로 노린다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "부실채권/대체자산", value: 40, prev: 35, delta: 5, color: "#3F5BFF" },
        { name: "특수 가치금융", value: 25, prev: 28, delta: -3, color: "#0EA5E9" },
        { name: "경기 방어재", value: 15, prev: 12, delta: 3, color: "#10B981" },
        { name: "기타", value: 20, prev: 25, delta: -5, color: "#94A3B8" }
      ]
    }
  },
  MCVA: {
    groupName: "올웨더 글로벌 자산배분 사단",
    keyThesis: "어떤 계절이 와도 무너지지 않는다. 경제 환경의 4계절을 모두 방어하도록 주식·채권·원자재를 시스템적으로 배분한다.",
    summary: "본 그룹의 거장(레이 달리오 — 1명)은 특정 자산의 폭등에 베팅하기보다는, 거시 경제 환경(인플레이션, 경제 성장)의 사계절을 완벽하게 방어하도록 주식, 채권, 원자재, 인플레이션 연동채를 시스템적으로 분배합니다. 브리지워터 Q1 2026: 22.4억 달러 포트폴리오에 993개 포지션 유지. SPY(8.2%), IVV(6.9%), AMZN·NVDA·GOOGL 추가 편입으로 AI 성장 팩터를 강화했습니다.",
    averageCashRatio: 18.2,
    collectiveSentiment: "리스크 패리티 (어떤 위기에도 잃지 않는 올웨더 시스템 세팅)",
    quarterlyHighlight: {
      action: "비중 확대",
      ticker: "NVDA",
      guruName: "레이 달리오",
      description: "올웨더 포트폴리오에 AI 인프라 성장 팩터 추가. 기술 패러다임 전환을 장기 팩터로 시스템에 편입."
    },
    overlappingHoldings: [
      {
        ticker: "SPY", name: "SPDR S&P 500 ETF Trust", avgWeight: 8.2, change: "유지",
        guruCount: 1,
        description: "브리지워터 최대 단일 포지션. 올웨더 미국 주식 팩터 노출도의 핵심.",
        why: "시장 전체를 하나의 팩터로 보유. 이 타입은 종목 선택보다 '어떤 경제 환경에서도 수익이 나는 구조 설계'를 우선한다."
      },
      {
        ticker: "IVV", name: "iShares Core S&P 500 ETF", avgWeight: 6.9, change: "유지",
        guruCount: 1,
        description: "SPY와 이중 보유로 S&P 500 시장 팩터 극대화.",
        why: "리스크 패리티 원칙상 주식 팩터는 최대한 저비용으로 확보. 이 타입은 팩터 노출에는 비용을 최소화한다."
      },
      {
        ticker: "NVDA", name: "NVIDIA Corp.", avgWeight: 5.1, change: "추가 (+8%)",
        guruCount: 1,
        description: "AI 연산 인프라 팩터 확대. 브리지워터의 성장 팩터 비중 증대 반영.",
        why: "AI 시대의 새로운 성장 팩터. 이 타입은 기존 팩터 모델에 '기술 패러다임 전환'을 추가 레이어로 편입한다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "주식 자산/ETF", value: 35, prev: 32, delta: 3, color: "#3F5BFF" },
        { name: "국채/회사채", value: 30, prev: 33, delta: -3, color: "#0EA5E9" },
        { name: "원자재/금", value: 18, prev: 17, delta: 1, color: "#10B981" },
        { name: "현금/연동채", value: 17, prev: 18, delta: -1, color: "#94A3B8" }
      ]
    }
  },
  MCGS: {
    groupName: "매크로 쏠림 집중 베팅 연합",
    keyThesis: "거시의 큰 흐름이 바뀌는 변곡점에만 베팅한다. 확신이 서면 크게, 아니면 아무것도 하지 않는다.",
    summary: "본 그룹의 거장들(스탠리 드러켄밀러, 폴 싱어 — 총 2명)은 거시 환경의 왜곡(금리 변곡점, 대규모 연준 통화 공급 등)을 포착하고 강력한 확신과 레버리지를 활용해 변곡점의 심장부에 초집중 베팅합니다. 드러켄밀러(듀케인)는 AI 인프라 테마에 막강한 압축 배팅을, 엘리엇(싱어)은 행동주의 에너지 및 지배구조 타깃에 집중하고 있습니다.",
    averageCashRatio: 16.5,
    collectiveSentiment: "거대 트렌드에 승부 (매크로 변곡점에 고인장 풀베팅)",
    quarterlyHighlight: {
      action: "집중 유지",
      ticker: "NVDA",
      guruName: "스탠리 드러켄밀러",
      description: "AI 컴퓨팅 패러다임 교체라는 거시 테제에 단일 최대 비중 유지. 확신이 있을 때 크게 베팅하는 원칙 고수."
    },
    overlappingHoldings: [
      {
        ticker: "NVDA", name: "NVIDIA Corp.", avgWeight: 18.4, change: "유지",
        guruCount: 1,
        description: "드러켄밀러의 핵심 AI 인프라 압축 베팅. 컴퓨팅 패러다임 교체 구조적 대세에 단일 최대 비중.",
        why: "AI는 1990년대 인터넷과 같은 패러다임 전환. 이 타입은 '거시의 큰 흐름'이 보이면 한 종목에 포트의 20%를 넣는 것을 두려워하지 않는다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "정보기술 인프라", value: 55, prev: 48, delta: 7, color: "#3F5BFF" },
        { name: "에너지/자원", value: 20, prev: 24, delta: -4, color: "#0EA5E9" },
        { name: "소비재", value: 15, prev: 16, delta: -1, color: "#10B981" },
        { name: "기타", value: 10, prev: 12, delta: -2, color: "#94A3B8" }
      ]
    }
  },
  MCGA: {
    groupName: "글로벌 매크로 재귀성 헤지펀드 동맹",
    keyThesis: "시장은 항상 틀려있다. 재귀적 자가강화 추세의 절정에서 방향을 반전시키는 역베팅에 전 자산군을 교차 동원한다.",
    summary: "본 그룹의 거장(조지 소로스 — 1명)은 재귀성(Reflexivity) 이론으로 시장 참가자들의 편향된 심리가 만든 추세의 자가 발전 및 붕괴를 타깃팅하여 주식, 외환, 금리를 교차하는 글로벌 분산 헷지 포트폴리오를 운용합니다. Q1 2026: 소로스 펀드는 신흥국 성장 팩터 및 미국 대형 플랫폼주에 균형 배분하며 운용 중입니다.",
    averageCashRatio: 11.2,
    collectiveSentiment: "모순 추적 (글로벌 펀더멘털 왜곡의 교차 베팅)",
    quarterlyHighlight: {
      action: "헤지 추가",
      ticker: "SPY",
      guruName: "조지 소로스",
      description: "지수 기본 보유 + 풋옵션 결합으로 시장 급락 대비 헤지 구조 강화. 재귀성 이론의 실전 적용."
    },
    overlappingHoldings: [
      {
        ticker: "SPY", name: "SPDR S&P 500 ETF Trust (풋옵션 결합)", avgWeight: 8.5, change: "헤지추가",
        guruCount: 1,
        description: "지수 기본 추종 및 시장 돌발 하락에 대비하는 다차원 파생결합 지주 포지션.",
        why: "롱과 풋을 동시에 보유하는 재귀성 헤지. 이 타입은 단순 롱이 아니라 '방향이 틀려도 수익나는 구조'를 만드는 것에 집착한다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "대형 지수주", value: 38, prev: 34, delta: 4, color: "#3F5BFF" },
        { name: "IT/성장주", value: 28, prev: 32, delta: -4, color: "#0EA5E9" },
        { name: "바이오/헬스", value: 18, prev: 16, delta: 2, color: "#10B981" },
        { name: "기타", value: 16, prev: 18, delta: -2, color: "#94A3B8" }
      ]
    }
  },
  MTVS: {
    groupName: "매크로 모멘텀 안전마진 저격단",
    keyThesis: "안전마진 없이는 투자가 아니다. 거시 환경이 받쳐줄 때, 유동성 위기에도 살아남을 확실한 가치가 있는 곳에만 집중한다.",
    summary: "본 그룹의 거장(세스 클라르만 — 1명)은 버핏 다음으로 가치투자의 성서로 여겨지는 '안전마진'의 저자입니다. 바우포스트 Q1 2026: 51.2억 달러 포트폴리오에 22개 종목 운용. AMZN 12.70%로 1위, QSR 11.67%, WCC·UNP·ELV 각 7%대로 고른 분산. 금리 인하 수혜 헬스케어(ELV) 및 철도 인프라(UNP)로 대피 포지션을 강화하며 AON 신규 편입했습니다.",
    averageCashRatio: 28.5,
    collectiveSentiment: "최고의 방어 (유동성 충격 대비 현금 비축 및 우량주 타격)",
    quarterlyHighlight: {
      action: "신규 편입",
      ticker: "AON",
      guruName: "세스 클라르만",
      description: "글로벌 보험 브로커 1위 AON 신규 편입. 금리 인하 국면 안정 수수료 비즈니스로 현금흐름 안정화."
    },
    overlappingHoldings: [
      {
        ticker: "AMZN", name: "Amazon.com Inc.", avgWeight: 12.7, change: "추가",
        guruCount: 1,
        description: "바우포스트 1위 보유. AWS 클라우드 이익 가속 및 리테일 흑자화 기반 강력한 FCF 매력.",
        why: "클라우드 독점 + 리테일 현금흐름의 이중 안전마진. 이 타입은 '사업이 하나 망해도 다른 사업이 버텨주는' 구조적 안전성을 요구한다."
      },
      {
        ticker: "ELV", name: "Elevance Health Inc.", avgWeight: 7.3, change: "유지",
        guruCount: 1,
        description: "미국 민영 건강보험 과점 1위. 금리 인하 국면 방어 자산으로 클라르만 포트 안정 축.",
        why: "미국 의료보험 시장은 과점이고 수요는 경기와 무관하다. 이 타입은 '불황에 더 단단해지는 필수재 독점'을 선호한다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "소비/IT", value: 30, prev: 26, delta: 4, color: "#3F5BFF" },
        { name: "헬스케어", value: 28, prev: 24, delta: 4, color: "#0EA5E9" },
        { name: "산업/철도", value: 22, prev: 25, delta: -3, color: "#10B981" },
        { name: "현금/기타", value: 20, prev: 25, delta: -5, color: "#94A3B8" }
      ]
    }
  },
  MTVA: {
    groupName: "글로벌 계량 가치 평균회귀 동맹",
    keyThesis: "버블은 반드시 터진다. 역사적 평균 이상으로 과열된 자산은 팔고, 극도로 저평가된 글로벌 가치주에 분산 정렬한다.",
    summary: "본 그룹의 거장(제레미 그랜섬 — 1명)은 역사적 버블 판독기입니다. GMO는 주기적인 평균회귀 이론을 신봉하며 전 세계 자산군과 주식 섹터를 정량적으로 비교 분석해, 버블 가능성이 높은 미국 성장주를 매도하고 철저히 외면받는 글로벌 가치주(특히 신흥국, 유럽)에 분산 정렬합니다. 현재 미국 증시 과열에 경고 신호를 지속 발신 중입니다.",
    averageCashRatio: 15.5,
    collectiveSentiment: "버블 대피 (역사적 평균으로의 회귀를 대비한 분산 분할 정렬)",
    quarterlyHighlight: {
      action: "비중 확대",
      ticker: "EWG",
      guruName: "제레미 그랜섬",
      description: "미국 증시 과열 대비 유럽 산업 저평가주 비중 확대. 평균회귀 원칙에 따른 글로벌 리밸런싱 지속."
    },
    overlappingHoldings: [
      {
        ticker: "EWG", name: "iShares MSCI Germany ETF", avgWeight: 5.4, change: "추가",
        guruCount: 1,
        description: "미국 증시 대비 극도로 저평가된 유럽 산업 엔진 비중을 채워 넣음.",
        why: "S&P500 PER 25배 vs 유럽 PER 12배. 이 타입은 '수십 년 역사 데이터상 이 가격 차이는 반드시 좁혀진다'는 통계적 확신으로 베팅한다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "해외 지주주", value: 36, prev: 30, delta: 6, color: "#3F5BFF" },
        { name: "유럽 가치소비", value: 28, prev: 26, delta: 2, color: "#0EA5E9" },
        { name: "에너지/소재", value: 18, prev: 22, delta: -4, color: "#10B981" },
        { name: "기타", value: 18, prev: 22, delta: -4, color: "#94A3B8" }
      ]
    }
  },
  MTGS: {
    groupName: "매크로 차트 추세 돌격 사단",
    keyThesis: "차트가 모든 것을 말한다. 200일 이동평균 위에 있는 주도 섹터에만 베팅하고, 아래로 내려오면 즉시 이탈한다.",
    summary: "본 그룹의 거장(폴 튜더 존스 — 1명)은 1987년 블랙먼데이를 완벽 예측한 거장으로, 모멘텀 지표와 200일 이동평균선 등 매크로 차트 추세를 등 뒤에 업고 주도 섹터를 집중 공략합니다. 튜더 인베스트먼트는 최근 원유/에너지 및 구리 등 전 세계 공급망 타이트에 수혜를 받는 원자재 인프라 주도주의 모멘텀을 추종하고 있습니다.",
    averageCashRatio: 6.5,
    collectiveSentiment: "추세선 풀베팅 (200일 이동평균 상향 터치 주도주 집중 매수)",
    quarterlyHighlight: {
      action: "신규 편입",
      ticker: "FCX",
      guruName: "폴 튜더 존스",
      description: "AI 데이터센터 전력망 핵심 원자재 구리 모멘텀 추종. 200일 이동평균 돌파 확인 후 강하게 매수."
    },
    overlappingHoldings: [
      {
        ticker: "FCX", name: "Freeport-McMoRan Inc.", avgWeight: 8.2, change: "+신규/추가",
        guruCount: 1,
        description: "글로벌 AI 전력망 인프라 구축의 핵심 원자재인 구리 가격 폭등 추세를 활용해 돌격 매집.",
        why: "AI 데이터센터 1개 짓는 데 구리 수천 톤 필요. 이 타입은 '수요 급증이 확인되고 200일선 위에 있는 자산'에만 베팅한다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "원자재/소재", value: 40, prev: 32, delta: 8, color: "#3F5BFF" },
        { name: "에너지 생산", value: 25, prev: 28, delta: -3, color: "#0EA5E9" },
        { name: "정보기술", value: 20, prev: 22, delta: -2, color: "#10B981" },
        { name: "기타", value: 15, prev: 18, delta: -3, color: "#94A3B8" }
      ]
    }
  },
  MTGA: {
    groupName: "시스템 메가 트렌드 다자배분 동맹",
    keyThesis: "메가 트렌드는 10년을 간다. AI·에너지·헬스케어 인프라의 구조적 수혜주를 시스템적으로 분산 보유해 복리를 축적한다.",
    summary: "글로벌 메가트렌드(기후, 보건, 기술 패러다임)를 지원하는 안정적 인프라 대장주들을 분산 매수하여 안정적인 장기 성과를 지지하는 시스템형 투자자 그룹입니다. AI·에너지·인구·기후 등 글로벌 메가 트렌드에 분산 베팅하는 시스템 투자 스타일로, 단기 알파보다 장기 복리를 추구합니다.",
    averageCashRatio: 9.5,
    collectiveSentiment: "장기 배당 및 트렌드 헤지 (체계적인 글로벌 거시 인프라 매수)",
    quarterlyHighlight: {
      action: "비중 유지",
      ticker: "WM",
      guruName: "시스템 운용",
      description: "경기 무관 필수 인프라 기업의 장기 보유 유지. 어떤 시장 상황에서도 안정적 현금흐름 확보 원칙 고수."
    },
    overlappingHoldings: [
      {
        ticker: "WM", name: "Waste Management Inc.", avgWeight: 11.2, change: "유지",
        guruCount: 1,
        description: "어떤 경기 침체에도 쓰레기는 발생하며 꾸준히 현금 배당을 만드는 인프라.",
        why: "폐기물 처리는 기후·인구·도시화 모든 트렌드의 교차점. 이 타입은 '여러 메가트렌드가 동시에 지지하는 인프라'를 선호한다."
      }
    ],
    groupCharts: {
      sectors: [
        { name: "소비/유통", value: 34, prev: 36, delta: -2, color: "#3F5BFF" },
        { name: "폐기물/인프라", value: 28, prev: 26, delta: 2, color: "#0EA5E9" },
        { name: "헬스케어/의료", value: 22, prev: 20, delta: 2, color: "#10B981" },
        { name: "기타", value: 16, prev: 18, delta: -2, color: "#94A3B8" }
      ]
    }
  }
};
