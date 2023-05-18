import { useState } from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
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

const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
    },
};

function Login() {
    const [modal, setModal] = useState(true);
    const handleCloseModal = () => {
        setModal(false);
    };
    return (
        <>
            {modal && (
                <div className={cx('wrapper')}>
                    <div className={cx('modal')}>
                        <div className={cx('closeModal')} onClick={handleCloseModal}>
                            <FontAwesomeIcon className={cx('close')} icon={faXmark}></FontAwesomeIcon>
                        </div>
                        <div className={cx('loginContainer')}>
                            <h2 className={cx('titleModal')}>Log in to TikTok</h2>
                            <Link className={cx('boxLink')}>
                                <Button boxContainer leftIcon={<QRIcon />}>
                                    <p className={cx('textLogin')}>Use QR code</p>
                                </Button>
                            </Link>
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
                            <Link
                                className={cx('boxLink')}
                                to={config.routes.signin}
                                // uiConfig={uiConfig}
                                // firebaseAuth={firebase.auth()}
                            >
                                <Button boxContainer leftIcon={<GGIcon />}>
                                    <p className={cx('textLogin')}>Continue with Google</p>
                                </Button>
                            </Link>
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
                            <Link className={cx('boxLink')}>
                                <Button boxContainer leftIcon={<UserIcon />}>
                                    <p className={cx('textLogin')}>Continue with KakaoTalk</p>
                                </Button>
                            </Link>
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                        <div className={cx('footerModal')}>
                            <div className={cx('bottomText')}>
                                <p>Don’t have an account?</p>
                                <Button textPrimary text to={null}>
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
