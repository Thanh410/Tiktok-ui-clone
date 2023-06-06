import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import VideoInfo from './VideoItem';
import VideoContent from './VideoContent';

const cx = classNames.bind(styles);

function Video({ data }) {
    return (
        <div className={cx('container')}>
            <VideoInfo {...data} />
            <VideoContent {...data} />
        </div>
    );
}

export default Video;
