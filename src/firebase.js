import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore/lite' 

const firebaseConfig = {
  apiKey: "AIzaSyBVc6diafSdnby8b_UCaPYQg5azWt0hKRI",
  authDomain: "react-portfolio-dashboar-f170f.firebaseapp.com",
  projectId: "react-portfolio-dashboar-f170f",
  storageBucket: "react-portfolio-dashboar-f170f.appspot.com",
  messagingSenderId: "1060500479932",
  appId: "1:1060500479932:web:82c791ca5e3b8789c555b9"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth();
const provider=new GoogleAuthProvider();
export const db= getFirestore(app)
export const storage=getStorage(app)

export const signInWithGoogle=()=>signInWithPopup(auth, provider)