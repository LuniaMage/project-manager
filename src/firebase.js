import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6X2oP93dS56Mo2uwfPxRt0pz0EKWmxsU",
    authDomain: "todo-ninja-4d4b5.firebaseapp.com",
    databaseURL: "https://todo-ninja-4d4b5.firebaseio.com",
    projectId: "todo-ninja-4d4b5",
    storageBucket: "todo-ninja-4d4b5.appspot.com",
    messagingSenderId: "800372679038",
    appId: "1:800372679038:web:5a233cd150df2063"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

 

  export default db;