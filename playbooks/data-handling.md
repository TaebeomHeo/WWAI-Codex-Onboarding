# Data Handling Playbook / 데이터 취급 가이드

- No secrets or PII. Strip names, emails, account IDs unless dummy. / 비밀·개인정보 금지, 더미만 사용
- Minimize copy-paste: send schemas, samples (masked), not full dumps. / 전체 덤프 대신 스키마·마스킹 샘플
- Label sensitivity: PUBLIC/INTERNAL/CONFIDENTIAL in prompts when needed. / 필요 시 민감도 표시
- Ask Codex to restate assumptions before acting. / 실행 전 가정사항 재진술 요청
- Verification loop: request “3 likely mistakes” and fix pass. / “가능한 실수 3개” 후 수정 단계 요구
- Keep human-in-loop: small batch check before bulk apply. / 대량 적용 전 소량 검증
