import {React,useState} from 'react'

function AddTransaction() {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState('');
    return (
        <div>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="butn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
