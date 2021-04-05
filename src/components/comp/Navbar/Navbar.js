import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';
import * as Routes from '../../routes/Routes';

function NBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">F.Fit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={Routes.Home.link}>Home</Nav.Link>
          <Nav.Link href={Routes.Balance.link}>Balance</Nav.Link>
          <NavDropdown title="Break" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Overall</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Savings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Expenditure</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Expenditure-Funds</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href= {Routes.News.link}>News</Nav.Link>

          <Nav.Link href="#market">Market</Nav.Link>

          <Nav.Link href="#help">Help</Nav.Link>
        </Nav>
        <Button>Invest Now</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NBar;
