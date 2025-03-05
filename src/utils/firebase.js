// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKWGKoowkN54ixq7XczzJXYvh0xgi-OOw",
  authDomain: "netflixgpt-4f07a.firebaseapp.com",
  projectId: "netflixgpt-4f07a",
  storageBucket: "netflixgpt-4f07a.firebasestorage.app",
  messagingSenderId: "339981537948",
  appId: "1:339981537948:web:f9f0566b95c8c873449359",
  measurementId: "G-6L4CFZBEK9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
