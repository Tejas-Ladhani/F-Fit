import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Balance from '../../components/pages/Balance/Balance';
import Landing from '../../components/pages/Landing/Landing';
import Expenses from '../../components/pages/Expenses/Expenses';
import News from '../../components/pages/News/News';

export default function Switcher() {
    return (
        <Router>
    <Switch>
        <Route path="/balance" exact component = {Balance}/>
        <Route path="/landing">
            <Landing />
        </Route>
        <Route path="/expenses">
            <Expenses />
        </Route>
        <Route path="/News">
            <News />
        </Route>
    </Switch>
    </Router>
    );
}
