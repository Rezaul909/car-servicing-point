// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAAI-19SSCgIuQWemNPK6W2YruR52HDsk",
  authDomain: "car-servicing-point.firebaseapp.com",
  projectId: "car-servicing-point",
  storageBucket: "car-servicing-point.appspot.com",
  messagingSenderId: "200041293873",
  appId: "1:200041293873:web:54d26c912484419040cd10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
