// 13F Holdings Auto-updater
// Usage: node scratch/generate_guru_reports.js [--dry-run]
// Scrapes Dataroma for each guru in GURU_MAPPING, updates src/data/guruReports.js

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── GURU MAPPING ────────────────────────────────────────────────────────────
const GURU_MAPPING = {
  'warren-buffett': 'BRK', 'li-lu': 'HC', 'mohnish-pabrai': 'PI',
  'guy-spier': 'aq', 'chuck-akre': 'AC', 'bill-ackman': 'psc',
  'terry-smith': 'FS', 'christopher-hohn': 'tci', 'nelson-peltz': 'TF',
  'chase-coleman': 'TGM', 'seth-klarman': 'BAUPOST', 'david-einhorn': 'GLRE',
  'daniel-loeb': 'tp', 'bill-gates': 'GFT', 'glenn-greenberg': 'CCM',
  'thomas-russo': 'GR', 'stephen-mandel': 'LPC', 'donald-yacktman': 'YAM',
  'alex-roepers': 'AIM', 'wallace-weitz': 'WIM', 'tom-gayner': 'MKL',
  'howard-marks': 'oc', 'prem-watsa': 'FFH', 'carl-icahn': 'ic',
  'jeffrey-ubben': 'VA', 'joel-greenblatt': 'GOTHAM', 'cathie-wood': 'ARK',
  'ken-fisher': 'FI', 'ray-dalio': 'BD', 'stanley-druckenmiller': 'DUQ',
  'george-soros': 'SFM', 'jeremy-grantham': 'GMO', 'paul-tudor-jones': 'TUDOR',
  'meryl-witmer': 'EC', 'john-paulson': 'JPC', 'robert-karr': 'JOHO',
  'mario-gabelli': 'MG', 'paul-singer': 'EL',
};

// ─── TICKER → SECTOR MAP ─────────────────────────────────────────────────────
const TICKER_SECTOR = {
  // IT 플랫폼
  'AAPL': 'IT 플랫폼', 'MSFT': 'IT 플랫폼', 'GOOGL': 'IT 플랫폼', 'GOOG': 'IT 플랫폼',
  'META': 'IT 플랫폼', 'AMZN': 'IT 플랫폼', 'NFLX': 'IT 플랫폼', 'UBER': 'IT 플랫폼',
  'SHOP': 'IT 플랫폼', 'BKNG': 'IT 플랫폼', 'ABNB': 'IT 플랫폼',
  // IT 반도체
  'NVDA': 'IT 반도체', 'AMD': 'IT 반도체', 'INTC': 'IT 반도체', 'AVGO': 'IT 반도체',
  'TSM': 'IT 반도체', 'QCOM': 'IT 반도체', 'MU': 'IT 반도체', 'AMAT': 'IT 반도체',
  'LRCX': 'IT 반도체', 'KLAC': 'IT 반도체', 'ASML': 'IT 반도체',
  // IT 소프트웨어
  'CRM': 'IT 소프트웨어', 'NOW': 'IT 소프트웨어', 'ORCL': 'IT 소프트웨어',
  'ADBE': 'IT 소프트웨어', 'INTU': 'IT 소프트웨어', 'SNOW': 'IT 소프트웨어',
  'PLTR': 'IT 소프트웨어', 'PANW': 'IT 소프트웨어', 'NET': 'IT 소프트웨어',
  // 금융/보험
  'BAC': '금융/보험', 'JPM': '금융/보험', 'WFC': '금융/보험', 'GS': '금융/보험',
  'MS': '금융/보험', 'AXP': '금융/보험', 'V': '금융/보험', 'MA': '금융/보험',
  'BRK.B': '금융/보험', 'BRK.A': '금융/보험', 'CB': '금융/보험', 'PGR': '금융/보험',
  'SCHW': '금융/보험', 'BLK': '금융/보험', 'C': '금융/보험', 'COF': '금융/보험',
  'USB': '금융/보험', 'PNC': '금융/보험', 'TFC': '금융/보험', 'AIG': '금융/보험',
  // 에너지/소재
  'CVX': '에너지/소재', 'XOM': '에너지/소재', 'OXY': '에너지/소재', 'COP': '에너지/소재',
  'SLB': '에너지/소재', 'HAL': '에너지/소재', 'MPC': '에너지/소재', 'PSX': '에너지/소재',
  'WMB': '에너지/소재', 'GLD': '에너지/소재', 'SLV': '에너지/소재',
  // 헬스케어
  'LLY': '헬스케어', 'NVO': '헬스케어', 'UNH': '헬스케어', 'JNJ': '헬스케어',
  'PFE': '헬스케어', 'ABBV': '헬스케어', 'MRK': '헬스케어', 'AMGN': '헬스케어',
  'VRTX': '헬스케어', 'ISRG': '헬스케어', 'MRNA': '헬스케어', 'REGN': '헬스케어',
  // 소비재/유통
  'KO': '소비재/유통', 'PEP': '소비재/유통', 'PG': '소비재/유통', 'WMT': '소비재/유통',
  'COST': '소비재/유통', 'MCD': '소비재/유통', 'SBUX': '소비재/유통', 'NKE': '소비재/유통',
  'TSLA': '소비재/유통', 'GM': '소비재/유통', 'F': '소비재/유통', 'HD': '소비재/유통',
  'LOW': '소비재/유통', 'TGT': '소비재/유통',
  // 인프라/통신
  'T': '인프라/통신', 'VZ': '인프라/통신', 'TMUS': '인프라/통신',
  'DIS': '인프라/통신', 'CMCSA': '인프라/통신',
};

