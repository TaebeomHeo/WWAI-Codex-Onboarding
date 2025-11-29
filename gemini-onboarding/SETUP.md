# 개발 환경 설정

이 문서에서는 Gemini CLI 사용을 위한 개발 환경을 설정하는 방법을 안내합니다.

## 1. Visual Studio Code 설치

Visual Studio Code (VS Code)는 코드 작성을 위한 텍스트 에디터입니다. 아래 링크에서 자신의 운영체제에 맞는 버전을 다운로드하여 설치하세요.

- [Visual Studio Code 다운로드](https://code.visualstudio.com/download)

## 2. Node.js 설치

Node.js는 JavaScript를 서버 환경에서 실행할 수 있게 해주는 런타임입니다. Gemini CLI의 일부 기능은 Node.js를 필요로 할 수 있습니다. 아래 링크에서 LTS (Long Term Support) 버전을 다운로드하여 설치하세요.

- [Node.js 다운로드](https://nodejs.org/ko/download/)

Node.js를 설치하면 패키지 관리자인 npm (Node Package Manager)도 함께 설치됩니다. 터미널 또는 명령 프롬프트에서 다음 명령어를 실행하여 설치가 잘 되었는지 확인할 수 있습니다.

```bash
node -v
npm -v
```

## 3. Gemini CLI 설치

Gemini CLI는 Google AI Studio를 통해 설치할 수 있습니다. 자세한 설치 방법은 공식 문서를 참고하세요. 일반적으로 다음 단계를 따릅니다.

1.  Google AI Studio에 방문하여 API 키를 발급받습니다.
2.  사용하는 운영체제에 맞는 Gemini CLI 바이너리를 다운로드하거나, `npm`을 통해 설치합니다.

**npm을 통한 설치 (권장):**

터미널 또는 명령 프롬프트에서 다음 명령어를 실행하여 Gemini CLI를 전역으로 설치합니다.

```bash
npm install -g @google/generative-ai
```

설치가 완료되면, 터미널에서 `gemini` 명령어를 사용하여 CLI를 실행할 수 있습니다. API 키를 설정하는 등 초기 설정 과정은 공식 문서를 참고하여 진행해주세요.

---

모든 설치가 완료되면, Gemini CLI를 사용하여 과제를 해결할 준비가 된 것입니다!
