import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // ルーティングに必要なRouterコンポーネントをimport

ReactDOM.render(
  <React.StrictMode>
  {/*
  Routerは子要素に一つのコンポーネントしか受け付けないので、
  基本的に一番親のコンポーネントを囲むように設置。
  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