// ─── SECTOR COLORS ────────────────────────────────────────────────────────────
const SECTOR_COLORS = {
  'IT 플랫폼': '#0EA5E9', 'IT 반도체': '#8B5CF6', 'IT 소프트웨어': '#6366F1',
  '금융/보험': '#3F5BFF', '에너지/소재': '#10B981', '헬스케어': '#EC4899',
  '소비재/유통': '#F59E0B', '인프라/통신': '#94A3B8', '기타': '#CBD5E1',
};

// ─── QUARTER DETECTION ───────────────────────────────────────────────────────
function detectQuarter() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const day = now.getDate();

  let q, qYear;
  if ((month === 5 && day >= 15) || month === 6 || month === 7) {
    q = 1; qYear = year;
  } else if ((month === 8 && day >= 14) || month === 9 || month === 10) {
    q = 2; qYear = year;
  } else if ((month === 11 && day >= 14) || month === 12) {
    q = 3; qYear = year;
  } else if ((month === 2 && day >= 14) || month === 3 || month === 4 || (month === 1)) {
    q = 4; qYear = (month <= 4) ? year - 1 : year;
  } else {
    q = 4; qYear = year - 1;
  }

  // Format filing date: 45 days after quarter end
  const quarterEndMonth = q * 3; // Mar=3, Jun=6, Sep=9, Dec=12
  const quarterEndDate = new Date(qYear, quarterEndMonth, 0); // last day of quarter
  const filingDate = new Date(quarterEndDate.getTime() + 45 * 24 * 60 * 60 * 1000);
  const filingStr = `${filingDate.getFullYear()}.${String(filingDate.getMonth() + 1).padStart(2, '0')}.${String(filingDate.getDate()).padStart(2, '0')}`;

  return {
    q, year: qYear,
    label: `${qYear}년 ${q}분기 13F`,
    filingDate: filingStr,
  };
}

// ─── SLEEP ───────────────────────────────────────────────────────────────────
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── CHANGE TYPE PARSER ───────────────────────────────────────────────────────
function parseChangeType(rawActivity) {
  if (!rawActivity) return { changeType: '유지', changePercent: 0 };
  const s = rawActivity.trim().toLowerCase();
  if (s === '' || s === 'no change') return { changeType: '유지', changePercent: 0 };
  if (s.startsWith('new')) return { changeType: '신규', changePercent: 0 };
  if (s.startsWith('sold out') || s.startsWith('sell out')) return { changeType: '청산', changePercent: 100 };

  const addMatch = s.match(/add\s+([\d.]+)%/);
  if (addMatch) return { changeType: '추가', changePercent: parseFloat(addMatch[1]) };

  const reduceMatch = s.match(/reduce\s+([\d.]+)%/);
  if (reduceMatch) {
    const pct = parseFloat(reduceMatch[1]);
    return { changeType: pct >= 99 ? '청산' : '축소', changePercent: pct };
  }

  return { changeType: '유지', changePercent: 0 };
}

// ─── FORMAT CHANGE ───────────────────────────────────────────────────────────
function formatChange(changeType, changePercent) {
  if (!changeType || changeType === '유지') return '유지';
  if (changeType === '신규') return '신규';
  if (changeType === '청산') return '청산';
  if (changeType === '추가') return `추가 (+${changePercent.toFixed(0)}%)`;
  if (changeType === '축소') return changePercent >= 100 ? '청산' : `축소 (-${changePercent.toFixed(0)}%)`;
  return changeType;
}

