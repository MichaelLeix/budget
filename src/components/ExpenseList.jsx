import { useState } from "react";

function ExpenseList({
  expenses,
  onRemoveExpense,
  onUpdateExpenseAmount,
}) {
  const [editingId, setEditingId] = useState(null);
  const [newAmount, setNewAmount] = useState("");

  const handleUpdate = (id) => {
    const amount = Number(newAmount);

    if (amount <= 0) return;

    onUpdateExpenseAmount(id, amount);
    setEditingId(null);
    setNewAmount("");
  };

  const startEditing = (expense) => {
    setEditingId(expense.id);
    setNewAmount(expense.amount);
  };

  return (
    <section className="expense-list">
      <h2>Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.name}</span>

              <span>
                {editingId === expense.id ? (
                  <>
                    <input
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={newAmount}
                      onChange={(event) =>
                        setNewAmount(event.target.value)
                      }
                    />

                    <button onClick={() => handleUpdate(expense.id)}>
                      Save
                    </button>

                    <button onClick={() => setEditingId(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    ${expense.amount.toFixed(2)}

                    <button
                      onClick={() => startEditing(expense)}
                      className="update-button"
                    >
                      Update Amount (NEW)
                    </button>

                    <button
                      onClick={() => onRemoveExpense(expense.id)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ExpenseList;
