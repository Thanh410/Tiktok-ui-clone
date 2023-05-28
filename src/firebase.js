// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyCcCDvofFlGEH-_2Kl-O_qiQvHQFy57nO8',
    authDomain: 'auth-tiktok.firebaseapp.com',
    projectId: 'auth-tiktok',
    storageBucket: 'auth-tiktok.appspot.com',
    messagingSenderId: '358134889245',
    appId: '1:358134889245:web:a12435a38c41820632fff4',
    measurementId: 'G-XZ431YPEBF',
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
