// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-N3dDr7G48SP8Fg6JaQ1YfI66N_afYWE",
  authDomain: "login-auth-948f4.firebaseapp.com",
  projectId: "login-auth-948f4",
  storageBucket: "login-auth-948f4.appspot.com",
  messagingSenderId: "818296300381",
  appId: "1:818296300381:web:84c0d3876c7ebe1aa83eb4"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export default app;