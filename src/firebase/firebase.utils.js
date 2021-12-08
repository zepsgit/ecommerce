// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
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
const db = getFirestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userRef = await addDoc(collection(db, "users"), {userId:userAuth.uid});

  //const snapShot = await userRef.get();
  const snapShot = await getDocs(collection(db, "users"));
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = getAuth();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

export const SignInWithGoogle=()=>signInWithPopup(auth, provider);;