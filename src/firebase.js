// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "../firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8jsk_mfLV4k7sR5XAdN6MkHsIQiVfbcg",
  authDomain: "tic-tac-toe-ec609.firebaseapp.com",
  projectId: "tic-tac-toe-ec609",
  storageBucket: "tic-tac-toe-ec609.appspot.com",
  messagingSenderId: "934294654628",
  appId: "1:934294654628:web:b2c86873025dbe6c40e031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);