// ─── SECTOR MIX DERIVATION ───────────────────────────────────────────────────
function deriveSectorMix(holdings) {
  const sectorWeights = {};
  holdings.forEach(h => {
    const sector = TICKER_SECTOR[h.ticker] || '기타';
    sectorWeights[sector] = (sectorWeights[sector] || 0) + h.weight;
  });
  const total = Math.max(Object.values(sectorWeights).reduce((s, v) => s + v, 0), 1);
  return Object.entries(sectorWeights)
    .filter(([, v]) => v > 1)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([name, value]) => ({
      name,
      value: Math.round(value * 100 / total),
      color: SECTOR_COLORS[name] || '#CBD5E1',
    }));
}

// ─── SCRAPE HOLDINGS ─────────────────────────────────────────────────────────
async function scrapeHoldings(guruId, code) {
  const url = `https://www.dataroma.com/m/holdings.php?m=${code}`;
  try {
    const response = await axios.get(url, {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    });

    const $ = cheerio.load(response.data);
    const holdings = [];

    $('#grid tbody tr').each((_, row) => {
      const cells = $(row).find('td');
      if (cells.length < 7) return;

      const ticker = $(cells[0]).text().trim();
      const name = $(cells[1]).text().trim();
      const weightStr = $(cells[2]).text().trim().replace('%', '');
      const activityRaw = $(cells[3]).text().trim();
      const sharesStr = $(cells[4]).text().trim().replace(/,/g, '');
      const reportedPriceStr = $(cells[5]).text().trim().replace(/[$,]/g, '');
      const valueStr = $(cells[6]).text().trim().replace(/[$,KMB]/g, '');

      if (!ticker || !name) return;

      const weight = parseFloat(weightStr) || 0;
      const sharesHeld = parseInt(sharesStr) || 0;
      const reportedPrice = parseFloat(reportedPriceStr) || 0;

      // Parse value (may be in millions: "$1,234M" or billions: "$1.2B")
      let valueUsd = 0;
      const rawValue = $(cells[6]).text().trim().replace(/[$,]/g, '');
      if (rawValue.endsWith('B')) {
        valueUsd = parseFloat(rawValue) * 1e9;
      } else if (rawValue.endsWith('M')) {
        valueUsd = parseFloat(rawValue) * 1e6;
      } else if (rawValue.endsWith('K')) {
        valueUsd = parseFloat(rawValue) * 1e3;
      } else {
        valueUsd = parseFloat(rawValue) || 0;
      }

      const { changeType, changePercent } = parseChangeType(activityRaw);

      holdings.push({
        ticker,
        name,
        weight,
        changeType,
        changePercent,
        sharesHeld,
        reportedPrice,
        valueUsd,
      });
    });

    return holdings.length > 0 ? holdings : null;
  } catch (err) {
    console.log(`  → ERROR scraping ${guruId} (${code}): ${err.message}`);
    return null;
  }
}

// ─── GET EXISTING REASON ─────────────────────────────────────────────────────
function getExistingReason(ticker, changeType, existing) {
  if (!existing) return null;
  const allHoldings = [existing.teaserTicker, ...(existing.premiumHoldings || [])].filter(Boolean);
  const found = allHoldings.find(h => h.ticker === ticker);
  if (found?.reason && (changeType === '유지' || found.ticker === ticker)) {
    return found.reason;
  }
  return null;
}

