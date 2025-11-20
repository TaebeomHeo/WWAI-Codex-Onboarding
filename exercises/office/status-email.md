# Office Exercise: Status Email / 상태 보고 이메일

## Context / 배경
- Weekly status to manager and stakeholders. / 매니저 및 이해관계자 주간 보고
- Tone: concise, polite, bilingual KR-first with short EN translation. / 정중·간결, 한글 우선 + 짧은 영문
- Include: progress, risks, asks, next steps. / 진행상황, 리스크, 요청, 다음 단계

## Task / 과제
1) Take bullet notes (your project) and ask Codex to draft email in KR. / 불릿 노트를 한글 이메일로 작성 요청  
2) Add 3-line EN summary for non-KR readers. / 비한국어 독자용 3줄 영문 요약 추가  
3) Ask Codex to shorten to 120 words without losing risks. / 리스크 유지하며 120단어로 축약  
4) Verification: have Codex highlight unclear items and propose clarifying questions. / 모호 항목 지적 및 질문 생성

## Starter Prompt / 시작 프롬프트
```
Role: 프로젝트 리드. Task: 주간 상태 이메일 작성.
Inputs: {불릿 노트 삽입}
Tone: 간결/정중, jargon 최소화. Audience: KR 우선, EN 보조.
Format: 섹션 - 진행, 리스크(RAG), 요청사항, 다음 단계; 끝에 3줄 EN summary.
Constraints: 6줄 이내 주요 본문, 과도한 수식어 금지.
Verification: 모호한 부분 3개와 명확화 질문을 작성.
```
