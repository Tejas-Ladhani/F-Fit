import "./BDropDown.css";
import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from '../../../Firebase'
import { UserContext } from '../../contexts/user'

function BDropDown() {

  const [user, ] = useContext(UserContext);
  const [balance, setbalance] = useState(0);
  const [ratio, setratio] = useState('50:30:20');
  var exp, sav, emer;
  const onSubmit = (e) => {
    e.preventDefault();

    if (ratio === '50:30:20') {
      exp = balance * 0.5;
      sav = balance * 0.3;
      emer = balance * 0.2;

    } else if (ratio === '40:40:20') {
      exp = balance * 0.4;
      sav = balance * 0.4;
      emer = balance * 0.2;
    }
    else if (ratio === '35:35:30') {
      exp = balance * 0.35;
      sav = balance * 0.35;
      emer = balance * 0.30;
    }

    db.collection('user').doc(user.uid).set({
      balance: balance,
      ratio_choosed: ratio,
      exp: exp,
      sav: sav,
      emer: emer,

    }).then(() => alert("your data saved !")
    )

  }

  return (
    <div className="dd">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Balance</Form.Label>
          <Form.Control type="number" placeholder="Enter balance" required onChange={(e) => { setbalance(e.target.value); }} />
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