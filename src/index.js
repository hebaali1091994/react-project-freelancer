import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import './i18n'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { ContextProvider } from './context/Context';



ReactDOM.render(
  <BrowserRouter>
  <ContextProvider>

    <div >
        <App />
      
        </div>
  </ContextProvider>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();