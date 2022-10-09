// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ_l-aRoH80v2yGV0I5Dl990XKEkRYy-E",
  authDomain: "clone-ba7b6.firebaseapp.com",
  projectId: "clone-ba7b6",
  storageBucket: "clone-ba7b6.appspot.com",
  messagingSenderId: "982396965591",
  appId: "1:982396965591:web:7eae5e0b721ae197979692",
  measurementId: "G-ZKP7T691QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);