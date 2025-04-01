import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBztouc6yFjt4YRWxrsajVJOyus-1zu4So",
  authDomain: "job-portal-53a6e.firebaseapp.com",
  projectId: "job-portal-53a6e",
  storageBucket: "job-portal-53a6e.firebasestorage.app",
  messagingSenderId: "296861182955",
  appId: "1:296861182955:web:cf0bbd4eb5dfeca1fc47ae",
  measurementId: "G-YGMQYT6T36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

