# Environment Setup / 환경 설정 가이드

Visual Studio Code, Codex 확장 설치, Agent Access 부여, Python/Node 설치까지 단계별로 안내합니다. (주 사용 환경: macOS; Windows는 대체 경로 표기)

## 1) VS Code 설치
- macOS: https://code.visualstudio.com → Stable 다운로드 후 `/Applications`에 넣기.
- Windows: 같은 링크에서 User Installer 사용, 기본 경로 설치.
- 실행 후 처음 뜨는 “Settings Sync”는 건너뛰어도 됨.

## 2) Codex Extension 설치
- VS Code 열기 → 사이드바 Extensions 아이콘 → 검색창에 `Codex` → “Codex (by OpenAI)” 설치.
- 설치 후 Reload가 뜨면 클릭해 재시작.

## 3) Agent Access 권한 부여
- VS Code 명령 팔레트(`⌘⇧P` / `Ctrl+Shift+P`) → “Codex: Sign In” 실행.
- 로그인 브라우저 창에서 안내에 따라 승인 → 돌아오면 VS Code 우측 하단에 연결 완료 토스트 확인.
- 필요 시 “Codex: Check Access”로 상태 확인. 조직/워크스페이스 허용이 안 되면 관리자에 요청.

## 4) Python 설치/확인
- macOS(HOME): `brew install python` (Homebrew 없으면 https://brew.sh 로 설치).  
  확인: 터미널에서 `python3 --version` → `pip3 --version`.
- Windows: https://www.python.org/downloads/ 에서 3.11+ 설치 시 “Add python.exe to PATH” 체크.  
  확인: `python --version`, `pip --version`.
- VS Code Python 확장도 함께 설치: Extensions에서 `Python` by Microsoft.

## 5) Node.js 설치/확인
- 권장: nvm 사용.
  - macOS: `brew install nvm` 후 `~/.nvm` 초기화 안내대로 .zshrc 설정 → `nvm install --lts`.
  - Windows: `nvm-windows` https://github.com/coreybutler/nvm-windows 릴리스 설치 후 `nvm install lts`.
- 확인: `node -v`, `npm -v`. 필요 시 `npm install -g yarn` 선택적으로 설치.

## 6) VS Code 추천 설정 (선택)
- 파일 인코딩 UTF-8, 끝 공백 trim: Settings → “files.trimTrailingWhitespace” on.
- 포맷 온 세이브: Settings → “editor.formatOnSave” on (Python/JS 포매터 사전 설정 필요).
- 터미널 셸: macOS 기본 zsh 사용, Windows는 PowerShell보다 Git Bash/WSL 권장.

## 7) 간단 작동 테스트
- Codex: 명령 팔레트 → “Codex: New Chat” 후 “두 줄 요약 테스트” 같은 간단한 요청.
- Python: 터미널 `python3 - <<'PY'\nprint('hello codex')\nPY`
- Node: 터미널 `node -e "console.log('hello codex')"`

## 문제 발생 시 체크리스트
- 네트워크/프록시: 회사 프록시가 있으면 VS Code 설정에서 프록시 입력.
- 권한: macOS Gatekeeper로 앱이 막히면 우클릭 → 열기.
- PATH: 터미널 재시작 후에도 `python3`/`node`가 안 잡히면 셸 설정(.zshrc/.bashrc) 적용 확인.
