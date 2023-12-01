import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBI4YROd0ufnGgNJQXcsxlBY5NLO3jtMec",
  authDomain: "portfolio-e76bd.firebaseapp.com",
  projectId: "portfolio-e76bd",
  storageBucket: "portfolio-e76bd.appspot.com",
  messagingSenderId: "270077866336",
  appId: "1:270077866336:web:0ec8b994ec79cf6b052e05"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };