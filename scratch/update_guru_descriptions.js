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

const GURU_INFO_MAP = {
  'david-tepper': {
    nameKr: '데이비드 테퍼',
    description: '디스트레스트 디트(부실 채권)와 거시 경제(매크로) 베팅의 절대 강자. 시장의 공포 국면에서 자산 가치가 훼손된 기업이나 부실 자산을 헐값에 매수하고, 거시 경제 변곡점을 포착해 기술주와 원자재에 전방위 투자합니다.'
  },
  'michael-burry': {
    nameKr: '마이클 버리',
    description: '영화 \'빅쇼트\'의 실제 주인공으로 잘 알려진 역발상 가치투자자. 철저한 재무제표 분석을 바탕으로 시장의 왜곡을 포착하며, 저평가된 소형 가치주를 발굴하는 동시에 과대평가된 자산에 대한 과감한 매도(숏) 베팅을 주저하지 않습니다.'
  },
  'bill-miller': {
    nameKr: '빌 밀러',
    description: '15년 연속 S&P 500 지수를 아웃퍼폼한 전설적인 펀드매니저. 정통적인 가치투자의 범주를 확장하여 아마존 같은 고성장 테크 기업의 미래 장기 현금흐름 가치를 선제적으로 판단해 투자한 \'성장형 가치투자\'의 개척자입니다.'
  },
  'sarah-ketterer': {
    nameKr: '사라 케터러',
    description: '정교한 양적 분석과 철저한 바텀업 리서치를 병행하는 글로벌 가치투자 대가. 경기 순환 국면에서 소외받거나 지배구조 개선 여력이 큰 글로벌 대형 가치주를 엄선하여 분산 투자합니다.'
  },
  'francis-chou': {
    nameKr: '프란시스 초우',
    description: '캐나다의 워렌 버핏으로 불리는 딥 밸류(Deep Value) 투자가. 심각한 재정난이나 시장의 오해로 주가가 순자산가치보다 훨씬 밑도는 기업들을 발굴하여 두터운 안전마진을 확보한 후 장기 보유합니다.'
  },
  'john-rogers': {
    nameKr: '존 로저스',
    description: '미국 최초의 아프리카계 투자자문사 설립자이자 소형 가치투자 대가. \'인내심이 이긴다\'는 철학 하에 시장의 유행에서 비껴나 있는 독점적 소형 소비재 및 서비스 기업을 저평가 국면에서 매집해 장기 복리 효과를 누립니다.'
  },
  'dodge-cox-funds': {
    nameKr: '닷지앤콕스',
    description: '1930년대 설립 이래 철저한 위원회 합의제와 바텀업 분석을 고수해 온 유서 깊은 독립 운용사. 저평가된 펀더멘털 우량 기업에 대해 3~5년 이상의 장기 관점으로 인내하며 투자하는 정통 가치투자 펀드입니다.'
  },
  'lee-ainslie': {
    nameKr: '리 에인슬리',
    description: '타이거 펀드의 창립자 줄리안 로버트슨의 제자(타이거 키드) 중 하나. 철저한 기업 분석을 기반으로 주식 롱/숏(매수/매도)을 동시에 구사하여 거시 변동성을 제어하며, 강력한 비즈니스 모델을 가진 우량 기업을 롱 포지션으로 선호합니다.'
  },
  'harry-burn': {
    nameKr: '해리 번',
    description: '40년 이상 가치투자를 지향해 온 사운드 쇼어의 공동 설립자. 단기적 실적 부진이나 소음으로 인해 일시적으로 저평가된 업계 선두급 대형 우량 기업만을 선별해 확실한 안전마진을 두고 투자합니다.'
  },
  'tweedy-browne': {
    nameKr: '트위디 브라운',
    description: '벤저민 그레이엄의 브로커리지로 시작해 가치투자 철학을 수십 년간 계승해 온 명가. 내재가치 대비 30% 이상 할인된 전 세계 우량 자산주와 배당 매력이 높은 글로벌 기업을 중심으로 안전마진 가치투자를 수행합니다.'
  },
  'lindsell-train': {
    nameKr: '린셀 트레인',
    description: '영국의 장기 복리 투자 명가. 지속적이고 강력한 브랜드 파워와 지식재산권(IP)을 가져 경기 변동에 상관없이 높은 자본이익률(ROE)을 유지하는 소비재, 미디어, 금융 서비스 독점주에 집중 투자합니다.'
  },
  'samantha-mclemore': {
    nameKr: '사만다 맥레모어',
    description: '전설적인 투자자 빌 밀러와 20년 이상 함께 일하며 철학을 이어받은 가치투자자. 단기 소음으로 시장에서 극단적으로 소외된 기회주의적 가치주와 장기 현금흐름 잠재력이 큰 혁신 성장주를 함께 포섭하는 유연한 투자 방식을 가집니다.'
  },
  'first-eagle-investment-management': {
    nameKr: '퍼스트 이글',
    description: '절대 수익과 하방 방어를 핵심 가치로 삼는 글로벌 가치투자 전문 운용사. 인플레이션 방어를 위한 금(Gold) 실물 자산 배분과 함께, 시장 오해로 저평가된 퀄리티 비즈니스를 발굴하여 글로벌 분산 포트폴리오를 구성합니다.'
  },
  'richard-pzena': {
    nameKr: '리처드 프제나',
    description: '극단적으로 저평가된 딥 밸류(Deep Value) 투자 스타일의 선구자. 일시적인 실적 훼손으로 밸류에이션 최하단에 도달했으나, 업계 장기 경쟁력을 잃지 않은 대형 우량 기업들을 체계적으로 매수해 턴어라운드를 기다립니다.'
  },
  'ruane-cunniff-lp': {
    nameKr: '루안 커니프',
    description: '워렌 버핏이 파트너십을 청산할 때 고객들에게 직접 추천한 세쿼이아 펀드(Sequoia Fund)의 운용사. 장기 성장 동력과 강력한 진입 장벽을 보유한 초우량 독점 기업 소수에 집중 투자하는 전통 가치투자를 집행합니다.'
  },
  'david-katz': {
    nameKr: '데이비드 카츠',
    description: '합리적 가격의 퀄리티 가치투자(Quality Value)를 지향하는 투자자. 브랜드 파워와 강력한 대차대조표를 가진 대형 우량주가 단기적 소외로 밸류에이션 매력이 발생할 때 적극 편입하는 전략을 취합니다.'
  },
  'greenhaven-associates': {
    nameKr: '그린헤이븐',
    description: 'Edgar Wachenheim이 이끄는 고농축 바텀업 가치투자사. 극도의 저PBR/저PER를 보이며 재무 안전성이 뛰어나고 미래 이익 성장이 담보된 15~20개 내외의 대형 제조, 금융, 주택건설 우량 기업에 초집중 투자합니다.'
  },
  'jensen-investment-management': {
    nameKr: '젠슨 인베스트먼트',
    description: '최소 10년 연속 자기자본이익률(ROE) 15% 이상을 달성한 극소수의 우량 초우량 기업만을 투자 대상으로 삼는 퀄리티 성장 펀드. 진입 장벽과 풍부한 잉여현금흐름을 바탕으로 장기 복리 수익을 추구합니다.'
  },
  'first-pacific-advisors': {
    nameKr: 'FPA (퍼스트 퍼시픽)',
    description: '\'안전마진을 통한 절대 수익 추구\'를 철학으로 삼는 역발상 가치투자 운용사. 주식뿐만 아니라 채권, 현금 등 자산군 경계를 넘나들며 시장 과열기에는 보수적으로 현금을 확보하고, 침체기에 저평가 우량 자산을 공격적으로 매입합니다.'
  },
  'third-avenue-management': {
    nameKr: '서드 애비뉴',
    description: '전설적인 딥 밸류 투자가 마틴 휘트먼이 설립한 자산운용사. 대차대조표의 자산 가치를 극도로 정밀히 분석하여 안전하고 건전하며 저렴한(Safe and Cheap) 중소형 실물 자산주 및 부실채권에 역발상으로 투자합니다.'
  },
  'john-armitage': {
    nameKr: '존 아미티지',
    description: '런던에 기반을 둔 유럽 최정상급 롱숏 에퀴티 펀드 매니저. 철저한 기업 펀더멘털 분석을 통해 구조적 성장이 예상되는 플랫폼, 유통, 소비재 기업들을 롱 포지션으로 선호하며 거시적 헷지를 조화롭게 운용합니다.'
  },
  'vulcan-value-partners': {
    nameKr: '벌칸 밸류',
    description: '비즈니스 해자와 안전마진의 엄격한 결합을 추구하는 가치투자 펀드. 내재가치 대비 30% 이상 할인된 상태에서 거래되는 지배적인 과점 기업만을 선별해 집중 투자하며, 가치가 내재가치에 수렴하면 기계적으로 매도합니다.'
  },
  'altarock-partners': {
    nameKr: '알타록 파트너스',
    description: '\'버핏-멍거\' 스타일을 극단적으로 추구하는 초집중 퀄리티 가치투자사. 독점적인 네트워크 효과나 전환 비용 등의 비즈니스 해자를 지닌 10개 미만의 글로벌 슈퍼 우량주에 조 단위 자금을 실어 장기 복리 효과를 거둡니다.'
  },
  'triple-frond-partners': {
    nameKr: '트리플 프론드',
    description: '가치와 성장의 조화를 중시하는 독립계 집중 투자사. 우수한 비즈니스 모델, 영속적인 진입 장벽, 주주 친화적인 경영진을 갖춘 글로벌 디지털 소비재 및 소프트웨어 서비스 거인들에 장기 매수/보유 관점으로 베팅합니다.'
  },
  'josh-tarasoff': {
    nameKr: '조쉬 타라소프',
    description: '가치 지향적 퀄리티 투자자. 저렴하면서도 자본 효율성이 높고 장기 성장이 가능한 기업 30여 개에 균등 배분하여 투자함으로써, 개별 종목 리스크를 제어하면서도 강력한 알파 수익을 창출하는 것을 목표로 합니다.'
  },
  'christopher-bloomstran': {
    nameKr: '크리스토퍼 블룸스트란',
    description: '버크셔 해서웨이에 대한 심층 분석으로 월가에서 매우 존경받는 전통 가치투자 대가. 인플레이션 저항력과 자본 배분 능력이 탁월한 펀더멘털 강소 우량 기업을 저평가 국면에서 엄격히 매입합니다.'
  },
  'david-rolfe': {
    nameKr: '데이비드 롤프',
    description: '\'성장하는 비즈니스를 저렴한 가격에 매수\'하는 퀄리티 성장 가치투자가. 시장 점유율 1위이면서 복리 성장 기회를 지속 창출하는 20개 내외의 슈퍼 독과점 기업(애플, 비자 등)에 강력히 초집중 베팅합니다.'
  },
  'kahn-brothers-group': {
    nameKr: '칸 브라더스',
    description: '벤저민 그레이엄의 직접적 조수였던 어빙 칸이 설립하여 3대째 계승해 온 유서 깊은 딥 밸류 운용사. 파산 리스크가 없는 튼튼한 재무구조를 가졌으나 일시적 소외로 내재 자산 가치 대비 헐값인 지주사, 헬스케어, 자재주를 중심으로 장기 보유합니다.'
  }
};

async function run() {
  console.log('Starting migration to update guru names and descriptions in Supabase...');

  let successCount = 0;
  let failCount = 0;

  for (const [guruId, info] of Object.entries(GURU_INFO_MAP)) {
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

  console.log(`Migration finished. Success: ${successCount}, Fail: ${failCount}`);
}

run();
