import { useContext } from 'react';
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import './NavBar.css';
import { UserContext } from '../../contexts/user';
import * as Routes from '../../routes/Routes';
import SignInBtn from '../signin-btn/SignInBtn';
import LogOutBtn from '../signin-btn/LogOutBtn';
import { BrowserRouter as Router, NavLink, Link, Switch, Route } from 'react-router-dom';
import Balance from '../../pages/Balance/Balance';
import Home from '../../pages/Home/Home';
import Expenses from '../../pages/Expenses/Expenses';
import Landing from '../../pages/Landing/Landing';
import News from '../../pages/News/News';
import NewsContext from '../NewsContext/NewsContext';
import Savings from '../../pages/Savings/Savings';
import Emergency from '../../pages/Emergency/Emergency';
import Help from '../../pages/Help/Help';
import MarketContext from '../MarketContext/MarketContext'
import PrivateRoute from  '../../routes/PrivateRoute';

function NBar() {
  const [user, setUser] = useContext(UserContext);
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">F.Fit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={Routes.Home.link}>Home</Link>
            <Link to={Routes.Balance.link}>Balance</Link>
            <NavDropdown title="Break" id="basic-nav-dropdown">

              <NavDropdown.Item><Link to={Routes.Savings.link}>Savings</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to={Routes.Expense.link}>Expense</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={Routes.Emergency.link}>Emergency</Link></NavDropdown.Item>
            </NavDropdown>

            <Link to={Routes.News.link}>News</Link>

            <Link to={Routes.Market.link}>Market</Link>

            <Link href={Routes.Help.link}>Help</Link>
          </Nav>
          {/*<img style={{ height: '35px', borderRadius: '17px' }}  /> src={user.photoURL} */}
          
          {user ? <LogOutBtn/> : <SignInBtn />}
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/' exact component={Landing} />
        <PrivateRoute path="/balance" exact component={Balance} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/expense" exact component={Expenses} />
        <PrivateRoute path="/news" >
          <News />
          {/* < /> */}
        </PrivateRoute>
        <PrivateRoute path="/savings" exact component={Savings} />
        <PrivateRoute path="/emergency" exact component={Emergency} />
        <PrivateRoute path="/market" exact component={MarketContext}/>

        <PrivateRoute path="/help" exact component={Help} />
        <PrivateRoute path="/signup" />
      </Switch>
    </Router>
  );
}

export default NBar;
