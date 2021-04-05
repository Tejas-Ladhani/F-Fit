import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/comp/Footer/Footer'
import Landing from './components/pages/Landing/Landing';
import NBar from './components/comp/Navbar/Navbar';
import Switcher from './components/Switcher/Switcher';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <NBar />
    <Switcher />
    <Footer />
    </Router>  
</React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
