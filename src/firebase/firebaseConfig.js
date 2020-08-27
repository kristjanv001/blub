import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALVPofoZobl7RL3Ig8_PDi6_UI64_zYvk",
  authDomain: "blub-app.firebaseapp.com",
  databaseURL: "https://blub-app.firebaseio.com",
  projectId: "blub-app",
  storageBucket: "blub-app.appspot.com",
  messagingSenderId: "901192932183",
  appId: "1:901192932183:web:78ff43a92b4527a2ac3c12",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default firebase;
