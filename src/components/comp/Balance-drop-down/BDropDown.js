import "./BDropDown.css";
import React, { useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Form, InputGroup, Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
 
function BDropDown(){
 
  const [balance,setbalance] = useState(0);
  const [ratio,setratio] = useState(['first option','second option']);
  const onSubmit= (e)=>{
    e.preventDefault();
    const OverallBalance = {
      balance
 
    };
    console.log(OverallBalance);
  }
 
    return (
      <div className="dd">
        <Form onSubmit={onSubmit}>
          <Form.Label>Enter Amount</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
 
            <FormControl
              required
              value={balance}
              onChange={(e)=>{setbalance(e.target.value)}}
            />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
 
          <Form.Group
            controlId="formRatio"
            className="ddb"
            id="dropdown-item-button lg "
            size="lg"
          >
            <Form.Label>Select a Ratio </Form.Label>
            <Form.Control as="select" defaultValue="Select a Ratio" value ={ratio} onChange={e=> {setratio(e.target.value)}}>
            console.log(ratio)
              {/* {ratio.map((ratio)=>{
                return(
                  <option key={ratio} value={ratio}>{ratio}</option>);
                  })  //bug
              } */}
            </Form.Control>
          </Form.Group>
          <div>
          <input type="submit" value="Next" className="btn btn-primary" />
        </div>
        </Form>
        </div>
      
    );
}
 
export default BDropDown;