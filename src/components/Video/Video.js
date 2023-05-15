import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import VideoContent from './VideoContent';

const cx = classNames.bind(styles);

function Video() {
    return (
        <div className={cx('container')}>
            <VideoItem />
            <VideoContent />
        </div>
    );
}

export default Video;
