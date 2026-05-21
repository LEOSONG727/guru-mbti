import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules helper for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to parse .env file
function loadEnv() {
  const envPath = path.resolve(__dirname, '../.env');
  if (!fs.existsSync(envPath)) {
    console.error('.env file not found at:', envPath);
    process.exit(1);
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      env[key] = value.trim();
    }
  });
  return env;
}

const env = loadEnv();
const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SUPABASE_KEY = env.SUPABASE_SERVICE_ROLE_KEY || env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Supabase URL or Key is missing from .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Fixed Core Map for famous gurus (manual tuning for high precision)
const SPECIAL_GURU_MAP = {
  'warren-buffett': 'FCVS',
  'li-lu': 'FCVS',
  'mohnish-pabrai': 'FCVS',
  'guy-spier': 'FCVS',
  'chuck-akre': 'FCVS',
  'benjamin-graham': 'FCVA',
  'walter-schloss': 'FCVA',
  'bill-ackman': 'FCGS',
  'terry-smith': 'FCGS',
  'christopher-hohn': 'FCGS',
  'nelson-peltz': 'FCGS',
  'peter-lynch': 'FCGA',
  'joel-greenblatt': 'FTVS',
  'david-einhorn': 'FTVA',
  'daniel-loeb': 'FTVA',
  'cathie-wood': 'FTGS',
  'chase-coleman': 'FTGS',
  'philip-fisher': 'FTGA',
  'ken-fisher': 'FTGA',
  'howard-marks': 'MCVS',
  'prem-watsa': 'MCVS',
  'ray-dalio': 'MCVA',
  'stanley-druckenmiller': 'MCGS',
  'george-soros': 'MCGA',
  'seth-klarman': 'MTVS',
  'jeremy-grantham': 'MTVA',
  'paul-tudor-jones': 'MTGS',
  'carl-icahn': 'FCGS',
  'bill-gates': 'FCGA',
  'meryl-witmer': 'FCVS',
  'glenn-greenberg': 'FCVS',
  'thomas-russo': 'FCVA',
  'john-paulson': 'MCVS',
  'stephen-mandel': 'FTGS',
  'donald-yacktman': 'FCVA',
  'robert-karr': 'FTGS',
  'alex-roepers': 'FCGS',
  'mario-gabelli': 'FCVA',
  'wallace-weitz': 'FCVA',
  'tom-gayner': 'FCVS',
  'paul-singer': 'MCGS',
  'jeffrey-ubben': 'FCGS',
  
  // New famous gurus manual override
  'david-tepper': 'MTGS',      // Appaloosa Management - Macro, Growth, Focused
  'michael-burry': 'FCVS',      // Scion Asset Management - Contraction/Value, Focused
  'daniel-loeb': 'FTVA',        // Third Point - Trend, Value, Distributed
  'stanley-druckenmiller': 'MCGS',
  'chamath-palihapitiya': 'FTGS',
  'bill-miller': 'FTGA',
  'ray-dalio': 'MCVA'
};

// Target sector tickers mapping
const TECH_GROWTH_TICKERS = new Set([
  'AAPL', 'MSFT', 'NVDA', 'GOOGL', 'GOOG', 'AMZN', 'META', 'TSLA', 'NFLX', 'AMD', 'AVGO', 'TSM', 'ASML',
  'QCOM', 'INTC', 'ADBE', 'CRM', 'NOW', 'ORCL', 'PANW', 'MU', 'AMAT', 'LRCX', 'KLAC',
  'PDD', 'MELI', 'SHOP', 'UBER', 'SQ', 'PYPL', 'SE', 'COIN', 'HOOD', 'SNOW', 'PLTR', 'NET', 'DDOG', 'MDB',
  'CRSP', 'MRNA', 'BNTX', 'ILMN', 'ISRG', 'VRTX', 'AMGN', 'REGN', 'LLY', 'NVO',
  'CSCO', 'TXN', 'QCOM', 'INTU', 'AMAT', 'LRCX', 'MU', 'ADI', 'ASML', 'LRCX', 'PANW', 'SNPS', 'CDNS', 'WDAY'
]);

const MACRO_ETF_FINANCIAL_TICKERS = new Set([
  'SPY', 'IVV', 'QQQ', 'DIA', 'IWM', 'VOO', 'VEA', 'VWO', 'EEM', 'GLD', 'SLV', 'GDX', 'OIH', 'XLE', 'XLF', 'XLU', 'KRE',
  'OXY', 'CVX', 'XOM', 'COP', 'MPC', 'PSX', 'WMB', 'SLB', 'HAL',
  'BAC', 'JPM', 'WFC', 'C', 'MS', 'GS', 'BRK.B', 'BRK.A', 'CB', 'PGR', 'ALL', 'SCHW', 'AXP', 'V', 'MA',
  'BLK', 'MET', 'PRU', 'AIG', 'COF', 'USB', 'PNC', 'TFC', 'FITB', 'HBAN'
]);

