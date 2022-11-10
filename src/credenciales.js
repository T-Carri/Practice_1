// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVSpeBtJikzqE3nds9IvsY4I9hdOGAvhc",
  authDomain: "tutorial-09-sdk-1eb4b.firebaseapp.com",
  projectId: "tutorial-09-sdk-1eb4b",
  storageBucket: "tutorial-09-sdk-1eb4b.appspot.com",
  messagingSenderId: "601498898011",
  appId: "1:601498898011:web:3a4c79ae343212536a797e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
