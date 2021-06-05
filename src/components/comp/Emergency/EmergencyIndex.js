import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/user'
import { Form, Button, Table } from "react-bootstrap";
import { db } from '../../../Firebase'
import EmergencyListItem from './EmergencyListItem';
// title, amount , type [RD,FD,MUTUAL, OTHERS],COMMENT ,DATE INVESTED ON
function EmergencyIndex() {

    const [Emergency, setEmergency] = useState([]); // will contain the list of Emergency
    const [Reqemer, setReqemer] = useState(0); // will contain the value of required Emergency
    const [user, ] = useContext(UserContext);
    var title, amount, type, comment = ' ', date;

    useEffect(() => {
        getDecidedEmergency();
        getEmergency();
    }, []);

    function getDecidedEmergency() {
        db.collection("user").doc(user.uid).get().then(doc => {
            if (doc.data().containsKey('emer'))
                setReqemer(doc.data().emer);
            
        }).catch((err) => {  })
    }

    function getEmergency() {
        db.collection("user").doc(user.uid).collection('emergency').onSnapshot(function (querySnapshot) {
            setEmergency(
                querySnapshot.docs.map((doc) => (
                    {
                        id: doc.id,

                        title: doc.data().title,
                        amount: doc.data().amount,
                        comment: doc.data().comment,


                    }))
            );
        }, (err) => { console.log("error occured") });
    }

    function addEmergencys(e) {
        e.preventDefault()

        db.collection("user").doc(user.uid).collection('emergency').add({

            title: title,

            amount: amount,

            comment: comment,

        })

        document.getElementById('emergencyTable').reset();


    }




    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 col1">
                    <div>Emergency Target  : {Reqemer} </div>

                    <Form className="pt-4" id="emergencyTable" onSubmit={addEmergencys} >
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



                        <Button variant="primary" id="addEmergencysBtn" type="submit" >
                            Add
                        </Button>
                    </Form>
                </div>


                <div className="col-md-8">

                    <Table className="mt-sm-4" bordered striped responsive="sm" >
                        <thead >
                            <tr>

                                <th>Title</th>

                                <th>Comment</th>
                                <th>Amount</th>
                                <th>....</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                // { title,date ,amount,comment,type,id}
                                Emergency.map((t) => {

                                    return (

                                        <EmergencyListItem title={t.title}

                                            amount={t.amount}
                                            comment={t.comment}

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

export default EmergencyIndex
