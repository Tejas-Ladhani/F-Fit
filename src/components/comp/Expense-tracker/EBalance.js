import React, { useContext } from 'react'
import { ExpenseContext } from '../../contexts/ExpenseContext'

function EBalance() {
    const { transactions } = useContext(ExpenseContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}

export default EBalance
