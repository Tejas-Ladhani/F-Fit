import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NBar from './components/comp/Navbar/Navbar';
import Footer from './components/comp/Footer/Footer';
import { UserContextProvider } from './components/contexts/user';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>   
    <NBar />
  

    </UserContextProvider>

    {/* Removed Footer for now , still there in comp */}
    <Footer />
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
