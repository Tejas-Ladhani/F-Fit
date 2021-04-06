import "./BDropDown.css";
import React, { Component, Fragment } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Form, InputGroup,Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
function BDropDown() {
  return (
    <div className="dd">
      <Form.Label>Enter Amount</Form.Label>
      <InputGroup >
      
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      
  <Form>
    
    <Form.Group controlId="formRatio" className="ddb"
        id="dropdown-item-button lg "
        size="lg">
        <Form.Label>Select a Ratio  </Form.Label>
      <Form.Control as="select" defaultValue="Select a Ratio">
        <option>50:30:20</option> 
        <option>40:40:20</option>
        <option>Custom</option>
       </Form.Control>
      </Form.Group>
  </Form>

  <Button>Next</Button>
      
    </div>
  );
}

export default BDropDown;