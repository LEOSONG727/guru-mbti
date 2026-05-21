import axios from 'axios';
import * as cheerio from 'cheerio';
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

// Initialize Supabase Client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Fixed core mapping for existing 25 gurus (keeps original IDs and MBTI styles)
const GURU_MAPPING = {
  'warren-buffett': 'BRK',
  'li-lu': 'HC',
  'mohnish-pabrai': 'PI',
  'guy-spier': 'aq',
  'chuck-akre': 'AC',
  'bill-ackman': 'psc',
  'terry-smith': 'FS',
  'christopher-hohn': 'tci',
  'nelson-peltz': 'TF',
  'chase-coleman': 'TGM',
  'seth-klarman': 'BAUPOST',
  'david-einhorn': 'GLRE',
  'daniel-loeb': 'tp',
  'bill-gates': 'GFT',
  'glenn-greenberg': 'CCM',
  'thomas-russo': 'GR',
  'stephen-mandel': 'LPC',
  'donald-yacktman': 'YAM',
  'alex-roepers': 'AIM',
  'wallace-weitz': 'WIM',
  'tom-gayner': 'MKL',
  'howard-marks': 'oc',
  'prem-watsa': 'FFH',
  'carl-icahn': 'ic',
  'jeffrey-ubben': 'VA'
};

// Helper function to sleep (to avoid rate limits / blocks)
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 1. Crawl all active managers dynamically from Dataroma home.php
async function fetchDataromaManagers() {
  const url = 'https://www.dataroma.com/m/home.php';
  console.log(`\n[SCRAPE] Fetching list of all managers from ${url}...`);

  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const managers = [];
    const seenCodes = new Set();

    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.includes('holdings.php?m=')) {
        const urlParams = new URLSearchParams(href.split('?')[1]);
        const m = urlParams.get('m');
        const rawName = $(el).text().trim();

        if (m && rawName && !seenCodes.has(m)) {
          seenCodes.add(m);

          // Clean date labels, e.g. "Updated 15 May 2026"
          const cleanName = rawName.replace(/Updated\s+\d+\s+[A-Za-z]+\s+\d+/i, '').trim();

          // Split name and firm by " - "
          let nameEn = cleanName;
          let firmName = cleanName;
          if (cleanName.includes(' - ')) {
            const parts = cleanName.split(' - ');
            nameEn = parts[0].trim();
            firmName = parts.slice(1).join(' - ').trim();
          }

          // Resolve guru ID (keep existing core map IDs, otherwise slugify)
          let guruId = null;
          for (const [id, code] of Object.entries(GURU_MAPPING)) {
            if (code.toLowerCase() === m.toLowerCase()) {
              guruId = id;
              break;
            }
          }

          if (!guruId) {
            guruId = nameEn.toLowerCase()
              .replace(/[^a-z0-9\s-]/g, '')
              .trim()
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-');
          }

          managers.push({
            id: guruId,
            code: m,
            nameEn,
            firmName
          });
        }
      }
    });

    console.log(`[SCRAPE] Successfully found ${managers.length} managers on Dataroma.`);
    return managers;
  } catch (error) {
    console.error('[ERROR] Failed to fetch managers list:', error.message);
    return [];
  }
}

