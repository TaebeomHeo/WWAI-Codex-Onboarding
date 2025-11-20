# Agent Demo: Excel Data Pull / 에이전트 데모: 엑셀 데이터 추출

## 목표 / Goal
- Codex 에이전트가 직접 엑셀 파일을 읽고 조건에 맞는 행을 추출, 결과를 저장/프린트. / Have Codex read Excel, filter rows, save/print results.

## 시나리오 / Scenario
- 샘플 파일: `data/orders.xlsx` (동봉). 시트 이름: 기본(Default).  
- 컬럼: `order_id`, `customer`, `status`, `amount`, `country`.  
- 요구: `status == "Pending"` 이고 `amount > 100`인 행만 추출, `order_id, customer, amount`만 출력.  
- 출력: 터미널 표 + `tmp/pending_over_100.csv` 저장.

## 에이전트에게 줄 프롬프트 / Prompt to Agent
```
작업: 엑셀 파일에서 조건에 맞는 행을 필터링하고 CSV로 저장.
파일: data/orders.xlsx, 시트는 기본(Default).
조건: status == "Pending" AND amount > 100.
출력: order_id, customer, amount 컬럼만 표로 보여주고, tmp/pending_over_100.csv로 저장.
제한: pandas 사용, 새 의존성 필요 시 requirements 에는 추가하지 말고 pip 단발 실행만 사용.
검증: 필터된 행 수를 출력하고, 결과가 없으면 비어있다고 알린 뒤 0행으로도 성공 종료.
명령/파일 변경을 실행하기 전에 한 줄로 계획을 말해줘.
```

## 기대 행동 / Expected Agent Actions
- `python - <<'PY' ...` 또는 `scripts/filter_orders.py` 생성 후 실행.  
- pandas로 시트 읽기, 조건 필터, 필요한 컬럼 선택, `to_csv("tmp/pending_over_100.csv", index=False)`.  
- 터미널 표(예: `print(df.head())`, `print(len(df))`)를 보여주기.  
- 결과 파일 경로를 보고하고 오류 시 로그 공유. / Report path and errors if any.

## 검증 포인트 / Verification
- 조건에 맞는 행 수가 맞는지 출력 확인.  
- 파일 `tmp/pending_over_100.csv` 존재 여부.  
- 컬럼이 요구(`order_id, customer, amount`)대로인지 확인.
