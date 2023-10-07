// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWR9EJkS8eoWtoG_NjaCSlqk-drvOmhMo",
  authDomain: "connectmyfamilysikkim.firebaseapp.com",
  projectId: "connectmyfamilysikkim",
  storageBucket: "connectmyfamilysikkim.appspot.com",
  messagingSenderId: "963462490987",
  appId: "1:963462490987:web:6b96405147597cbcd4fa2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
