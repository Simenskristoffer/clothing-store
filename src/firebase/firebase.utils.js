import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-Uf4MJO4w8Ugq9wGKhnZBvdn_A4ZEC9Q",
  authDomain: "clothing-store-db-c52e3.firebaseapp.com",
  databaseURL: "https://clothing-store-db-c52e3.firebaseio.com",
  projectId: "clothing-store-db-c52e3",
  storageBucket: "clothing-store-db-c52e3.appspot.com",
  messagingSenderId: "485899027099",
  appId: "1:485899027099:web:756aeeb12458209070fc3e",
  measurementId: "G-45NCKTRNGB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
