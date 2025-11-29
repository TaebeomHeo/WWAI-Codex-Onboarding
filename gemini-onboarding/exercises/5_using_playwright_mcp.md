# 실습 5: Playwright MCP로 웹사이트 제어하기

이 실습에서는 이전 실습에서 설치한 `playwright/mcp`를 사용하여 실제로 웹사이트를 제어하는 방법을 배웁니다.

## 목표

- `playwright/mcp`를 사용하여 특정 URL로 이동하는 방법을 익힙니다.
- 웹페이지의 스크린샷을 찍어 파일로 저장하는 방법을 배웁니다.

## `playwright/mcp` 사용법

`playwright/mcp`는 Gemini에게 웹 브라우저를 열고, 특정 페이지로 이동하고, 페이지의 요소를 클릭하거나, 스크린샷을 찍는 등의 다양한 작업을 지시할 수 있는 도구를 제공합니다.

이 실습에서는 간단한 두 가지 작업을 수행해보겠습니다.
1. Google 홈페이지로 이동하기
2. 홈페이지 화면을 스크린샷으로 찍어 `tmp` 폴더에 저장하기

## 지침

Gemini CLI에게 `playwright/mcp`를 사용하여 다음 작업을 수행하도록 요청하세요. 이 모든 과정을 하나의 프롬프트로 지시할 수 있습니다.

**프롬프트 예시:**

> "playwright를 사용해서 `https://www.google.com`으로 이동한 다음, 전체 페이지 스크린샷을 찍어서 `gemini-onboarding/tmp/google_screenshot.png` 파일로 저장해줘."

Gemini는 이 지시를 받으면 다음과 같은 순서로 작업을 수행할 것입니다.

1.  내부적으로 Playwright를 사용하여 웹 브라우저(예: Chromium)를 실행합니다.
2.  브라우저에서 `https://www.google.com` 주소로 이동합니다.
3.  페이지 로딩이 완료되면, 보이는 전체 화면을 스크린샷으로 찍습니다.
4.  스크린샷 이미지를 `gemini-onboarding/tmp/google_screenshot.png` 파일로 저장합니다.

## 예상 결과

실습을 완료하면, `gemini-onboarding/tmp` 디렉토리 안에 `google_screenshot.png` 파일이 생성되어야 합니다. 이 파일을 열어보면 Google 홈페이지의 모습이 담겨 있어야 합니다.

이제 Gemini CLI에게 작업을 지시하여 이 실습을 완료해보세요!
