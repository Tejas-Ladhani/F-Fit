import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NBar from './components/comp/Navbar/Navbar';
import Switcher from './components/Switcher/Switcher';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <NBar />
    <Router>
      <Switcher />
    </Router>

{/* Removed Footer for now , still there in comp */}

  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
