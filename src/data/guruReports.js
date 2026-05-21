// GURU-MBTI Individual 13F Reports & Fallback Essays
import { GURUS_LIST } from "./gurusList.js";

export const GURU_REPORTS = {
  "warren-buffett": {
    hasChanges: true,
    firm: "Berkshire Hathaway",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "AAPL",
      "name": "Apple Inc.",
      "weight": 21.99,
      "change": "축소 (-35%)",
      "reason": "포트폴리오 비중 과다 조절 및 현금 확보를 위한 일부 지분 매도"
    },
    premiumHoldings: [
      {
        "ticker": "AXP",
        "name": "American Express Co.",
        "weight": 17.43,
        "change": "유지",
        "reason": "강력한 프리미엄 브랜드 로열티와 카드 네트워크 결제 해자"
      },
      {
        "ticker": "KO",
        "name": "Coca-Cola Co.",
        "weight": 11.56,
        "change": "유지",
        "reason": "불황을 모르는 전 세계 소비자들의 높은 반복 구매율 및 인플레이션 헤지"
      },
      {
        "ticker": "BAC",
        "name": "Bank of America Corp.",
        "weight": 9.52,
        "change": "유지",
        "reason": "미국 금융 생태계의 중추이자 예금 금리 방어력 우수"
      },
      {
        "ticker": "CVX",
        "name": "Chevron Corp.",
        "weight": 6.64,
        "change": "축소 (-35%)",
        "reason": "전통 화석 원유 수요 정점 도달 가능성에 대비한 점진적 차익 실현"
      },
      {
        "ticker": "GOOGL",
        "name": "Alphabet Inc. Class A",
        "weight": 4.8,
        "change": "추가 (+204%)",
        "reason": "클라우드 성장 및 AI 검색 패권 대비 극단적 저평가 인지 후 대량 매집"
      },
      {
        "ticker": "DAL",
        "name": "Delta Air Lines Inc.",
        "weight": 1.01,
        "change": "신규",
        "reason": "미국 내 항공 수요 회복 및 여행 인프라의 과점적 지배력 신규 배팅"
      }
    ],
    sectorMix: [
      {
        "name": "금융/보험",
        "value": 38,
        "color": "#3F5BFF"
      },
      {
        "name": "IT 플랫폼",
        "value": 33,
        "color": "#0EA5E9"
      },
      {
        "name": "에너지/소재",
        "value": 16,
        "color": "#10B981"
      },
      {
        "name": "소비재/유통",
        "value": 13,
        "color": "#94A3B8"
      }
    ],
    trendData: [
      42,
      45,
      41,
      48,
      52,
      49,
      55,
      58,
      54,
      61,
      65,
      63
    ],
    bearCase: [
      "고령의 버핏-그레그 아벨 승계 리스크에 따른 향후 밸류 디스카운트 개연성",
      "에너지 비중 확대는 급변하는 중동 지정학 정세 및 유가 변동 리스크에 노출",
      "막대한 현금 잔고(1,800억 달러 이상)는 저성장 시기에 ROE 하락 요인으로 작용"
    ],
    actionPlan: [
      {
        "title": "국내 대형 금융지주(KB/신한/삼성화재) 모니터링",
        "detail": "버핏의 Chubb 매집처럼 밸류업 프로그램 수혜와 저PBR 매력이 겹치는 금융주 관심."
      },
      {
        "title": "포트폴리오 내 현금 비중 15% 수준 상향 검토",
        "detail": "거장이 역대급 현금을 쥐고 폭락을 기다리는 것처럼, 개인도 실탄을 확보해 둘 시기."
      },
      {
        "title": "애플 비중 과다 시 5% 내외 조절",
        "detail": "거장도 애플 비중을 소폭 덜어내며 테크 밸류에이션 부담을 낮추고 있음."
      }
    ],
  },

  "li-lu": {
    hasChanges: true,
    firm: "Himalaya Capital",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "GOOGL",
      "name": "Alphabet Inc. Class A",
      "weight": 22.85,
      "change": "유지",
      "reason": "구글의 독점적 검색 지위 및 클라우드 AI 서비스 기반 압도적 마진 보유"
    },
    premiumHoldings: [
      {
        "ticker": "GOOG",
        "name": "Alphabet Inc. Class C",
        "weight": 21.97,
        "change": "유지",
        "reason": "Class A와 함께 구글 전체 의결권 분리 보유로 노출도 극대화"
      },
      {
        "ticker": "PDD",
        "name": "PDD Holdings Inc. (ADR)",
        "weight": 14.71,
        "change": "유지",
        "reason": "중국 전자상거래 시장 2위 및 테무(Temu) 글로벌 확장 수혜"
      },
      {
        "ticker": "BRK.B",
        "name": "Berkshire Hathaway Class B",
        "weight": 13.44,
        "change": "유지",
        "reason": "찰리 멍거와의 교류에서 비롯된 버핏 비즈니스에 대한 절대적 신뢰"
      },
      {
        "ticker": "EWBC",
        "name": "East West Bancorp Inc.",
        "weight": 9.26,
        "change": "유지",
        "reason": "미-중 무역 브릿지 역할을 하는 독보적 아시아계 미국 상업은행"
      }
    ],
    sectorMix: [
      {
        "name": "IT/플랫폼",
        "value": 58,
        "color": "#3F5BFF"
      },
      {
        "name": "금융/지주",
        "value": 25,
        "color": "#0EA5E9"
      },
      {
        "name": "반도체/HW",
        "value": 12,
        "color": "#10B981"
      },
      {
        "name": "기타",
        "value": 5,
        "color": "#94A3B8"
      }
    ],
    trendData: [
      12,
      14,
      11,
      15,
      18,
      16,
      15,
      17,
      19,
      21,
      20,
      22
    ],
    bearCase: [
      "아시아와 중국 중심 지정학 무역 갈등 시, 포트폴리오 외적인 환율 손실 노출",
      "구글과 메타에 포트폴리오 절반 이상이 집중되어 있어 빅테크 반독점 규제 직격탄 위험",
      "기술 성장세 둔화 시, 고PBR 종목들의 밸류에이션 리레이팅 리스크 존재"
    ],
    actionPlan: [
      {
        "title": "구글/메타의 AI 상용화 수익 모델 점검",
        "detail": "광고 단가 회복과 클라우드 이익률을 보고 비로그인 매집 타이밍 설정."
      },
      {
        "title": "지정학 갈등 방어용 안전자산 일부 편성",
        "detail": "미-중 무역 분쟁 격화 시 리 루가 쥐고 있는 버핏 지주사(BRK) 형태의 방어 수단 확보."
      }
    ],
  },

  "mohnish-pabrai": {
    hasChanges: true,
    firm: "Pabrai Investment Funds",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "AMR",
      "name": "Alpha Metallurgical Coal",
      "weight": 42.1,
      "change": "유지/일부 축소",
      "reason": "제철용 원료탄 부문의 공급 부족 장기화 및 대규모 자사주 매입 수혜"
    },
    premiumHoldings: [
      {
        "ticker": "CEIX",
        "name": "Consol Energy Inc. (에너지)",
        "weight": 31.8,
        "change": "+5%",
        "reason": "석탄 수출 터미널 지배력과 FCF를 통한 압도적 주주 환원"
      },
      {
        "ticker": "MSFT",
        "name": "Microsoft Corp.",
        "weight": 12.5,
        "change": "유지",
        "reason": "포트폴리오의 안정판 역할을 수행하는 메가 밸류 기술주"
      }
    ],
    sectorMix: [
      {
        "name": "석탄/원자재",
        "value": 74,
        "color": "#3F5BFF"
      },
      {
        "name": "정보기술",
        "value": 13,
        "color": "#0EA5E9"
      },
      {
        "name": "현금/기타",
        "value": 13,
        "color": "#94A3B8"
      }
    ],
    trendData: [
      5,
      8,
      4,
      10,
      15,
      12,
      11,
      14,
      12,
      16,
      15,
      13
    ],
    bearCase: [
      "기후 변화 규제 강화 시 석탄 에너지 자산의 영구적 손상(Stranded Assets) 위험",
      "상위 2개 자원 종목 비중이 70%가 넘어 업황 붕괴 시 단기 계좌 폭락 우려",
      "주원료 탄가 변동에 따른 극도의 변동성 리스크 상존"
    ],
    actionPlan: [
      {
        "title": "전통 원자재 원재료 가격 흐름 모니터링",
        "detail": "탄소 배출권 규제 속에서도 실질 캐시플로우가 나오는 원자재 기업 발굴 기조 참고."
      },
      {
        "title": "한 바구니에 담기 전 헷지 수단 설정",
        "detail": "파브라이의 고농축 포트폴리오를 개인 투자자가 무작정 모방 시 발생하는 변동성을 막을 자산 배분 병행."
      }
    ],
  },

  "bill-ackman": {
    hasChanges: true,
    firm: "Pershing Square Capital",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.14",
    teaserTicker: {
      "ticker": "MSFT",
      "name": "Microsoft Corp.",
      "weight": 15.26,
      "change": "신규",
      "reason": "생성형 AI 패권과 클라우드 수익 가속화 판단 하에 565만 주 대량 신규 편입"
    },
    premiumHoldings: [
      {
        "ticker": "BN",
        "name": "Brookfield Corp.",
        "weight": 17.62,
        "change": "유지",
        "reason": "글로벌 대체 자산 운용 시장의 독보적 지배력과 복리 기계 구조"
      },
      {
        "ticker": "AMZN",
        "name": "Amazon.com Inc.",
        "weight": 17.39,
        "change": "추가 (+19%)",
        "reason": "리테일 수익성 회복 및 AWS 클라우드 성장 모멘텀 신뢰로 비중 확대"
      },
      {
        "ticker": "UBER",
        "name": "Uber Technologies Inc.",
        "weight": 15.71,
        "change": "유지",
        "reason": "글로벌 모빌리티 및 물류 배달 시장 장악력을 통한 현금흐름 급증"
      },
      {
        "ticker": "QSR",
        "name": "Restaurant Brands International",
        "weight": 12.20,
        "change": "유지",
        "reason": "버거킹, 팀홀튼 등 메가 프랜차이즈 로열티 기반 강력한 에셋라이트 모델"
      },
      {
        "ticker": "META",
        "name": "Meta Platforms Inc.",
        "weight": 11.10,
        "change": "유지",
        "reason": "인스타그램 및 페이스북의 광고 이익 안정화와 Llama AI 해자 확보"
      },
      {
        "ticker": "HHH",
        "name": "Howard Hughes Holdings Inc.",
        "weight": 8.70,
        "change": "유지",
        "reason": "미국 내 주요 신도시 마스터플랜 개발 권한 보유에 따른 토지 자산 해자"
      }
    ],
    sectorMix: [
      {
        "name": "소비재/유통",
        "value": 42,
        "color": "#3F5BFF"
      },
      {
        "name": "IT/플랫폼",
        "value": 38,
        "color": "#0EA5E9"
      },
      {
        "name": "금융/지주",
        "value": 20,
        "color": "#10B981"
      }
    ],
    trendData: [
      8,
      12,
      9,
      15,
      14,
      11,
      16,
      18,
      15,
      13,
      14,
      12
    ],
    bearCase: [
      "초집중 포트폴리오(단 7개 종목이 98% 차지)로 개별 기업 악재 발생 시 치명타",
      "금리 장기 인상 국면 지속 시 레버리지를 활용한 대체자산 운용사(Brookfield)의 마진 압박",
      "식음료 프랜차이즈 소비 둔화 리스크"
    ],
    actionPlan: [
      {
        "title": "프랜차이즈 및 에셋라이트 모델 중심 스크리닝",
        "detail": "무거운 제조 설비 없이 수수료와 브랜드 파워로 돈을 벌어들이는 비즈니스 검토."
      }
    ],
  },

  "cathie-wood": {
    hasChanges: true,
    firm: "ARK Investment",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.12",
    teaserTicker: {
      "ticker": "TSLA",
      "name": "Tesla Inc.",
      "weight": 10.40,
      "change": "축소 (-10%)",
      "reason": "장기 FSD 및 로보틱스 전망은 낙관하나 포트폴리오 리스크 조절을 위한 부분 매도"
    },
    premiumHoldings: [
      {
        "ticker": "AMD",
        "name": "Advanced Micro Devices Inc.",
        "weight": 9.50,
        "change": "추가 (+15%)",
        "reason": "AI 연산용 GPU 칩 다각화 및 데이터센터 칩 점유율 상승 모멘텀 추종"
      },
      {
        "ticker": "CRSP",
        "name": "CRISPR Therapeutics AG",
        "weight": 8.20,
        "change": "추가 (+8%)",
        "reason": "유전자 편집 기반 혁신 신약 상용화 및 플랫폼 가치 중장기 확보"
      },
      {
        "ticker": "SHOP",
        "name": "Shopify Inc.",
        "weight": 7.80,
        "change": "유지",
        "reason": "글로벌 상거래 솔루션 시장 장악 및 마진 확대 모멘텀 견고"
      },
      {
        "ticker": "PLTR",
        "name": "Palantir Technologies Inc.",
        "weight": 7.20,
        "change": "축소 (-5%)",
        "reason": "최근 주가 급등에 따른 밸류에이션 리레이팅 리스크 방어를 위한 일부 수익 실현"
      }
    ],
    sectorMix: [
      {
        "name": "모빌리티/로봇",
        "value": 34,
        "color": "#3F5BFF"
      },
      {
        "name": "가상자산/핀테크",
        "value": 26,
        "color": "#0EA5E9"
      },
      {
        "name": "AI/빅데이터",
        "value": 24,
        "color": "#10B981"
      },
      {
        "name": "생명공학/기타",
        "value": 16,
        "color": "#94A3B8"
      }
    ],
    trendData: [
      2,
      3,
      2,
      4,
      3,
      2,
      3,
      4,
      2,
      3,
      2,
      3
    ],
    bearCase: [
      "고금리가 고착화될 경우 미래 가치 할인율 상승으로 성장주 전반적 밸류 타격",
      "적자 혁신 기업들의 생존 연장 및 유상증자 발행에 따른 주가 희석 위험",
      "모멘텀 소멸 시 급격한 투자금 유출로 인한 헐값 투매(Fire Sale) 유발 위험"
    ],
    actionPlan: [
      {
        "title": "AI/로보틱스 트렌드 유망 개별주 분할 매수",
        "detail": "변동성이 극심하므로 절대 한 번에 사지 말고, 200일 이평선 지지 시 분할 접근."
      },
      {
        "title": "계좌 내 암호화폐 팩터 노출도 조정",
        "detail": "가상자산 모멘텀이 터질 때 관련 테마주 비중을 조절하여 계좌 수익 극대화."
      }
    ],
  },

  "ray-dalio": {
    hasChanges: true,
    firm: "Bridgewater Associates",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "SPY",
      "name": "SPDR S&P 500 ETF Trust",
      "weight": 8.2,
      "change": "유지",
      "reason": "올웨더 포트폴리오 핵심 미국 주식 팩터 노출도 유지를 위한 최대 보유 포지션"
    },
    premiumHoldings: [
      {
        "ticker": "IVV",
        "name": "iShares Core S&P 500 ETF",
        "weight": 6.9,
        "change": "유지",
        "reason": "SPY와 함께 양대 S&P 500 인덱스 ETF 이중 보유로 시장 팩터 극대화"
      },
      {
        "ticker": "AMZN",
        "name": "Amazon.com Inc.",
        "weight": 5.4,
        "change": "추가 (+12%)",
        "reason": "AWS 클라우드 이익 회복 및 AI 인프라 수요 확장에 따른 성장 팩터 증대"
      },
      {
        "ticker": "NVDA",
        "name": "NVIDIA Corp.",
        "weight": 5.1,
        "change": "추가 (+8%)",
        "reason": "AI 연산 인프라의 절대 독점자로서 글로벌 데이터센터 투자 수혜 최대화"
      },
      {
        "ticker": "GOOGL",
        "name": "Alphabet Inc.",
        "weight": 4.6,
        "change": "유지",
        "reason": "검색 광고 과점 및 클라우드 AI 사업 안정성 기반 균형 배분 유지"
      }
    ],
    sectorMix: [
      {
        "name": "대형 지수주/ETF",
        "value": 32,
        "color": "#3F5BFF"
      },
      {
        "name": "정보기술",
        "value": 28,
        "color": "#0EA5E9"
      },
      {
        "name": "필수소비재",
        "value": 22,
        "color": "#10B981"
      },
      {
        "name": "원자재/기타",
        "value": 18,
        "color": "#94A3B8"
      }
    ],
    trendData: [
      15,
      18,
      16,
      17,
      19,
      21,
      20,
      22,
      19,
      18,
      17,
      18
    ],
    bearCase: [
      "디플레이션 혹은 초고금리 유지로 채권과 주식이 동반 급락하는 시기 방어력 제한",
      "글로벌 거시 분석 예측 오류 시 리밸런싱에 따른 누적 거래 비용 수반",
      "993개 광범위한 포지션 특성상 불장(Bull Market) 국면에서 집중형 대비 아웃퍼폼 제한"
    ],
    actionPlan: [
      {
        "title": "실물 자산(금, 인프라) 포트폴리오 5~10% 상시 배치",
        "detail": "인플레이션 충격을 분산하기 위해 포트 내 금 ETF(GLD)를 적정 수준 추가 편입 검토."
      },
      {
        "title": "주식 자산군 외 채권/현금 균형 맞추기",
        "detail": "연준 금리 변곡점에 따라 장기 채권 비중을 조절하는 매크로 헷징 연습."
      }
    ],
  },

  "howard-marks": {
    hasChanges: true,
    firm: "Oaktree Capital Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.14",
    teaserTicker: {
      "ticker": "TRGP",
      "name": "Targa Resources (에너지 인프라)",
      "weight": 12.4,
      "change": "유지",
      "reason": "미국 내 천연가스 생산 증가에 수혜를 받는 튼튼한 현금 파이프라인 인프라 자산"
    },
    premiumHoldings: [
      {
        "ticker": "VALE",
        "name": "Vale SA (브라질 철광석)",
        "weight": 9.8,
        "change": "+15%",
        "reason": "철광석 사이클 바닥에서 공급망 긴축 및 높은 배당 수익률 포착 매집"
      },
      {
        "ticker": "PCG",
        "name": "PG&E Corporation (유틸리티)",
        "weight": 8.5,
        "change": "유지",
        "reason": "구조조정 마무리 국면에서 실적 리레이팅을 노리는 독점 전력 인프라"
      }
    ],
    sectorMix: [
      {
        "name": "에너지/유틸리티",
        "value": 45,
        "color": "#3F5BFF"
      },
      {
        "name": "소재/광산",
        "value": 28,
        "color": "#0EA5E9"
      },
      {
        "name": "금융/부실채권",
        "value": 15,
        "color": "#10B981"
      },
      {
        "name": "기타",
        "value": 12,
        "color": "#94A3B8"
      }
    ],
    trendData: [
      20,
      22,
      21,
      24,
      26,
      23,
      28,
      25,
      24,
      22,
      23,
      21
    ],
    bearCase: [
      "원자재 철광석 원재료 단가 급락 시 지분 가치 단기 훼손 리스크",
      "부실채권 시장의 한계 차입 거래 금리 상승 장기화 시 디폴트율 예상 밖 초과 위험",
      "경기 침체가 시스템 위기로 갈 시 유동성 제약 가능성"
    ],
    actionPlan: [
      {
        "title": "경기 순환계 밸류에이션 바닥 종목 발굴",
        "detail": "모두가 외면하는 인플레이션 원자재/지연 인프라 주식을 싸게 모으는 역발상 전략 도입."
      }
    ],
  },

  "stanley-druckenmiller": {
    hasChanges: true,
    firm: "Duquesne Family Office",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "NTRA",
      "name": "Natera Inc. (바이오)",
      "weight": 14.8,
      "change": "유지",
      "reason": "유전자 검사 진단 시장 리더로서 급격한 매출 고성장 및 해자 증명"
    },
    premiumHoldings: [
      {
        "ticker": "INSM",
        "name": "Insmed Inc. (바이오)",
        "weight": 11.2,
        "change": "+8%",
        "reason": "희귀 폐질환 신약 상용화 속도 및 치료제 부문 독점 지배력 확보"
      },
      {
        "ticker": "TSM",
        "name": "Taiwan Semiconductor (반도체)",
        "weight": 9.5,
        "change": "유지",
        "reason": "글로벌 AI 칩 생산 독점 및 파운드리 부문의 견고한 단가 인상력"
      },
      {
        "ticker": "AVGO",
        "name": "Broadcom Inc. (반도체/HW)",
        "weight": 6.2,
        "change": "+신규",
        "reason": "커스텀 ASIC AI 칩 시장 지배력 및 VM웨어 합병 시너지 본격화"
      }
    ],
    sectorMix: [
      {
        "name": "바이오/헬스케어",
        "value": 42,
        "color": "#3F5BFF"
      },
      {
        "name": "반도체/HW",
        "value": 33,
        "color": "#0EA5E9"
      },
      {
        "name": "소프트웨어/기타",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      15,
      12,
      10,
      8,
      9,
      11,
      14,
      13,
      15,
      16,
      12,
      11
    ],
    bearCase: [
      "바이오 단일 종목 및 섹터 노출 비중 과다에 따른 연구 결과 실패 리스크",
      "반도체 단기 공급 과잉 우려 시 고성장 테크 지분 변동성 증폭 가능성"
    ],
    actionPlan: [
      {
        "title": "바이오 테마와 반도체 하드웨어의 균형 배치",
        "detail": "바이오 헬스케어의 성장성과 AI 반도체의 인프라 수익 수혜를 동시에 확보하는 전략."
      }
    ],
  },

  "chase-coleman": {
    hasChanges: true,
    firm: "Tiger Global Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "GOOGL",
      "name": "Alphabet Inc. (IT 테크)",
      "weight": 18.2,
      "change": "유지",
      "reason": "검색과 클라우드 부문의 견고한 캐시플로우 및 AI 경쟁력 강화"
    },
    premiumHoldings: [
      {
        "ticker": "NVDA",
        "name": "NVIDIA Corp. (반도체/AI)",
        "weight": 14.5,
        "change": "유지",
        "reason": "GPU 독점 구도 고착화 및 블랙웰 아키텍처 출시 수혜"
      },
      {
        "ticker": "MELI",
        "name": "MercadoLibre (라틴 이커머스)",
        "weight": 6.8,
        "change": "+신규",
        "reason": "중남미 핀테크 및 이커머스 시장 지배력 급증에 따른 고성장 포착"
      },
      {
        "ticker": "MSFT",
        "name": "Microsoft Corp. (소프트웨어)",
        "weight": 8.2,
        "change": "-12%",
        "reason": "장기 투자 성과에 따른 포트폴리오 리밸런싱 목적의 소폭 차익 실현"
      }
    ],
    sectorMix: [
      {
        "name": "인터넷/이커머스",
        "value": 38,
        "color": "#3F5BFF"
      },
      {
        "name": "정보기술/반도체",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "기타 테크",
        "value": 27,
        "color": "#10B981"
      }
    ],
    trendData: [
      5,
      4,
      3,
      2,
      4,
      3,
      2,
      3,
      4,
      3,
      2,
      3
    ],
    bearCase: [
      "테크 쏠림 현상 극대화로 기술주 밸류에이션 하락 조정 시 큰 변동성 노출",
      "이커머스 부문의 지정학적 경쟁사 출현 및 마진 훼손 리스크"
    ],
    actionPlan: [
      {
        "title": "빅테크 및 이커머스 복합 모멘텀 편입",
        "detail": "빅테크와 개발도상국 고성장 이커머스 플랫폼의 조화로운 모멘텀 포지셔닝."
      }
    ],
  },

  "seth-klarman": {
    hasChanges: true,
    firm: "Baupost Group",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.14",
    teaserTicker: {
      "ticker": "AMZN",
      "name": "Amazon.com Inc.",
      "weight": 12.70,
      "change": "추가",
      "reason": "AWS 클라우드 마진 고속화 및 리테일 물류 효율화 기반 강력한 FCF 매력 — 포트폴리오 51.2억 달러 중 최대 비중"
    },
    premiumHoldings: [
      {
        "ticker": "QSR",
        "name": "Restaurant Brands International",
        "weight": 11.67,
        "change": "유지",
        "reason": "안정적인 현금 흐름 창출력과 버거킹/팀홀튼 브랜드 가치 안전마진"
      },
      {
        "ticker": "WCC",
        "name": "WESCO International Inc.",
        "weight": 7.69,
        "change": "추가",
        "reason": "전기 및 산업 자재 유통 부문 독점 및 밸류에이션 저평가 포착"
      },
      {
        "ticker": "UNP",
        "name": "Union Pacific Corp.",
        "weight": 7.31,
        "change": "축소",
        "reason": "철도 인프라 장기 해자 보유 중 일부 차익 실현 — 비중 소폭 축소"
      },
      {
        "ticker": "ELV",
        "name": "Elevance Health Inc.",
        "weight": 7.30,
        "change": "유지",
        "reason": "미국 민영 건강보험 과점 1위 기업의 높은 배당 안정성 및 의료비 전가 능력"
      },
      {
        "ticker": "AON",
        "name": "Aon PLC",
        "weight": 5.40,
        "change": "신규",
        "reason": "보험 중개 및 리스크 자문 시장 과점 구도로 경기 침체 방어 최적화"
      }
    ],
    sectorMix: [
      {
        "name": "소비재/유통",
        "value": 38,
        "color": "#3F5BFF"
      },
      {
        "name": "IT/클라우드",
        "value": 25,
        "color": "#0EA5E9"
      },
      {
        "name": "금융/보험",
        "value": 22,
        "color": "#10B981"
      },
      {
        "name": "원자재/기타",
        "value": 15,
        "color": "#94A3B8"
      }
    ],
    trendData: [
      25,
      28,
      26,
      29,
      31,
      28,
      30,
      27,
      26,
      29,
      33,
      31
    ],
    bearCase: [
      "유통 및 소비재 비중 과다로 경기 소비 둔화 시 실적 회복 지연 우려",
      "중소형 특수 유통업체들의 매크로 부진 여파 누적 위험"
    ],
    actionPlan: [
      {
        "title": "현금 흐름 독점력 위주의 포트폴리오 구성",
        "detail": "안정적인 FCF(잉여현금흐름)가 검증된 필수 서비스 및 유통 기업 모니터링."
      }
    ],
  },

  "david-einhorn": {
    hasChanges: true,
    firm: "Greenlight Capital",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "GRBK",
      "name": "Green Brick Partners (주택건설)",
      "weight": 19.1,
      "change": "유지",
      "reason": "미국 남부 중심 주택 공급 부족 지속 및 높은 ROE 기반 절대 가치주"
    },
    premiumHoldings: [
      {
        "ticker": "FLR",
        "name": "Fluor Corp. (엔지니어링)",
        "weight": 6.9,
        "change": "유지",
        "reason": "인프라 및 에너지 플랜트 수주 잔고 사상 최대 기록에 따른 가치 재평가"
      },
      {
        "ticker": "CNR",
        "name": "Core Natural Resources (원자재)",
        "weight": 6.1,
        "change": "유지",
        "reason": "천연자원 채굴 및 에너지 가격 지지세 기반 강력한 주주환원 밸류"
      },
      {
        "ticker": "CROX",
        "name": "Crocs Inc. (신발/소비재)",
        "weight": 3.8,
        "change": "+신규",
        "reason": "글로벌 브랜드 인지도 유지 대비 지나친 저PBR/저PER 구간으로 판단 매집"
      }
    ],
    sectorMix: [
      {
        "name": "부동산/주택건설",
        "value": 34,
        "color": "#3F5BFF"
      },
      {
        "name": "에너지/자원",
        "value": 28,
        "color": "#0EA5E9"
      },
      {
        "name": "소비재/기타",
        "value": 38,
        "color": "#10B981"
      }
    ],
    trendData: [
      12,
      14,
      15,
      11,
      13,
      12,
      14,
      16,
      13,
      11,
      12,
      15
    ],
    bearCase: [
      "미국 금리 고공행진 장기화 시 주택 분양 경기 급랭 및 부동산 타격 리스크",
      "원자재 석탄/에너지 가격 급변에 따른 포트폴리오 수익률 변동성 노출"
    ],
    actionPlan: [
      {
        "title": "저PER/저PBR 주택건설 및 특수 소비재 편입",
        "detail": "매우 저평가되었으나 실적이 견고한 부동산 인프라 및 신발 패션 가치주 추적."
      }
    ],
  },

  "daniel-loeb": {
    hasChanges: true,
    firm: "Third Point",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "AMZN",
      "name": "Amazon.com Inc. (IT 테크)",
      "weight": 15.4,
      "change": "유지",
      "reason": "AWS 클라우드 실적 개선과 이커머스 AI 물류 효율화 기반 주도주 판단"
    },
    premiumHoldings: [
      {
        "ticker": "TDS",
        "name": "Telephone & Data Systems (통신)",
        "weight": 8.5,
        "change": "유지",
        "reason": "자산 매각 및 구조조정을 통한 주주 가치 극대화 모멘텀 타깃"
      },
      {
        "ticker": "GLD",
        "name": "SPDR Gold Shares (금 ETF)",
        "weight": 5.2,
        "change": "+신규",
        "reason": "글로벌 지정학 갈등 방어 및 화폐 가치 하락 헤지용 금 자산 편입"
      },
      {
        "ticker": "NVDA",
        "name": "NVIDIA Corp. (반도체)",
        "weight": 4.8,
        "change": "-25%",
        "reason": "반도체 비중 조절 및 자산 배분 조정을 위한 일부 이익 실현"
      }
    ],
    sectorMix: [
      {
        "name": "IT/소프트웨어",
        "value": 42,
        "color": "#3F5BFF"
      },
      {
        "name": "통신/인프라",
        "value": 33,
        "color": "#0EA5E9"
      },
      {
        "name": "원자재/금",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      18,
      16,
      14,
      15,
      17,
      19,
      21,
      20,
      18,
      16,
      15,
      14
    ],
    bearCase: [
      "행동주의 지배구조 개선 협상 지연 시 구조조정 기업 주가 변동성 리스크",
      "금 및 원자재 팩터 변동에 따른 단기 포트폴리오 수익률 왜곡 우려"
    ],
    actionPlan: [
      {
        "title": "빅테크 및 통신 구조조정 테마 연동",
        "detail": "빅테크와 특수 지배구조 개선 모멘텀 및 원자재 헤지 자산의 융합 포지션."
      }
    ],
  },

  "joel-greenblatt": {
    hasChanges: true,
    firm: "Gotham Asset Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "SPY",
      "name": "SPDR S&P 500 ETF Trust",
      "weight": 12.2,
      "change": "유지",
      "reason": "미국 대형주 전반에 걸친 팩터 노출도 지수 조정을 위한 기본 바스켓"
    },
    premiumHoldings: [
      {
        "ticker": "AAPL",
        "name": "Apple Inc. (IT 테크)",
        "weight": 6.4,
        "change": "+4%",
        "reason": "자본수익률(ROC) 및 이익수익률 만족에 따른 마법공식 자동 증대"
      },
      {
        "ticker": "NVDA",
        "name": "NVIDIA Corp. (반도체)",
        "weight": 5.8,
        "change": "유지",
        "reason": "압도적인 현금 흐름 및 자본수익률 지표를 보유한 대표 성장 우량주"
      }
    ],
    sectorMix: [
      {
        "name": "대형 지수주",
        "value": 35,
        "color": "#3F5BFF"
      },
      {
        "name": "정보기술",
        "value": 30,
        "color": "#0EA5E9"
      },
      {
        "name": "금융/소비재",
        "value": 35,
        "color": "#10B981"
      }
    ],
    trendData: [
      10,
      12,
      11,
      13,
      15,
      14,
      16,
      15,
      14,
      13,
      12,
      14
    ],
    bearCase: [
      "1,000개 이상 다수 종목 분산으로 인한 강세장 아웃퍼폼 둔화 가능성",
      "계량 공식 모델 기반 리밸런싱으로 인한 개별 종목 매크로 대응 한계"
    ],
    actionPlan: [
      {
        "title": "고ROC/고이익수익률 마법공식 적용",
        "detail": "기초 자본효율성이 극대화되고 밸류에이션 부담이 적은 우량 기업 바스켓 모니터링."
      }
    ],
  },

  "ken-fisher": {
    hasChanges: true,
    firm: "Fisher Investments",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.05",
    teaserTicker: {
      "ticker": "NVDA",
      "name": "NVIDIA Corp. (반도체/AI)",
      "weight": 6.5,
      "change": "+8%",
      "reason": "글로벌 데이터센터 인프라 지배력 및 주가수익성장의 지속 가능성"
    },
    premiumHoldings: [
      {
        "ticker": "AAPL",
        "name": "Apple Inc. (IT 테크)",
        "weight": 5.8,
        "change": "유지",
        "reason": "전 세계 디바이스 생태계 패권 및 신규 AI 기능 출시 대기 수요 확보"
      },
      {
        "ticker": "MSFT",
        "name": "Microsoft Corp. (소프트웨어)",
        "weight": 5.2,
        "change": "유지",
        "reason": "오피스 코파일럿 도입 가속 및 클라우드(Azure) 부문 안정적 캐시플로우"
      }
    ],
    sectorMix: [
      {
        "name": "정보기술",
        "value": 45,
        "color": "#3F5BFF"
      },
      {
        "name": "금융/서비스",
        "value": 30,
        "color": "#0EA5E9"
      },
      {
        "name": "헬스케어/기타",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      12,
      13,
      11,
      14,
      15,
      13,
      16,
      17,
      15,
      14,
      15,
      16
    ],
    bearCase: [
      "지나친 다국적 메가캡 성장주 쏠림으로 거시 경제 금리 충격 시 조정 가능성",
      "1,000개 이상 광범위 분산에 따른 지수 추종 성격의 이익률 수렴화"
    ],
    actionPlan: [
      {
        "title": "글로벌 메가캡 우량 성장주 집중 배분",
        "detail": "시가총액 최상위권의 독점 테크 플랫폼 및 반도체 벨류체인 중심의 포지셔닝."
      }
    ],
  },

  "george-soros": {
    hasChanges: true,
    firm: "Soros Fund Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "AMZN",
      "name": "Amazon.com Inc. (이커머스/클라우드)",
      "weight": 8.8,
      "change": "유지",
      "reason": "라스트마일 물류 시너지 본격화 및 클라우드 AI 수혜 지속 판단"
    },
    premiumHoldings: [
      {
        "ticker": "EA",
        "name": "Electronic Arts (게임/소프트웨어)",
        "weight": 7.2,
        "change": "+12%",
        "reason": "대형 게임 IP 발매 모멘텀 및 밸류에이션 디스카운트 해제 기대"
      },
      {
        "ticker": "NVDA",
        "name": "NVIDIA Corp. (반도체)",
        "weight": 6.5,
        "change": "유지",
        "reason": "AI 인프라 투자 사이클의 초입 수혜국 판단 및 팩터 노출 수성"
      }
    ],
    sectorMix: [
      {
        "name": "IT/소프트웨어",
        "value": 48,
        "color": "#3F5BFF"
      },
      {
        "name": "게임/콘텐츠",
        "value": 28,
        "color": "#0EA5E9"
      },
      {
        "name": "기타 융합자산",
        "value": 24,
        "color": "#10B981"
      }
    ],
    trendData: [
      15,
      18,
      16,
      17,
      19,
      21,
      20,
      22,
      19,
      18,
      17,
      18
    ],
    bearCase: [
      "레버리지 및 해외 선물/파생상품 헷지 변동에 의한 장기 계좌 왜곡 리스크",
      "테크 및 엔터테인먼트의 신규 IP 및 기술 출시 지연 시 단기 실적 압박"
    ],
    actionPlan: [
      {
        "title": "IT 성장주 및 엔터테인먼트 모멘텀 조화",
        "detail": "빅테크 클라우드 성장 동력과 대형 엔터테인먼트 IP 포커스 테마의 융합 전략."
      }
    ],
  },

  "chuck-akre": {
    hasChanges: true,
    firm: "Akre Capital Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "MA",
      "name": "Mastercard Incorporated",
      "weight": 18.5,
      "change": "유지",
      "reason": "글로벌 디지털 결제 패권 및 독과점 수수료 기반 높은 ROE와 복리 지속성"
    },
    premiumHoldings: [
      {
        "ticker": "BN",
        "name": "Brookfield Corp.",
        "weight": 15.2,
        "change": "유지",
        "reason": "대체 자산 운용 시장의 독보적 지배력 및 장기 출자금 복리 효과 극대화"
      },
      {
        "ticker": "KKR",
        "name": "KKR & Co. Inc.",
        "weight": 14.8,
        "change": "+5%",
        "reason": "사모펀드 수수료 매출 고성장 및 신규 인프라 펀드 자금 모집 가속화"
      },
      {
        "ticker": "MCO",
        "name": "Moody's Corp.",
        "weight": 12.1,
        "change": "유지",
        "reason": "신용 평가 시장의 절대 독점 지위 및 글로벌 채권 발행 재개 수혜"
      }
    ],
    sectorMix: [
      {
        "name": "금융/결제망",
        "value": 48,
        "color": "#3F5BFF"
      },
      {
        "name": "대체자산운용",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "정보 서비스",
        "value": 17,
        "color": "#10B981"
      }
    ],
    trendData: [
      18,
      19,
      17,
      18,
      20,
      21,
      19,
      18,
      17,
      18,
      20,
      19
    ],
    bearCase: [
      "디지털 결제망에 대한 규제 당국의 반독점 수수료 인하 압박 리스크",
      "대체 자산 시장의 상업용 부동산 등 단기 유동성 동결 우려"
    ],
    actionPlan: [
      {
        "title": "고비율 복리 재투자 우량주 발굴",
        "detail": "사업 마진이 높고 잉여 현금을 비즈니스 성장에 지속적으로 재투자할 수 있는 3대 축 모델 검토."
      }
    ],
  },

  "terry-smith": {
    hasChanges: true,
    firm: "Fundsmith",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "MAR",
      "name": "Marriott International",
      "weight": 9.8,
      "change": "유지",
      "reason": "글로벌 여행 수요 정상화 및 자산 경량화(Asset-light) 프랜차이즈 모델의 극단적 고마진"
    },
    premiumHoldings: [
      {
        "ticker": "SYK",
        "name": "Stryker Corp.",
        "weight": 8.5,
        "change": "유지",
        "reason": "정형외과 및 의료 장비 시장의 인구 고령화 수혜 독점 기업"
      },
      {
        "ticker": "WAT",
        "name": "Waters Corp.",
        "weight": 8.2,
        "change": "유지",
        "reason": "제약 및 바이오 분석용 액체 크로마토그래피 정밀 분석 장비 시장 과점"
      },
      {
        "ticker": "V",
        "name": "Visa Inc.",
        "weight": 7.9,
        "change": "유지",
        "reason": "매출 성장과 연동되어 추가 비용 없이 영업 이익률이 상승하는 확장력"
      }
    ],
    sectorMix: [
      {
        "name": "의료/생명과학",
        "value": 42,
        "color": "#3F5BFF"
      },
      {
        "name": "소비/여행서비스",
        "value": 33,
        "color": "#0EA5E9"
      },
      {
        "name": "정보기술/결제",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      8,
      9,
      8,
      9,
      10,
      11,
      10,
      9,
      8,
      9,
      10,
      11
    ],
    bearCase: [
      "제약 연구 개발 예산 삭감 시 바이오 정밀 분석 기기 단기 판매 둔화 리스크",
      "소비 심리 위축에 따른 럭셔리 및 글로벌 호텔 체인 예약률 하락 우려"
    ],
    actionPlan: [
      {
        "title": "자산 경량화 독점 비즈니스 엄선",
        "detail": "설비 투자 비용(CapEx) 대비 매우 높은 무형 자산 브랜드력과 전환 비용을 보유한 주식 선별."
      }
    ],
  },

  "christopher-hohn": {
    hasChanges: true,
    firm: "TCI Fund Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "GE",
      "name": "GE Aerospace",
      "weight": 29.85,
      "change": "유지",
      "reason": "글로벌 민항기 엔진 인도량 및 애프터마켓 유지보수(MRO) 장기 독점 수주 잔고 — 포트폴리오 총액 451억 달러의 핵심"
    },
    premiumHoldings: [
      {
        "ticker": "V",
        "name": "Visa Inc.",
        "weight": 20.39,
        "change": "추가",
        "reason": "전 세계 신용 결제 네트워크 망의 수수료 비즈니스 및 인프라 과점 — 이번 분기 비중 확대"
      },
      {
        "ticker": "MCO",
        "name": "Moody's Corp.",
        "weight": 13.84,
        "change": "추가",
        "reason": "기업 신용 등급 평가 시장의 강력한 진입 장벽 및 안정적 현금 창출력"
      },
      {
        "ticker": "SPGI",
        "name": "S&P Global Inc.",
        "weight": 13.22,
        "change": "추가",
        "reason": "신용 평가와 더불어 인덱스 데이터 시장 지배력 기반의 초고마진 독점 서비스"
      },
      {
        "ticker": "CP",
        "name": "Canadian Pacific Kansas City",
        "weight": 8.10,
        "change": "축소 (-일부)",
        "reason": "북미 유일의 멕시코~캐나다 관통 철도 인프라 과점 — 관세 갈등에도 불구 장기 보유 유지"
      }
    ],
    sectorMix: [
      {
        "name": "항공/인프라",
        "value": 35,
        "color": "#3F5BFF"
      },
      {
        "name": "금융 서비스/결제",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "정보/신용평가",
        "value": 30,
        "color": "#10B981"
      }
    ],
    trendData: [
      28,
      30,
      29,
      31,
      33,
      30,
      32,
      29,
      28,
      30,
      31,
      33
    ],
    bearCase: [
      "항공기 기체 제작 지연에 따른 엔진 인도 속도 둔화 및 공급망 차질 리스크",
      "글로벌 금리 고공 행진 장기화로 인한 회사채 발행 위축 및 신용 평가 수요 둔화"
    ],
    actionPlan: [
      {
        "title": "진입 장벽이 극단적인 1등 과점 기업 압축",
        "detail": "대체 불가능한 독점적 비즈니스 모델을 가진 10개 내외의 대형주에 초집중 투자 장기 보유."
      }
    ],
  },

  "nelson-peltz": {
    hasChanges: true,
    firm: "Trian Fund Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "JHG",
      "name": "Janus Henderson Group plc",
      "weight": 42.4,
      "change": "유지",
      "reason": "글로벌 자산운용사 경영 효율화 행동주의 개입으로 운용규모(AUM) 및 비용 구조 개선 추진 중"
    },
    premiumHoldings: [
      {
        "ticker": "GE",
        "name": "GE Aerospace",
        "weight": 29.6,
        "change": "추가",
        "reason": "분할 후 항공 부문의 가치 극대화 및 비용 절감 시너지 — 이번 분기 비중 확대"
      },
      {
        "ticker": "SOLV",
        "name": "Solventum Corporation",
        "weight": 13.9,
        "change": "축소",
        "reason": "3M 의료 분사 기업의 R&D 투자 및 비용 구조 개선 촉진 행동주의 개입 — 일부 수익 실현"
      },
      {
        "ticker": "FERG",
        "name": "Ferguson Plc",
        "weight": 6.6,
        "change": "유지",
        "reason": "미국 배관·난방·인프라 유통 1위 기업의 장기 독점 구조 보유"
      },
      {
        "ticker": "WEN",
        "name": "The Wendy's Co",
        "weight": 5.5,
        "change": "추가",
        "reason": "프랜차이즈 로열티 기반 에셋라이트 모델의 수익성 강화 및 디지털 전환 가속화"
      }
    ],
    sectorMix: [
      {
        "name": "금융/자산운용",
        "value": 45,
        "color": "#3F5BFF"
      },
      {
        "name": "항공/제조업",
        "value": 30,
        "color": "#0EA5E9"
      },
      {
        "name": "소비/유통",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      14,
      15,
      13,
      16,
      17,
      15,
      14,
      16,
      15,
      14,
      13,
      15
    ],
    bearCase: [
      "행동주의 프록시 파이트(의결권 대결) 실패 시 경영 쇄신 동력 상실 및 주가 하락",
      "전통 미디어 미디어 생태계 변화 속도 대비 비용 감축 지연 리스크"
    ],
    actionPlan: [
      {
        "title": "브랜드 대비 저평가된 공룡 기업 공략",
        "detail": "가치가 내재되어 있으나 경영 부실로 소외된 대기업 지분을 인수해 구조 개혁을 촉발하는 전략."
      }
    ],
  },

  "prem-watsa": {
    hasChanges: true,
    firm: "Fairfax Financial Holdings",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "BABA",
      "name": "Alibaba Group Holding",
      "weight": 15.6,
      "change": "+8%",
      "reason": "극도로 저평가된 밸류에이션 및 강력한 자사주 매입에 힘입은 안전마진 확보"
    },
    premiumHoldings: [
      {
        "ticker": "BAC",
        "name": "Bank of America",
        "weight": 12.4,
        "change": "유지",
        "reason": "금리 상승기 순이자마진 방어 및 대형 상업 은행의 수신 기반 견고함"
      },
      {
        "ticker": "MU",
        "name": "Micron Technology",
        "weight": 9.8,
        "change": "유지",
        "reason": "HBM 메모리 반도체 공급 부족 및 사이클 변곡점에서의 마진 고속 개선"
      }
    ],
    sectorMix: [
      {
        "name": "글로벌 인터넷/IT",
        "value": 42,
        "color": "#3F5BFF"
      },
      {
        "name": "금융/은행",
        "value": 38,
        "color": "#0EA5E9"
      },
      {
        "name": "반도체/기타",
        "value": 20,
        "color": "#10B981"
      }
    ],
    trendData: [
      20,
      22,
      21,
      24,
      25,
      23,
      22,
      21,
      23,
      24,
      22,
      20
    ],
    bearCase: [
      "중국 경기 회복 지연에 따른 알리바바 마진 훼손 및 지정학적 할인 지속",
      "메모리 반도체 공급 과잉 국면 재진입 시 급격한 이익 축소 리스크"
    ],
    actionPlan: [
      {
        "title": "헤지 성향을 겸비한 극단적 가치 사냥",
        "detail": "매크로 폭락에 맞서 파생상품 안전망을 유지하며, 바닥 수준으로 떨어진 우량 지분 매입."
      }
    ],
  },

  "benjamin-graham": {
    hasChanges: false,
    firm: "Graham-Newman Legacy",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    essay: `
[거장의 선택: 정중동(靜中動) — 벤저민 그레이엄의 인내와 계량적 안전마진]

시장 참가자들이 매일 아침 전광판의 깜빡이는 붉은 숫자에 영혼을 빼앗기고, 인공지능과 혁신 기술이라는 화려한 구호 아래 수십 배의 프리미엄을 기꺼이 지불하며 추격 매수를 벌일 때, 정통 가치투자의 개척자 벤저민 그레이엄은 책상 앞에 고요히 앉아 재무제표의 빛바랜 숫자를 묵묵히 응시하고 있습니다. 이번 분기, 그의 포트폴리오에 변동 내역이 '0건'이라는 극단적인 관망이 표시된 것은 단순한 태만이 아닙니다. 그것은 시장의 탐욕이 임계점에 달해 자신이 평생 고수해 온 '안전마진(Margin of Safety)'의 철저한 기준을 충족하는 종목이 단 하나도 존재하지 않는다는 무언의 경고입니다.

그레이엄이 추구하는 투자는 철저하게 감정을 배제한 계량적 수학의 영역입니다. 그는 '시장(Mr. Market)'을 매일 문을 두드리며 변덕스러운 가격을 제시하는 정신 나간 동업자로 묘사했습니다. 조울증에 걸린 동업자가 제시하는 가격이 터무니없이 비쌀 때, 이성적인 투자자가 취해야 할 유일한 올바른 행동은 그 제안을 점잖게 거절하고 방 문을 닫는 것입니다. 그는 주식의 내재가치와 시장 가격 사이에 충분한 괴리, 즉 기업이 파산해 청산되더라도 투자원금을 건질 수 있는 수준의 '순유동자산가치(Net-Current-Asset Value)' 이하의 가격이 형성될 때까지 실탄을 아끼며 기다렸습니다.

현재 자산 시장은 연준의 금리 변동성, 인공지능이 견인하는 메가 테크의 쏠림 현상으로 인해 역사적 밸류에이션의 표준편차를 한참 벗어난 고평가 구간을 지나고 있습니다. 대중은 아무것도 하지 않는 관망을 '기회 손실'로 규정하며 포모(FOMO) 증후군에 시달리지만, 그레이엄의 관점에서는 무가치한 가격에 주식을 매수해 원금을 영구 훼손당할 위험에 노출되는 것이야말로 가장 경계해야 할 죄악입니다.

그가 보여주는 '정중동'의 태도는 투자자들에게 중대한 통찰을 제공합니다. 가치 있는 대상이 제값을 받지 못하고 헐값에 뒹굴 때까지 아무런 행동도 하지 않은 채 막대한 현금 실탄을 보존하는 힘, 그것이 바로 대중의 광기에서 살아남은 위대한 대가의 진정한 유산입니다. 시장이 탐욕과 공포에 미쳐 날뛸수록, 당신은 대가의 고요한 정묵(靜默)을 베이스캠프 삼아 스스로의 충동을 억제하고 현금을 움켜쥔 채 사냥감이 안전지대로 내려올 때를 기다려야 합니다.
`,
  },

  "peter-lynch": {
    hasChanges: false,
    firm: "Fidelity Magellan Legacy",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    essay: `
[거장의 선택: 정중동(靜中動) — 피터 린치의 생활 밀착형 관망과 복리 정체기]

전 세계가 윌스트리트의 고성능 컴퓨터가 쏟아내는 양적 매크로 지표에 일희일비하고 있을 때, 마젤란 펀드의 전설 피터 린치는 던킨도너츠 매장과 동네 쇼핑몰의 유통 추이를 살피며 조용히 때를 기다리고 있습니다. 이번 분기 린치 스타일의 포트폴리오 회전율이 '0건'을 기록하며 정중동의 관망 국면에 접어든 것은, 일상에서 발견하는 확고한 '10루타(Ten-bagger)' 주식의 탄생 주기가 잠시 숨고르기에 들어갔음을 의미합니다.

린치는 "상식적인 투자자라면 누구든 월가의 전문가들보다 먼저 세상을 관찰해 위대한 기업을 찾아낼 수 있다"고 말해왔습니다. 그러나 그것은 아무 성장주나 덥석 매수하라는 뜻이 아닙니다. 이익 성장률에 비해 주가가 지나치게 과대평가된 기업(즉, 고PEG)은 생활 속에서 아무리 좋은 평가를 받더라도 투자 대상에서 탈락해야 마땅합니다. 대가는 장터의 활기가 과도해져 모든 중소형주가 가치 이상의 거품을 물고 있을 때, 성급하게 방망이를 휘두르는 대신 자신의 가방을 닫고 유유히 시장 주변을 거닐며 밸류에이션이 진정되기를 기다리는 정중동의 지혜를 실천하고 있습니다.

지금의 시장은 미디어의 자극적 마케팅과 트렌드 추종자들이 만든 착시 효과로 인해 평범한 소비재 기업마저 혁신 기술주로 둔갑하여 프리미엄을 요구받는 시기입니다. 린치는 이러한 구간에서 무분별한 큐레이션을 진행하기보다, 기존에 확보한 우량 성장 바스켓을 묵묵히 관찰하고 보유하는 일에 집중하고 있습니다. 아무것도 하지 않는 것처럼 보이는 그의 고요함 이면에는, 실적이 정당화되지 않은 기업의 버블이 꺼지는 날 가장 먼저 주워 담을 저평가 실적 기업 리스트를 부지런히 정리하는 내밀한 움직임이 숨어 있습니다.

그가 속한 가치 성장 큐레이터 그룹의 유저들은 이 고요한 관망 기간을 부지런한 독립 연구의 시간으로 전환해야 합니다. 남들이 흥분에 겨워 매일 주식 창을 쳐다볼 때, 당신은 일상의 변화를 차분히 복기하며 진정한 보석의 밸류에이션 매력도가 임계점 이하로 내려와 매치 메이킹이 일어날 때를 묵묵히 기다려야 합니다.
`,
  },

  "guy-spier": {
    hasChanges: false,
    firm: "Aquamarine Capital",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.14",
    essay: `
[거장의 선택: 정중동(靜中動) — 가이 스파이어의 수도승적 고요와 초장기 관망]

뉴욕 월스트리트의 소음과 매일 쏟아지는 자극적인 금융 뉴스 데스크에서 수천 마일 떨어진 스위스 취리히의 조용한 사무실. 가이 스파이어는 컴퓨터 모니터를 끄고 차 한 잔을 마시며 거대한 서재의 책장을 넘기고 있습니다. 이번 분기 그의 아쿠아마린 펀드 매매 내역이 단 한 건도 발생하지 않은 '완벽한 정묵(靜默)' 상태를 보인 것은 그가 가장 애호하는 투자 철학의 구현입니다. 그는 투자 성과를 극대화하는 것은 활발한 매매가 아니라, 마음의 평정을 유지한 채 극도의 침묵 속에 자산이 스스로 일하도록 내버려 두는 '수도승적 인내'에 있다고 믿기 때문입니다.

스파이어는 버핏과 멍거의 가르침을 받아들여 자신의 두뇌를 자극하는 단기 변동성과 시장 소음을 차단하는 '투자 환경 설계'에 공을 들였습니다. 대다수 투자자가 HTS 창 앞에서 1분 단위로 호가창을 확인하며 아드레날린의 노예가 될 때, 그는 매매 결정을 내리는 빈도 자체를 극단적으로 낮춤으로써 실수를 방지합니다. 이번 분기 변동성이 극도로 축소된 매크로 밸류에이션 장세에서, 그는 단기 수익률을 좇아 방망이를 휘두르는 대신 포트폴리오를 구성하는 기존의 일등 독점 비즈니스들이 묵묵히 현금을 만들어 내는 모습을 흐뭇하게 지켜보는 쪽을 택했습니다.

시장이 혼탁하고 고평가된 메가 트렌드 쏠림 현상이 강해질수록, 이성적인 투자자는 아무것도 하지 않는 정중동의 철학을 생명줄로 삼아야 합니다. 거래 수수료를 뜯어먹기 위해 월가가 설계한 끊임없는 행동 유도를 철저히 거부하고, 맹수처럼 몸을 웅크린 채 완벽한 먹잇감이 사정거리 안으로 들어올 때까지 수개월, 혹은 수년간 고요를 유지하는 것. 가이 스파이어가 실천해 보인 이 아름다운 정묵의 흐름은 탐욕에 물든 시장에서 진정한 평화를 유지하며 자산을 복리로 불려 나가는 가장 프리미엄급 전략입니다.
`,
  },

  "philip-fisher": {
    hasChanges: false,
    firm: "Fisher Legacy",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    essay: `
[거장의 선택: 정중동(靜中動) — 필립 피셔의 질적 성장 추적과 인내의 정원]

위대한 성장주 투자의 선구자 필립 피셔는 화려한 수치 분석 너머에 있는 기업의 보이지 않는 질적 가치(경영진의 역량, 연구개발 능력, 노사 관계)를 관찰하기 위해 시장의 흥분 속에서 스스로를 분리했습니다. 이번 분기 피셔 스타일 포트폴리오가 완벽한 침묵 속에서 변동 건수 '0'을 유지한 것은, 그가 공들여 심어놓은 '위대한 기업의 정원'이 스스로 뿌리를 내리고 열매를 맺을 때까지 불필요한 가지치기나 잦은 이식을 삼가는 '정원사형 인내'를 실천하고 있음을 보여줍니다.

피셔는 훌륭한 주식을 살 때 고려해야 할 핵심 요소들을 만족하는 기업을 찾았다면, 매도 시점은 '거의 영원히 오지 않는다'고 주장했습니다. 단기 매크로의 등락이나 연준 금리 전망의 안개 속에서 두려움에 사로잡혀 주식을 파는 행위는 복리의 과실을 스스로 잘라버리는 행위와 같습니다. 대가는 이번 분기 시장이 인공지능과 거시 경제 전망에 취해 흔들릴 때, 매일같이 주가를 체크하는 대신 자신이 보유한 혁신 기업들이 장기 성장 비전을 어떻게 하나씩 실행해 나가고 있는지 기업 탐방과 스커틀벗(Scuttlebutt) 리포트를 검토하는 데 온 신경을 쏟았습니다.

피셔의 정중동은 대다수 단기 트레이더들이 흉내 낼 수 없는 깊은 통찰력을 담고 있습니다. 잦은 거래로 인한 세금과 수수료를 줄이고, 자신이 믿는 비즈니스의 성장성에 온전히 올라타 시간의 흐름을 자기 편으로 만드는 것. 시장의 소란스러운 소음에 귀를 닫고 거장이 보여주는 이 침착한 정묵의 자세를 취할 때, 투자자는 비로소 단기 파도에 휩쓸리지 않고 깊고 푸른 바다의 장기적 대세 상승 흐름을 온전히 획득할 수 있습니다.
`,
  },

  "walter-schloss": {
    hasChanges: false,
    firm: "Schloss Associates",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.14",
    essay: `
[거장의 선택: 정중동(靜中動) — 월터 슐로스의 안전지대 수성과 통계적 휴지기]

월터 슐로스는 화려한 학력도 없고 컴퓨터 단말기도 없이, 오직 가치 있는 저평가 자산 가치를 적은 벨류에이션 책자를 들고 평생 연평균 15.3%의 누적 복리를 쌓았습니다. 이번 분기 슐로스 스타일 포트폴리오의 거래 변동 내역이 0건을 기록하며 정중동의 침묵을 지킨 것은, 시장 전체의 자산 가격이 그가 정해 놓은 '역사적 저점 수준의 PBR(주가순자산비율) 배수' 위로 날아가 버려 손을 쓸 수 없는 통계적 고점 구간에 도달했음을 나타냅니다.

그는 평생 경영진의 미사여구나 시장의 장밋빛 전망에 현혹되지 않고, 오직 회사가 망했을 때 남는 물리적 자산이 주가보다 많은지 마진을 확인하는 담백한 방식으로 100여 개 기업을 지켰습니다. 시장 전체가 고평가되어 싼 자산이 눈에 띄지 않을 때, 그는 수익률을 억지로 쥐어짜기 위해 기교를 부리거나 고성장주를 추격하지 않았습니다. 그저 사무실 문을 닫고 가족과 함께 여유를 즐기며 시장의 거품이 터져 다시 자산들이 땅바닥에 굴러떨어질 때를 차분히 준비하는 정중동을 철저히 고수했습니다.

지금처럼 돈의 힘으로 밸류에이션이 부풀려진 시장에서, 슐로스의 정중동은 탐욕의 눈먼 칼날을 피하는 훌륭한 방패입니다. 남들이 고수익의 짜릿함을 자랑하며 과감한 투자를 감행할 때, 대가의 무행동은 원금을 지키기 위한 극도로 세련된 자기 통제의 산물입니다. 이 고요한 휴지기 동안, 당신은 거장과 함께 통계적 안전망을 더욱 단단히 점검하고 대중의 흥분이 가라앉아 자산가치 이하의 할인 바스켓이 열릴 순간을 느긋하게 대비하는 지혜를 수양해야 합니다.
`,
  },

  "carl-icahn": {
    hasChanges: true,
    firm: "Icahn Enterprises",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "IEP",
      "name": "Icahn Enterprises LP",
      "weight": 58.2,
      "change": "유지",
      "reason": "자신의 지주사 지분을 극대화하여 배당 및 지배구조 강화 목적 보유"
    },
    premiumHoldings: [
      {
        "ticker": "OXY",
        "name": "Occidental Petroleum",
        "weight": 12.4,
        "change": "유지",
        "reason": "에너지 인프라 가치 상승 및 버핏의 합류로 튼튼해진 안전마진"
      },
      {
        "ticker": "CVI",
        "name": "CVR Energy Inc.",
        "weight": 8.5,
        "change": "유지",
        "reason": "정유 및 비료 사업의 견조한 마진 및 배당 매력"
      }
    ],
    sectorMix: [
      {
        "name": "지주/산업",
        "value": 65,
        "color": "#3F5BFF"
      },
      {
        "name": "에너지",
        "value": 25,
        "color": "#0EA5E9"
      },
      {
        "name": "헬스케어/소재",
        "value": 10,
        "color": "#10B981"
      }
    ],
    trendData: [
      12,
      14,
      13,
      15,
      16,
      14,
      15,
      17,
      16,
      15,
      14,
      13
    ],
    bearCase: [
      "공매도 보고서 발행 이후 지주회사의 높은 프리미엄 훼손 및 소송 리스크",
      "에너지 경기 둔화 시 CVR Energy 등 자회사 가치 하락 우려"
    ],
    actionPlan: [
      {
        "title": "행동주의 파트너십과 지배구조 수술 개시",
        "detail": "가치 대비 심각하게 깎인 대기업에 공격적으로 개입하여 자산 매각 및 경영 쇄신 단행."
      }
    ],
  },

  "bill-gates": {
    hasChanges: true,
    firm: "Gates Foundation Trust",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "MSFT",
      "name": "Microsoft Corp.",
      "weight": 32.4,
      "change": "유지",
      "reason": "설립자 지분 기반 AI 클라우드 독점 지배력 장기 보유"
    },
    premiumHoldings: [
      {
        "ticker": "BRK.B",
        "name": "Berkshire Hathaway Class B",
        "weight": 19.8,
        "change": "유지",
        "reason": "버핏과의 장기 파트너십 및 자산배분 다각화를 위한 주춧돌 포지션"
      },
      {
        "ticker": "WM",
        "name": "Waste Management Inc.",
        "weight": 15.2,
        "change": "유지",
        "reason": "미국 최대 쓰레기 수거 및 재활용 기업으로 기후 테마 방어 및 진입 장벽 최강"
      }
    ],
    sectorMix: [
      {
        "name": "정보기술",
        "value": 35,
        "color": "#3F5BFF"
      },
      {
        "name": "금융/지주",
        "value": 25,
        "color": "#0EA5E9"
      },
      {
        "name": "환경/인프라",
        "value": 20,
        "color": "#10B981"
      },
      {
        "name": "운송/기타",
        "value": 20,
        "color": "#94A3B8"
      }
    ],
    trendData: [
      8,
      9,
      8,
      9,
      10,
      11,
      10,
      9,
      8,
      9,
      10,
      11
    ],
    bearCase: [
      "기초 기부 재단 특성상 연간 의무 지출에 따른 주기적 지분 기계적 매도 압박",
      "기술주 비중이 높아 거시 테크 버블 붕괴 시 평가자산 일시 훼손 위험"
    ],
    actionPlan: [
      {
        "title": "인프라 독점 및 환경 서비스 다각화",
        "detail": "기후 친화적 환경 비즈니스와 철도, 중장비 등 미국의 독점적 실물 인프라주 분산 축적."
      }
    ],
  },

  "meryl-witmer": {
    hasChanges: true,
    firm: "Eagle Capital Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "GOOGL",
      "name": "Alphabet Inc.",
      "weight": 12.2,
      "change": "유지",
      "reason": "광고 시장 지배력 대비 현금 흐름 및 자사주 매입 역량이 극도로 저평가되었다고 판단"
    },
    premiumHoldings: [
      {
        "ticker": "AMZN",
        "name": "Amazon.com Inc.",
        "weight": 10.5,
        "change": "유지",
        "reason": "클라우드 서비스(AWS) 고마진화 및 이커머스 마진 안정기 도달 매력"
      },
      {
        "ticker": "JPM",
        "name": "JPMorgan Chase & Co.",
        "weight": 7.8,
        "change": "+3%",
        "reason": "미국 최고의 상업 은행이자 고금리 예대마진 방어 능력 보유"
      }
    ],
    sectorMix: [
      {
        "name": "정보기술/플랫폼",
        "value": 48,
        "color": "#3F5BFF"
      },
      {
        "name": "금융 서비스",
        "value": 30,
        "color": "#0EA5E9"
      },
      {
        "name": "소비재/유통",
        "value": 22,
        "color": "#10B981"
      }
    ],
    trendData: [
      15,
      17,
      16,
      18,
      19,
      17,
      16,
      18,
      19,
      17,
      16,
      18
    ],
    bearCase: [
      "빅테크 규제 리스크로 인한 멀티플 디스카운트 지속 우려",
      "금리 인하 변곡점 도달 시 대형 은행주의 마진 축소 리스크"
    ],
    actionPlan: [
      {
        "title": "재무제표 해자 기반 대형 가치주 선별",
        "detail": "현금흐름 창출력이 뛰어나고 대차대조표가 튼튼하지만 소외된 우량 가치주 집중 타깃."
      }
    ],
  },

  "glenn-greenberg": {
    hasChanges: true,
    firm: "Brave Warrior Advisors",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "ELV",
      "name": "Elevance Health",
      "weight": 24.8,
      "change": "유지",
      "reason": "미국 건강보험 시장의 탄탄한 과점력 및 경기 불황 방어 최적화 자산"
    },
    premiumHoldings: [
      {
        "ticker": "FERG",
        "name": "Ferguson Enterprises",
        "weight": 22.1,
        "change": "유지",
        "reason": "미국 건설 배관 및 자재 유통 시장 1위 독점 지배력과 높은 마진율"
      },
      {
        "ticker": "JPM",
        "name": "JPMorgan Chase",
        "weight": 18.5,
        "change": "유지",
        "reason": "업계 최강 금융 지주회사에 대한 무한 신뢰 및 확실한 수익력 판단"
      }
    ],
    sectorMix: [
      {
        "name": "헬스케어/보험",
        "value": 40,
        "color": "#3F5BFF"
      },
      {
        "name": "자재 유통",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "금융",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      35,
      38,
      36,
      40,
      42,
      39,
      41,
      43,
      40,
      39,
      42,
      45
    ],
    bearCase: [
      "상위 3개 종목에 자산 65% 이상이 집중되어 있어 개별 기업 악재 시 펀드 타격 치명적",
      "미국 건보 제도 개혁 또는 정부 예산 삭감 시 Elevance Health 마진 타격 가능성"
    ],
    actionPlan: [
      {
        "title": "비교 불가능한 톱 독점주 초집중",
        "detail": "분산 투자는 무지함을 헤지하는 것일 뿐, 확실히 아는 3~5개 챔피언 기업에 전량 베팅."
      }
    ],
  },

  "thomas-russo": {
    hasChanges: true,
    firm: "Gardner Russo & Quinn",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "BRK.A",
      "name": "Berkshire Hathaway Class A",
      "weight": 14.2,
      "change": "유지",
      "reason": "장기 복리 효과 및 포트폴리오의 든든한 가치 가이드 기둥 역할"
    },
    premiumHoldings: [
      {
        "ticker": "GOOGL",
        "name": "Alphabet Inc.",
        "weight": 10.8,
        "change": "유지",
        "reason": "소비자를 끌어당기는 브랜드력 및 디지털 생태계 독점"
      },
      {
        "ticker": "MA",
        "name": "Mastercard Inc.",
        "weight": 8.5,
        "change": "유지",
        "reason": "브랜드 충성도 및 장벽이 높은 글로벌 소비 결제 트래픽 수익"
      }
    ],
    sectorMix: [
      {
        "name": "금융/지주",
        "value": 42,
        "color": "#3F5BFF"
      },
      {
        "name": "IT/소프트웨어",
        "value": 33,
        "color": "#0EA5E9"
      },
      {
        "name": "필수소비재",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      12,
      13,
      11,
      14,
      15,
      13,
      14,
      16,
      15,
      14,
      13,
      12
    ],
    bearCase: [
      "디지털 결제망에 대한 규제 압박 및 럭셔리 소비재 수요 일시 하강 리스크",
      "전통 미디어 및 소비 브랜드들의 세대 교체에 따른 마케팅 비효율 발생 가능성"
    ],
    actionPlan: [
      {
        "title": "글로벌 강력 소비재 거함 모으기",
        "detail": "소비자가 매일 사용하며 대체하기 어렵고, 가격 인상 저항이 없는 글로벌 해자 기업 분산 보유."
      }
    ],
  },

  "john-paulson": {
    hasChanges: true,
    firm: "Paulson & Co.",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "GLD",
      "name": "SPDR Gold Shares",
      "weight": 25.4,
      "change": "+8%",
      "reason": "글로벌 지정학 위기 장기화 및 화폐 인플레이션 헤지를 위한 금 자산 편입"
    },
    premiumHoldings: [
      {
        "ticker": "GOLD",
        "name": "Barrick Gold Corp.",
        "weight": 14.2,
        "change": "유지",
        "reason": "금 가격 급등에 따른 채굴 마진 확대 및 레버리지 수익 극대화"
      },
      {
        "ticker": "AEM",
        "name": "Agnico Eagle Mines",
        "weight": 9.8,
        "change": "+5%",
        "reason": "세계 최고 수준의 금 광산 포트폴리오를 보유한 우량 채굴 기업"
      }
    ],
    sectorMix: [
      {
        "name": "원자재/금",
        "value": 55,
        "color": "#3F5BFF"
      },
      {
        "name": "인수합병/M&A",
        "value": 30,
        "color": "#0EA5E9"
      },
      {
        "name": "제약/기타",
        "value": 15,
        "color": "#10B981"
      }
    ],
    trendData: [
      32,
      35,
      30,
      28,
      26,
      29,
      31,
      33,
      30,
      28,
      32,
      35
    ],
    bearCase: [
      "인플레이션 진정 및 실질 금리 급등 시 금 가격 단기 폭락 위험 노출",
      "합병 및 매수 딜 무산 시 M&A 이벤트 드리븐 자산의 단기 유동성 동결 리스크"
    ],
    actionPlan: [
      {
        "title": "지정학 위기 방어 및 금/광산 레버리지",
        "detail": "실물 자산의 상징인 금 ETF와 금광업체 주식에 가치 기반 집중 헤지 자산 배치."
      }
    ],
  },

  "stephen-mandel": {
    hasChanges: true,
    firm: "Lone Pine Capital",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "META",
      "name": "Meta Platforms Inc.",
      "weight": 12.8,
      "change": "유지",
      "reason": "인스타그램 릴스 고수익화 및 AI 추천 피드 고도화에 힘입은 매출 고속 성장"
    },
    premiumHoldings: [
      {
        "ticker": "AMZN",
        "name": "Amazon.com Inc.",
        "weight": 11.2,
        "change": "유지",
        "reason": "AWS 클라우드 인프라 수요 지속 및 글로벌 공급망 이커머스 장악력"
      },
      {
        "ticker": "MSFT",
        "name": "Microsoft Corp.",
        "weight": 10.5,
        "change": "유지",
        "reason": "기업용 소프트웨어 AI(Copilot) 침투율 급증에 따른 고성장"
      }
    ],
    sectorMix: [
      {
        "name": "IT/소프트웨어",
        "value": 45,
        "color": "#3F5BFF"
      },
      {
        "name": "이커머스/플랫폼",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "바이오/기타",
        "value": 20,
        "color": "#10B981"
      }
    ],
    trendData: [
      8,
      9,
      8,
      9,
      10,
      11,
      10,
      9,
      8,
      9,
      10,
      11
    ],
    bearCase: [
      "빅테크 및 고성장 혁신 테크주의 높은 밸류에이션 하락 조정 리스크",
      "이커머스 및 콘텐츠 부문의 마케팅 비용 증가로 인한 단기 마진 축소"
    ],
    actionPlan: [
      {
        "title": "장기 모멘텀 지배주 포커싱",
        "detail": "시대를 이끄는 AI 및 혁신 성장 트렌드를 선점한 최상위 빅테크 주식 압축 매집."
      }
    ],
  },

  "donald-yacktman": {
    hasChanges: true,
    firm: "Yacktman Asset Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "PEP",
      "name": "PepsiCo Inc.",
      "weight": 9.5,
      "change": "유지",
      "reason": "글로벌 음료 및 스낵 시장 지배력 기반의 높은 인플레이션 전가 능력"
    },
    premiumHoldings: [
      {
        "ticker": "MSFT",
        "name": "Microsoft Corp.",
        "weight": 8.2,
        "change": "유지",
        "reason": "꾸준한 구독형 이익 비즈니스 모델로 경기 방어 최적화"
      },
      {
        "ticker": "GOOGL",
        "name": "Alphabet Inc.",
        "weight": 7.8,
        "change": "유지",
        "reason": "안정적 캐시카우 검색 광고 및 건전한 대차대조표 매력"
      }
    ],
    sectorMix: [
      {
        "name": "필수소비재",
        "value": 40,
        "color": "#3F5BFF"
      },
      {
        "name": "소프트웨어",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "미디어/기타",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      10,
      11,
      10,
      11,
      12,
      13,
      12,
      11,
      10,
      11,
      12,
      13
    ],
    bearCase: [
      "웰빙 식품 선호 추세로 인한 가공 스낵 및 탄산 음료의 장기 수요 정체 리스크",
      "경기 침체 시에도 방어력은 높으나 강세장에서 아웃퍼폼 둔화 가능성"
    ],
    actionPlan: [
      {
        "title": "고영업마진 필수소비재 바스켓 편입",
        "detail": "소비자가 불황에도 찾을 수밖에 없는 탄탄한 장기 가치 실적주 분산 투자."
      }
    ],
  },

  "robert-karr": {
    hasChanges: true,
    firm: "Joho Capital",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "MSFT",
      "name": "Microsoft Corp.",
      "weight": 18.5,
      "change": "유지",
      "reason": "AI 비즈니스 인프라 장악력 및 장기 안정적 클라우드 복리 효과"
    },
    premiumHoldings: [
      {
        "ticker": "GOOGL",
        "name": "Alphabet Inc.",
        "weight": 15.2,
        "change": "유지",
        "reason": "AI 검색 고도화 및 자회사 유튜브의 플랫폼 독점 수혜"
      },
      {
        "ticker": "NVDA",
        "name": "NVIDIA Corp.",
        "weight": 12.4,
        "change": "+8%",
        "reason": "AI 칩 수요 고공 행진 및 파운드리 협력 구도 안정화 포착 매집"
      }
    ],
    sectorMix: [
      {
        "name": "정보기술/반도체",
        "value": 55,
        "color": "#3F5BFF"
      },
      {
        "name": "인터넷/미디어",
        "value": 30,
        "color": "#0EA5E9"
      },
      {
        "name": "소프트웨어/기타",
        "value": 15,
        "color": "#10B981"
      }
    ],
    trendData: [
      5,
      6,
      5,
      7,
      8,
      6,
      7,
      9,
      8,
      7,
      6,
      5
    ],
    bearCase: [
      "반도체 칩 시장 경쟁 구도 심화 또는 단기 오더 컷 발생 시 펀드 수익성 훼손",
      "아시아 이커머스 등 지정학적 불확실성 노출 및 환율 변동 리스크"
    ],
    actionPlan: [
      {
        "title": "아시아/글로벌 융합 테크 포지션",
        "detail": "실리콘밸리 빅테크와 아시아 핵심 IT 하드웨어 밸류체인의 상호 보완적 배치."
      }
    ],
  },

  "alex-roepers": {
    hasChanges: true,
    firm: "Atlantic Investment Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "OI",
      "name": "O-I Glass Inc.",
      "weight": 16.5,
      "change": "유지",
      "reason": "글로벌 포장용 유리병 시장 1위 저평가 가치주로 친환경 유리 수요 증가 수혜"
    },
    premiumHoldings: [
      {
        "ticker": "HUN",
        "name": "Huntsman Corp.",
        "weight": 14.2,
        "change": "유지",
        "reason": "특수 화학 산업 가치 회복 및 자산 분할을 통한 밸류에이션 개선 촉매 기대"
      },
      {
        "ticker": "CE",
        "name": "Celanese Corp.",
        "weight": 12.1,
        "change": "유지",
        "reason": "엔지니어링 플라스틱 및 아세틸 계열 글로벌 독과점 메이커"
      }
    ],
    sectorMix: [
      {
        "name": "기초 소재/화학",
        "value": 65,
        "color": "#3F5BFF"
      },
      {
        "name": "제조/패키징",
        "value": 25,
        "color": "#0EA5E9"
      },
      {
        "name": "기타 산업",
        "value": 10,
        "color": "#10B981"
      }
    ],
    trendData: [
      15,
      18,
      16,
      19,
      21,
      18,
      20,
      22,
      19,
      18,
      16,
      15
    ],
    bearCase: [
      "글로벌 제조업 경기 침체 장기화 시 기초 화학 및 자재 수요 직격탄 리스크",
      "원자재 에너지 비용 급등 시 화학 공장 마진 압박 우려"
    ],
    actionPlan: [
      {
        "title": "역발상 산업재 밸류에이션 바닥 매집",
        "detail": "경기 사이클 최하단에서 유동성 리스크가 없고 시장 지배력이 확실한 제조업 헐값 매집."
      }
    ],
  },

  "mario-gabelli": {
    hasChanges: true,
    firm: "GAMCO Investors",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "SONY",
      "name": "Sony Group Corp.",
      "weight": 6.8,
      "change": "유지",
      "reason": "콘텐츠 지식재산권(IP) 보유 대비 지나치게 깎인 복합 엔터기업 가치 판단"
    },
    premiumHoldings: [
      {
        "ticker": "PARA",
        "name": "Paramount Global",
        "weight": 5.4,
        "change": "유지",
        "reason": "인수합병(M&A) 및 미디어 자산 분할 촉매가 유효한 저PBR 자산주"
      },
      {
        "ticker": "KBR",
        "name": "KBR Inc.",
        "weight": 4.8,
        "change": "+5%",
        "reason": "미국 정부 엔지니어링 및 인프라 서비스 안정적 계약 수혜 기업"
      }
    ],
    sectorMix: [
      {
        "name": "미디어/콘텐츠",
        "value": 45,
        "color": "#3F5BFF"
      },
      {
        "name": "엔지니어링/인프라",
        "value": 30,
        "color": "#0EA5E9"
      },
      {
        "name": "제조/기타",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      10,
      11,
      10,
      11,
      12,
      13,
      12,
      11,
      10,
      9,
      10,
      11
    ],
    bearCase: [
      "Paramount 등 미디어 인수합병 최종 계약 지연 시 가치 함정(Value Trap) 노출",
      "일본 엔화 환율 변동에 따른 소니 글로벌 자산 가치 평가액 왜곡 가능성"
    ],
    actionPlan: [
      {
        "title": "이벤트 대기형 민간시장가치(PMV) 포커스",
        "detail": "사업부 분할, 인수합병, 경영권 분쟁 등 확실한 가격 실현 촉매가 장착된 가치주 분산 보유."
      }
    ],
  },

  "wallace-weitz": {
    hasChanges: true,
    firm: "Weitz Investment Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "BRK.B",
      "name": "Berkshire Hathaway Class B",
      "weight": 11.5,
      "change": "유지",
      "reason": "가장 신뢰할 수 있는 가치 지침 돌이자 안정적 위험 회피 수단"
    },
    premiumHoldings: [
      {
        "ticker": "V",
        "name": "Visa Inc.",
        "weight": 8.2,
        "change": "유지",
        "reason": "지배력 높은 글로벌 카드 결제 네트워크의 마진 수호"
      },
      {
        "ticker": "MA",
        "name": "Mastercard Inc.",
        "weight": 7.9,
        "change": "유지",
        "reason": "결제망 과점 지위 기반 인플레이션 자동 헤지 기능 보유"
      }
    ],
    sectorMix: [
      {
        "name": "금융/지주",
        "value": 45,
        "color": "#3F5BFF"
      },
      {
        "name": "결제 네트워크",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "기타 가치주",
        "value": 20,
        "color": "#10B981"
      }
    ],
    trendData: [
      12,
      13,
      11,
      12,
      14,
      15,
      13,
      12,
      11,
      12,
      13,
      14
    ],
    bearCase: [
      "디지털 결제 대체재 출현 또는 법적 수수료 제한 조치 시 주가 단기 하락 리스크",
      "금리 변동 속도 급변 시 금융 지주 지분 가치 변동성 노출"
    ],
    actionPlan: [
      {
        "title": "비즈니스 퀄리티 중심의 점진적 매수",
        "detail": "안전마진이 두터우면서도 경제적 변동에 유연하게 대처 가능한 퀄리티 가치주 위주 배분."
      }
    ],
  },

  "tom-gayner": {
    hasChanges: true,
    firm: "Markel Group",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "BRK.B",
      "name": "Berkshire Hathaway Inc.",
      "weight": 12.2,
      "change": "유지",
      "reason": "복리 성장의 롤모델이자 보험업 현금 흐름의 강력한 장기 안전망 확보"
    },
    premiumHoldings: [
      {
        "ticker": "GOOGL",
        "name": "Alphabet Inc.",
        "weight": 9.5,
        "change": "유지",
        "reason": "안정적 광고 이익 비즈니스 모델 및 클라우드 AI 확장성 매력"
      },
      {
        "ticker": "MSFT",
        "name": "Microsoft Corp.",
        "weight": 8.8,
        "change": "유지",
        "reason": "압도적인 기업용 소프트웨어 점유율 및 고자본효율성 지속"
      }
    ],
    sectorMix: [
      {
        "name": "금융/지주",
        "value": 40,
        "color": "#3F5BFF"
      },
      {
        "name": "IT/소프트웨어",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "소비재/기타",
        "value": 25,
        "color": "#10B981"
      }
    ],
    trendData: [
      10,
      11,
      10,
      11,
      12,
      13,
      12,
      11,
      10,
      11,
      12,
      13
    ],
    bearCase: [
      "Markel 자체 보험 영업 부실 리스크 발생 시 자산 재투자 실탄 감소 우려",
      "대형 빅테크 밸류에이션 고평가에 따른 동반 조정 위험성 상존"
    ],
    actionPlan: [
      {
        "title": "4원칙 기반 복리 파트너 수집",
        "detail": "자본 이익률이 높고, 깨끗한 경영진이 있으며, 재투자 기회가 풍부하고, 가격이 합리적인 주식 장기 소유."
      }
    ],
  },

  "paul-singer": {
    hasChanges: true,
    firm: "Elliott Management",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "MPC",
      "name": "Marathon Petroleum",
      "weight": 15.2,
      "change": "유지",
      "reason": "정유 부문 분할 및 자사주 매입 강화 행동주의 캠페인 추진"
    },
    premiumHoldings: [
      {
        "ticker": "CEG",
        "name": "Constellation Energy",
        "weight": 12.4,
        "change": "+5%",
        "reason": "AI 데이터센터 전력 공급 계약 체결에 따른 원자력 에너지 자산 가치 폭등 포착"
      },
      {
        "ticker": "PINS",
        "name": "Pinterest Inc.",
        "weight": 8.8,
        "change": "유지",
        "reason": "이사회 참여 및 이커머스 기능 활성화를 통한 플랫폼 수익 극대화"
      }
    ],
    sectorMix: [
      {
        "name": "에너지/유틸리티",
        "value": 48,
        "color": "#3F5BFF"
      },
      {
        "name": "기술/플랫폼",
        "value": 30,
        "color": "#0EA5E9"
      },
      {
        "name": "금융/부실채권",
        "value": 22,
        "color": "#10B981"
      }
    ],
    trendData: [
      15,
      18,
      16,
      17,
      19,
      21,
      20,
      22,
      19,
      18,
      17,
      18
    ],
    bearCase: [
      "공격적인 인수/분할 압박에 따른 피투자사 이사회와의 장기 마찰 및 평판 리스크",
      "유가 폭락 또는 에너지 보조금 정책 변화 시 Constellation 등 친환경 주가 변동 위험"
    ],
    actionPlan: [
      {
        "title": "고효율 구조조정 사냥 및 매크로 헤지",
        "detail": "주주 환원 및 자산 구조조정 여력이 풍부한 대형 소외 기업 지분 대량 인수 후 개선 조치 단행."
      }
    ],
  },

  "jeffrey-ubben": {
    hasChanges: true,
    firm: "ValueAct Capital",
    quarter: "2026년 1분기 13F",
    filingDate: "2026.05.15",
    teaserTicker: {
      "ticker": "CRM",
      "name": "Salesforce Inc.",
      "weight": 18.2,
      "change": "유지",
      "reason": "마진 개선 정책 및 자사주 매입 활성화 촉구 이사회 협력 파트너십 구축"
    },
    premiumHoldings: [
      {
        "ticker": "MSFT",
        "name": "Microsoft Corp.",
        "weight": 14.5,
        "change": "유지",
        "reason": "밸류액트가 이사회 자문역으로 참여한 장기 우량 소프트웨어 파트너"
      },
      {
        "ticker": "KKR",
        "name": "KKR & Co. Inc.",
        "weight": 11.2,
        "change": "유지",
        "reason": "자본 유치 증가에 따른 고속 성장 금융 지주사 수수료 해자 분석 편입"
      }
    ],
    sectorMix: [
      {
        "name": "IT/소프트웨어",
        "value": 55,
        "color": "#3F5BFF"
      },
      {
        "name": "금융/대체자산",
        "value": 35,
        "color": "#0EA5E9"
      },
      {
        "name": "기타",
        "value": 10,
        "color": "#10B981"
      }
    ],
    trendData: [
      12,
      14,
      13,
      15,
      16,
      14,
      15,
      17,
      16,
      15,
      14,
      13
    ],
    bearCase: [
      "피투자 기업의 실적 회복 속도 지연 시 지분 장기 묶임 리스크",
      "소프트웨어 전반 밸류에이션 축소 국면 도달 시 포트폴리오 일시 부진 위험"
    ],
    actionPlan: [
      {
        "title": "우호적 경영 개입 가치 증진",
        "detail": "이사회와 대립하기보다 우호적으로 들어가 경영 자문과 자본 재배치를 도와 밸류에이션 부양 촉발."
      }
    ],
  },
};

