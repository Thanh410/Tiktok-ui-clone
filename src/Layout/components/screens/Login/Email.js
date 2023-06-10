import { useContext, useState } from 'react';

import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, Navigate } from 'react-router-dom';
import Button from '~/components/Button/Button';
import config from '~/config/config';
import styles from '../modal.module.scss';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { AuthContext } from '~/context/AuthContext';
const cx = classNames.bind(styles);

function Email() {
    const [modal, setModal] = useState(true);
    const handleCloseModal = () => {
        setModal(false);
    };
    const { user, error } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Handle Enable login

    const handleLogin = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {})
            .catch((error) => {
                console.log(error);
            });
        Navigate('/');
    };

    var value = { email, password };
    return (
        <>
            {modal && (
                <div className={cx('wrapper')}>
                    <div className={cx('modal')}>
                        <div className={cx('closeModal')} onClick={handleCloseModal}>
                            <FontAwesomeIcon className={cx('close')} icon={faXmark}></FontAwesomeIcon>
                        </div>
                        <Link to={config.routes.login}>
                            <div className={cx('backSign')}>
                                <FontAwesomeIcon icon={faChevronLeft} className={cx('chevronLeft')}></FontAwesomeIcon>
                            </div>
                        </Link>
                        <div className={cx('loginContainer')}>
                            <h2 className={cx('titleModal')}>Log in</h2>
                            <div className={cx('formLogin')}>
                                <div className={cx('des')}>
                                    <p className={cx('descTitle')}>Email or username</p>
                                    <Link className={cx('link')} to={config.routes.phone}>
                                        Log in with phone
                                    </Link>
                                </div>
                                <div className={cx('label')}>
                                    <div className={cx('inputContainer')}>
                                        <input
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email or username"
                                        ></input>
                                    </div>
                                </div>
                                <div className={cx('label')}>
                                    <div className={cx('inputContainer')}>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        ></input>
                                    </div>
                                </div>
                                {error && <span>Wrong password or username</span>}
                                <div>
                                    <Link className={cx('link')} to={null}>
                                        Forgot password?
                                    </Link>
                                </div>
                                <div>
                                    <Button
                                        className={cx('btnLogin', email && password ? 'primary' : 'disabled')}
                                        onClick={handleLogin}
                                    >
                                        Log in
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('footerModal')}>
                            <div className={cx('bottomText')}>
                                <p>Don’t have an account?</p>
                                <Link to={config.routes.signup} className={cx('linkSignUp')}>
                                    <Button textPrimary text to={null}>
                                        Sign up
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Email;
