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

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBw3-sDq7slZ8L80EJxgKme4gEd7J7CGgw",
    authDomain: "mui329.firebaseapp.com",
    projectId: "mui329",
    storageBucket: "mui329.appspot.com",
    messagingSenderId: "410493358246",
    appId: "1:410493358246:web:cf9b5176c8a3baad0be467"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/


// firebase 에서 WebApp을 추가하면 위와 같은 샘플을 준다. 
// 그 데이터를 아래와 같이 변환한다.
 
var firebaseConfig = {
  apiKey: "AIzaSyBw3-sDq7slZ8L80EJxgKme4gEd7J7CGgw",
  authDomain: "mui329.firebaseapp.com",
  projectId: "mui329",
  storageBucket: "mui329.appspot.com",
  messagingSenderId: "410493358246",
  appId: "1:410493358246:web:cf9b5176c8a3baad0be467"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
