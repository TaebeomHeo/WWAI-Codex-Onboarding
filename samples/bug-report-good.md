# Sample Bug Report (Good) / 좋은 버그 리포트 예시

- Title: [Login] OTP email not sent after password reset  
- Environment: Web v1.4.2, Chrome 119, user role=standard  
- Preconditions: Password reset completed within last 10 min; inbox reachable.  
- Steps:
  1) Go to /login, enter valid email + password.
  2) On MFA prompt, choose “Send code to email”.
  3) Wait 60s, check inbox.
- Expected: OTP email received within 30s with 6-digit code; UI shows “code sent”.  
- Actual: No email after 60s; UI shows spinner indefinitely.  
- Evidence: HAR log attached, message ID not found in mail logs, screenshot `otp-spinner.png`.  
- Severity: Major (blocks login for reset users).  
- Notes: Happens 3/3 times; mobile app unaffected.  
- EN Summary: OTP email missing post-reset; spinner hangs; reproducible; browser-only.  
