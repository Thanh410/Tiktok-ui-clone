import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/Layout';
import { publicRoutes } from '~/routes';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
// const config = {
//     apiKey: process.env.REACT_APP_FIREBASE_API,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }
function App() {
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
