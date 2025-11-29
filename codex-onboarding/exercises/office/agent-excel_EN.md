# Agent Demo: Excel Data Pull (EN)

## Goal
- Have Codex agent read an Excel file, filter rows by a condition, and save/print results.

## Scenario
- Sample file: `data/orders.xlsx` (included). Sheet: default.
- Columns: `order_id`, `customer`, `status`, `amount`, `country`.
- Requirement: keep rows where `status == "Pending"` **and** `amount > 100`; output only `order_id, customer, amount`.
- Output: table in terminal + save to `tmp/pending_over_100.csv`.

## Prompt to Agent (copy-paste)
```
Task: Read an Excel file, filter rows by condition, save to CSV.
File: data/orders.xlsx, sheet = default.
Condition: status == "Pending" AND amount > 100.
Output: show columns order_id, customer, amount as a table; save to tmp/pending_over_100.csv.
Constraints: use pandas; if new deps are needed, use one-off pip instead of editing requirements.
Verification: print filtered row count; if no rows, state empty and exit successfully with 0 rows.
Before running commands or editing files, state the plan in one line.
```

## How to run with agent
1) Open Codex agent in VS Code.  
2) Paste the prompt above and submit.  
3) When the agent summarizes the plan, approve.  
4) The agent will likely run an inline `python` or create `scripts/filter_orders.py`; check console logs for row count/table.  
5) Confirm output: `ls tmp` → `cat tmp/pending_over_100.csv`.  
6) For extra checks, ask “Recount rows from the CSV you wrote.”

## Expected Agent Actions
- Run `python - <<'PY' ...` or create `scripts/filter_orders.py`.
- Read sheet with pandas, filter, select needed columns, `to_csv("tmp/pending_over_100.csv", index=False)`.
- Show a small table (`df.head()`) and row count.
- Report the saved path; on errors, show stack trace/logs.

## Manual rerun (if needed)
```bash
python3 - <<'PY'
import pandas as pd
df = pd.read_excel("data/orders.xlsx")
out = df[(df["status"]=="Pending") & (df["amount"]>100)][["order_id","customer","amount"]]
print(out)
print("rows:", len(out))
out.to_csv("tmp/pending_over_100.csv", index=False)
print("saved to tmp/pending_over_100.csv")
PY
```
