import React,{useContext} from 'react'
import { ExpenseContext} from '../../contexts/ExpenseContext'

function TransactionList() {
    const {transactions}=useContext(ExpenseContext);
    //console.log(context)
    return (
        <>
           <h3>History</h3>
      <ul id="list" className="list">
          {transactions.map(t=>(<li className="minus">
          {t.text} <span>-$400</span><button className="delete-btn">x</button>
        </li> ))}
         
      </ul> 
        </>
    )
}

export default TransactionList
