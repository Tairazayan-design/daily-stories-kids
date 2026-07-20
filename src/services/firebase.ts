import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzxBk9gTAgcql9Ut3X4xC04H0H8iZTzgQ",
  authDomain: "daily-stories-kids.firebaseapp.com",
  projectId: "daily-stories-kids",
  storageBucket: "daily-stories-kids.firebasestorage.app",
  messagingSenderId: "570199064696",
  appId: "1:570199064696:web:5d9164a66290b628296d8d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);