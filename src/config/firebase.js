import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
const firebaseConfig = {
  apiKey: "AIzaSyAQtYVvLuqEeSd-mSElLhKG7zCix9BId8Q",
  authDomain: "jornadadev-6b5e0.firebaseapp.com",
  projectId: "jornadadev-6b5e0",
  storageBucket: "jornadadev-6b5e0.appspot.com",
  messagingSenderId: "844938593265",
  appId: "1:844938593265:web:7c09fbd47fb6d525373a50"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;