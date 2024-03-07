import firebase from 'firebase'

const fireBaseApp = firebase.intializeApp({
    apiKey: "AIzaSyC8Pj-zcoNo2phZgM0IH-BYv00DW90nzt4",
    authDomain: "todoapp-12ffa.firebaseapp.com",
    projectId: "todoapp-12ffa",
    storageBucket: "todoapp-12ffa.appspot.com",
    messagingSenderId: "120526238570",
    appId: "1:120526238570:web:78b5c5d79476201675ab13",
    measurementId: "G-7NB5MFPCYG"
  });

  const db = fireBaseApp.firestore();

  export default db;