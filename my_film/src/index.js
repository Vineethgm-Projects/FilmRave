import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Project/Home/Home'
import Stepper from './Project/Home/Stepper/Stepper'
import Division from './Project/Home/Division/Division'
import Bottom from './Project/Home/Bottom/Bottom';
import Gallery from './Project/Gallery/Gallery'
import ViewR from './Project/ViewR/ViewR';
import Signin from './Project/Signin/Signin.js'
import Router from './Project/Router/Router.js'
import About from './Project/About/About.js'
import Form from './Project/MyReview/Form.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router/>
  </React.StrictMode>
  );
  //<Form/>
  //<About/>
  //<ViewR/>
  // <Home/>
  // <Gallery/>
  // <App/>
  // <Stepper/>
  // <Division/>
  // <Bottom/>
  //<Joker/>
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
