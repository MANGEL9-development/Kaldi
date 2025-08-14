// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeQ-m9TSdyz2X0IY_LLrbY58zkfsWGg5k",
  authDomain: "kaldi-757c9.firebaseapp.com",
  projectId: "kaldi-757c9",
  storageBucket: "kaldi-757c9.firebasestorage.app",
  messagingSenderId: "201551555697",
  appId: "1:201551555697:web:7164b44215631dc6c73fd0",
  measurementId: "G-1EEZXKRJP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);