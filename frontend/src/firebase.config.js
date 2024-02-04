// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDYJiS_CC42dpIoekFcmDNMd54uxurorQ",
  authDomain: "otp-project-25e75.firebaseapp.com",
  projectId: "otp-project-25e75",
  storageBucket: "otp-project-25e75.appspot.com",
  messagingSenderId: "701304483823",
  appId: "1:701304483823:web:5f5d48502a661a4cec501a",
  measurementId: "G-V28XNSE126",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
