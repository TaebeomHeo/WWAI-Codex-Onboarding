# Agent Demo: Web Text Check (EN)

## Goal
- Use Codex agent to open a live page, extract specific text, and fail if empty.

## Scenario
- URL: `https://news.naver.com/`.
- Target 1: title of the first news article on the main page (find first headline link, click, then read title).
- Target 2: first paragraph of the article body.
- Expectation: both title and paragraph must be non-empty; print them to console. If either is empty, exit code 1; otherwise 0.

## Prompt to Agent (copy-paste)
```
Task: Use Playwright to fetch the first news article title and first body paragraph from news.naver.com, and assert they are non-empty.
URL: https://news.naver.com/
Selectors: first article link on the main page -> navigate -> title/body on article page.
Expectation: title and first paragraph must not be empty.
Requirements:
- Use TypeScript or JavaScript with Playwright; set exit code 1 on failure.
- Include npx playwright install chromium (no global install).
- Steps: 1) find first news link and open it; 2) grab title and first body paragraph; 3) log results; 4) if either is empty, log lengths/content and exit 1, else exit 0.
- Print example run command (e.g., `node scripts/check-news.js` or `npx ts-node scripts/check-news.ts`).
- Before running, summarize the plan in one line.
Verification: summarize logs/results after the run.
```

## How to run with agent
1) Open Codex agent in VS Code and paste the prompt.  
2) Approve the plan the agent states.  
3) Agent will likely run `npm init -y`, `npx playwright install chromium`, then create/run `scripts/check-news.js` (or .ts).  
4) Check logs for title/paragraph snippets, lengths, and success/fail status.  
5) If selectors change, ask the agent to adjust (e.g., different main headline class).  
6) Rerun by asking “Re-run the script” or “Convert to TypeScript and run again.”

## Expected Agent Actions
- Setup: `npm init -y` (if needed), `npx playwright install chromium`.
- Create `scripts/check-news.js` or `.ts`:
  - Go to `https://news.naver.com/` → select first headline link (e.g., `a.cjs_news_a`; if missing, try another first-news selector) → click/navigate.
  - On article page, title selector: `h2.media_end_head_headline` (fallback: `h1`).
  - Body first paragraph selector: `#newsct_article p` (first).
  - Trim strings, ensure length>0; on failure log lengths/content and `process.exit(1)`.
- Run via `node scripts/check-news.js` or `npx ts-node scripts/check-news.ts`.
- Log snippets of title/body to prove capture.

## Manual rerun (if needed)
```bash
npm init -y
npx playwright install chromium
cat > scripts/check-news.js <<'JS'
const { chromium } = require('playwright');
const url = 'https://news.naver.com/';
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  const firstLink = await page.locator('a.cjs_news_a').first();
  const href = await firstLink.getAttribute('href');
  if (!href) { console.error('no first link'); process.exit(1); }
  await page.goto(href, { waitUntil: 'domcontentloaded' });
  const title = (await page.locator('h2.media_end_head_headline, h1').first().textContent() || '').trim();
  const para = (await page.locator('#newsct_article p').first().textContent() || '').trim();
  console.log('Title:', title.slice(0, 80));
  console.log('Paragraph:', para.slice(0, 120));
  if (!title || !para) { console.error('empty title or paragraph'); await browser.close(); process.exit(1); }
  await browser.close();
  console.log('OK');
})();
JS
node scripts/check-news.js
```
