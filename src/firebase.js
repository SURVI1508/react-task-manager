import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIIZ9rFygABJ1xM6uWqWViIdkADukMVfc",
  authDomain: "fire-base-auth-react--112233.firebaseapp.com",
  projectId: "fire-base-auth-react--112233",
  storageBucket: "fire-base-auth-react--112233.appspot.com",
  messagingSenderId: "747654008407",
  appId: "1:747654008407:web:0c28f82f55e596ae99dd12",
  measurementId: "G-0SR00TW9W1",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
