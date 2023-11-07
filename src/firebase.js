// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdIXksw-ZZFWCr8dVEoHBeIE-177dh7_w",
  authDomain: "todo-app-29bf4.firebaseapp.com",
  projectId: "todo-app-29bf4",
  storageBucket: "todo-app-29bf4.appspot.com",
  messagingSenderId: "348134999022",
  appId: "1:348134999022:web:ad4e6d3c5c58adebbb84ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
