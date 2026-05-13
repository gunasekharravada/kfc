// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk4WVqdja-4oEwPn7JK774Jy7g3Sk4yOc",
  authDomain: "first-project-c1488.firebaseapp.com",
  projectId: "first-project-c1488",
  storageBucket: "first-project-c1488.firebasestorage.app",
  messagingSenderId: "197086906285",
  appId: "1:197086906285:web:43b7c6273268071c488324",
  measurementId: "G-84LYT5YN5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{auth};