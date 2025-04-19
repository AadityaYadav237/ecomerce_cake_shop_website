// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAjhUH-vBtO56EZjhDJIBDnjhFSB8dsBI",
  authDomain: "cake-c6363.firebaseapp.com",
  projectId: "cake-c6363",
  storageBucket: "cake-c6363.appspot.com",
  messagingSenderId: "807574105988",
  appId: "1:807574105988:web:11d09e2165f5ba97d9b7d1",
  measurementId: "G-YFJ3TTRJB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}