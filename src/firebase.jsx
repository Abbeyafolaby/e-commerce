// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmyJV-er6C2E5AnOs3833SIIyye11xIas",
  authDomain: "fir-login-f20a7.firebaseapp.com",
  projectId: "fir-login-f20a7",
  storageBucket: "fir-login-f20a7.appspot.com",
  messagingSenderId: "765667006966",
  appId: "1:765667006966:web:ec3cb49711edfb60194fd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app