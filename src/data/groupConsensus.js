export const GROUP_CONSENSUS = {
  FCVS: {
    groupName: "가치 집중 스나이퍼 대가 연합",
    summary: "본 그룹의 거장들(워렌 버핏, 리 루, 모니시 파브라이, 가이 스파이어, 척 아크레, 메릴 위트머, 글렌 그린버그, 톰 게이너 — 총 8명)은 극도의 확신을 바탕으로 포트폴리오를 대형 우량주 5개 내외로 농축하여 장기 복리를 쌓아가는 스타일을 공유합니다. 이번 Q1 2026 분기, 버핏은 GOOGL을 +204% 대량 신규 매집하며 AI 검색 패권에 베팅했고, 리 루는 구글 A+C 클래스 합산 44.8%의 압도적 비중을 유지했습니다. 집단 전반의 현금 비중은 역대 최고 수준으로, 다음 대폭락을 위한 실탄 비축 중입니다.",
    averageCashRatio: 26.8,
    collectiveSentiment: "인내와 현금 사재기 (철저한 관망 및 독점 비즈니스 매집)",
    overlappingHoldings: [
      { ticker: "GOOGL", name: "Alphabet Inc.", avgWeight: 18.4, change: "추가/신규", description: "버핏(+204% 신규)과 리 루(22.85% 유지) 모두 공통 보유. AI 검색 패권과 클라우드 성장 확신." },
      { ticker: "AAPL", name: "Apple Inc.", avgWeight: 21.99, change: "축소", description: "버핏의 단일 최대 보유(21.99%)이나 일부 차익 실현 중. 아크레, 게이너 등도 공통 보유." },
      { ticker: "AXP", name: "American Express Co.", avgWeight: 17.43, change: "유지", description: "버핏이 17.43% 장기 보유 중. 프리미엄 카드 결제 네트워크의 영속적 경쟁 해자." }
    ],
    groupCharts: {
      sectors: [
        { name: "금융", value: 39, color: "#3F5BFF" },
        { name: "IT/플랫폼", value: 28, color: "#0EA5E9" },
        { name: "소비재", value: 18, color: "#10B981" },
        { name: "현금/기타", value: 15, color: "#94A3B8" }
      ]
    }
  },
  FCVA: {
    groupName: "정통 가치 분산투자 대가 연합",
    summary: "본 그룹의 거장들(벤저민 그레이엄, 월터 슐로스, 토마스 루소, 도널드 잭트먼, 마리오 가벨리, 월리스 와이츠 — 총 6명)은 개별 종목의 정성적 성장 스토리보다는 정량적 밸류에이션(PBR, 청산가치 등)에 의존하여 리스크를 100여 개 종목으로 균등 배분합니다. 잭트먼은 방어적 소비재 저평가주를, 루소는 글로벌 명품·F&B 브랜드를, 가벨리는 M&A 촉매가 있는 가치주 바스켓을 집중 발굴하며 이번 분기도 보수적 현금 비중을 유지했습니다.",
    averageCashRatio: 38.5,
    collectiveSentiment: "정중동(靜中動)의 인내 (싼 주식이 없으면 매매하지 않는다)",
    overlappingHoldings: [
      { ticker: "KO", name: "Coca-Cola Co.", avgWeight: 8.2, change: "유지", description: "버핏 가문과 정통 가치투자자 공통 보유. 전 세계 소비 방어재의 영원한 해자 기업." },
      { ticker: "PG", name: "Procter & Gamble Co.", avgWeight: 6.1, change: "유지", description: "불황 방어 소비재 대표 종목. 잭트먼·와이츠 계열 공통 보유로 포트 안정성 확보." }
    ],
    groupCharts: {
      sectors: [
        { name: "필수소비재", value: 38, color: "#3F5BFF" },
        { name: "지주회사", value: 22, color: "#0EA5E9" },
        { name: "산업재", value: 20, color: "#10B981" },
        { name: "현금/기타", value: 20, color: "#94A3B8" }
      ]
    }
  },
  FCGS: {
    groupName: "역발상 성장주의 집중 사냥꾼들",
    summary: "본 그룹의 대가들(빌 애크먼, 테리 스미스, 크리스토퍼 혼, 넬슨 펠츠, 카를 아이칸, 알렉스 로퍼스, 제프리 우벤 — 총 7명)은 시장의 일시적 패닉으로 폭락한 독점적 고성장 프랜차이즈 기업을 저점에서 낚아채 집중 지분을 인수한 뒤 활발한 경영 관여(행동주의)를 구사합니다. Q1 2026: 애크먼은 MSFT 565만 주 신규 편입, 혼은 GE 29.85%·V 20.39% 유지·확대, 펠츠는 JHG 42.4%로 자산운용사 행동주의 개입 강화.",
    averageCashRatio: 12.4,
    collectiveSentiment: "공격적 매집 (AI 패권주 신규 편입 및 과점 기업 비중 확대)",
    overlappingHoldings: [
      { ticker: "GE", name: "GE Aerospace", avgWeight: 22.8, change: "추가", description: "크리스토퍼 혼(29.85%)과 넬슨 펠츠(29.6%) 공통 1위 보유. 글로벌 민항기 엔진 독점 과점." },
      { ticker: "MSFT", name: "Microsoft Corp.", avgWeight: 15.3, change: "신규", description: "빌 애크먼이 565만 주 신규 편입. AI 클라우드 패권 판단에 따른 초집중 매집." },
      { ticker: "V", name: "Visa Inc.", avgWeight: 20.4, change: "추가", description: "크리스토퍼 혼의 20.39% 비중. 글로벌 결제 네트워크의 독점적 수수료 해자." }
    ],
    groupCharts: {
      sectors: [
        { name: "항공/인프라", value: 35, color: "#3F5BFF" },
        { name: "IT/플랫폼", value: 30, color: "#0EA5E9" },
        { name: "금융/결제", value: 20, color: "#10B981" },
        { name: "기타", value: 15, color: "#94A3B8" }
      ]
    }
  },
  FCGA: {
    groupName: "가치/성장 밸런스 큐레이터 연합",
    summary: "본 그룹의 거장들(피터 린치, 빌 게이츠 — 총 2명)은 GARP(합리적 가격의 성장주) 전략을 취하며 우리의 일상 속에서 직관적으로 고성장을 감지하되 주가 수익성(PER, PEG)이 타당한 수백 개 종목을 포트폴리오에 큐레이션합니다. 게이츠 재단은 WM(폐기물 관리), BRK.B, CNI 등 장기 인프라·독점 비즈니스를 공통 보유하며 버핏 철학의 분산 버전을 운용합니다.",
    averageCashRatio: 8.5,
    collectiveSentiment: "부지런한 발품 투자 (합리적 밸류에이션의 성장 기업 발굴)",
    overlappingHoldings: [
      { ticker: "WM", name: "Waste Management Inc.", avgWeight: 11.2, change: "유지", description: "게이츠 재단 핵심 보유주. 경기 사이클에 무관한 필수 환경 인프라 독점 사업." },
      { ticker: "BRK.B", name: "Berkshire Hathaway Class B", avgWeight: 7.8, change: "유지", description: "버핏 철학 신봉자들의 공통 분모 지주사 보유." }
    ],
    groupCharts: {
      sectors: [
        { name: "IT 테크", value: 28, color: "#3F5BFF" },
        { name: "경기소비재", value: 26, color: "#0EA5E9" },
        { name: "헬스케어", value: 22, color: "#10B981" },
        { name: "기타", value: 24, color: "#94A3B8" }
      ]
    }
  },
  FTVS: {
    groupName: "추세 결합 우량 가치사냥꾼",
    summary: "본 그룹의 거장(조엘 그린블라트 — 1명)의 퀀트 가치 스타일은 자본수익률(ROC)이 높고 이익수익률(EY)이 높은 '좋고 싼 가치주'의 실적 추세가 터지는 시점에 초집중 정렬합니다. 고담 애셋의 이번 분기 마법공식 필터링 결과, 금융 팩터 및 의료 인프라 부문의 계량 지표가 최상위권으로 포착되어 해당 섹터 비중을 늘렸습니다.",
    averageCashRatio: 5.2,
    collectiveSentiment: "공식 기반 모멘텀 (고효율-저평가 기업의 추세 추종)",
    overlappingHoldings: [
      { ticker: "VRTX", name: "Vertex Pharmaceuticals", avgWeight: 6.8, change: "리밸런싱", description: "마법 공식 시스템에 걸린 대표적인 고마진 바이오텍. 독점적 약품 권한으로 꾸준한 자본 효율 창출." }
    ],
    groupCharts: {
      sectors: [
        { name: "정보기술", value: 32, color: "#3F5BFF" },
        { name: "산업재", value: 28, color: "#0EA5E9" },
        { name: "의료/생명공학", value: 25, color: "#10B981" },
        { name: "기타", value: 15, color: "#94A3B8" }
      ]
    }
  },
  FTVA: {
    groupName: "데이터 팩터 및 행동주의 가치동맹",
    summary: "본 그룹의 거장들(데이비드 아인혼, 대니얼 로브 — 총 2명)은 헤지펀드 기반 데이터 가치투자가로, 재무제표의 보이지 않는 왜곡을 찾아 팩터 포트폴리오를 다변화합니다. 그린라이트(아인혼)는 GRBK 등 주택건설 밸류에이션 기회를 공략하고, 서드포인트(로브)는 구조조정 이벤트 드리븐 포지션을 결합해 운용합니다.",
    averageCashRatio: 14.8,
    collectiveSentiment: "촉매가 있는 가치 추적 (행동주의 지배구조 개선 모멘텀 결합)",
    overlappingHoldings: [
      { ticker: "GRBK", name: "Green Brick Partners", avgWeight: 7.2, change: "유지/추가", description: "아인혼의 핵심 보유주. 미국 주택 수요 회복기 저평가 중소형 홈빌더 집중 베팅." }
    ],
    groupCharts: {
      sectors: [
        { name: "부동산/건설", value: 34, color: "#3F5BFF" },
        { name: "테크 테마", value: 26, color: "#0EA5E9" },
        { name: "통신/미디어", value: 20, color: "#10B981" },
        { name: "기타", value: 20, color: "#94A3B8" }
      ]
    }
  },
  FTGS: {
    groupName: "파괴적 혁신성장 모멘텀 헌터",
    summary: "본 그룹의 거장들(캐시 우드, 체이스 콜먼, 스티븐 만델, 로버트 카 — 총 4명)은 파괴적 혁신과 지수 성장이 시작되는 글로벌 테크/인터넷 트렌드에 비중을 풀베팅합니다. Q1 2026: 캐시 우드는 TSLA 축소(-10%)하고 AMD·CRSP 비중 확대, 콜먼은 AI 인프라 및 소프트웨어 테마에 집중하며 고성장 추세를 이어갔습니다.",
    averageCashRatio: 3.5,
    collectiveSentiment: "혁신성장에 풀악셀 (AI 컴퓨팅 및 소프트웨어 독주 매수)",
    overlappingHoldings: [
      { ticker: "PLTR", name: "Palantir Technologies", avgWeight: 7.2, change: "유지/축소", description: "ARK(우드)와 타이거글로벌(콜먼) 공통 보유. AIP 정부·민간 AI 채택 가속화." },
      { ticker: "AMD", name: "Advanced Micro Devices", avgWeight: 9.5, change: "추가", description: "캐시 우드 +15% 추가 편입. AI GPU 시장 NVIDIA 대항마로 데이터센터 점유 확대." }
    ],
    groupCharts: {
      sectors: [
        { name: "AI/소프트웨어", value: 48, color: "#3F5BFF" },
        { name: "반도체/HW", value: 26, color: "#0EA5E9" },
        { name: "생명공학/우주", value: 16, color: "#10B981" },
        { name: "기타", value: 10, color: "#94A3B8" }
      ]
    }
  },
  FTGA: {
    groupName: "글로벌 트렌드 매니저/성장 정원사",
    summary: "본 그룹의 거장들(필립 피셔, 켄 피셔 — 총 2명)은 압도적인 시장 점유율과 글로벌 확장성을 지닌 메가트렌드 성장주들을 광범위한 바스켓에 담아 관리합니다. 피셔 인베스트먼츠는 이번 분기에도 미국 대형 플랫폼 기업뿐 아니라 글로벌 주요 우량주 수백 종을 광범위하게 포함한 포트폴리오를 유지하며 균형 성장을 추구했습니다.",
    averageCashRatio: 4.8,
    collectiveSentiment: "성장 파도타기 (글로벌 1등 메가 플랫폼에 광범위한 탑승)",
    overlappingHoldings: [
      { ticker: "MSFT", name: "Microsoft Corp.", avgWeight: 6.4, change: "추가", description: "클라우드와 AI 결합의 실질적 지배자로, 글로벌 분산 성장 포트폴리오의 영순위 주력보유." },
      { ticker: "NVDA", name: "NVIDIA Corp.", avgWeight: 4.8, change: "유지", description: "AI 반도체 인프라 대장주. 켄 피셔 포트폴리오 공통 편입 확인." }
    ],
    groupCharts: {
      sectors: [
        { name: "글로벌 테크", value: 42, color: "#3F5BFF" },
        { name: "금융/결제", value: 22, color: "#0EA5E9" },
        { name: "소비재/의료", value: 20, color: "#10B981" },
        { name: "기타", value: 16, color: "#94A3B8" }
      ]
    }
  },
  MCVS: {
    groupName: "거시 사이클 역발상 동맹",
    summary: "본 그룹의 거장들(하워드 막스, 프렘 왓사, 존 폴슨 — 총 3명)은 대중이 광기에 차 있을 때 리스크 관리를 철저히 하고, 공포에 사로잡혀 자산 가격이 패닉셀될 때 우량 부실 자산을 헐값에 강하게 인수합니다. 오크트리(막스)는 글로벌 신용 긴축 속 부실채권을 매집 중이며, 왓사는 BABA 등 극단적 저평가 아시아 자산에 집중 베팅하고 있습니다.",
    averageCashRatio: 22.5,
    collectiveSentiment: "바닥에서의 줍줍 (사이클 극단에서의 대담한 역발상 매수)",
    overlappingHoldings: [
      { ticker: "GLD", name: "SPDR Gold Shares", avgWeight: 9.4, change: "추가", description: "폴슨의 금 비중 확대. 달러 약세 및 지정학 리스크 헤지를 위한 공통 안전자산 포지션." },
      { ticker: "BABA", name: "Alibaba Group Holding", avgWeight: 10.8, change: "추가", description: "왓사(페어팩스)의 핵심 역발상 포지션. 극도의 중국 자산 저평가 국면에서 대담한 매집." }
    ],
    groupCharts: {
      sectors: [
        { name: "부실채권/대체자산", value: 40, color: "#3F5BFF" },
        { name: "특수 가치금융", value: 25, color: "#0EA5E9" },
        { name: "경기 방어재", value: 15, color: "#10B981" },
        { name: "기타", value: 20, color: "#94A3B8" }
      ]
    }
  },
  MCVA: {
    groupName: "올웨더 글로벌 자산배분 사단",
    summary: "본 그룹의 거장(레이 달리오 — 1명)은 특정 자산의 폭등에 베팅하기보다는, 거시 경제 환경(인플레이션, 경제 성장)의 사계절을 완벽하게 방어하도록 주식, 채권, 원자재, 인플레이션 연동채를 시스템적으로 분배합니다. 브리지워터 Q1 2026: 22.4억 달러 포트폴리오에 993개 포지션 유지. SPY(8.2%), IVV(6.9%), AMZN·NVDA·GOOGL 추가 편입으로 AI 성장 팩터를 강화했습니다.",
    averageCashRatio: 18.2,
    collectiveSentiment: "리스크 패리티 (어떤 위기에도 잃지 않는 올웨더 시스템 세팅)",
    overlappingHoldings: [
      { ticker: "SPY", name: "SPDR S&P 500 ETF Trust", avgWeight: 8.2, change: "유지", description: "브리지워터 최대 단일 포지션. 올웨더 미국 주식 팩터 노출도의 핵심." },
      { ticker: "IVV", name: "iShares Core S&P 500 ETF", avgWeight: 6.9, change: "유지", description: "SPY와 이중 보유로 S&P 500 시장 팩터 극대화." },
      { ticker: "NVDA", name: "NVIDIA Corp.", avgWeight: 5.1, change: "추가 (+8%)", description: "AI 연산 인프라 팩터 확대. 브리지워터의 성장 팩터 비중 증대 반영." }
    ],
    groupCharts: {
      sectors: [
        { name: "주식 자산/ETF", value: 35, color: "#3F5BFF" },
        { name: "국채/회사채", value: 30, color: "#0EA5E9" },
        { name: "원자재/금", value: 18, color: "#10B981" },
        { name: "현금/연동채", value: 17, color: "#94A3B8" }
      ]
    }
  },
  MCGS: {
    groupName: "매크로 쏠림 집중 베팅 연합",
    summary: "본 그룹의 거장들(스탠리 드러켄밀러, 폴 싱어 — 총 2명)은 거시 환경의 왜곡(금리 변곡점, 대규모 연준 통화 공급 등)을 포착하고 강력한 확신과 레버리지를 활용해 변곡점의 심장부에 초집중 베팅합니다. 드러켄밀러(듀케인)는 AI 인프라 테마에 막강한 압축 배팅을, 엘리엇(싱어)은 행동주의 에너지 및 지배구조 타깃에 집중하고 있습니다.",
    averageCashRatio: 16.5,
    collectiveSentiment: "거대 트렌드에 승부 (매크로 변곡점에 고인장 풀베팅)",
    overlappingHoldings: [
      { ticker: "NVDA", name: "NVIDIA Corp.", avgWeight: 18.4, change: "유지", description: "드러켄밀러의 핵심 AI 인프라 압축 베팅. 컴퓨팅 패러다임 교체 구조적 대세에 단일 최대 비중." }
    ],
    groupCharts: {
      sectors: [
        { name: "정보기술 인프라", value: 55, color: "#3F5BFF" },
        { name: "에너지/자원", value: 20, color: "#0EA5E9" },
        { name: "소비재", value: 15, color: "#10B981" },
        { name: "기타", value: 10, color: "#94A3B8" }
      ]
    }
  },
  MCGA: {
    groupName: "글로벌 매크로 재귀성 헤지펀드 동맹",
    summary: "본 그룹의 거장(조지 소로스 — 1명)은 재귀성(Reflexivity) 이론으로 시장 참가자들의 편향된 심리가 만든 추세의 자가 발전 및 붕괴를 타깃팅하여 주식, 외환, 금리를 교차하는 글로벌 분산 헷지 포트폴리오를 운용합니다. Q1 2026: 소로스 펀드는 신흥국 성장 팩터 및 미국 대형 플랫폼주에 균형 배분하며 운용 중입니다.",
    averageCashRatio: 11.2,
    collectiveSentiment: "모순 추적 (글로벌 펀더멘털 왜곡의 교차 베팅)",
    overlappingHoldings: [
      { ticker: "SPY", name: "SPDR S&P 500 ETF Trust (풋옵션 결합)", avgWeight: 8.5, change: "헤지추가", description: "지수 기본 추종 및 시장 돌발 하락에 대비하는 다차원 파생결합 지주 포지션." }
    ],
    groupCharts: {
      sectors: [
        { name: "대형 지수주", value: 38, color: "#3F5BFF" },
        { name: "IT/성장주", value: 28, color: "#0EA5E9" },
        { name: "바이오/헬스", value: 18, color: "#10B981" },
        { name: "기타", value: 16, color: "#94A3B8" }
      ]
    }
  },
  MTVS: {
    groupName: "매크로 모멘텀 안전마진 저격단",
    summary: "본 그룹의 거장(세스 클라르만 — 1명)은 버핏 다음으로 가치투자의 성서로 여겨지는 '안전마진'의 저자입니다. 바우포스트 Q1 2026: 51.2억 달러 포트폴리오에 22개 종목 운용. AMZN 12.70%로 1위, QSR 11.67%, WCC·UNP·ELV 각 7%대로 고른 분산. 금리 인하 수혜 헬스케어(ELV) 및 철도 인프라(UNP)로 대피 포지션을 강화하며 AON 신규 편입했습니다.",
    averageCashRatio: 28.5,
    collectiveSentiment: "최고의 방어 (유동성 충격 대비 현금 비축 및 우량주 타격)",
    overlappingHoldings: [
      { ticker: "AMZN", name: "Amazon.com Inc.", avgWeight: 12.7, change: "추가", description: "바우포스트 1위 보유. AWS 클라우드 이익 가속 및 리테일 흑자화 기반 강력한 FCF 매력." },
      { ticker: "ELV", name: "Elevance Health Inc.", avgWeight: 7.3, change: "유지", description: "미국 민영 건강보험 과점 1위. 금리 인하 국면 방어 자산으로 클라르만 포트 안정 축." }
    ],
    groupCharts: {
      sectors: [
        { name: "소비/IT", value: 30, color: "#3F5BFF" },
        { name: "헬스케어", value: 28, color: "#0EA5E9" },
        { name: "산업/철도", value: 22, color: "#10B981" },
        { name: "현금/기타", value: 20, color: "#94A3B8" }
      ]
    }
  },
  MTVA: {
    groupName: "글로벌 계량 가치 평균회귀 동맹",
    summary: "본 그룹의 거장(제레미 그랜섬 — 1명)은 역사적 버블 판독기입니다. GMO는 주기적인 평균회귀 이론을 신봉하며 전 세계 자산군과 주식 섹터를 정량적으로 비교 분석해, 버블 가능성이 높은 미국 성장주를 매도하고 철저히 외면받는 글로벌 가치주(특히 신흥국, 유럽)에 분산 정렬합니다. 현재 미국 증시 과열에 경고 신호를 지속 발신 중입니다.",
    averageCashRatio: 15.5,
    collectiveSentiment: "버블 대피 (역사적 평균으로의 회귀를 대비한 분산 분할 정렬)",
    overlappingHoldings: [
      { ticker: "EWG", name: "iShares MSCI Germany ETF", avgWeight: 5.4, change: "추가", description: "미국 증시 대비 극도로 저평가된 유럽 산업 엔진 비중을 채워 넣음." }
    ],
    groupCharts: {
      sectors: [
        { name: "해외 지주주", value: 36, color: "#3F5BFF" },
        { name: "유럽 가치소비", value: 28, color: "#0EA5E9" },
        { name: "에너지/소재", value: 18, color: "#10B981" },
        { name: "기타", value: 18, color: "#94A3B8" }
      ]
    }
  },
  MTGS: {
    groupName: "매크로 차트 추세 돌격 사단",
    summary: "본 그룹의 거장(폴 튜더 존스 — 1명)은 1987년 블랙먼데이를 완벽 예측한 거장으로, 모멘텀 지표와 200일 이동평균선 등 매크로 차트 추세를 등 뒤에 업고 주도 섹터를 집중 공략합니다. 튜더 인베스트먼트는 최근 원유/에너지 및 구리 등 전 세계 공급망 타이트에 수혜를 받는 원자재 인프라 주도주의 모멘텀을 추종하고 있습니다.",
    averageCashRatio: 6.5,
    collectiveSentiment: "추세선 풀베팅 (200일 이동평균 상향 터치 주도주 집중 매수)",
    overlappingHoldings: [
      { ticker: "FCX", name: "Freeport-McMoRan Inc.", avgWeight: 8.2, change: "+신규/추가", description: "글로벌 AI 전력망 인프라 구축의 핵심 원자재인 구리 가격 폭등 추세를 활용해 돌격 매집." }
    ],
    groupCharts: {
      sectors: [
        { name: "원자재/소재", value: 40, color: "#3F5BFF" },
        { name: "에너지 생산", value: 25, color: "#0EA5E9" },
        { name: "정보기술", value: 20, color: "#10B981" },
        { name: "기타", value: 15, color: "#94A3B8" }
      ]
    }
  },
  MTGA: {
    groupName: "시스템 메가 트렌드 다자배분 동맹",
    summary: "글로벌 메가트렌드(기후, 보건, 기술 패러다임)를 지원하는 안정적 인프라 대장주들을 분산 매수하여 안정적인 장기 성과를 지지하는 시스템형 투자자 그룹입니다. AI·에너지·인구·기후 등 글로벌 메가 트렌드에 분산 베팅하는 시스템 투자 스타일로, 단기 알파보다 장기 복리를 추구합니다.",
    averageCashRatio: 9.5,
    collectiveSentiment: "장기 배당 및 트렌드 헤지 (체계적인 글로벌 거시 인프라 매수)",
    overlappingHoldings: [
      { ticker: "WM", name: "Waste Management Inc.", avgWeight: 11.2, change: "유지", description: "어떤 경기 침체에도 쓰레기는 발생하며 꾸준히 현금 배당을 만드는 인프라." }
    ],
    groupCharts: {
      sectors: [
        { name: "소비/유통", value: 34, color: "#3F5BFF" },
        { name: "폐기물/인프라", value: 28, color: "#0EA5E9" },
        { name: "헬스케어/의료", value: 22, color: "#10B981" },
        { name: "기타", value: 16, color: "#94A3B8" }
      ]
    }
  }
};
