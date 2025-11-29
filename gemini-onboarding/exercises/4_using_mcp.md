# 실습 4: Managed Components (MCP) 사용하기

이 실습에서는 Gemini CLI의 능력을 확장하는 강력한 기능인 Managed Components (MCP)에 대해 배웁니다.

## 목표

- MCP의 기본 개념과 역할을 이해합니다.
- `playwright/mcp` 컴포넌트를 설치하고 설정하는 방법을 익힙니다.

## MCP란 무엇인가요?

Managed Components (MCP)는 Gemini CLI의 핵심 기능을 확장하는 플러그인 또는 애드온입니다. MCP를 사용하면 Gemini가 기본적으로 할 수 없는 특별한 작업들을 수행할 수 있게 됩니다. 예를 들어,

- 웹 브라우저를 제어하여 웹 스크래핑 또는 자동화된 테스트 수행
- 데이터베이스에 연결하여 데이터 쿼리
- 특정 API와 연동하여 서비스 이용

등의 작업을 MCP를 통해 Gemini에게 지시할 수 있습니다. 각 MCP는 특정 도구나 서비스와 상호작용할 수 있는 능력(tool)을 Gemini에게 제공합니다.

이 실습에서는 웹 브라우저를 제어하는 능력을 제공하는 `playwright/mcp`를 설치하고 설정해보겠습니다.

## `playwright/mcp` 설치 및 설정

`playwright/mcp`는 Microsoft에서 개발한 Playwright 라이브러리를 사용하여 Chromium, Firefox, WebKit과 같은 최신 웹 브라우저를 제어하는 기능을 Gemini에게 제공합니다.

### 지침

1.  **MCP 설치하기**

    Gemini CLI에게 `playwright/mcp`를 설치하도록 요청하세요. 다음 프롬프트를 사용할 수 있습니다.

    > "playwright/mcp를 설치해줘."

    Gemini는 이 명령을 받으면, 필요한 파일을 다운로드하고 MCP를 Gemini의 도구 세트에 추가할 것입니다.

2.  **설치 확인하기**

    MCP가 성공적으로 설치되었는지 확인하기 위해, Gemini에게 현재 사용 가능한 도구 목록을 보여달라고 요청할 수 있습니다.

    > "현재 사용 가능한 도구 목록을 보여줘."

    목록에 `playwright`와 관련된 도구가 보인다면, 성공적으로 설치된 것입니다.

3.  **브라우저 설치하기**

    Playwright는 실제 웹 브라우저를 제어하므로, 제어할 브라우저를 설치해야 합니다. `playwright/mcp`는 이 과정 또한 간단하게 만들어줍니다. 다음 프롬프트를 사용하여 Playwright가 필요로 하는 브라우저들을 설치하세요.

    > "playwright mcp를 사용하여 필요한 브라우저를 설치해줘."

    이 명령은 Playwright가 지원하는 기본 브라우저들(Chromium 등)을 설치합니다.

이제 `playwright/mcp`를 사용할 모든 준비가 완료되었습니다. 다음 실습에서는 이 MCP를 사용하여 실제 웹사이트로 이동하고 간단한 작업을 수행하는 방법을 배워보겠습니다.
