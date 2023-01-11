import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
