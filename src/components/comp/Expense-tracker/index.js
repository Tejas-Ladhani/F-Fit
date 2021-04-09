import React from 'react'
import Eheader from './Eheader'
import EBalance from './EBalance'
import Expense from './Expense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { ExpenseProvider } from '../../contexts/ExpenseContext'
import './style.css'
function Eindex() {
    return (
        <ExpenseProvider>
            <div className="container-fluid">
                <Eheader />
                <div className="row">
                    <div className="col-12 col-md-7">
                        <AddTransaction />
                        <TransactionList />
                    </div>

                    <div className="col-12 col-md-5">
                        <Expense />
                    </div>
                </div>

            </div>
        </ExpenseProvider>
    )
}

export default Eindex
