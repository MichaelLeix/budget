import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseAmount = Number(amount);

    if (!name.trim() || expenseAmount <= 0) return;

    onAddExpense({
      name: name.trim(),
      amount: expenseAmount,
    });

    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="number"
        min="0"
        step="0.01"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
