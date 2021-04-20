import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NBar from './components/comp/Navbar/Navbar';
import Switcher from './components/Switcher/Switcher';
import { BrowserRouter as Router } from 'react-router-dom';
import signInBtn from './components/comp/signin-btn/SignInBtn';
import SignInBtn from './components/comp/signin-btn/SignInBtn';
import { UserContextProvider } from './components/contexts/user';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>   
    <NBar />
    <Router>
      <Switcher />
    </Router>

    </UserContextProvider>

    {/* Removed Footer for now , still there in comp */}

  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
