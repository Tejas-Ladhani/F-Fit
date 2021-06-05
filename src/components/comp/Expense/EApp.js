import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/user'
import { Form, Button, Table } from "react-bootstrap";
import { db } from '../../../Firebase'
import firebase from 'firebase/app'
import ExpenseItem from './ExpenseItem';
import ExpenseTotal from './ExpenseTotal'
import './estyle.css'
// date | title  | amount | delete btn |


function EApp() {
    const [Expense, setExpense] = useState([]); // will contain the list of Expenses
    const [Reqexpense, setReqexpense] = useState(0); // will contain the value of required expense
    const [user, /*setUser*/] = useContext(UserContext);
    const [amountInput, setamountInput] = useState(0);
    const [titleInput, settitleInput] = useState('');
    const [/*remain*/, setremain] = useState(0);
    var total = 0;


    var isValid = false;
    // lets display the expenses : when should it be fetched  -> At the very first time

    // [balance,exp,sav]
    useEffect(() => {
        getDecidedExpense();
        getExpense();
    }, []);


    function getDecidedExpense() {
        db.collection("user").doc(user.uid).get().then(doc => {
            if (doc.data().containsKey('exp'))
                setReqexpense(doc.data().exp);

            
        }).catch((err) => { console.log(err) })
    }

    function getExpense() {
        /**
         * We can have use get instead of snapShot but ss bcz whenever  data is added it will get reflected to our list (display).
         */


        db.collection("user").doc(user.uid).collection('expense').onSnapshot(function (querySnapshot) {
         
            setExpense(
                querySnapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        date: (doc.data().date !== null) ? doc.data().date.toDate().toString() : '',
                        title: doc.data().title,
                        amount: doc.data().amount,

                    }))
            );
        }, (err) => { console.log("error occured") });
    }

    function addExpense(e) {
        e.preventDefault()
        db.collection("user").doc(user.uid).collection('expense').add({

            title: titleInput,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            amount: amountInput

        })
        // now we must clear the field after pressing enter
        setremain(Reqexpense - amountInput);
        setamountInput('')
        settitleInput('')
    }



    function validate(e) {
        // Empty field -> dont submit 
        var element = document.getElementById('addExpenseBtn');
        if (e.target.value === '') element.disabled = true;
        else element.disabled = false;
    }

    function validateAmount(e) {
        var element = document.getElementById('addExpenseBtn');
        if (e.target.value > 0) {
            element.disabled = false;
            isValid = true;
        }
        else {
            element.disabled = true;
            isValid = false;
        }

    }

    return (
        <div className="container-fluid">
            <div className="row mt-3">


                <div className="col-md-4 col1">

                    <div>Total Expenditure Balance  : {Reqexpense} </div>
                    {/* <div>Remaining Expenditure Balance  : {remain} </div> */}
                    <Form className="pt-4" onSubmit={addExpense}>
                        <Form.Group controlId="formBasicExpense">
                            <Form.Label>EXPENSE</Form.Label>
                            <Form.Control type="text" placeholder="Enter Expense name" autoComplete="off" required onChange={(e) => { validate(e); settitleInput(e.target.value) }} />
                            <Form.Text className="text-muted">
                                We'll never share your data with anyone else.
                </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter Amount" required min="1" autoComplete="off" onChange={(e) => { validateAmount(e); setamountInput(e.target.value) }} />
                        </Form.Group>
                        <Button variant="primary" id="addExpenseBtn" type="submit" disabled >
                            Add
            </Button>
                    </Form>
                </div>


                <div className="col-md-8">

                    <Table className="mt-sm-4" bordered responsive="sm" >
                        <thead >
                            <tr>
                                <th>Date</th>
                                <th>Expense</th>
                                <th>Amount</th>
                                <th>....</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                Expense.map((t) => {
                                    total = total + Number(t.amount);
                                    
                                    return (

                                        <ExpenseItem title={t.title}
                                            date={t.date}
                                            amount={t.amount}
                                            id={t.id}
                                            remain={t.remain}
                                        />

                                    )
                                }
                                )
                            }
                            <tr>
                                <td></td>
                                <td></td>
                                <td> <ExpenseTotal total={total} /></td>
                                <td></td>
                            </tr>
                        </tbody>

                    </Table>

                </div>
            </div>
        </div>
    )
}

export default EApp
