import { useState } from 'react';

import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import config from '~/config/config';
import styles from '../modal.module.scss';
import Image from '~/components/Image/image';
import image from '~/assets/image';

const cx = classNames.bind(styles);

function UserName() {
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
                            <h2 className={cx('titleModal')}>Log in with QR code</h2>
                            <div className={cx('QRcode')}>
                                <Image className={cx('imgCode')} src={image.qrcode} />
                            </div>
                            <div className={cx('stepContainer')}>
                                <p>1. Scan with your mobile device’s camera</p>
                                <p>2. Confirm login or sign up</p>
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

export default UserName;
