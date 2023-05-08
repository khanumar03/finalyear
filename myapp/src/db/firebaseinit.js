import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1lF4z8F0rW1b5Jcj7lGs747Te4WwlWY0",
  authDomain: "finalyear-384610.firebaseapp.com",
  projectId: "finalyear-384610",
  storageBucket: "finalyear-384610.appspot.com",
  messagingSenderId: "676682877783",
  appId: "1:676682877783:web:baeb7bcc491a7fba000c12",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
