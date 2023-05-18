// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);
export default db;
