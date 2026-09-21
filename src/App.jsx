import { useState } from "react";
import BudgetSummary from "./components/BudgetSummary";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((currentExpenses) => [
      ...currentExpenses,
      {
        id: Math.random().toString(),
        ...expense,
      },
    ]);
  };

  const updateExpenseAmount = (id, newAmount) => {
    setExpenses((currentExpenses) =>
      currentExpenses.map((expense) =>
        expense.id === id
          ? { ...expense, amount: newAmount }
          : expense
      )
    );
  };


  const removeExpense = (id) => {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id)
    );
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const remaining = income - totalExpenses;

  return (
    <main className="app">
      <h1>Monthly Budget</h1>
      <a href="https://github.com/MichaelLeix/budget-tracker">Github Link</a>

      <BudgetSummary
        income={income}
        expenses={totalExpenses}
        remaining={remaining}
      />

      <div className="forms">
        <IncomeForm onSetIncome={setIncome} />
        <ExpenseForm onAddExpense={addExpense} />
      </div>

      <ExpenseList
        expenses={expenses}
        onRemoveExpense={removeExpense}
        onUpdateExpenseAmount={updateExpenseAmount}
      />
    </main>
  );
}

export default App;
