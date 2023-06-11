import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import VideoInfo from './VideoItem';
import VideoContent from './VideoContent';
import { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';

const cx = classNames.bind(styles);

function Video({ data }) {
    const themeContext = useContext(ThemeContext);

    return (
        <div className={cx('container', themeContext.theme)}>
            <VideoInfo {...data} />
            <VideoContent {...data} />
        </div>
    );
}

export default Video;
