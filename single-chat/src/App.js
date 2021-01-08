import React from "react";
import "./App.css";
//FIREBASE SDK
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//HOOKS
import { useAuthState } from "react-fjirebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

//firebase.initalizeApp  helps us identify our project
firebase.initializeApp({
  //your config -add firebase project here

  apiKey: "AIzaSyAeH_i3Xhbi2SkGDer5wlVmisFQdfRIRRQ",
  authDomain: "single-chat-e3f0f.firebaseapp.com",
  projectId: "single-chat-e3f0f",
  storageBucket: "single-chat-e3f0f.appspot.com",
  messagingSenderId: "895106053793",
  appId: "1:895106053793:web:10ab0e154fb2eb8fcce2e0",
  measurementId: "G-R8RFC0F3JE",
});
// here we are making a reference to the auth and firestore SDK's as global variables
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>Single Chat</h1>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </header>
    </div>
  );
}

export default App;
