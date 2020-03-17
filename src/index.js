import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAurYgiqqhxJ1uW-X5XHYYHGBr6vZPDGdU",
	authDomain: "info340Project-blind.firebaseapp.com",
	databaseURL: "https://info340Project-blind.firebaseio.com",
	projectId: "info340Project-blind",
	storageBucket: "info340Project-blind.appspot.com",
	messagingSenderId: "932938034155",
	appId: "1:641925391525:web:fd2c63c2e504b0b52ed94c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.requestPermission()
// .then(function () {
// 	console.log("You have permission");
// 	return messaging.getToken();
// })
// .then(function(token) {
// 	console.log(token);
// })
// .catch(function(err) {
// 	console.log("error occured");
// })

// messaging.onMessage(function(payload){
// 	console.log('onMessage', payload);
// })

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
