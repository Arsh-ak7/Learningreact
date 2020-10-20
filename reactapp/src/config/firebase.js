import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAWg1AG9Ii-jV3PNAYSSVIKNfIzkRJC42M",
    authDomain: "react-1-1e79b.firebaseapp.com",
    databaseURL: "https://react-1-1e79b.firebaseio.com",
    projectId: "react-1-1e79b",
    storageBucket: "react-1-1e79b.appspot.com",
    messagingSenderId: "400436680622",
    appId: "1:400436680622:web:e44599593c364e054a9a3f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;