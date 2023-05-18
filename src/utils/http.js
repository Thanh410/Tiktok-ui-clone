import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const getFirebaseToken = async () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) return currentUser.getIdToken();

    // Not login
    const hasRememberedAccount = localStorage.getItem('firebaseui::remmemberedAccount');

    if (!hasRememberedAccount) {
        return null;
    }

    // Logged in but current user is not fetched --> wait (10s)
    return new Promise((resolve, reject) => {
        const waitTimer = setTimeout(() => {
            reject(null);
        }, 10000);

        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                console.log('logout');
                reject(null);
            }
            const token = await user.getIdToken();
            resolve(token);
            clearTimeout(waitTimer);
        });
        return () => unregisterAuthObserver();
    });
};

http.interceptors.request.use(async (config) => {
    // const currentUser = firebase.auth().currentUser;
    // if (currentUser) {
    //     const token = await currentUser.getIdToken();
    //     config.headers.Authorization = `Bearer ${token}`;
    // }

    const token = await getFirebaseToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const get = async (path, options = {}) => {
    const response = await http.get(path, options);
    return response.data;
};

export default http;
