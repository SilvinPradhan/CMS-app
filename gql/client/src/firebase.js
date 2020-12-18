import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyCVSpK6RxA35NEj7b9FPHJObHojmjx_qdA",
  authDomain: "cms-app-52833.firebaseapp.com",
  projectId: "cms-app-52833",
  storageBucket: "cms-app-52833.appspot.com",
  //   messagingSenderId: "781747679718",
  appId: "1:781747679718:web:f729abc9aa279b44ffe627",
  measurementId: "G-BBZ116GJB6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
