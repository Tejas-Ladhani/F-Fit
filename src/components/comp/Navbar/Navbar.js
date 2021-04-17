import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import {BrowserRouter as Router,NavLink,Link} from 'react-router-dom';
import * as Routes from '../../routes/Routes';

function NBar() {
  return (
    <Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">F.Fit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={Routes.Home.link}>Home</Nav.Link>
          <Nav.Link href ={Routes.Balance.link}>Balance</Nav.Link>
          <NavDropdown title="Break" id="basic-nav-dropdown">
            {/* <NavDropdown.Item href="">Overall</NavDropdown.Item> */}
            <NavDropdown.Item href={Routes.Savings.link}>Savings</NavDropdown.Item>
            <NavDropdown.Item href={Routes.Expense.link}>Expenditure</NavDropdown.Item>
            <NavDropdown.Item href={Routes.Emergency.link}>Emergency-Funds</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href= {Routes.News.link}>News</Nav.Link>

          <Nav.Link href={Routes.Market.link}>Market</Nav.Link>

          <Nav.Link href={Routes.Help.link}>Help</Nav.Link>
        </Nav>
        <Button>Invest Now</Button>
      </Navbar.Collapse>
    </Navbar>
    </Router>
  );
}

export default NBar;
