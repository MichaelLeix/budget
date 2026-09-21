import { useState } from "react";

function IncomeForm({ onSetIncome }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const income = Number(amount);

    if (income <= 0) return;

    onSetIncome(income);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Monthly Income</h2>

      <input
        type="number"
        min="0"
        step="0.01"
        placeholder="e.g. 4000"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <button type="submit">Set Income</button>
    </form>
  );
}

export default IncomeForm;
