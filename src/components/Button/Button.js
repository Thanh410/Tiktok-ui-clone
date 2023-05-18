import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    minSmall = false,
    large = false,
    text = false,
    textPrimary = false,
    disabled = false,
    rounded = false,
    primaryOutline = false,
    circle = false,
    boxContainer = false,
    leftIcon,
    rightIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        primaryOutline,
        outline,
        small,
        boxContainer,
        minSmall,
        circle,
        large,
        text,
        textPrimary,
        disabled,
        rounded,
        [className]: className,
    });
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    primaryOutline: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    minSmall: PropTypes.bool,
    boxContainer: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    textPrimary: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
export default Button;
