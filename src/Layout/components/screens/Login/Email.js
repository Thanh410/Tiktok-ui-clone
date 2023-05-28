import { useState } from 'react';

import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import config from '~/config/config';
import styles from '../modal.module.scss';
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

    const handleLogin = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
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
                            <h2 className={cx('titleModal')}>Log in</h2>
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
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                        ></input>
                                    </div>
                                </div>
                                {!Error('Wrong password or username')}
                                <div>
                                    <Button href={null} text>
                                        Log in with password
                                    </Button>
                                </div>
                                <div>
                                    <Button className={cx('btnLogin')} onClick={handleLogin}>
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
