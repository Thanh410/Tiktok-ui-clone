// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyCLMMVu8fiDpuDD9U5aLCRNzOgsnyfVrz4',
    authDomain: 'authen-reactjs.firebaseapp.com',
    projectId: 'authen-reactjs',
    storageBucket: 'authen-reactjs.appspot.com',
    messagingSenderId: '87992491247',
    appId: '1:87992491247:web:7ff74c868a9c51c2b48f1a',
    measurementId: 'G-3GVNVCD2V6',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
