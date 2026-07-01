import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz8w0qMC3mhe_aJJ_T1TFRm0EHxIu2H-s",
  authDomain: "zippyeats-1472d.firebaseapp.com",
  projectId: "zippyeats-1472d",
  storageBucket: "zippyeats-1472d.firebasestorage.app",
  messagingSenderId: "1066366936904",
  appId: "1:1066366936904:web:d21e6bb200ea9f568b757d",
  measurementId: "G-R6Y8RJRRVP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

