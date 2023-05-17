// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEH5uXDANJP3rmk03skZBjXcObCopbwAA",
    authDomain: "blogproject-181dd.firebaseapp.com",
    projectId: "blogproject-181dd",
    storageBucket: "blogproject-181dd.appspot.com",
    messagingSenderId: "15927624867",
    appId: "1:15927624867:web:defc975f73b90df7b8eb16",
    measurementId: "G-V8Y3HGMV4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();