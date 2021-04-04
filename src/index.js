import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Balance from './components/pages/Balance/Balance';
import Footer from './components/comp/Footer/Footer';
import NBar from './components/comp/Navbar/Navbar';
ReactDOM.render(
  <React.StrictMode>
    <NBar/>
    {/* <Landing /> */}
    <Balance/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
