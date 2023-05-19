import { useEffect } from 'react';
import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/Layout';
import { publicRoutes } from '~/routes';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};

firebase.initializeApp(config);
function App() {
    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                console.log('faile');
                return null;
            }
            const token = await user.getIdToken();
            // Get me when signed in
            // console.log('Token: ', token);
            // console.log('UserName:', user.displayName);
            // console.log('UserName:', user.photoURL);
        });
        return () => {
            unregisterAuthObserver();
        };

        // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.components;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
