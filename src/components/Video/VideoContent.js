import { useState, useRef, useEffect } from 'react';

import { faComment, faHeart, faPlay, faShare, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import videos from '~/assets/videos/1.mp4';
import useElementOnScreen from '~/components/useElementOnScreen';

const cx = classNames.bind(styles);
function VideoContent() {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };

    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisibile]);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play([]);
            setPlaying(true);
        }
    };

    // Xu li like video
    const currentIndex = 190;
    const [active, setActive] = useState(false);
    const [like, setLike] = useState(currentIndex);
    const handleLike = () => {
        if (like !== currentIndex) {
            setLike(like - 1);
            setActive(false);
        } else {
            setLike(like + 1);
            setActive(true);
        }
    };

    return (
        <div className={cx('videoCard')}>
            <div className={cx('videoContent')}>
                <video
                    ref={videoRef}
                    onClick={handleVideo}
                    className={cx('videoPlayer')}
                    width="320"
                    height="240"
                    src={videos}
                    controls
                    loop
                ></video>
            </div>

            <div className={cx('actionItem')}>
                <button className={cx('btn-actionItem')} onClick={handleLike}>
                    <span className={cx('circle')}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={cx('actionLikeIcon', {
                                active: active,
                            })}
                        />
                    </span>
                    <strong className={cx('text')}>{like}</strong>
                </button>
                <button className={cx('btn-actionItem')}>
                    <span className={cx('circle')}>
                        <FontAwesomeIcon icon={faComment} className={cx('actionIcon')} />
                    </span>
                    <strong className={cx('text')}>195</strong>
                </button>
                <button className={cx('btn-actionItem')}>
                    <span className={cx('circle')}>
                        <FontAwesomeIcon icon={faShare} className={cx('actionIcon')} />
                    </span>
                    <strong className={cx('text')}>92</strong>
                </button>
            </div>
        </div>
    );
}

export default VideoContent;
