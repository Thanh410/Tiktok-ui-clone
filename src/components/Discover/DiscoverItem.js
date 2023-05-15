import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { HashtagIcon, MusictagIcon } from '../Icons/icon';

const cx = classNames.bind(styles);

function DiscoverItem() {
    return (
        <div className={cx('discover-container')}>
            <Button rounded minSmall leftIcon={<HashtagIcon />}>
                <p className={cx('title')}>Suthatla</p>
            </Button>
        </div>
    );
}

DiscoverItem.propTypes = {
    label: PropTypes.string.isRequired,
};

export default DiscoverItem;
