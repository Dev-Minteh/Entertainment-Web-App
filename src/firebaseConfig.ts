// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvzvYaXkPIpkgz0Tg9vyOk5XvdzZqynqo",
  authDomain: "movie-website-178bd.firebaseapp.com",
  projectId: "movie-website-178bd",
  storageBucket: "movie-website-178bd.firebasestorage.app",
  messagingSenderId: "592637280585",
  appId: "1:592637280585:web:d689c57bd443c54331da98",
  measurementId: "G-Y62JGKJS7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);