import Button from '~/components/Button/Button';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Switch from '~/components/Switch/Switch';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const className = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={className} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title === 'Dark mode' ? (
                <div className="mode" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {data.title} <Switch rounded />
                </div>
            ) : (
                data.title
            )}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
