import Header from '~/Layout/components/Header';
import Upload from '~/page/Upload';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <Upload />
            </div>
        </div>
    );
}

export default HeaderOnly;
