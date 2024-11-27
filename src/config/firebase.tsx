
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjDhS5KB1kBMsqgNwFV6202pyHdqjSOjE",
  authDomain: "prolidera-skills.firebaseapp.com",
  projectId: "prolidera-skills",
  storageBucket: "prolidera-skills.firebasestorage.app",
  messagingSenderId: "239749573863",
  appId: "1:239749573863:web:29d7036692c9cc6106c642",
  measurementId: "G-YZSE283TEV"
};

const app = initializeApp(firebaseConfig);


export { app }