// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aikinyi-estate.firebaseapp.com",
  projectId: "aikinyi-estate",
  storageBucket: "aikinyi-estate.appspot.com",
  messagingSenderId: "708029791148",
  appId: "1:708029791148:web:1e1aadc1ec38ed3435d809"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);