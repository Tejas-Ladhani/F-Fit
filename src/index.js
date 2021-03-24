import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import NBar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <NBar/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
