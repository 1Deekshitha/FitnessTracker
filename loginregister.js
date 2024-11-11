// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Firebase Configuration
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
const auth = getAuth(app);  // Initialize Firebase Authentication

// Register function
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login function
export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }