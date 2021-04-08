import React from 'react'
import Eheader from './Eheader'
import EBalance from './EBalance'
import Expense from './Expense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import {ExpenseProvider} from '../../contexts/ExpenseContext'
import './style.css'
function Eindex() {
    return (
        <ExpenseProvider>
        <div>
            <Eheader/>
            <div className="cntainer">
                <EBalance/>
                <Expense/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </div>
        </ExpenseProvider>
    )
}

export default Eindex
