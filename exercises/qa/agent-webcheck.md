# Agent Demo: Web Text Check / 에이전트 데모: 웹 페이지 텍스트 검증

## 목표 / Goal
- Codex 에이전트가 실제 페이지를 열어 특정 요소의 텍스트를 읽고 기대값과 비교. / Have Codex open a page, read text, compare to expected.

## 시나리오 / Scenario
- URL: `https://example.com/landing` (실제 대상 URL로 교체).  
- 검사 대상: CSS 선택자 `h1.hero-title`.  
- 기대 텍스트: `"Welcome to Example"`.  
- 결과: 일치하면 성공 로그, 불일치하면 차이를 보고하고 종료 코드를 1로 반환.

## 에이전트에게 줄 프롬프트 / Prompt to Agent
```
작업: Playwright로 페이지 텍스트를 검증하는 스크립트를 만들어 실행.
URL: https://example.com/landing
선택자: h1.hero-title
기대값: "Welcome to Example"
요구사항:
- TypeScript나 JavaScript 중 편한 쪽 사용, Playwright 실행 후 종료 코드로 일치/불일치를 표시.
- 의존성은 npx playwright 설치 스텝을 포함해 달라(전역 설치말고 로컬).
- 불일치 시 실제 텍스트를 출력하고 exit code 1로 종료.
- 실행 명령 예시도 출력(예: `npx ts-node scripts/check-landing.ts` 또는 `node scripts/check-landing.js`).
- 실행 전에 무엇을 할지 한 줄로 요약한 뒤 진행해줘.
검증: 실행 결과/로그를 요약해서 보여줘.
```

## 기대 행동 / Expected Agent Actions
- Playwright 준비: `npm init -y` (필요 시), `npx playwright install chromium`.  
- `scripts/check-landing.ts` 또는 `.js` 생성:  
  - Chromium 실행 → 페이지 이동 → `page.textContent('h1.hero-title')` → `trim()` → 기대값 비교.  
  - 일치하지 않으면 `console.error`로 기대/실제 출력 후 `process.exit(1)`.  
- 실행 예시: `node scripts/check-landing.js` 또는 `npx ts-node scripts/check-landing.ts`.  
- 로그에 일치 여부와 실제 텍스트 표시. / Log expected vs actual.

## 검증 포인트 / Verification
- 스크립트가 실패 시 종료 코드 1을 반환하는지.  
- 선택자가 없는 경우의 예외 처리(try/catch) 여부.  
- 기대/실제 값을 로그에 남기는지 확인.
