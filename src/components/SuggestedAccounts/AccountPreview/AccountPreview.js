import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1684065600&x-signature=9rAswr9oFxpwoQ69Fmg1XNKuIg0%3D"
                    className={cx('avatar')}
                    alt=""
                />
                <Button primary className={cx('btn-follow')}>
                    Follow
                </Button>
            </header>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>annhien_boiboi</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>AnNhiên ❤️ BốiBối</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8M</strong>
                    <strong className={cx('label')}>Followers</strong>
                    <strong className={cx('value')}>8.2M</strong>
                    <strong className={cx('label')}>Likes</strong>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
