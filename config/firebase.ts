import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8WTt5KqAdXc1vf4eJjvSJl43XhQQRMvA",
  authDomain: "vchat-dcd31.firebaseapp.com",
  projectId: "vchat-dcd31",
  storageBucket: "vchat-dcd31.appspot.com",
  messagingSenderId: "1063640795031",
  appId: "1:1063640795031:web:5de44c88377e9d380326d2",
  measurementId: "G-X7290FWFJ8",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db: any = getFirestore(app);

export { db, app };
