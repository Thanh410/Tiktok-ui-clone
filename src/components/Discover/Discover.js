import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import DiscoverItem from './DiscoverItem';
import { ThemeContext } from '~/context/ThemeContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Discover({ label }) {
    const themeContext = useContext(ThemeContext);

    return (
        <div className={cx('wrapper', themeContext.theme)}>
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
