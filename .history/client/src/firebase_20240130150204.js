// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-611d6.firebaseapp.com",
  projectId: "mern-estate-611d6",
  storageBucket: "mern-estate-611d6.appspot.com",
  messagingSenderId: "385912170178",
  appId: "1:385912170178:web:f73b07c4a1c411eea6bd5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);