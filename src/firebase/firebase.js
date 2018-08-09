import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database';


const prodConfig = {
    apiKey: "AIzaSyBuQMGf6f7mHOt6wE64F-VRkNYH6oeL_-s",
    authDomain: "responsibility-tracker.firebaseapp.com",
    databaseURL: "https://responsibility-tracker.firebaseio.com",
    projectId: "responsibility-tracker",
    storageBucket: "responsibility-tracker.appspot.com",
    messagingSenderId: "899655740527"
  };

const devConfig = {
    apiKey: "AIzaSyBLO7nos_vIjERpwbHfred_Xjk-7KDjGRU",
    authDomain: "responsibility-tracker-33aef.firebaseapp.com",
    databaseURL: "https://responsibility-tracker-33aef.firebaseio.com",
    projectId: "responsibility-tracker-33aef",
    storageBucket: "",
    messagingSenderId: "189786695483"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};