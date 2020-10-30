import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwdymb07vnLGXT01Ov7mAt191hOckgtyU",
  authDomain: "netflix-clone-d3d95.firebaseapp.com",
  databaseURL: "https://netflix-clone-d3d95.firebaseio.com",
  projectId: "netflix-clone-d3d95",
  storageBucket: "netflix-clone-d3d95.appspot.com",
  messagingSenderId: "159392936376",
  appId: "1:159392936376:web:07b065cb502e8d66cc9f4d",
  measurementId: "G-74V3GHK78M"
};

firebase.initializeApp(firebaseConfig);

export default firebase;