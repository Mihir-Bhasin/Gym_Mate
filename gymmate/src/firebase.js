// import firebase from 'firebase';
//import * as firebase from 'firebase';
// import firebase from "firebase/app";
// import {auth} from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAP4D9Cx57s1cndRqs7H-UA4NDumGu1GM",
    authDomain: "gymmate-e0be4.firebaseapp.com",
    projectId: "gymmate-e0be4",
    storageBucket: "gymmate-e0be4.appspot.com",
    messagingSenderId: "105247743156",
    appId: "1:105247743156:web:14370cb7c5f0cbdaeacbe1",
    measurementId: "G-K3099XXELT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export { auth}; 