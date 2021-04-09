import React, { useContext } from 'react'
import { ExpenseContext } from '../../contexts/ExpenseContext'

function Expense() {
  const { transactions } = useContext(ExpenseContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const expense = (
    amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0) *
    1
  ).toFixed(2);

  return (
    <div className="">
      <div className="d-flex">
        <h4>Expense : </h4>
        <h4 className="money expense">₹{expense}</h4>
      </div>
    </div>
  )
}

export default Expense
