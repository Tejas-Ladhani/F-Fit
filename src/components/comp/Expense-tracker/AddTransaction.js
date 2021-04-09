import { React, useState, useContext } from 'react'
import { ExpenseContext } from '../../contexts/ExpenseContext'

function AddTransaction() {
    const [text, setText] = useState('nothing');
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
                <div className="form-group">
                    <div >
                        <label htmlFor="text">Text</label>
                        <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                    </div>
                    <div >
                        <label htmlFor="amount">Amount </label>
                        <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <button className="butn">Add transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
