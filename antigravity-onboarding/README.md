# Antigravity CLI 온보딩

이 프로젝트는 Antigravity 에이전트를 사용하는 방법을 배우기 위한 교육 자료를 제공합니다.

## 소개

Antigravity는 강력한 에이전트형 코딩 어시스턴트입니다. 이 온보딩 자료는 Antigravity의 기본 사용법과 워크플로우를 익히는 데 도움을 줍니다.

## 시작하기

Antigravity가 활성화된 환경에서 실습을 진행하세요.

## 실습

## 디렉토리 구조 및 활용법

이 프로젝트는 크게 두 가지 폴더로 구성되어 있습니다.

### 1. `exercises/` (실습 문제집)

단계별 학습을 위한 가이드 문서들입니다. 각 문서는 하나의 독립적인 주제나 기술을 다룹니다.

- **초급**: 에이전트와의 기본 대화 및 파일 조작
- **중급**: 실제 업무 도구(Jira, Email) 연동 및 맥락(Context) 활용
- **고급**: 대량 데이터 처리 구조 설계 (Architecting)

### 2. `templates/` (지시문 라이브러리)

실습에서 사용하거나, 실무에서 바로 쓸 수 있는 **재사용 가능한 프롬프트(Instruction File)** 모음입니다.

- 실습을 진행하며 여러분만의 지시문을 만들 때, 이 템플릿들을 복사하여 시작점으로 활용하세요.
- 마치 코딩할 때 라이브러리를 가져다 쓰듯, 에이전트에게 "이 템플릿대로 일해"라고 지시할 수 있습니다.

## 실습 가이드

1. [실습 1: Hello Antigravity!](./exercises/1_hello_antigravity.md)
2. [실습 2: 실전 Context Prompting (Jira & Email)](./exercises/2_context_prompting_real.md)
3. [실습 3: 작업의 시스템화 (Instruction File)](./exercises/3_systematizing_instructions.md)
4. [실습 4: 긴 맥락 관리 (Email History)](./exercises/4_managing_context_history.md)
5. [실습 5: 에이전트와 아키텍처 설계하기 (Jira & SQLite)](./exercises/5_architecting_with_agent.md)

## 부록

- [Antigravity App 100% 활용하기 (공유 및 히스토리 관리)](./APPENDIX.md)