async function runClassification() {
  console.log('--- GURU INVESTOR DNA CLASSIFIER START ---');

  // 1. Fetch all gurus
  const { data: gurus, error: errGurus } = await supabase
    .from('gurus')
    .select('*');

  if (errGurus) {
    console.error('Error fetching gurus:', errGurus);
    return;
  }

  console.log(`Loaded ${gurus.length} gurus from DB.`);

  for (const guru of gurus) {
    const guruId = guru.id;

    // A. Check if there is a manual override
    if (SPECIAL_GURU_MAP[guruId]) {
      const targetMbti = SPECIAL_GURU_MAP[guruId];
      if (guru.mbti_type !== targetMbti) {
        console.log(`[OVERRIDE] Updating ${guruId} (${guru.name_kr}) -> MBTI: ${targetMbti} (Manual config)`);
        await supabase
          .from('gurus')
          .update({ mbti_type: targetMbti })
          .eq('id', guruId);
      }
      continue;
    }

    // B. Otherwise, fetch holdings to analyze
    const { data: holdings, error: errHoldings } = await supabase
      .from('guru_portfolios')
      .select('*')
      .eq('guru_id', guruId);

    if (errHoldings || !holdings || holdings.length === 0) {
      console.log(`[SKIP] No holdings found for ${guruId} (${guru.name_kr}). Staying with default: ${guru.mbti_type}`);
      continue;
    }

    // 2. Metrics calculation
    const numHoldings = holdings.length;
    
    // Sort by weight descending
    const sorted = [...holdings].sort((a, b) => Number(b.weight) - Number(a.weight));
    const top5Weight = sorted.slice(0, 5).reduce((sum, h) => sum + Number(h.weight), 0);
    const totalWeight = sorted.reduce((sum, h) => sum + Number(h.weight), 0) || 1;

    let techGrowthWeight = 0;
    let macroEtfWeight = 0;
    let etfCount = 0;

    sorted.forEach(h => {
      const ticker = h.ticker.toUpperCase();
      const weight = Number(h.weight);

      if (TECH_GROWTH_TICKERS.has(ticker)) {
        techGrowthWeight += weight;
      }
      if (MACRO_ETF_FINANCIAL_TICKERS.has(ticker)) {
        macroEtfWeight += weight;
      }
      if (['SPY', 'IVV', 'QQQ', 'VOO', 'IWM', 'XLF', 'XLE'].includes(ticker)) {
        etfCount++;
      }
    });

    const techRatio = techGrowthWeight / totalWeight;
    const macroRatio = macroEtfWeight / totalWeight;

    // 3. MBTI Axis classification
    // Axis 4: Focus vs Abundant (S vs A)
    // S: Sparse/Focused (< 22 holdings OR top 5 weight >= 48%)
    // A: Abundant/Distributed (>= 22 holdings AND top 5 weight < 48%)
    const axis4 = (numHoldings < 22 || top5Weight >= 48) ? 'S' : 'A';

    // Axis 3: Growth vs Value (G vs V)
    // G: Growth (Tech/Growth weight >= 35% of total weight)
    // V: Value (Tech/Growth weight < 35% of total weight)
    const axis3 = (techRatio >= 0.35) ? 'G' : 'V';

    // Axis 1: Macro vs Firm (M vs F)
    // M: Macro (Macro/Financial weight >= 40% OR ETF count >= 2 OR ETF total weight >= 15%)
    // F: Firm (Otherwise)
    const axis1 = (macroRatio >= 0.40 || etfCount >= 2) ? 'M' : 'F';

    // Axis 2: Trend vs Counter (T vs C)
    // T: Trend (Growth orientation + tech ratio >= 30% OR Macro orientation + ETF weight >= 20%)
    // C: Counter (Otherwise - Value orientation or concentrated counter-cyclical pickers)
    const axis2 = ((axis3 === 'G' && techRatio >= 0.30) || (axis1 === 'M' && macroRatio >= 0.30)) ? 'T' : 'C';

    const calculatedMbti = `${axis1}${axis2}${axis3}${axis4}`;

    if (guru.mbti_type !== calculatedMbti) {
      console.log(`[AUTO-CALC] Updating ${guruId} (${guru.name_kr}) -> MBTI: ${calculatedMbti} (Holdings: ${numHoldings}, Top5%: ${top5Weight.toFixed(1)}%, Tech%: ${(techRatio*100).toFixed(1)}%, Macro%: ${(macroRatio*100).toFixed(1)}%)`);
      await supabase
        .from('gurus')
        .update({ mbti_type: calculatedMbti })
        .eq('id', guruId);
    }
  }

  console.log('--- GURU INVESTOR DNA CLASSIFIER COMPLETED ---');
}

runClassification();
