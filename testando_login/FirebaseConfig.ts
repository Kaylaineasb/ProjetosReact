// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB9expnB-Z-vooeIlDgLdzBQz6ardQCQc",
  authDomain: "security-images-b353b.firebaseapp.com",
  projectId: "security-images-b353b",
  storageBucket: "security-images-b353b.appspot.com",
  messagingSenderId: "148765874739",
  appId: "1:148765874739:web:10f8767d3615b67cc26146"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB= getFirestore(FIREBASE_APP);