// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlQeU6B3GTbbllc8A0aPfqcaFADlAQGIk",
  authDomain: "building-management-406201.firebaseapp.com",
  projectId: "building-management-406201",
  storageBucket: "building-management-406201.appspot.com",
  messagingSenderId: "371145180594",
  appId: "1:371145180594:web:927a59cf277e48f53110ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;