import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './Landing';
ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
