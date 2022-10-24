import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuL7qxlF0oETy604pNLa05ShlyYE8FeRk",
  authDomain: "clone-c2145.firebaseapp.com",
  projectId: "clone-c2145",
  storageBucket: "clone-c2145.appspot.com",
  messagingSenderId: "47867936471",
  appId: "1:47867936471:web:952322760d1f39c67bba92",
  measurementId: "G-TLDBLMFVSX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
