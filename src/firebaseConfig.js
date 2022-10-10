import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAZ_l-aRoH80v2yGV0I5Dl990XKEkRYy-E",
  authDomain: "clone-ba7b6.firebaseapp.com",
  projectId: "clone-ba7b6",
  storageBucket: "clone-ba7b6.appspot.com",
  messagingSenderId: "982396965591",
  appId: "1:982396965591:web:7eae5e0b721ae197979692",
  measurementId: "G-ZKP7T691QJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };