import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NBar } from './components/comp';
import { UserContextProvider } from './components/contexts/user';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <NBar />
    </UserContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
