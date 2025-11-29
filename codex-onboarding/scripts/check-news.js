const { chromium } = require('playwright');

async function main() {
  const url = 'https://news.naver.com/section/100';
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Try to grab the first headline link on the main page (fallback to any news read link)
  const firstLink = page.locator('a[href*="/article/"]').first();
  await firstLink.waitFor({ timeout: 15000, state: 'visible' });
  const href = await firstLink.getAttribute('href');
  if (!href) {
    console.error('No first news link found');
    await browser.close();
    process.exit(1);
  }

  await page.goto(href, { waitUntil: 'domcontentloaded' });
  console.log('Navigated to article:', page.url());

  const titleLocator = page.locator('h2.media_end_head_headline, h1').first();
  await titleLocator.waitFor({ timeout: 20000, state: 'visible' });
  const articleRoot = page.locator('#dic_area, #newsct_article');
  const rootHandle = articleRoot.first();
  await rootHandle.waitFor({ timeout: 20000, state: 'attached' });

  const title = (await titleLocator.textContent() || '').trim();
  const bodyText = (await rootHandle.innerText())?.trim() || '';
  const paragraph = bodyText.split(/\n+/).find((t) => t.trim().length > 0)?.trim() || '';

  console.log('Title:', title.slice(0, 120));
  console.log('Paragraph:', paragraph.slice(0, 200));

  if (!title || !paragraph) {
    console.error('Empty title or paragraph — failing');
    await browser.close();
    process.exit(1);
  }

  console.log('Non-empty title and paragraph — OK');
  await browser.close();
}

main().catch((err) => {
  console.error('Error running check:', err);
  process.exit(1);
});
