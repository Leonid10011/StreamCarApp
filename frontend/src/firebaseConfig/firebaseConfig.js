// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAtQcmHS4k4JiBTD4gTa3UcVZ1R21Hesg",
  authDomain: "streamcarpictures.firebaseapp.com",
  projectId: "streamcarpictures",
  messagingSenderId: "253493179072",
  appId: "1:253493179072:web:e9bf73d0565a5c8a023325",
  storageBucket: "gs://streamcarpictures.appspot.com",
};

const app = initializeApp(firebaseConfig);

export default app;
