// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxU-_TF9VsXOUNb92SftcJtOdLsnfh5vY",
  authDomain: "drink-checker.firebaseapp.com",
  projectId: "drink-checker",
  storageBucket: "drink-checker.appspot.com",
  messagingSenderId: "150203844548",
  appId: "1:150203844548:web:c8384c4a3fd1f2c0c14691",
  measurementId: "G-FEYN1H6ZF0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore();
export default db;
