// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUy_oC8PaJ_EfNFQGWnQZzaLQwEDzaWmc',
  authDomain: 'muz1-cf8eb.firebaseapp.com',
  projectId: 'muz1-cf8eb',
  storageBucket: 'muz1-cf8eb.appspot.com',
  messagingSenderId: '756404453507',
  appId: '1:756404453507:web:bb88deedb066f811f4dbb6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
