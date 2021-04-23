import "./BDropDown.css";
import React, { useState, useContext } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { db } from '../../../Firebase'
import { UserContext } from '../../contexts/user'

function BDropDown() {

  const [user, setUser] = useContext(UserContext);
  const [balance, setbalance] = useState(0);
  const [ratio, setratio] = useState('50:30:20');
  const onSubmit = (e) => {
    e.preventDefault();
    db.collection('user').doc(user.uid).set({
      balance: balance,
      ratio_choosed: ratio,
    }).then(() => alert("your data saved !")
    )

  }

  return (
    <div className="dd">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Balance</Form.Label>
          <Form.Control type="number" placeholder="Enter balance" onChange={(e) => { setbalance(e.target.value); console.log(e.target.value) }} />
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control as="select" size="md" onChange={(e) => { setratio(e.target.value) }}>
            <option>50:20:30</option>
            <option>10:20:30</option>
          </Form.Control>
          <br />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </div>

  );
}

export default BDropDown;