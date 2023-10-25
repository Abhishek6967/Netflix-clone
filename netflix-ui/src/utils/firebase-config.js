import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDq7GDULGjAjCOuJ6oEN3r3IHh6teDNeZE",
  authDomain: "react-netflix-19172.firebaseapp.com",
  projectId: "react-netflix-19172",
  storageBucket: "react-netflix-19172.appspot.com",
  messagingSenderId: "208286274717",
  appId: "1:208286274717:web:510d83e2a1fdbbcd26b074",
  measurementId: "G-YP9YKBW7KE"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