// 2. Synchronize managers info with Supabase 'gurus' table (safely without overwriting custom names/mbti)
async function syncGurus(managers) {
  console.log(`\n[DB] Synchronizing managers metadata into 'gurus' table...`);
  
  try {
    // Fetch all existing gurus in DB
    const { data: dbGurus, error: fetchError } = await supabase
      .from('gurus')
      .select('id, mbti_type');

    if (fetchError) throw fetchError;
    
    const dbGuruIds = new Set(dbGurus.map(g => g.id));
    const dbGuruMbtiMap = {};
    dbGurus.forEach(g => {
      dbGuruMbtiMap[g.id] = g.mbti_type;
    });

    const newGurusToInsert = [];

    for (const mgr of managers) {
      if (!dbGuruIds.has(mgr.id)) {
        // Prepare new guru metadata
        newGurusToInsert.push({
          id: mgr.id,
          name_en: mgr.nameEn,
          name_kr: mgr.nameEn, // Temp fallback to English name
          firm_name: mgr.firmName,
          cik: `DR_${mgr.code.toUpperCase()}`, // Safe dummy CIK bypass
          mbti_type: 'FCVS', // Temporary default MBTI
          description: `Dataroma에 등록된 해외 투자 거장인 ${mgr.nameEn} (${mgr.firmName})의 실시간 13F 공시 및 분기별 포트폴리오 자산 배분 내역을 추적합니다.`
        });
      }
    }

    if (newGurusToInsert.length > 0) {
      console.log(`[DB] Inserting ${newGurusToInsert.length} new managers to 'gurus' table...`);
      const { error: insertError } = await supabase
        .from('gurus')
        .insert(newGurusToInsert);

      if (insertError) throw insertError;
      console.log(`[DB] Successfully registered ${newGurusToInsert.length} new managers.`);
    } else {
      console.log(`[DB] All managers already exist in the 'gurus' table. No new inserts needed.`);
    }

    // Return mapping of DB guru_id to Dataroma manager code
    const fullMapping = {};
    managers.forEach(m => {
      fullMapping[m.id] = m.code;
    });
    return { fullMapping, dbGuruMbtiMap };
  } catch (error) {
    console.error('[DB ERROR] Failed to sync gurus metadata:', error.message);
    process.exit(1);
  }
}

// 3. Scrapes a single manager's holdings
async function scrapeManagerHoldings(guruId, managerCode) {
  const url = `https://www.dataroma.com/m/holdings.php?m=${managerCode}`;
  console.log(`\n[SCRAPE] Fetching holdings for ${guruId} (${managerCode}) from ${url}...`);

  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9,ko;q=0.8'
      }
    });

    const $ = cheerio.load(data);
    const holdings = [];

    const gridTable = $('table#grid');
    if (gridTable.length === 0) {
      console.log(`[WARN] No table with id "grid" found for ${guruId}. Skipping.`);
      return null;
    }

    gridTable.find('tr').each((i, row) => {
      if (i === 0) return; // Skip header

      const cells = $(row).find('td');
      if (cells.length < 7) return;

      const stockText = $(cells[1]).text().trim();
      const weightText = $(cells[2]).text().trim();
      const activityText = $(cells[3]).text().trim();
      const sharesText = $(cells[4]).text().trim();
      const priceText = $(cells[5]).text().trim();
      const valueText = $(cells[6]).text().trim();

      if (!stockText) return;

      let ticker = '';
      let companyName = '';
      if (stockText.includes(' - ')) {
        const parts = stockText.split(' - ');
        ticker = parts[0].trim();
        companyName = parts.slice(1).join(' - ').trim();
      } else {
        ticker = stockText;
        companyName = stockText;
      }

      const weight = parseFloat(weightText) || 0;
      const sharesHeld = parseInt(sharesText.replace(/,/g, ''), 10) || 0;
      const reportedPrice = parseFloat(priceText.replace(/[$,]/g, '')) || null;
      const valueUsd = parseInt(valueText.replace(/[$,]/g, ''), 10) || 0;

      let changeType = '유지';
      let changePercent = 0;

      if (activityText.toLowerCase().includes('new')) {
        changeType = '신규';
        changePercent = 100;
      } else if (activityText.toLowerCase().includes('add')) {
        changeType = '추가';
        const numMatch = activityText.match(/[\d.]+/);
        changePercent = numMatch ? parseFloat(numMatch[0]) : 0;
      } else if (activityText.toLowerCase().includes('reduce')) {
        changeType = '축소';
        const numMatch = activityText.match(/[\d.]+/);
        changePercent = numMatch ? parseFloat(numMatch[0]) : 0;
        if (changePercent === 100) {
          changeType = '청산';
        }
      }

      const isTeaser = i === 1; // Mark the largest holding as teaser

      holdings.push({
        guru_id: guruId,
        ticker,
        company_name: companyName,
        weight,
        shares_held: sharesHeld,
        value_usd: valueUsd,
        change_type: changeType,
        change_percent: changePercent,
        reported_price: reportedPrice,
        is_teaser: isTeaser
      });
    });

    console.log(`[SCRAPE] Found ${holdings.length} holdings for ${guruId}.`);
    return holdings;
  } catch (error) {
    console.error(`[ERROR] Failed to scrape holdings for ${guruId}:`, error.message);
    return null;
  }
}

