import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Balance from '../../components/pages/Balance/Balance';
import Landing from '../../components/pages/Landing/Landing';
import Expenses from '../../components/pages/Expenses/Expenses';
import News from '../../components/pages/News/News';
import Savings from '../../components/pages/Savings/Savings';
import Market from '../../components/pages/Market/Market';
import Help from '../../components/pages/Help/Help';
import Emergency from '../../components/pages/Emergency/Emergency';

export default function Switcher() {
    return (
        <Router>
    <Switch>
        <Route path="/balance" exact component = {Balance}/>
        <Route path="/landing" exact component ={Landing}/>
        <Route path="/expense" exact component={Expenses}/>
        <Route path="/news" exact component = {News}/>
        <Route path="/savings" exact component = {Savings}/>
        <Route path="/emergency" exact component = {Emergency}/>
        <Route path="/market" exact component = {Market}/>
        <Route path="/help" exact component ={Help}/>
    </Switch>
    </Router>
    );
}
