
import { initializeApp } from "firebase/app";
 import {getFirestore} from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyAuxzlUQaK9AOoHp5MfXee81j95WT1Krms",
  authDomain: "react-course-e5e60.firebaseapp.com",
  projectId: "react-course-e5e60",
  storageBucket: "react-course-e5e60.appspot.com",
  messagingSenderId: "441424842196",
  appId: "1:441424842196:web:313ebe113e47635c0f9a41"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)