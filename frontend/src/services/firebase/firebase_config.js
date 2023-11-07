// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsRKhcEdz5RZ6lAXRinXgAIqm6qHdcCQ",
  authDomain: "managev-a96a9.firebaseapp.com",
  projectId: "managev-a96a9",
  storageBucket: "managev-a96a9.appspot.com",
  messagingSenderId: "141006700658",
  appId: "1:141006700658:web:542431ed4a7b0b329042eb",
  measurementId: "G-80CFE153JP",
};
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and get reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get reference to the service
export const firestore = getFirestore(app);  

// https://managev-a96a9.firebaseapp.com/__/auth/handler