
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDABE5VziyMA1nW7CQj4pueI9vX87Au_8U",
  authDomain: "travel-project-bc057.firebaseapp.com",
  projectId: "travel-project-bc057",
  storageBucket: "travel-project-bc057.appspot.com",
  messagingSenderId: "1041723730458",
  appId: "1:1041723730458:web:f2ae1b7e0ce78672ea3fa3",
  measurementId: "G-WK69D4LSL2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const database = firebase.database();
export const auth = firebase.auth();

