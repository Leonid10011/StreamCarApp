// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAtQcmHS4k4JiBTD4gTa3UcVZ1R21Hesg",
  authDomain: "streamcarpictures.firebaseapp.com",
  projectId: "streamcarpictures",
  storageBucket: "streamcarpictures.appspot.com",
  messagingSenderId: "253493179072",
  appId: "1:253493179072:web:e9bf73d0565a5c8a023325",
  storageBucket: "gs://streamcarpictures.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;