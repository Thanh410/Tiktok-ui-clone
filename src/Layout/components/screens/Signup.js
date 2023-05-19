import { useState, useEffect } from 'react';

import { faArrowDown, faChevronDown, faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { FBIcon, GGIcon, LineIcon, QRIcon, TalkIcon, TwitterIcon, UserIcon } from '~/components/Icons/icon';
import styles from './modal.module.scss';
import config from '~/config/config';

const cx = classNames.bind(styles);

// Authen username/password

// Authen GG
const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
    },
};

function SignUp() {
    const [menuItem, setMenuItem] = useState(false);
    const handleShowMenu = () => {
        setMenuItem(true);
    };

    const [modal, setModal] = useState(true);
    const handleCloseModal = () => {
        setModal(false);
    };

    return (
        <>
            {modal && (
                <div className={cx('wrapper')}>
                    <div className={cx('modal')}>
                        <Link to={config.routes.home}>
                            <div className={cx('closeModal')} onClick={handleCloseModal}>
                                <FontAwesomeIcon className={cx('close')} icon={faXmark}></FontAwesomeIcon>
                            </div>
                        </Link>
                        <Link to={config.routes.login}>
                            <div className={cx('backSign')}>
                                <FontAwesomeIcon icon={faChevronLeft} className={cx('chevronLeft')}></FontAwesomeIcon>
                            </div>
                        </Link>
                        <div className={cx('loginContainer')}>
                            <h2 className={cx('titleModal')}>Sign up to TikTok</h2>

                            <Link className={cx('boxLink')}>
                                <Button boxContainer leftIcon={<UserIcon />}>
                                    <p className={cx('textLogin')}>Use phone / email / username</p>
                                </Button>
                            </Link>
                            <Link className={cx('boxLink')}>
                                <Button boxContainer leftIcon={<FBIcon />}>
                                    <p className={cx('textLogin')}>Continue with Facebook</p>
                                </Button>
                            </Link>
                            <Link className={cx('boxLink')}>
                                <Button boxContainer leftIcon={<GGIcon />}>
                                    <p className={cx('textLogin')}>Continue with Google</p>
                                </Button>
                            </Link>
                            {!menuItem && (
                                <div>
                                    <Button onClick={handleShowMenu}>
                                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                                    </Button>
                                </div>
                            )}

                            {menuItem && (
                                <>
                                    <Link className={cx('boxLink')}>
                                        <Button boxContainer leftIcon={<TwitterIcon />}>
                                            <p className={cx('textLogin')}>Continue with Twitter</p>
                                        </Button>
                                    </Link>
                                    <Link className={cx('boxLink')}>
                                        <Button boxContainer leftIcon={<LineIcon />}>
                                            <p className={cx('textLogin')}>Continue with LINE</p>
                                        </Button>
                                    </Link>
                                    <Link className={cx('boxLink')}>
                                        <Button boxContainer leftIcon={<TalkIcon />}>
                                            <p className={cx('textLogin')}>Continue with KakaoTalk</p>
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className={cx('footerModal')}>
                            <div className={cx('bottomText')}>
                                <p>Already have an account? </p>
                                <Link to={config.routes.login}>
                                    <Button textPrimary text to={null}>
                                        Log in
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

export default SignUp;
