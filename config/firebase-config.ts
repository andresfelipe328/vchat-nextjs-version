import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8WTt5KqAdXc1vf4eJjvSJl43XhQQRMvA",
  authDomain: "vchat-dcd31.firebaseapp.com",
  projectId: "vchat-dcd31",
  storageBucket: "vchat-dcd31.appspot.com",
  messagingSenderId: "1063640795031",
  appId: "1:1063640795031:web:5de44c88377e9d380326d2",
  measurementId: "G-X7290FWFJ8",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
