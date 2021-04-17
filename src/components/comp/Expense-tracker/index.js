import React from 'react'
import Eheader from './Eheader'
import EBalance from './EBalance'
import Expense from './Expense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { ExpenseProvider } from '../../contexts/ExpenseContext'
import './style.css'
import PiChart from '../charts/PiChart'
function Eindex() {
    return (
        <ExpenseProvider>
            <div className="container-fluid Expense">
                {/* <Eheader /> */}
                <div className="row">
                
                    <div className="col-12 col-md-4 left_column_expense">
                        <Expense />
                        <AddTransaction />
                    </div>

                    <div className="col-12 col-md-8 right_column_expense">
                        <TransactionList />
                    </div>

                </div>

            </div>
        </ExpenseProvider>
    )
}

export default Eindex
