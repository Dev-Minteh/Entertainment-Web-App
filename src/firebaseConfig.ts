// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

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
export const auth = getAuth(app);

// export const storage = getStorage(app);