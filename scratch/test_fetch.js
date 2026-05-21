import axios from 'axios';
import * as cheerio from 'cheerio';

async function testFetchManagers() {
  try {
    const url = 'https://www.dataroma.com/m/home.php';
    console.log(`Fetching ${url}...`);
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    const managers = [];

    // holdings.php?m=이 포함된 링크들을 모두 검색
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      if (href && href.includes('holdings.php?m=')) {
        const urlParams = new URLSearchParams(href.split('?')[1]);
        const m = urlParams.get('m');
        const name = $(el).text().trim();
        if (m && name) {
          managers.push({ m, name });
        }
      }
    });

    console.log(`Found ${managers.length} managers:`);
    console.log(JSON.stringify(managers, null, 2));

  } catch (error) {
    console.error('Error fetching:', error.message);
  }
}

testFetchManagers();
