import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadEnv() {
  const envPath = path.resolve(__dirname, '../.env');
  if (!fs.existsSync(envPath)) {
    console.error('.env file not found');
    process.exit(1);
  }
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      else if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      env[key] = value.trim();
    }
  });
  return env;
}

const env = loadEnv();
const supabase = createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY || env.VITE_SUPABASE_ANON_KEY);

const GURU_INFO_MAP_2 = {
  'bruce-berkowitz': {
    nameKr: '브루스 버코위츠',
    description: '페어홀름 펀드(Fairholme Fund)의 설립자이자 딥 밸류 역발상 투자자. 단기 악재나 구조조정 등으로 시장에서 극단적인 혐오를 받는 기업들을 철저히 현금흐름 기준으로 평가하여 거액 집중 베팅하는 전략으로 유명합니다.'
  },
  'duan-yongping': {
    nameKr: '둔융핑',
    description: '중국의 워렌 버핏으로 불리는 전설적인 기업가이자 투자자. 스마트폰 브랜드 OPPO, VIVO를 창업한 후 투자자로 전향하여, 버핏의 가치투자 철학을 고수하며 애플, 텐센트 등 강력한 비즈니스 해자를 지닌 초우량 기업에 집중 장기 투자합니다.'
  },
  'bill-nygren': {
    nameKr: '빌 나이그렌',
    description: '오크마크 펀드(Oakmark Funds)를 이끄는 정통 가치투자 대가. 내재가치 대비 최소 30% 이상 할인되어 거래되며, 주주 가치 극대화에 힘쓰는 경영진이 이끌고 있고, 향후 가치 성장이 가능한 우량 기업들을 발굴하여 장기 보유합니다.'
  },
  'pat-dorsey': {
    nameKr: '패트 도르시',
    description: '모닝스타의 리서치 디렉터 출신이자 도르시 에셋(Dorsey Asset) 설립자. 기업의 지속 가능한 경쟁 우위인 \'경제적 해자\' 분석의 세계적 권위자로서, 높은 전환비용과 네트워크 효과를 바탕으로 고수익을 재투자할 수 있는 최고급 기업을 선별해 집중 투자합니다.'
  },
  'david-abrams': {
    nameKr: '데이비드 에이브람스',
    description: '세스 클라르만의 펠로우이자 에이브람스 캐피탈(Abrams Capital)의 수장. 소음이 가득한 월가를 피해 보스턴에서 고요하게 자산을 운용하며, 자산군을 가리지 않고 밸류에이션이 극도로 저렴하며 하방이 막혀 있는 기회주의적 딥 밸류 자산에 집중 투자합니다.'
  },
  'dennis-hong': {
    nameKr: '데니스 홍',
    description: '쇼스프링 파트너스(ShawSpring Partners)를 이끄는 신세대 집중 투자자. 탁월한 비즈니스 모델을 갖추고 장기 디지털 전환 흐름 속에서 시장을 독식할 수 있는 글로벌 인터넷 플랫폼 및 소프트웨어 리더 기업 소수에 깊이 있는 리서치를 바탕으로 초집중 투자합니다.'
  },
  'francois-rochon': {
    nameKr: '프랑수아 로شون',
    description: '지베르니 캐피탈(Giverny Capital)을 이끄는 캐나다의 대표적 퀄리티 가치투자자. 탁월한 자본 효율성(ROE)과 뛰어난 경영진을 보유한 위대한 기업이 합리적인 가격에 도달했을 때 매수하여, 단기 시장 변동을 무시하고 수십 년간 파트너로 동행합니다.'
  },
  'leon-cooperman': {
    nameKr: '리온 쿠퍼맨',
    description: '골드만삭스 자산운용 CEO를 거쳐 오메가 어드바이저스(Omega Advisors)를 설립한 월가의 노장. 철저한 재무제표 및 경영진 분석을 통해 적정 가치 대비 저평가된 주식과 강력한 자사주 매입으로 주주 환원을 실천하는 고배당 가치주에 주로 투자합니다.'
  },
  'viking-global-investors': {
    nameKr: '바이킹 글로벌',
    description: '안드레아스 할보르센이 이끄는 세계 최대 규모의 헤지펀드 중 하나. 타이거 펀드의 유산을 이어받아 정밀한 바텀업 펀더멘털 리서치를 기반으로 성장 동력이 확실한 글로벌 헬스케어, IT, 소비재 기업의 롱숏(Long/Short) 포트폴리오를 유연하게 운용합니다.'
  },
  'norbert-lou': {
    nameKr: '노버트 루',
    description: '펀치 카드 캐피탈(Punch Card Capital)을 이끄는 극단적 집중 가치투자자. 인생에서 단 20번만 투자 기회가 주어지는 것처럼 신중하게 결정하라는 버핏의 \'펀치 카드\' 원칙을 문자 그대로 실행하며, 확신이 선 3~5개 기업에 펀드 자금 대부분을 실어 장기 보유합니다.'
  },
  'valley-forge-capital-management': {
    nameKr: '밸리 포지',
    description: 'Dev Kantesaria가 이끄는 초집중 복리 성장 펀드. 경기 변동과 무관하게 강력한 독점력과 탁월한 자본 효율성을 보여주는 IT 서비스, 결제 네트워크 등 10개 미만의 최고 퀄리티 비즈니스 모델을 매집해 영구 보유하는 전략을 구사합니다.'
  },
  'glenn-welling': {
    nameKr: '글렌 웰링',
    description: '인게이지드 캐피탈(Engaged Capital)의 설립자이자 강소형 행동주의 투자가. 시가총액이 작고 경영진의 비효율로 제 가치를 못 받는 기업 지분을 매집한 후, 이사회 진입 및 사업 매각, 비용 통제를 직접 이끌어내며 주주 가치를 강제로 실현시킵니다.'
  },
  'clifford-sosin': {
    nameKr: '클리포드 소신',
    description: 'CAS Investment Partners를 이끄는 고집 있는 집중 가치투자자. 비즈니스의 장기 생존력과 고객 고착 효과를 정밀하게 분석하여 가치가 시장에서 완전히 소외된 소수의 기업을 발굴하고, 레버리지와 확신을 실어 장기 동행합니다.'
  },
  'bryan-lawrence': {
    nameKr: '브라이언 로렌스',
    description: '오크클리프 캐피탈(Oakcliff Capital)의 수장. 버핏과 그레이엄의 정통 철학에 기반하여 비즈니스의 방어력과 지속력 대비 밸류에이션 안전마진이 두텁게 확보된 전통 산업재, 금융, 인프라 가치주들을 발굴해 안정적으로 투자합니다.'
  },
  'tom-bancroft': {
    nameKr: '톰 밴크로프트',
    description: '마카이라 파트너스(Makaira Partners)를 이끄는 집중 가치투자자. 복리 성장을 만드는 훌륭한 비즈니스 해자를 가졌으나 단기적 문제로 주가가 저평가된 15개 내외의 종목을 포트폴리오에 압축적으로 담아 장기 보존합니다.'
  },
  'greg-alexander': {
    nameKr: '그레그 알렉산더',
    description: '전설적인 세쿼이아 펀드(Ruane Cunniff)의 핵심 파트너 출신으로 개인 자산과 소수 펀드를 운용하는 대가. 복잡한 소음 대신 기업의 근본적인 장기 잉여현금흐름 창출력만을 극단적으로 분석해 헐값에 도달한 소수의 비즈니스에 초집중 투자합니다.'
  },
  'robert-vinall': {
    nameKr: '로버트 바이널',
    description: '독일 기반의 RV Capital을 이끄는 독립 가치투자자. 훌륭한 비즈니스 해자, 정직하고 유능한 경영진, 그리고 매력적인 주가라는 3대 원칙을 완벽히 충족하는 10여 개 글로벌 독과점 기업들을 선별하여 10년 이상 초장기 파트너십 투자를 이어갑니다.'
  },
  'mason-hawkins': {
    nameKr: '메이슨 호킨스',
    description: '사우스이스트 어셋(Southeastern Asset Management)을 설립한 밸류 인베스터. 내재가치 대비 40% 이상 저렴하게 거래되는 우량 자산 및 프랜차이즈 기업을 바텀업으로 발굴하고, 경영진과의 적극적인 소통 및 자본 재배치를 유도해 안전마진을 실현합니다.'
  }
};

async function run() {
  console.log('Starting migration part 2 to update more guru names and descriptions in Supabase...');

  let successCount = 0;
  let failCount = 0;

  for (const [guruId, info] of Object.entries(GURU_INFO_MAP_2)) {
    console.log(`Updating ${guruId} (${info.nameKr})...`);
    const { error } = await supabase
      .from('gurus')
      .update({
        name_kr: info.nameKr,
        description: info.description
      })
      .eq('id', guruId);

    if (error) {
      console.error(`Failed to update ${guruId}:`, error.message);
      failCount++;
    } else {
      console.log(`Successfully updated ${guruId}`);
      successCount++;
    }
  }

  console.log(`Migration part 2 finished. Success: ${successCount}, Fail: ${failCount}`);
}

run();
