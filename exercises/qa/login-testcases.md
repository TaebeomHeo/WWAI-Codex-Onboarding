# QA Exercise: Login Test Cases / 로그인 테스트 케이스

## Scenario / 시나리오
- Web app with email+password + MFA fallback to email OTP. / 이메일+비번 로그인, 이메일 OTP 대체 MFA
- Roles: user, admin. Browsers: Chrome, Safari. / 권한: 사용자/관리자, 브라우저: 크롬/사파리
- Limits: lock after 5 failed attempts in 10 min. / 10분 내 5회 실패 시 잠금

## Task / 과제
1) Draft 8–10 core cases (happy + negative + edge) in Korean. / 기본·부정·엣지 케이스 8~10개(한글)  
2) Ask Codex to expand and dedupe; request table format with ID|Title|Steps|Data|Expected|Notes. / Codex로 확장/중복제거 후 표 형태  
3) Produce English summary of top 5 cases. / 상위 5개 영문 요약 작성  
4) Self-check: have Codex list missing risks and propose 2 more cases. / 누락 리스크와 추가 케이스 2개 요청

## Starter Prompt / 시작 프롬프트
```
역할: QA 리드. 작업: 로그인 플로우 테스트 케이스 작성.
컨텍스트: 이메일+비밀번호, 이메일 OTP MFA; 사용자/관리자; Chrome/Safari; 10분 내 5회 실패 시 계정 잠금.
형식: 표(ID|제목|절차|데이터|기대결과|비고).
제한: 각 절차는 2줄 이하, 데이터 명확히 표기(예: 잘못된 OTP 123456).
검증: 가능성 높은 누락 3개를 목록화하고 보완 케이스 제안.
언어: 한글, 표 제목/ID는 영문.
```
