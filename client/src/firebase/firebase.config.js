// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7jhbnTA9kcDiSvQewzjzKzalha2JsrdY",
  authDomain: "solosphere-2569f.firebaseapp.com",
  projectId: "solosphere-2569f",
  storageBucket: "solosphere-2569f.firebasestorage.app",
  messagingSenderId: "955493518867",
  appId: "1:955493518867:web:29866291935831e52539e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);