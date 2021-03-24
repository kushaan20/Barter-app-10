import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyARRvgmFivTjQGj9dsfUzaAEsfE4gC57cE",
    authDomain: "barter-4f9bb.firebaseapp.com",
    projectId: "barter-4f9bb",
    storageBucket: "barter-4f9bb.appspot.com",
    messagingSenderId: "97373136885",
    appId: "1:97373136885:web:09c0b19f266385345062bc"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
