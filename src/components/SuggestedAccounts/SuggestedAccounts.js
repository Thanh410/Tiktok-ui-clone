import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AcccoutItem from './AccountItem';
import { ThemeContext } from '~/context/ThemeContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const themeContext = useContext(ThemeContext);

    return (
        <div className={cx('wrapper', themeContext.theme)}>
            <h2 className={cx('label')}>{label}</h2>
            <AcccoutItem />

            <div className={cx('see-all')}>See all</div>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
