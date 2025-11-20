# Prompt Pattern / 프롬프트 패턴

Use this scaffold; fill both KR/EN as needed. / 아래 틀을 상황에 맞게 채우세요.

```
Role / 역할: {e.g., QA lead, ops analyst}
Task / 작업: {what needs to be produced}
Context / 배경: {system, audience, data ranges}
Constraints / 제한: {length, tone, must/avoid, tools}
Format / 형식: {table columns, bullet rules, JSON caution}
Examples / 예시: {1–2 mini samples if helpful}
Verification / 검증: {ask to list 3 likely mistakes; include self-check}
Language / 언어: {KR or EN or both; specify tone (formal/polite/concise)}
Output / 출력: {state expected structure}
```

Mini example / 미니 예시:
```
Role: QA lead.
Task: Produce 8 test cases for login with MFA fallback.
Context: Web app, roles: user/admin; browsers: Chrome/Safari.
Constraints: Mention preconditions; keep each step <=2 bullets.
Format: Table -> ID | Title | Steps | Data | Expected | Notes.
Verification: List missing risks; mark High/Med/Low.
Language: Korean primary, add English ID keywords only.
```
