import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { ThemeContext } from '~/context/ThemeContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon, activeIcon }) {
    const themeContext = useContext(ThemeContext);

    return (
        <NavLink to={to} className={(nav) => cx('menu-item', themeContext.theme, { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
