import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP-YpUb4rI_vsif3EwwgISxxbs-3seq-Q",
  authDomain: "travel-cac99.firebaseapp.com",
  projectId: "travel-cac99",
  storageBucket: "travel-cac99.appspot.com",
  messagingSenderId: "879624660012",
  appId: "1:879624660012:web:9817791b049834dbdcdd89"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
