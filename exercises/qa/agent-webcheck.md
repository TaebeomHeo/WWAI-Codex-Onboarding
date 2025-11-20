# Agent Demo: Web Text Check / 에이전트 데모: 웹 페이지 텍스트 검증

## 목표 / Goal
- Codex 에이전트가 실제 페이지를 열어 특정 요소의 텍스트를 읽고 기대값과 비교. / Have Codex open a page, read text, compare to expected.

## 시나리오 / Scenario
- URL: `https://news.naver.com/`.  
- 검사 대상 1: 메인 첫 기사 카드의 제목 텍스트. (첫 기사 링크를 찾아 그 페이지로 이동 후 확인)  
- 검사 대상 2: 기사 본문 첫 문단 텍스트.  
- 기대: 빈 문자열이 아니어야 하고, 수집한 제목/본문을 콘솔에 출력. (동적 값이므로 정합성 체크는 “비어 있지 않음” 기준)  
- 결과: 둘 중 하나라도 비어 있으면 exit code 1, 아니면 0.

## 에이전트에게 줄 프롬프트 / Prompt to Agent
```
작업: Playwright로 news.naver.com의 첫 기사 제목과 본문 첫 문단을 가져와 빈 값 여부를 검증.
URL: https://news.naver.com/
선택자: 메인 첫 기사 링크 → 기사 페이지 제목/본문
기대값: 제목/본문이 비어 있지 않아야 함
요구사항:
- TypeScript나 JavaScript 중 편한 쪽 사용, Playwright 실행 후 종료 코드로 일치/불일치를 표시.
- 의존성은 npx playwright 설치 스텝을 포함해 달라(전역 설치말고 로컬).
- 1) 메인 페이지에서 첫 기사 링크를 찾고 클릭 → 2) 기사 페이지에서 제목/본문 첫 문단을 가져오고 둘 다 비어 있지 않은지 확인 → 3) 결과 로그 후 미충족 시 exit code 1.
- 불일치 시 실제 텍스트 길이/내용을 출력하고 exit code 1로 종료.
- 실행 명령 예시도 출력(예: `npx ts-node scripts/check-landing.ts` 또는 `node scripts/check-landing.js`).
- 실행 전에 무엇을 할지 한 줄로 요약한 뒤 진행해줘.
검증: 실행 결과/로그를 요약해서 보여줘.
```

## 기대 행동 / Expected Agent Actions
- Playwright 준비: `npm init -y` (필요 시), `npx playwright install chromium`.  
- `scripts/check-news.js` 또는 `.ts` 생성:  
  - 페이지 이동(`https://news.naver.com/`) → 첫 기사 앵커 선택(예: `a.cjs_news_a` 또는 페이지의 첫 기사 링크; 없으면 대안 선택자 시도) → 클릭/이동.  
  - 기사 페이지에서 제목 선택자: `h2.media_end_head_headline` (fallback: `h1`).  
  - 본문 첫 문단 선택자: `#newsct_article p` (첫 번째).  
  - 둘 다 trim 후 길이>0인지 확인; 실패 시 기대/실제 길이 로그 후 `process.exit(1)`.  
- 실행 예시: `node scripts/check-news.js` 또는 `npx ts-node scripts/check-news.ts`.  
- 로그에 제목/본문 일부를 출력해 수집 성공을 보여주기. / Log snippet.

## 검증 포인트 / Verification
- 스크립트가 실패 시 종료 코드 1을 반환하는지.  
- 선택자가 없는 경우의 예외 처리(try/catch) 여부.  
- 기대/실제 값을 로그에 남기는지 확인.
