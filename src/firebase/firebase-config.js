import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAthaqMCssAQBIw3n6bHuZiw-EoK6q4nY",
  authDomain: "travel-project-a2765.firebaseapp.com",
  projectId: "travel-project-a2765",
  storageBucket: "travel-project-a2765.appspot.com",
  messagingSenderId: "809832981561",
  appId: "1:809832981561:web:5b2f712a0dd80bc98bd9e8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

