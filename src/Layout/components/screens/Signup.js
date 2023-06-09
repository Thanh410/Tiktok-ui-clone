import { useState } from 'react';

import { faChevronDown, faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { FBIcon, GGIcon, LineIcon, TalkIcon, TwitterIcon, UserIcon } from '~/components/Icons/icon';
import styles from './modal.module.scss';
import config from '~/config/config';

const cx = classNames.bind(styles);

function SignUp() {
    const [menuItem, setMenuItem] = useState(false);
    const handleShowMenu = () => {
        setMenuItem(true);
    };

    const navigate = useNavigate();
    const [modal, setModal] = useState(true);
    const handleCloseModal = () => {
        setModal(false);
        navigate('/');
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
                            <h2 className={cx('titleModal')}>Sign up to TikTok</h2>

                            <Link className={cx('boxLink')}>
                                <Button
                                    className={cx('textLogin')}
                                    boxContainer
                                    leftIcon={<UserIcon />}
                                    to={config.routes.emailSignup}
                                >
                                    <p>Use phone / email / username</p>
                                </Button>
                            </Link>
                            <Link className={cx('boxLink')}>
                                <Button boxContainer leftIcon={<FBIcon />}>
                                    <p>Continue with Facebook</p>
                                </Button>
                            </Link>
                            <Link className={cx('boxLink')}>
                                <Button className={cx('textLogin')} boxContainer leftIcon={<GGIcon />}>
                                    <p>Continue with Google</p>
                                </Button>
                            </Link>
                            {!menuItem && (
                                <div>
                                    <Button className={cx('textLogin')} onClick={handleShowMenu}>
                                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                                    </Button>
                                </div>
                            )}

                            {menuItem && (
                                <>
                                    <Link className={cx('boxLink')}>
                                        <Button boxContainer leftIcon={<TwitterIcon />}>
                                            <p>Continue with Twitter</p>
                                        </Button>
                                    </Link>
                                    <Link className={cx('boxLink')}>
                                        <Button className={cx('textLogin')} boxContainer leftIcon={<LineIcon />}>
                                            <p>Continue with LINE</p>
                                        </Button>
                                    </Link>
                                    <Link className={cx('boxLink')}>
                                        <Button className={cx('textLogin')} boxContainer leftIcon={<TalkIcon />}>
                                            <p>Continue with KakaoTalk</p>
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className={cx('footerModal')}>
                            <div className={cx('bottomText')}>
                                <p>Already have an account? </p>
                                <Link className={cx('logIn')} to={config.routes.login}>
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
