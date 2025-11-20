# 03. Software Testing Automation / 소프트웨어 테스트 자동화

## Goals / 목표
- Map requirements to test ideas and cases with Codex. / 요구사항을 테스트 아이디어/케이스로 전환
- Produce defect reports quickly and clearly. / 신속·명확한 결함 보고서 작성
- Use Codex for data setup, edge coverage, and summarization. / 데이터 셋업, 엣지 커버, 요약 지원

## Agenda / 아젠다
1) Test coverage thinking: acceptance vs edge vs negative. / 커버리지 사고법  
2) Prompting for test cases: steps, data, expected. / 테스트 케이스 프롬프트  
3) Bug report skeleton + evidence checklist. / 버그 리포트 뼈대와 증빙 체크리스트  
4) Hands-on: login flow, payment calc, API response. / 실습: 로그인, 결제 계산, API 응답  
5) Agent demo: 특정 페이지 텍스트를 읽어 기대값 검증. / 에이전트가 웹 텍스트 확인  
6) Review loop: have Codex self-audit cases. / 리뷰 루프: 셀프 감사

## Exercises / 실습
- Expand baseline login cases with edge data; dedupe. / 로그인 기본/엣지 케이스 확장
- Turn failing scenario into defect report (KR+EN). / 실패 시나리오를 한/영 버그 리포트로 변환
- Ask for missing risks; generate clarifying questions. / 누락된 리스크 요청, 질의 생성
- Agent: `exercises/qa/agent-webcheck.md` 따라 웹 텍스트 검증 실행. / 웹 텍스트 검증 실습

## Tips / 팁
- Provide UI/API states, roles, data ranges. / UI/API 상태, 권한, 데이터 범위 제공
- Request tabular output; include IDs for traceability. / 표 형태 출력, 추적용 ID 포함
- Validate: “List 3 likely mistakes in your output.” / 결과에 대한 오류 가정 3가지 요청
