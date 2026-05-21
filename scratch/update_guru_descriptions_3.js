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

const GURU_INFO_MAP_3 = {
  'ako-capital': {
    nameKr: '아코 캐피탈',
    description: '런던 기반의 최정상급 유럽 롱숏 헤지펀드. 철저한 기업 재무제표와 비즈니스 모델 분석을 거쳐, 지속 가능한 경쟁 우위와 높은 시장 점유율을 바탕으로 복리 수익을 내는 글로벌 우량 프랜차이즈 기업에 롱 포지션으로 투자합니다.'
  },
  'hillman-capital-management': {
    nameKr: '힐먼 캐피탈',
    description: '마크 힐먼(Mark Hillman)이 설립한 미국의 독립계 가치투자 운용사. 지속적인 경쟁 우위(Sustainable Competitive Advantage)를 가졌음에도 일시적인 악재로 심각하게 과소평가된 우량 대형주를 집중 매수해 턴어라운드를 누립니다.'
  },
  'polen-capital-management': {
    nameKr: '폴렌 캐피탈',
    description: '대표적인 고농축 성장주 투자사. 자기자본이익률(ROE)이 매우 높고 부채가 거의 없으며 장기 독과점력을 구축한 20개 내외의 슈퍼 퀄리티 성장 기업에 압축 투자하여 장기 복리 극대화를 지향합니다.'
  },
  'mairs-power-funds': {
    nameKr: '메이어스앤파워',
    description: '미네소타에 본사를 두고 1930년대부터 이어져 온 역사 깊은 가치투자 운용사. 미네소타 등 미국 중서부 지역의 강소 우량 제조 및 헬스케어 강소기업들을 발굴하여 수십 년간 극도로 낮은 회전율로 장기 보유하는 스타일을 고수합니다.'
  },
  'henry-ellenbogen': {
    nameKr: '헨리 엘렌보겐',
    description: '듀러블 캐피탈(Durable Capital Partners)을 이끄는 중소형 성장주 투자의 1인자. 전설적인 T. Rowe Price New Horizons 펀드 매니저 출신으로, 상장 초기 단계의 강소 혁신 기업과 사모 단계의 고성장 기업들을 조기에 발굴해 장기 복리 성장 과실을 독식합니다.'
  },
  'christopher-davis': {
    nameKr: '크리스토퍼 데이비스',
    description: '데이비스 펀드(Davis Funds)를 이끄는 3대째 금융 가치투자 명가. 견고한 비즈니스 해자, 정직한 경영진, 그리고 싼 주가라는 기준을 고수하며, 특히 자본 배분 역량이 뛰어난 글로벌 대형 금융 및 지주사에 장기 동행 베팅합니다.'
  },
  'torray-funds': {
    nameKr: '토레이 펀드',
    description: '로버트 토레이(Robert Torray)가 설립한 집중 가치투자 펀드. 일시적으로 시장의 외면을 받고 있는 우량 대형 업종 리더 기업 25~30개 내외를 엄선하여 포트폴리오에 압축적으로 담고, 시장의 소음을 완전히 차단한 채 인내하며 보유합니다.'
  },
  'robert-olstein': {
    nameKr: '로버트 올스틴',
    description: '올스틴 캐피탈(Olstein Capital Management)의 창립자이자 회계 분석의 대가. 보고된 순이익이 아닌 철저하게 조정된 \'자유현금흐름\'을 발라내어 회계 장부 이면의 진정한 현금 흐름 가치 대비 헐값인 주식을 엄선해 역발상으로 매수합니다.'
  },
  'william-von-mueffling': {
    nameKr: '윌리엄 폰 뫼플링',
    description: '캔틸론 캐피탈(Cantillon Capital Management)의 수장. 자기자본이익률(ROE)이 뛰어나고 우수한 비즈니스 해자를 가졌으나, 합리적인 밸류에이션에 거래되는 전 세계 퀄리티 가치주들을 엄격히 스크리닝하여 리스크를 낮춘 안정적인 복리 투자를 구현합니다.'
  }
};

async function run() {
  console.log('Starting migration part 3 to update final guru names and descriptions in Supabase...');

  let successCount = 0;
  let failCount = 0;

  for (const [guruId, info] of Object.entries(GURU_INFO_MAP_3)) {
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

  console.log(`Migration part 3 finished. Success: ${successCount}, Fail: ${failCount}`);
}

run();
