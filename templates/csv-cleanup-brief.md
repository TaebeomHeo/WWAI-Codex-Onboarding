# CSV/Excel Cleanup Brief / CSV·엑셀 정제 요청서

Use this when asking Codex to clean/normalize data. / 데이터 정제 요청 시 활용.

- Goal / 목표: {e.g., unify date, currency, drop dupes}  
- Columns / 컬럼 정의: name, meaning, allowed values, nullable?  
- Rules / 규칙: date format (YYYY-MM-DD), currency (USD), trim spaces, dedupe by keys, fill defaults.  
- Changes not allowed / 금지 변경: no value invention; no row deletion unless specified.  
- Sample rows / 샘플: provide 3–5 rows (raw + desired).  
- Edge cases / 엣지: empty cells, invalid dates, extra columns.  
- Output format / 출력 형식: table, CSV snippet, or transformation steps.  
- Verification / 검증: ask Codex to list rows it could not fix and why. / 수정 불가 행과 사유를 출력하도록 요청
