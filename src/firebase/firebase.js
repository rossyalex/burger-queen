// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5BDCBk2wFsynzxLfMA4iLpLcat9W_tRw",
  authDomain: "burger-cc14d.firebaseapp.com",
  projectId: "burger-cc14d",
  storageBucket: "burger-cc14d.appspot.com",
  messagingSenderId: "109070034492",
  appId: "1:109070034492:web:c268bbc7e83cc6b0d20539",
  measurementId: "G-SMT674D52N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Arrancando mi app
const auth = getAuth(app);
// Base de datos de firebase
const db = getFirestore(app);

/**
 * Login
 * @param email
 * @param password
 * @returns {Promise<void>}
 */

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

/**
 * Register
 * @param name
 * @param email
 * @param password
 * @returns {Promise<void>}
 */
export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
  }
}

/**
 *  Reset password
 * @param email
 * @returns {Promise<void>}
 */
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  signOut(auth);
};

export {
  auth,
  db
};
