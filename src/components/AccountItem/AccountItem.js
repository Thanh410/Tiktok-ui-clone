import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AcccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="" className={cx('avatar')} alt="AAAAA"></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>NguyenVanA</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> nguyenvanaaaa</span>
            </div>
        </div>
    );
}

export default AcccoutItem;
