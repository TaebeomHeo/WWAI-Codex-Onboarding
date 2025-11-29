# Gemini 스타일 가이드

이 문서는 이 프로젝트에서 Gemini CLI와 협업할 때 일관된 스타일을 유지하기 위한 가이드라인을 정의합니다.

## 일반
- 모든 사용자 대상의 설명 및 문서는 한국어로 작성합니다.
- 파일 인코딩은 UTF-8을 사용합니다.
- 디렉토리 및 파일 이름은 소문자와 스네이크 케이스(`_`)를 사용합니다.

## 프로젝트 구조
- 각 주요 주제(예: `code-onboarding`, `gemini-onboarding`)는 최상위 디렉토리로 분리합니다.
- `gemini-onboarding` 프로젝트 내에서는 다음과 같은 구조를 따릅니다.
  - `data/`: 실습에 사용될 데이터 파일 (예: `.csv`, `.xlsx`)
  - `exercises/`: 마크다운 형식의 실습 과제 파일
  - `scripts/`: Python 또는 JavaScript로 작성된 해결 스크립트
  - `tmp/`: 스크립트 실행 결과물 또는 임시 파일

## 실습 파일 (`exercises/*.md`)
- 파일 이름은 `숫자_주제.md` 형식을 따릅니다. (예: `1_hello_gemini.md`)
- 모든 실습 파일에는 다음과 같은 섹션을 포함하여 명확하게 내용을 구성합니다.
  - `## 목표`: 실습을 통해 달성해야 할 구체적인 목표
  - `## 지침`: 목표 달성을 위한 단계별 안내
  - `## 예상 결과`: 실습 완료 후 기대되는 결과물

## 스크립트 (`scripts/`)
- 데이터 처리 작업에는 주로 Python과 `pandas` 라이브러리를 사용합니다.
- 웹 자동화 및 스크래핑 작업에는 `playwright` MCP 또는 관련 라이브러리를 사용합니다.
- 스크립트 파일 이름은 작업 내용을 명확하게 설명하도록 작성합니다. (예: `process_pharmacies.py`)

## Git 및 커밋
- 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/) 명세를 따릅니다.
- 타입은 `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` 등을 사용합니다.
- 제목과 본문은 한국어로 작성하여 변경 사항을 명확하게 설명합니다.
  - 예시: `feat: Gemini 온보딩 교육 자료 추가`
