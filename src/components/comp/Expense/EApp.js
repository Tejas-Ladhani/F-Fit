import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/user'
import { Form, Button, Table } from "react-bootstrap";
import { db } from '../../../Firebase'
import firebase from 'firebase'
import ExpenseItem from './ExpenseItem';
// date | title  | amount | delete btn |


function EApp() {
    const [Expense, setExpense] = useState([]); // will contain the list of Expenses
    const [user, setUser] = useContext(UserContext);
    const [amountInput, setamountInput] = useState(0);
    const [titleInput, settitleInput] = useState('');

    // lets display the expenses : when should it be fetched  -> At the very first time

    useEffect(() => {
        getExpense();
    }, []);


    function getExpense() {
        /**
         * We can have use get instead of snapShot but ss bcz whenever  data is added it will get reflected to our list (display).
         */

        db.collection("user").doc(user.uid).collection('expense').onSnapshot(function (querySnapshot) {

            setExpense(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    date: doc.data().date +" ",
                    title: doc.data().title,
                    amount: doc.data().amount,

                }))
            );
        });
    }

    function addExpense(e) {
        e.preventDefault()
        db.collection("user").doc(user.uid).collection('expense').add({

            title: titleInput,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            amount: amountInput

        })

        // now we must clear the field after pressing enter
        setamountInput('')
        settitleInput('')
    }

    return (
        <div>
            <Form onSubmit={addExpense}>
                <Form.Group controlId="formBasicExpense">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Expense name" onChange={(e) => { settitleInput(e.target.value) }} />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter Amount" onChange={(e) => { setamountInput(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
            </Button>
            </Form>
            {console.log(Expense)}
            <Table striped bordered variant="dark">
                <thead>
                    <td>Date</td>
                    <td>Expense</td>
                    <td>Amount</td>
                    <td>....</td>
                </thead>
                <tbody>
                {
                    Expense.map((t) => {
                        return (

                            <ExpenseItem title={t.title}
                                date={t.date}
                                amount={t.amount}
                                id={t.id}
                            />

                        )
                    }
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}

export default EApp
