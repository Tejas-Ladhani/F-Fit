import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/comp/Footer/Footer'
import NBar from './components/comp/Navbar/Navbar';
import Switcher from './components/Switcher/Switcher';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from './components/comp/Sing-Up/Signup';
import Eindex from './components/comp/Expense-tracker';
import Sample from './components/comp/Dash-Board/Sample';
import Dindex from './components/comp/Dash-Board/Dindex';

ReactDOM.render(
  <React.StrictMode>
    <NBar />
    <Router>
      <Switcher />
    </Router>

    <Footer />


  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
