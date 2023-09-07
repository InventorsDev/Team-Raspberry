// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeJnF_pX2eq6vrHtlo3Dk4F6WrIMSHRxI",
  authDomain: "final-c6a63.firebaseapp.com",
  projectId: "final-c6a63",
  storageBucket: "final-c6a63.appspot.com",
  messagingSenderId: "618261984698",
  appId: "1:618261984698:web:37001e558db11763405983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app