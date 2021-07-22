import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyBKUvcPFYfBXCdcqdtHInQ4usSUsRGuW4M",
	authDomain: "gallery-app-ea447.firebaseapp.com",
	projectId: "gallery-app-ea447",
	storageBucket: "gallery-app-ea447.appspot.com",
	messagingSenderId: "1088926956815",
	appId: "1:1088926956815:web:3b3b46525b43f1842e127a",
	measurementId: "G-XTHWDV5CMS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
