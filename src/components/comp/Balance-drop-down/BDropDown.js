import "./BDropDown.css";
import React, { Component, Fragment } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { InputGroup } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
function BDropDown() {
  return (
    <div className="dd">
      <InputGroup >
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <DropdownButton
      className="ddb"
        id="dropdown-item-button lg "
        size="lg"
        title="      Select ratio      "
      >
        <Dropdown.Item as="button">50:30:20</Dropdown.Item>
        <Dropdown.Item as="button">40:40:20</Dropdown.Item>
        <Dropdown.Item as="button">Custom</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default BDropDown;
