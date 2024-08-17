// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNEzBiHTqsQVSiR3kjSTfJO2mbkuLK4nw",
  authDomain: "netflixgpt-b1ce2.firebaseapp.com",
  projectId: "netflixgpt-b1ce2",
  storageBucket: "netflixgpt-b1ce2.appspot.com",
  messagingSenderId: "535657549628",
  appId: "1:535657549628:web:b3be6e7f8b638610719839",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
