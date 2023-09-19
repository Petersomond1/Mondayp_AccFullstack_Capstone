// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1THBXwIwsh8aX6ocAFG53afTKXCasdQM",
  authDomain: "mondayp-accfullstack-capstone.firebaseapp.com",
  projectId: "mondayp-accfullstack-capstone",
  storageBucket: "mondayp-accfullstack-capstone.appspot.com",
  messagingSenderId: "546507207457",
  appId: "1:546507207457:web:ad26fe1b4630323dc94460",
  measurementId: "G-CJYX9HMK65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);