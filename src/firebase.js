// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDBNH_ldMsGY8yhIpR_cXPI-jF7E9xaik",
  authDomain: "iris-portfolio-b0830.firebaseapp.com",
  projectId: "iris-portfolio-b0830",
  storageBucket: "iris-portfolio-b0830.appspot.com",
  messagingSenderId: "959970085524",
  appId: "1:959970085524:web:e9da97d6568819607a0281",
  measurementId: "G-C8YWGGR47R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
