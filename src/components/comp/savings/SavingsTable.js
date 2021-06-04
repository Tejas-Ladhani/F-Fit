import "./style.css";
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/user'
import { Form, Button, Table } from "react-bootstrap";
import { db } from '../../../Firebase'
import firebase from 'firebase'
import SavingListItem from './SavingListItem';
// title, amount , type [RD,FD,MUTUAL, OTHERS],COMMENT ,DATE INVESTED ON
function SavingsTable() {

    const [saving, setSaving] = useState([]); // will contain the list of saving
    const [Reqsav, setReqsav] = useState(0); // will contain the value of required saving
    const [user, setUser] = useContext(UserContext);
    var title, amount, type, comment = ' ', date, roi;

    useEffect(() => {
        getDecidedSavings();
        getSavings();
    }, []);

    function getDecidedSavings() {
        db.collection("user").doc(user.uid).get().then(doc => {
            console.log(doc.data.containsKey('sav'))
            // try { setReqsav(doc.data().sav); }
            // catch(e){
            //     console.log(e)
            // }

        }).catch((err) => { console.log(err) })
    }

    function getSavings() {
        db.collection("user").doc(user.uid).collection('savings').onSnapshot(function (querySnapshot) {
            setSaving(
                querySnapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        date: doc.data().date,
                        title: doc.data().title,
                        amount: doc.data().amount,
                        comment: doc.data().comment,
                        type: doc.data().type,

                    }))
            );
        }, (err) => { console.log("error occured") });
    }

    function addSavings(e) {
        e.preventDefault()

        db.collection("user").doc(user.uid).collection('savings').add({

            title: title,
            date: date,
            amount: amount,
            type: type,
            comment: comment,

        })

        document.getElementById('SavingTable').reset();


    }




    return (
        <div className="container-fluid">
            <div className="heading">
                <h1>YOUR SAVINGS</h1>
            </div>
            <div className="row mt-3">
                <div className="col-md-4 col1">
                    <div>Savings Target  : {Reqsav} </div>

                    <Form className="pt-4" id="SavingTable" onSubmit={addSavings} >
                        <Form.Group controlId="formBasicExpense">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" required autoComplete="off" onChange={(e) => { title = e.target.value }} />

                        </Form.Group>
                        <Form.Group controlId="formBasicAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="Enter Amount" min="1" required autoComplete="off" onChange={(e) => { amount = e.target.value }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicComment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter Comment" autoComplete="off" onChange={(e) => { comment = e.target.value }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter Date of Investment" required autoComplete="off" onChange={(e) => { date = e.target.value }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicAmount">
                            <Form.Label>Rate of Return</Form.Label>
                            <Form.Control type="number" placeholder="ROI" min="1" required autoComplete="off" onChange={(e) => { roi = e.target.value }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type of Investment</Form.Label>
                            <Form.Control as="select" size="md" required onChange={(e) => { type = e.target.value }}>
                                <option>Mutual Funds</option>
                                <option>Fixed Deposit</option>
                                <option>Reccuring Deposit</option>
                                <option>CryptoCurrency</option>
                                <option>Stocks</option>
                                <option>Gold</option>
                                <option>Other</option>
                            </Form.Control>

                        </Form.Group>

                        <Button variant="primary" id="addSavingsBtn" type="submit" >
                            Add
                        </Button>
                    </Form>
                </div>


                <div className="col-md-8">

                    <Table className="mt-sm-4" bordered striped responsive="sm" >
                        <thead >
                            <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Comment</th>
                                <th>Amount</th>
                                <th>....</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                // { title,date ,amount,comment,type,id}
                                saving.map((t) => {

                                    return (

                                        <SavingListItem title={t.title}
                                            date={t.date}
                                            amount={t.amount}
                                            comment={t.comment}
                                            type={t.type}
                                            id={t.id}
                                        />

                                    )
                                }
                                )

                            }

                        </tbody>

                    </Table>

                </div>
            </div>
        </div>
    )
}

export default SavingsTable
