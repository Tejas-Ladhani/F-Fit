import React from 'react'

import {db} from '../../../Firebase'
function ExpenseRow(expense_name,amount,category,date,id) {

   
    return (
        <>
        
            {/* <td>{date}</td> */}
            <td>{expense_name}</td>
            <td>{category}</td>
            <td>{amount}</td>
            
        </>
    )
}



export default ExpenseRow
