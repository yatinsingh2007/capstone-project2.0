// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB32Qr2rfr93p2XnTlTqxwNKJLwxZ_pfgc",
  authDomain: "capstone-project-54962.firebaseapp.com",
  projectId: "capstone-project-54962",
  storageBucket: "capstone-project-54962.appspot.com",
  messagingSenderId: "158464097062",
  appId: "1:158464097062:web:7ef33aaf330e73672d5fe7",
  measurementId: "G-3X3QWJJKJF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
