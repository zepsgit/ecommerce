// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzAKqlJ7hIi1jnHEWOYmGb0Kgsc0dUCjc",
  authDomain: "crwn-clothing-fc3e0.firebaseapp.com",
  projectId: "crwn-clothing-fc3e0",
  storageBucket: "crwn-clothing-fc3e0.appspot.com",
  messagingSenderId: "538630781986",
  appId: "1:538630781986:web:763741a8fb0a4699899e7b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const auth = getAuth();
export const SignOut=signOut(auth);
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

export const SignInWithGoogle=()=>signInWithPopup(auth, provider);;