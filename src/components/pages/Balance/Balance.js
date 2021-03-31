import React, { Component, Fragment } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


export default class Balance extends Component {

    constructor(props)
    {
        super(props)
        
        this.state={
            dropdowntext:"Select a Ratio"
        }

    }
    
    render() {
        return (
            <Fragment>
            <div>
                <DropdownButton id="dropdown-item-button" title="Dropdown button">
                    <Dropdown.ItemText>Hello</Dropdown.ItemText>
                    <Dropdown.Item as="button">
                        50:30:20
                    </Dropdown.Item>
                    <Dropdown.Item as="button">40:40:20</Dropdown.Item>
                    <Dropdown.Item as="button">Custom</Dropdown.Item>
                </DropdownButton>
            </div>
            
            <div>
            <InputGroup className="mb-3">
                    
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            </Fragment>
        )
    }
}









