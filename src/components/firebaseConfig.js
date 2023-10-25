// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdIXksw-ZZFWCr8dVEoHBeIE-177dh7_w",
  authDomain: "todo-app-29bf4.firebaseapp.com",
  projectId: "todo-app-29bf4",
  storageBucket: "todo-app-29bf4.appspot.com",
  messagingSenderId: "348134999022",
  appId: "1:348134999022:web:6a278449633422d5bb84ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }; // Export app and db as named exports