// Helper and Constants for MBTI Classification in Scraper
const SPECIAL_GURU_MAP = {
  'warren-buffett': 'FCVS', 'li-lu': 'FCVS', 'mohnish-pabrai': 'FCVS', 'guy-spier': 'FCVS', 'chuck-akre': 'FCVS',
  'benjamin-graham': 'FCVA', 'walter-schloss': 'FCVA', 'bill-ackman': 'FCGS', 'terry-smith': 'FCGS',
  'christopher-hohn': 'FCGS', 'nelson-peltz': 'FCGS', 'peter-lynch': 'FCGA', 'joel-greenblatt': 'FTVS',
  'david-einhorn': 'FTVA', 'daniel-loeb': 'FTVA', 'cathie-wood': 'FTGS', 'chase-coleman': 'FTGS',
  'philip-fisher': 'FTGA', 'ken-fisher': 'FTGA', 'howard-marks': 'MCVS', 'prem-watsa': 'MCVS',
  'ray-dalio': 'MCVA', 'stanley-druckenmiller': 'MCGS', 'george-soros': 'MCGA', 'seth-klarman': 'MTVS',
  'jeremy-grantham': 'MTVA', 'paul-tudor-jones': 'MTGS', 'carl-icahn': 'FCGS', 'bill-gates': 'FCGA',
  'meryl-witmer': 'FCVS', 'glenn-greenberg': 'FCVS', 'thomas-russo': 'FCVA', 'john-paulson': 'MCVS',
  'stephen-mandel': 'FTGS', 'donald-yacktman': 'FCVA', 'robert-karr': 'FTGS', 'alex-roepers': 'FCGS',
  'mario-gabelli': 'FCVA', 'wallace-weitz': 'FCVA', 'tom-gayner': 'FCVS', 'paul-singer': 'MCGS',
  'jeffrey-ubben': 'FCGS',
  'david-tepper': 'MTGS', 'michael-burry': 'FCVS'
};

const TECH_GROWTH_TICKERS = new Set([
  'AAPL', 'MSFT', 'NVDA', 'GOOGL', 'GOOG', 'AMZN', 'META', 'TSLA', 'NFLX', 'AMD', 'AVGO', 'TSM', 'ASML',
  'QCOM', 'INTC', 'ADBE', 'CRM', 'NOW', 'ORCL', 'PANW', 'MU', 'AMAT', 'LRCX', 'KLAC',
  'PDD', 'MELI', 'SHOP', 'UBER', 'SQ', 'PYPL', 'SE', 'COIN', 'HOOD', 'SNOW', 'PLTR', 'NET', 'DDOG', 'MDB',
  'CRSP', 'MRNA', 'BNTX', 'ILMN', 'ISRG', 'VRTX', 'AMGN', 'REGN', 'LLY', 'NVO',
  'CSCO', 'TXN', 'INTU', 'ADI', 'SNPS', 'CDNS', 'WDAY'
]);

const MACRO_ETF_FINANCIAL_TICKERS = new Set([
  'SPY', 'IVV', 'QQQ', 'DIA', 'IWM', 'VOO', 'VEA', 'VWO', 'EEM', 'GLD', 'SLV', 'GDX', 'OIH', 'XLE', 'XLF', 'XLU', 'KRE',
  'OXY', 'CVX', 'XOM', 'COP', 'MPC', 'PSX', 'WMB', 'SLB', 'HAL',
  'BAC', 'JPM', 'WFC', 'C', 'MS', 'GS', 'BRK.B', 'BRK.A', 'CB', 'PGR', 'ALL', 'SCHW', 'AXP', 'V', 'MA',
  'BLK', 'MET', 'PRU', 'AIG', 'COF', 'USB', 'PNC', 'TFC', 'FITB', 'HBAN'
]);

function calculateGuruMbti(guruId, holdings) {
  if (SPECIAL_GURU_MAP[guruId]) {
    return SPECIAL_GURU_MAP[guruId];
  }

  const numHoldings = holdings.length;
  if (numHoldings === 0) return 'FCVS';

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

  const axis4 = (numHoldings < 22 || top5Weight >= 48) ? 'S' : 'A';
  const axis3 = (techRatio >= 0.35) ? 'G' : 'V';
  const axis1 = (macroRatio >= 0.40 || etfCount >= 2) ? 'M' : 'F';
  const axis2 = ((axis3 === 'G' && techRatio >= 0.30) || (axis1 === 'M' && macroRatio >= 0.30)) ? 'T' : 'C';

  return `${axis1}${axis2}${axis3}${axis4}`;
}

