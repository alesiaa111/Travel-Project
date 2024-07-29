import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDABE5VziyMA1nW7CQj4pueI9vX87Au_8U",
  authDomain: "travel-project-bc057.firebaseapp.com",
  projectId: "travel-project-bc057",
  storageBucket: "travel-project-bc057.appspot.com",
  messagingSenderId: "1041723730458",
  appId: "1:1041723730458:web:f2ae1b7e0ce78672ea3fa3",
  measurementId: "G-WK69D4LSL2",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
