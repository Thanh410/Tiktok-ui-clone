import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { useState } from 'react';
const cx = classNames.bind(styles);

function AccountPreview({ ...user }) {
    const [active, setActive] = useState(false);
    const handleActive = () => {
        if (active) {
            setActive(false);
            console.log('active');
        } else {
            setActive(true);
            console.log('unactive');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img src={user.avatar} className={cx('avatar')} alt="" />
                <Button
                    onClick={handleActive}
                    primaryOutline
                    className={cx('btn-follow', {
                        active: active,
                    })}
                >
                    Follow
                </Button>
            </header>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>{user.nickname}</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>{user.idName}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{user.followers_count}</strong>
                    <strong className={cx('label')}>Followers</strong>
                    <strong className={cx('value')}>{user.likes_count}</strong>
                    <strong className={cx('label')}>Likes</strong>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
