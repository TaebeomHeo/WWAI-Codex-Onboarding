import pandas as pd
from pathlib import Path

def main() -> None:
    src = Path("data/orders.xlsx")
    if not src.exists():
        raise FileNotFoundError(f"Source file not found: {src}")

    df = pd.read_excel(src)
    filtered = df[(df["status"] == "Pending") & (df["amount"] > 100)][["order_id", "customer", "amount"]]

    Path("tmp").mkdir(exist_ok=True)
    out_path = Path("tmp/pending_over_100.csv")
    filtered.to_csv(out_path, index=False)

    print(filtered)
    print(f"rows: {len(filtered)}")
    print(f"saved to {out_path}")

if __name__ == "__main__":
    main()
