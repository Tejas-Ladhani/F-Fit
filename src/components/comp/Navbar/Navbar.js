import { useContext } from 'react';
import { Navbar, NavDropdown, Nav, Popover,OverlayTrigger} from 'react-bootstrap';
import './NavBar.css';
import { UserContext } from '../../contexts/user';
import * as Routes from '../../routes/Routes';
import {LogOutBtn,SignInBtn,MarketContext} from '..';
import { BrowserRouter as Router, Link, Switch, Route,Redirect } from 'react-router-dom';
import {Balance,Home,Expenses,Landing,News,Savings,Emergency,Help} from '../../pages';
import PrivateRoute from  '../../routes/PrivateRoute';
import NotFound from '../../pages/Not-found/NotFound';

function NBar() {
  const [user, /*setUser*/] = useContext(UserContext);
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand >F.Fit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user ? <Link to={Routes.Home.link}>Home</Link> : <Link />}
            {user ? <Link to={Routes.Balance.link}>Balance</Link>:<Link />}
            {user ?<NavDropdown title="Break" id="basic-nav-dropdown">

              <NavDropdown.Item as={Link} to={Routes.Savings.link}>Savings</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to={Routes.Expense.link}>Expense</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={Routes.Emergency.link}>Emergency</NavDropdown.Item>
            </NavDropdown>:<Link />}

            {user ?<Link to={Routes.News.link}>News</Link>:<Link/>}

            {user ?<Link to={Routes.Market.link}>Market</Link>:<Link/>}

            {user ?<Link href={Routes.Help.link}>Help</Link>:<Link/>}
          </Nav>
          {user ?
            <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover>
          <Popover.Content>
          <LogOutBtn/>
          </Popover.Content>
        </Popover>
      }
    >
      <img src={user.photoURL} style={{ height: '35px', borderRadius: '17px' ,marginBottom:'12px',marginRight:'10px',cursor:'pointer'}} alt="User profile"/>
    </OverlayTrigger>

         :<SignInBtn />}
          
          {/* {user ? <LogOutBtn/> : <SignInBtn />} */}
          
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/' exact component={Landing} />
        <PrivateRoute path="/balance" exact component={Balance} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/expense" exact component={Expenses} />
        <PrivateRoute path="/news" exact component={News} />
        <PrivateRoute path="/404" component={NotFound}/>
        <PrivateRoute path="/savings" exact component={Savings} />
        <PrivateRoute path="/emergency" exact component={Emergency} />
        <PrivateRoute path="/market" exact component={MarketContext}/>
        <Redirect to="/404" />
        <PrivateRoute path="/help" exact component={Help} />
        <PrivateRoute path="/signup" />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default NBar;
