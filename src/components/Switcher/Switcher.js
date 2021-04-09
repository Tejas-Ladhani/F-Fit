import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Balance from '../../components/pages/Balance/Balance';
import Landing from '../../components/pages/Landing/Landing';
import Expenses from '../../components/pages/Expenses/Expenses';
import News from '../../components/pages/News/News';
import Savings from '../../components/pages/Savings/Savings';
import Market from '../../components/pages/Market/Market';
import Help from '../../components/pages/Help/Help';
import Emergency from '../../components/pages/Emergency/Emergency';
import Home from '../../components/pages/Home/Home'
import NewsContext from '../comp/NewsContext/NewsContext';

export default function Switcher() {
    return (
        <Router>
    <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path="/balance" exact component = {Balance}/>
        <Route path="/home" exact component ={Home}/>
        <Route path="/expense" exact component={Expenses}/>
        <Route path="/news">
          <News />
          <NewsContext />
        </Route>
        <Route path="/savings" exact component = {Savings}/>
        <Route path="/emergency" exact component = {Emergency}/>
        <Route path="/market" exact component = {Market}/>
        <Route path="/help" exact component ={Help}/>
    </Switch>
    </Router>
    );
}
