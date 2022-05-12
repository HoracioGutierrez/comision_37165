import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmZPTUQ3vponUccCoL16OMAABKcwGZ7hQ",
  authDomain: "comision-37165-3fbc2.firebaseapp.com",
  projectId: "comision-37165-3fbc2",
  storageBucket: "comision-37165-3fbc2.appspot.com",
  messagingSenderId: "118437540897",
  appId: "1:118437540897:web:544b3abae807b906cc1f60"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);