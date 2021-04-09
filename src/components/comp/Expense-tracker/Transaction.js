import React, { useContext } from 'react'
import { ExpenseContext } from '../../contexts/ExpenseContext'


function Transaction({transaction}) {
    const {deleteTransaction}=useContext(ExpenseContext);
 
    var color=transaction.amount<100?'lessthan100':(transaction.amount<1000?'lessthan1000':(transaction.amount<10000?'lessthan10000':'else'))
    return (
        <li className={color}>
        {transaction.text} <span>₹{Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    )
}

export default Transaction