// ─── GENERATE OUTPUT FILE ────────────────────────────────────────────────────
function generateOutputFile(reports, existingFileContent) {
  // Find the index of `export const GURU_REPORTS = {` in the existing file
  const guruReportsMarker = 'export const GURU_REPORTS = {';
  const markerIdx = existingFileContent.indexOf(guruReportsMarker);

  // Preserve everything before the GURU_REPORTS export (comments + imports)
  const header = markerIdx >= 0
    ? existingFileContent.slice(0, markerIdx)
    : `// GURU-MBTI Individual 13F Reports\nimport { GURUS_LIST } from "./gurusList.js";\n\n`;

  // Strip old date comment from header if present; inject fresh one
  const cleanHeader = header.replace(
    /\/\/ Last updated:.*\n/,
    `// Last updated: ${new Date().toISOString().slice(0, 10)}\n`,
  );
  const finalHeader = cleanHeader.includes('// Last updated:')
    ? cleanHeader
    : cleanHeader + `// Last updated: ${new Date().toISOString().slice(0, 10)}\n`;

  // Find suffix: everything after the closing `};` of GURU_REPORTS
  // Strategy: find the last `\nexport function` that comes after the GURU_REPORTS marker
  let suffix = '';
  if (markerIdx >= 0) {
    const afterMarker = existingFileContent.slice(markerIdx);
    const exportFuncIdx = afterMarker.indexOf('\nexport function');
    if (exportFuncIdx > 0) {
      suffix = afterMarker.slice(exportFuncIdx);
    }
  }

  // Build the GURU_REPORTS object lines
  const reportLines = [`export const GURU_REPORTS = {`];
  for (const [guruId, report] of Object.entries(reports)) {
    const serialized = JSON.stringify(report, null, 4)
      .split('\n')
      .map((l, i) => (i === 0 ? l : '    ' + l))
      .join('\n');
    reportLines.push(`  "${guruId}": ${serialized},`);
    reportLines.push('');
  }
  reportLines.push(`};`);

  return finalHeader + reportLines.join('\n') + '\n' + suffix;
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
async function main() {
  const DRY_RUN = process.argv.includes('--dry-run');
  const quarterInfo = detectQuarter();
  console.log(`\n=== 13F UPDATE: ${quarterInfo.label} (공시일: ${quarterInfo.filingDate}) ===\n`);

  // Load existing reports for editorial content preservation
  const { GURU_REPORTS: existingReports } = await import('../src/data/guruReports.js');

  // Load guru list for firm names
  const { GURUS_LIST } = await import('../src/data/gurusList.js');
  const guruMap = {};
  GURUS_LIST.forEach(g => { guruMap[g.id] = g; });

  const updatedReports = { ...existingReports };
  let successCount = 0;
  let failCount = 0;

  const guruIds = Object.keys(GURU_MAPPING);
  for (let i = 0; i < guruIds.length; i++) {
    const guruId = guruIds[i];
    const code = GURU_MAPPING[guruId];
    const guru = guruMap[guruId];
    const existing = existingReports[guruId];

    console.log(`[${i + 1}/${guruIds.length}] ${guruId} (${code})...`);

    const holdings = await scrapeHoldings(guruId, code);
    if (!holdings || holdings.length === 0) {
      console.log(`  → SKIP (scrape failed or empty, keeping existing)`);
      failCount++;
      if (i < guruIds.length - 1) await sleep(3000);
      continue;
    }

    // Build teaserTicker (top holding)
    const topHolding = holdings[0];
    const teaserTicker = {
      ticker: topHolding.ticker,
      name: topHolding.name,
      weight: topHolding.weight,
      change: formatChange(topHolding.changeType, topHolding.changePercent),
      changePercent: topHolding.changePercent,
      sharesHeld: topHolding.sharesHeld,
      reportedPrice: topHolding.reportedPrice,
      valueUsd: topHolding.valueUsd,
      reason:
        getExistingReason(topHolding.ticker, topHolding.changeType, existing) ||
        `${quarterInfo.label} 최대 비중 보유 포지션`,
    };

    // Build premiumHoldings (remaining holdings)
    const premiumHoldings = holdings.slice(1).map(h => ({
      ticker: h.ticker,
      name: h.name,
      weight: h.weight,
      change: formatChange(h.changeType, h.changePercent),
      changePercent: h.changePercent,
      sharesHeld: h.sharesHeld,
      reportedPrice: h.reportedPrice,
      valueUsd: h.valueUsd,
      reason:
        getExistingReason(h.ticker, h.changeType, existing) ||
        `${quarterInfo.label} 포지션`,
    }));

    updatedReports[guruId] = {
      hasChanges: holdings.some(h => h.changeType !== '유지'),
      firm: guru?.firmName || existing?.firm || '',
      quarter: quarterInfo.label,
      filingDate: quarterInfo.filingDate,
      teaserTicker,
      premiumHoldings,
      sectorMix: deriveSectorMix(holdings),
      trendData: existing?.trendData || [],
      bearCase: existing?.bearCase || [],
      actionPlan: existing?.actionPlan || [],
    };

    successCount++;
    console.log(`  → OK (${holdings.length} holdings)`);

    if (i < guruIds.length - 1) await sleep(3000);
  }

  console.log(`\n=== DONE: ${successCount} updated, ${failCount} skipped ===`);

  // Read the existing file content for suffix extraction
  const outPath = path.resolve(__dirname, '../src/data/guruReports.js');
  const existingFileContent = fs.readFileSync(outPath, 'utf8');
  const output = generateOutputFile(updatedReports, existingFileContent);

  if (DRY_RUN) {
    console.log('\n[DRY-RUN] Output preview (first 50 lines):');
    console.log(output.split('\n').slice(0, 50).join('\n'));
  } else {
    fs.writeFileSync(outPath, output, 'utf8');
    console.log(`\nWritten to ${outPath}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
