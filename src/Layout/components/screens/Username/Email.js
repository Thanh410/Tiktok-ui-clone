import { useState } from 'react';

import { faCaretDown, faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import config from '~/config/config';
import styles from '../modal.module.scss';

const cx = classNames.bind(styles);

function Email() {
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
                        <Link to={config.routes.login}>
                            <div className={cx('backSign')}>
                                <FontAwesomeIcon icon={faChevronLeft} className={cx('chevronLeft')}></FontAwesomeIcon>
                            </div>
                        </Link>
                        <div className={cx('loginContainer')}>
                            <h2 className={cx('titleModal')}>Log in</h2>
                            <div className={cx('formLogin')}>
                                <div className={cx('des')}>
                                    <p>Phone</p>
                                    <Button href={null} text>
                                        Log in with email or username
                                    </Button>
                                </div>
                                <div className={cx('label')}>
                                    <span className={cx('areaLabel')}>
                                        VN +84
                                        <FontAwesomeIcon icon={faCaretDown} className={cx('CaretD')}></FontAwesomeIcon>
                                    </span>
                                    <div className={cx('inputContainer')}>
                                        <input placeholder="Phone number"></input>
                                    </div>
                                </div>
                                <div className={cx('input')}>
                                    <input placeholder="Enter 6-digit code" className={cx('sendcode')}></input>
                                    <Button disabled className={cx('btnSendcode')}>
                                        Send Code
                                    </Button>
                                </div>
                                <div>
                                    <Button href={null} text>
                                        Log in with password
                                    </Button>
                                </div>
                                <div>
                                    <Button disabled className={cx('btnLogin')}>
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
