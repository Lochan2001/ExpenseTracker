import React from "react";

function Expense({ income, expense }) {
  return (
    <div>
      <h2>Your Balance</h2>
      <div className="balance-val">INR.{income - expense}</div>
      <div className="row row-expense">
        <div className="col col-income">
          <span>
            <h3>Income</h3>
            <div className="income-text">INR.{income}</div>
          </span>
        </div>
        <div className="col col-expense">
          <h3>Expense</h3>
          <div className="expense-text">INR.{expense}</div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