export function getGuruReport(guruId, dbGuru = null) {
  const baseReport = GURU_REPORTS[guruId] || {};

  if (baseReport.teaserTicker && baseReport.premiumHoldings) {
    return baseReport;
  }

  // Find guru details in GURUS_LIST or use dbGuru
  const guru = dbGuru || GURUS_LIST.find(g => g.id === guruId) || {
    nameKr: "알 수 없는 거장",
    firmName: "Wall Street Capital",
    mbtiType: "FCVS"
  };

  const isGrowth = (guru.mbtiType || "").includes("G") || (guru.mbtiType || "").includes("T");
  const isMacro = (guru.mbtiType || "").includes("M");

  let teaserTicker, premiumHoldings, sectorMix, bearCase, actionPlan;

  if (isGrowth) {
    teaserTicker = {
      ticker: "NVDA",
      name: "NVIDIA Corp. (엔비디아)",
      weight: 14.5,
      change: "추가 (+12%)",
      reason: "글로벌 AI 반도체 칩 시장 독점 및 공급망 강화 수혜"
    };
    premiumHoldings = [
      { ticker: "MSFT", name: "Microsoft Corp. (마이크로소프트)", weight: 12.2, change: "유지", reason: "생성형 AI 생태계 및 대규모 클라우드 시장 장악" },
      { ticker: "AAPL", name: "Apple Inc. (애플)", weight: 9.8, change: "유지", reason: "소비자 하드웨어 락인 장벽 및 강력한 자사주 매입" },
      { ticker: "GOOGL", name: "Alphabet Inc. (구글)", weight: 8.5, change: "추가 (+5%)", reason: "디지털 광고 검색 해자 및 생성형 AI 도구 확장성" }
    ];
    sectorMix = [
      { name: "정보기술", value: 65, color: "#3F5BFF" },
      { name: "소비재/유통", value: 25, color: "#0EA5E9" },
      { name: "금융/기타", value: 10, color: "#94A3B8" }
    ];
    bearCase = [
      "인플레이션에 따른 밸류에이션 부담 및 대형 IT 플랫폼 독과점 규제 리스크",
      "AI 감가상각 비용 증대에 따른 빅테크 단기 마진 하락 우려"
    ];
    actionPlan = [
      { title: "성장 속도 추적", detail: "핵심 빅테크 기업들의 분기별 어닝 콜 마진 추이와 재투자 기회 추적" },
      { title: "현금 비중 리밸런싱", detail: "고성장 국면 이후 조정 가능성을 대비해 점진적으로 배당형 자산 분산" }
    ];
  } else if (isMacro) {
    teaserTicker = {
      ticker: "GLD",
      name: "SPDR Gold Shares (금 ETF)",
      weight: 18.5,
      change: "추가 (+15%)",
      reason: "지정학 위기 장기화 및 화폐 인플레이션 헤지를 위한 대체 실물자산 편입"
    };
    premiumHoldings = [
      { ticker: "OXY", name: "Occidental Petroleum (옥시덴탈)", weight: 12.4, change: "유지", reason: "에너지 인프라 가치 상승 및 셰일 오일 생산 효율 증대" },
      { ticker: "SPY", name: "SPDR S&P 500 ETF Trust", weight: 10.2, change: "유지", reason: "거시 미국 경제 전반의 장기 복리 수익률 추종 목적 보유" },
      { ticker: "XLE", name: "Energy Select Sector SPDR", weight: 7.5, change: "추가 (+8%)", reason: "원유 및 정유 업종의 마진과 고배당 수익 확보" }
    ];
    sectorMix = [
      { name: "원자재/에너지", value: 55, color: "#10B981" },
      { name: "금융/지수", value: 35, color: "#3F5BFF" },
      { name: "기타", value: 10, color: "#94A3B8" }
    ];
    bearCase = [
      "글로벌 지정학 위기 완화 및 실질금리 상승에 따른 금 자산 단기 급락 위험",
      "에너지 경기 사이클 하강 시 원유 관련 자산 가치 훼손 리스크"
    ];
    actionPlan = [
      { title: "원자재 변동성 모니터링", detail: "달러화 인덱스 및 지정학 리스크 변곡점에 맞춰 금/에너지 비중 조절" },
      { title: "배당 가치 자산 혼합", detail: "매크로 하방 방어를 위해 인프라/리츠 등 고배당 자산 다변화" }
    ];
  } else {
    // Value (V) / Traditional Safe assets
    teaserTicker = {
      ticker: "BRK.B",
      name: "Berkshire Hathaway B (버크셔)",
      weight: 15.2,
      change: "유지",
      reason: "워렌 버핏의 안전한 현금 배분 능력 및 포트폴리오의 든든한 중심 역할"
    };
    premiumHoldings = [
      { ticker: "JPM", name: "JPMorgan Chase & Co. (제이피모건)", weight: 10.4, change: "추가 (+3%)", reason: "미국 최고 은행의 여수신 독점 마진 및 고금리 장기화 수혜" },
      { ticker: "KO", name: "Coca-Cola Co. (코카콜라)", weight: 8.8, change: "유지", reason: "안정적 필수 소비재 지배력 및 탁월한 인플레이션 가격 인상력" },
      { ticker: "PG", name: "Procter & Gamble Co. (피앤지)", weight: 7.2, change: "유지", reason: "불황에도 흔들리지 않는 필수 소비재 및 탄탄한 분기 배당 역사" }
    ];
    sectorMix = [
      { name: "금융", value: 45, color: "#3F5BFF" },
      { name: "필수소비재", value: 35, color: "#10B981" },
      { name: "정보기술/기타", value: 20, color: "#94A3B8" }
    ];
    bearCase = [
      "전통 소비재 브랜드 세대 교체에 따른 장기 마케팅 비효율 발생 가능성",
      "장기 금리 하락 시 대형 은행의 예대마진 및 이자 수익성 둔화 우려"
    ];
    actionPlan = [
      { title: "대차대조표 건강성 검증", detail: "소비 패턴 둔화 시에도 안전마진을 확보할 수 있는 고부채 회피형 검증" },
      { title: "복리 배당 재투자 전략", detail: "배당금을 고성장 신규 소외 자산에 재배치하여 복리 효율 극대화" }
    ];
  }

  return {
    hasChanges: baseReport.hasChanges !== undefined ? baseReport.hasChanges : true,
    firm: baseReport.firm || guru.firmName || "Wall Street Capital",
    quarter: baseReport.quarter || "2026년 1분기 13F",
    filingDate: baseReport.filingDate || "2026.05.15",
    essay: baseReport.essay,
    teaserTicker: baseReport.teaserTicker || teaserTicker,
    premiumHoldings: baseReport.premiumHoldings || premiumHoldings,
    sectorMix: baseReport.sectorMix || sectorMix,
    trendData: baseReport.trendData || [20, 22, 21, 23, 25, 24, 26, 28, 27, 29, 31, 30],
    bearCase: baseReport.bearCase || bearCase,
    actionPlan: baseReport.actionPlan || actionPlan
  };
}
