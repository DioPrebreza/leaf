// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT_zguB-QGJJTKiffAiOmxUwC18XiUgMQ",
  authDomain: "leaf-818e6.firebaseapp.com",
  projectId: "leaf-818e6",
  storageBucket: "leaf-818e6.appspot.com",
  messagingSenderId: "495415488257",
  appId: "1:495415488257:web:c1d175c20103dbc824b500",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectStorage, timestamp };
