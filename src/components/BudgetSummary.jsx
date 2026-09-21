function BudgetSummary({ income, expenses, remaining }) {
  return (
    <section className="summary">
      <div>
        <span>Income</span><br />
        <strong>${income}</strong>
      </div>

      <div>
        <span>Expenses</span><br/>
        <strong>${expenses}</strong>
      </div>

      <div>
        <span>Remaining</span><br/>
        <strong>${remaining}</strong>
      </div>
    </section>
  );
}

export default BudgetSummary;
