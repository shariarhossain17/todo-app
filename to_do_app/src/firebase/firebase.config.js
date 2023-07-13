
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4Pr2hTYMGj2vtyz99T8j51k6SrGHBpY0",
  authDomain: "my-to-do-7ca03.firebaseapp.com",
  projectId: "my-to-do-7ca03",
  storageBucket: "my-to-do-7ca03.appspot.com",
  messagingSenderId: "295280555615",
  appId: "1:295280555615:web:0ea85e6dd979beac3f8dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;