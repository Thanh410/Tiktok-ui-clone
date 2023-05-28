import { useState } from 'react';

import { faCaretDown, faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import config from '~/config/config';
import styles from '../modal.module.scss';
import { auth } from '~/firebase';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
const cx = classNames.bind(styles);

function Email() {
    const [modal, setModal] = useState(true);
    const handleCloseModal = () => {
        setModal(false);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    };
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
                            <h2 className={cx('titleModal')}>Sign up</h2>
                            <div className={cx('formLogin')}>
                                <div className={cx('des')}>
                                    <p>Email/username</p>
                                    <Button href={null} text>
                                        Log in with email or username
                                    </Button>
                                </div>
                                <div className={cx('label')}>
                                    <div className={cx('inputContainer')}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoCapitalize="none"
                                            autoCompleteType="email"
                                            textContentType="emailAddress"
                                            keyboardType="email-address"
                                            placeholder="Phone number"
                                        ></input>
                                    </div>
                                </div>
                                <div className={cx('label')}>
                                    <div className={cx('inputContainer')}>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            secureTextEntry
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <Button href={null} text>
                                        Log in with password
                                    </Button>
                                </div>
                                <div>
                                    <Button className={cx('btnLogin')} onClick={handleSignup}>
                                        Log in
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('footerModal')}>
                            <div className={cx('bottomText')}>
                                <p>Don’t have an account?</p>
                                <Link to={config.routes.signup}>
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
