import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import DiscoverItem from './DiscoverItem';

const cx = classNames.bind(styles);

function Discover({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
        </div>
    );
}

Discover.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Discover;
