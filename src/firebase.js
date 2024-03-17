
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB-Y0FrdngUYorK5nFekvOkmNwu_ubHqJ4",
  authDomain: "mr-repair-f41b9.firebaseapp.com",
  projectId: "mr-repair-f41b9",
  storageBucket: "mr-repair-f41b9.appspot.com",
  messagingSenderId: "742751662343",
  appId: "1:742751662343:web:4274569e0263de538255a2",
  measurementId: "G-9R7B37NHPM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore();