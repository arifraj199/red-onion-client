// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_jwwMnoWn2U3vAp0_gW7dPYvpKXwNeYk",
  authDomain: "red-onion-app-822ea.firebaseapp.com",
  projectId: "red-onion-app-822ea",
  storageBucket: "red-onion-app-822ea.appspot.com",
  messagingSenderId: "800706204196",
  appId: "1:800706204196:web:0b38b566cb7c9397bfbeb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;