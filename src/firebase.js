import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByh4iSZOj7UVyO7w2fD4uGYM9YYQuN1rE",
  authDomain: "ioc-russo.firebaseapp.com",
  projectId: "ioc-russo",
  storageBucket: "ioc-russo.appspot.com",
  messagingSenderId: "566894233600",
  appId: "1:566894233600:web:97e140b2a0beeb7126b0e5",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth, db };
