import { useEffect, useState } from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, Navigate } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { FBIcon, GGIcon, LineIcon, QRIcon, TalkIcon, TwitterIcon, UserIcon } from '~/components/Icons/icon';
import styles from './modal.module.scss';
import config from '~/config/config';
import { auth, provider } from '~/firebase';
import { signInWithPopup } from 'firebase/auth';

const cx = classNames.bind(styles);

function Login() {
    const [modal, setModal] = useState(false);
    const handleCloseModal = () => {
        setModal(true);
    };
    const [email, setEmail] = useState('');
    const handleAuthGoogle = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setEmail(data.user.email);
                localStorage.setItem('email', data.user.email);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => setEmail(localStorage.getItem('email')), [email]);
    const navigate = Navigate('/');
    return (
        <>
            {modal ? (
                navigate
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('modal')}>
                        <div className={cx('closeModal')} onClick={handleCloseModal}>
                            <FontAwesomeIcon className={cx('close')} icon={faXmark}></FontAwesomeIcon>
                        </div>
                        <div className={cx('loginContainer')}>
                            <h2 className={cx('titleModal')}>Log in to TikTok</h2>
                            <Link className={cx('boxLink')} to={config.routes.qrcode}>
                                <Button boxContainer leftIcon={<QRIcon />}>
                                    <p className={cx('textLogin')}>Use QR code</p>
                                </Button>
                            </Link>
                            <Link className={cx('boxLink')} to={config.routes.emailLogin}>
                                <Button boxContainer leftIcon={<UserIcon />}>
                                    <p className={cx('textLogin')}>Use phone / email / username</p>
                                </Button>
                            </Link>
                            <Link className={cx('boxLink')}>
                                <Button boxContainer leftIcon={<FBIcon />}>
                                    <p className={cx('textLogin')}>Continue with Facebook</p>
                                </Button>
                            </Link>
                            <Link className={cx('boxLink')} to={config.routes.login}>
                                <Button boxContainer leftIcon={<GGIcon />} onClick={handleAuthGoogle}>
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

export default Login;
