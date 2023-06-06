import styles from './Upload.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <h2>follow</h2>
        </div>
    );
}

export default Upload;
