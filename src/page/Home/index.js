import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Video from '~/components/Video';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
}

Home.propTypes = {};

export default Home;
