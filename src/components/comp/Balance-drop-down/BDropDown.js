import "./BDropDown.css";
import React, { useState, useContext } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { db } from '../../../Firebase'
import { UserContext } from '../../contexts/user'

function BDropDown() {

  const [user, setUser] = useContext(UserContext);
  const [balance, setbalance] = useState(0);
  const [ratio, setratio] = useState('50:30:20');
  var expense, savings, emergency;
  const onSubmit = (e) => {
    e.preventDefault();
    if (ratio === '50:30:20') {
      expense = balance * 0.5;
      savings = balance * 0.3;
      emergency = balance * 0.2;

    }
    else if(ratio === '40:40:20')
    {
      expense = balance * 0.4;
      savings = balance * 0.4;
      emergency = balance * 0.2;

    }else if(ratio==='35:35:30'){
      expense = balance * 0.35;
      savings = balance * 0.35;
      emergency = balance * 0.3;

    }

    db.collection('user').doc(user.uid).set({
      balance: balance,
      ratio_choosed: ratio,
      exp: expense,
      sav: savings,
      emer: emergency,

    }).then(() => alert("your data saved !")
    )

  }

  return (
    <div className="dd">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Balance</Form.Label>
          <Form.Control type="number" placeholder="Enter balance" required  onChange={(e) => { setbalance(e.target.value);  }} />
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control as="select" size="md" required onChange={(e) => { setratio(e.target.value) }}>
            <option>50:30:20</option>
            <option>40:40:20</option>
            <option>35:35:30</option>
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