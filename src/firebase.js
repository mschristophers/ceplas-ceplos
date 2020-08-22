import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7e1MZHOWs5RidoJi7XQF-IsRAhaLfgY4",
    authDomain: "ceplas-ceplos.firebaseapp.com",
    databaseURL: "https://ceplas-ceplos.firebaseio.com",
    projectId: "ceplas-ceplos",
    storageBucket: "ceplas-ceplos.appspot.com",
    messagingSenderId: "1085068887366",
    appId: "1:1085068887366:web:97b8f04ef7ed8c06ea5147",
    measurementId: "G-HC26LEMJ0Z"
});

const db = firebaseApp.firestore();

export default db;