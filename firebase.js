import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// If you use .env, use process.env.VITE_FIREBASE_API_KEY, etc. Otherwise, hardcode as below:
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCgkwPtUAwfOd1RMfryxeDgGnoU7jh3Slo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "webappstore-e723c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "webappstore-e723c",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "webappstore-e723c.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "479627973116",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:479627973116:web:84b7349dcb28b2c66aa279",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-M23HSV7JZ1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);