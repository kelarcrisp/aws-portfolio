import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "kelar-portfolio.firebaseapp.com",
    databaseURL: "https://kelar-portfolio.firebaseio.com",
    projectId: "kelar-portfolio",
    storageBucket: "kelar-portfolio.appspot.com",
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    appId: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
