import {Navbar,NavDropdown,Nav,Form,Button,FormControl} from 'react-bootstrap';

function NBar() {
  return (
<Navbar bg="light"  expand="lg">
  <Navbar.Brand href="#home">F.Fit</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Balance</Nav.Link>
      <NavDropdown title="Break" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Overall</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Savings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Expenditure</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Expenditure-Funds</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      
      <Nav.Link href="#link">News</Nav.Link>
      
      <Nav.Link href="#link">Market</Nav.Link>
      
      <Nav.Link href="#link">Help</Nav.Link>
    </Nav>
<Button>Sign Up</Button>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NBar;
