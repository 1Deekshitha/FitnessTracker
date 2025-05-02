// src/pages/Yoga/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRIbcH4TAfSG_bGL7A9QNyxfe_aZdPJns",
  authDomain: "fitness-97148.firebaseapp.com",
  projectId: "fitness-97148",
  storageBucket: "fitness-97148.firebasestorage.app",
  messagingSenderId: "576395512861",
  appId: "1:576395512861:web:c7414f7b8689c173e80af4",
  measurementId: "G-6R65DNQ9X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
