import { React, useState, useContext } from 'react'
import { ExpenseContext } from '../../contexts/ExpenseContext'

function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const onSubmit = e => {
        e.preventDefault(); //prevents refreshing on click

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000), //CHaNGE ON PRODUCTION VER
            text,
            amount: +amount //this will turn amount into a number otherwise its a string , if so we cant use reduce() in EBalace.js
        }

        addTransaction(newTransaction);
    }
    const { addTransaction } = useContext(ExpenseContext);
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="butn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
