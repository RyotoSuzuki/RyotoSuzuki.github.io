import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Product from './components/Product';
import Social from './components/Social';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Profile />
    <Skill />
    <Product />
    <Social />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