// 4. Sync holdings & auto-categorize MBTI for new gurus based on advanced analysis
async function syncManagerHoldings(guruId, holdings, isCoreGuru, currentMbti) {
  if (!holdings) return;

  console.log(`[DB] Syncing holdings for ${guruId} to Supabase...`);

  try {
    // 1. Delete all current holdings
    const { error: deleteError } = await supabase
      .from('guru_portfolios')
      .delete()
      .eq('guru_id', guruId);

    if (deleteError) {
      throw new Error(`Failed to delete old holdings: ${deleteError.message}`);
    }

    if (holdings.length === 0) {
      console.log(`[DB] Portfolio is empty. Cleared all holdings for ${guruId}.`);
      return;
    }

    // 2. Insert new holdings in chunks
    const chunkSize = 50;
    for (let i = 0; i < holdings.length; i += chunkSize) {
      const chunk = holdings.slice(i, i + chunkSize);
      const { error: insertError } = await supabase
        .from('guru_portfolios')
        .insert(chunk);

      if (insertError) {
        throw new Error(`Failed to insert holdings chunk: ${insertError.message}`);
      }
    }

    console.log(`[DB] Successfully synced ${holdings.length} holdings for ${guruId}.`);

    // 3. Dynamic MBTI Categorization for non-core gurus based on advanced analysis
    if (!isCoreGuru) {
      const targetMbti = calculateGuruMbti(guruId, holdings);
      if (currentMbti !== targetMbti) {
        console.log(`[MBTI] Updating MBTI category for ${guruId} to "${targetMbti}" (Holdings: ${holdings.length})`);
        const { error: mbtiError } = await supabase
          .from('gurus')
          .update({ mbti_type: targetMbti })
          .eq('id', guruId);

        if (mbtiError) {
          console.error(`[WARN] Failed to update MBTI for ${guruId}:`, mbtiError.message);
        }
      }
    }
  } catch (error) {
    console.error(`[DB ERROR] Sync failed for ${guruId}:`, error.message);
  }
}

// Main execution function
async function main() {
  console.log('=== DATAROMA SUPERINVESTORS ALL MANAGERS SCRAPER ===');
  
  // A. Fetch all managers dynamically from home.php
  const managers = await fetchDataromaManagers();
  if (managers.length === 0) {
    console.error('[FATAL] No managers found. Terminating scraper.');
    process.exit(1);
  }

  // B. Sync all managers info to gurus table and get mappings
  const { fullMapping, dbGuruMbtiMap } = await syncGurus(managers);

  // C. Execute Syncing
  const targetGuru = process.argv[2];

  if (targetGuru) {
    // Sync specific manager
    const managerCode = fullMapping[targetGuru];
    if (!managerCode) {
      console.error(`Guru ID "${targetGuru}" is not mapped or active in Dataroma.`);
      process.exit(1);
    }
    const holdings = await scrapeManagerHoldings(targetGuru, managerCode);
    const isCoreGuru = !!GURU_MAPPING[targetGuru];
    const currentMbti = dbGuruMbtiMap[targetGuru] || 'FCVS';
    await syncManagerHoldings(targetGuru, holdings, isCoreGuru, currentMbti);
  } else {
    // Loop through all found managers
    console.log(`\n[SYNC] Starting full synchronization loop for ${managers.length} managers...`);
    let count = 0;
    for (const mgr of managers) {
      count++;
      console.log(`\n[${count}/${managers.length}] Syncing ${mgr.id}...`);
      const holdings = await scrapeManagerHoldings(mgr.id, mgr.code);
      if (holdings) {
        const isCoreGuru = !!GURU_MAPPING[mgr.id];
        const currentMbti = dbGuruMbtiMap[mgr.id] || 'FCVS';
        await syncManagerHoldings(mgr.id, holdings, isCoreGuru, currentMbti);
      }
      console.log('Waiting 3 seconds to prevent IP block/rate limit...');
      await sleep(3000);
    }
  }

  console.log('\n=== ALL SCRAPING & SYNC COMPLETED ===');
}

main();
