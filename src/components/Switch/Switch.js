import classNames from 'classnames/bind';
import styles from './Switch.module.scss';
import { ThemeContext } from '~/context/ThemeContext';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Switch({ rounded = false }) {
    const themeContext = useContext(ThemeContext);

    return (
        <label className={cx('switch')}>
            <input type="checkbox" className={cx('checkbox')} onChange={themeContext.toggleTheme}></input>
            <span className={cx('slider', { rounded: rounded })}></span>
        </label>
    );
}

export default Switch;
