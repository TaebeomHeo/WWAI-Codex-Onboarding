# Chat vs Agent / 챗형 vs 에이전트형

## 핵심 차이
- **챗형(ChatGPT 스타일)**: 대화/설명/아이디어 생성에 특화. 텍스트만 반환, 실행은 사람이 수행. / Text-only, explain/brainstorm/summarize.
- **에이전트형(Codex 스타일)**: 지시를 받아 실제 명령/스크립트/파일 수정 실행까지 진행. / Can act: run commands, edit files, call tools.

## 장점(에이전트형 강조)
- 실행 자동화: “폴더 정리하고 리드미 업데이트” 같은 반복 작업을 직접 수행. / Can do the work, not just describe it.
- 일관성/속도: 스크립트·명령 실수를 줄이고 반복 작업 시간을 단축. / Faster, fewer manual errors.
- 상태 기반 대응: 실행 실패나 오류 로그를 보고 즉시 수정 시도. / Uses feedback from commands to fix issues.
- 재현 가능: 실행 기록(명령/패치)으로 감사·재현이 쉬움. / Traceable change history.

## 언제 챗형을 쓰고 언제 에이전트형을 쓸까?
- 챗형: 아이데이션, 개념 설명, 초안 문서/테스트 아이디어, 정책 확인. / For thinking and drafting.
- 에이전트형: 로컬 파일 변환/정리, 테스트 스크립트 실행, 리포트 생성 자동화, 코드·데이터 일괄 수정. / For doing and applying.

## 안전 수칙(에이전트형)
- 명령 실행 전 요약 요청: “무엇을 할지 한 줄로 말해줘.” / Ask to restate planned actions.
- 변경 범위 제한: 작업 폴더/파일을 명시. / Scope the writable area.
- 위험 명령 금지: `rm -rf`, `git reset --hard` 등은 요구되지 않으면 금지. / Avoid destructive commands.
- 검증 단계 포함: 실행 후 로그/변경 요약, 롤백 계획 확인. / Require post-run summary.

## 예시 비교
- 챗형: “테스트 케이스 5개만 표로 써줘.” → 표만 전달. / Delivers table only.
- 에이전트형: “테스트 케이스를 `tests/login.md`에 추가하고 중복 제거해.” → 파일 수정 + 중복 제거 수행. / Edits file directly.

## 교육 시 강조 포인트
- 시작은 챗형으로 사고 정리 → 에이전트형으로 실행 위임. / Think with chat, do with agent.
- 명령/파일 경로/제한을 구체적으로 말하면 품질↑, 위험↓. / Specific scope improves safety.
- 에이전트가 잘못했을 때: 로그 확인 → 수정 지시 → 필요 시 사람이 직접 검증. / Close the loop with human review.
