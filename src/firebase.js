import firebase from 'firebase/app';
import 'firebase/firestore';
//import 'firebase/auth';
//import 'firebase/storage';

//var firebase = require("firebase");
// Initialize Firebase
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA-dgPz2StGziorRXpSmkXlP1MCbYY7GnY",
    authDomain: "practical-coding.firebaseapp.com",
    projectId: "practical-coding",
    storageBucket: "practical-coding.appspot.com",
    messagingSenderId: "110725080091",
    appId: "1:110725080091:web:d6541c24969a90cf9444be",
    measurementId: "G-Z6V6KVBYFT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/

var firebaseConfig = {
  apiKey: "AIzaSyA-dgPz2StGziorRXpSmkXlP1MCbYY7GnY",
  authDomain: "practical-coding.firebaseapp.com",
  projectId: "practical-coding",
  storageBucket: "practical-coding.appspot.com",
  messagingSenderId: "110725080091",
  appId: "1:110725080091:web:d6541c24969a90cf9444be",
  measurementId: "G-Z6V6KVBYFT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
