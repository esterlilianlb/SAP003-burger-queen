import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyALFd7KJj3rN0LtduG1w7Xgovt39dTVIzM",
    authDomain: "ester-burgerqueen.firebaseapp.com",
    databaseURL: "https://ester-burgerqueen.firebaseio.com",
    projectId: "ester-burgerqueen",
    storageBucket: "ester-burgerqueen.appspot.com",
    messagingSenderId: "546991337895",
    appId: "1:546991337895:web:fc7a639ffe32d551da4682",
    measurementId: "G-PVM6Z3D86M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()