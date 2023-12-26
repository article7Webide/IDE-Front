import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.scss'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { worker } from './mocks/browser';


// // start
// if(process.env.NODE_ENV === 'development') { // 개발에서만 msw 동작
//   worker.start();
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
