import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ResumeHeader from './js/ResumeHeader';
import About from './js/About'
import Profile from './js/Profile'

ReactDOM.render(
  <React.StrictMode>
    <ResumeHeader />
    <About />
    <Profile />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
