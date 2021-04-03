import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer'
import Landing from './components/pages/Landing/Landing';
import NBar from './components/Navbar/Navbar';
import Balance from './components/pages/Balance/Balance';
ReactDOM.render(
  <React.StrictMode>
    {/* <NBar /> */}
    {/* <Landing /> */}
    <Balance/>
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
