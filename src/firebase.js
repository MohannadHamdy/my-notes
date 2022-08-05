// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRMZfiUHIrVAugju9sshx3ndC3lWp8iEQ",
  authDomain: "mynotes-c9ab4.firebaseapp.com",
  projectId: "mynotes-c9ab4",
  storageBucket: "mynotes-c9ab4.appspot.com",
  messagingSenderId: "599246141906",
  appId: "1:599246141906:web:ece4f5721cadbb2e1e300b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// init Auth
const auth = getAuth();

export { app, db, auth };
