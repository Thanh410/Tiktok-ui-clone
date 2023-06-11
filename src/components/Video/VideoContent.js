import { useState, useRef, useEffect, useContext } from 'react';

import { faComment, faHeart, faPlay, faShare, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useElementOnScreen from '~/components/useElementOnScreen';
import { ThemeContext } from '~/context/ThemeContext';

const cx = classNames.bind(styles);
function VideoContent({ comments_count, likes_count, shares_count, file_url }) {
    const themeContext = useContext(ThemeContext);
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };

    const isVisibile = useElementOnScreen(options, videoRef);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    useEffect(() => {
        if (isVisibile) {
            if (!playing && !undefined) {
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

    // Xu li likes_count video
    const currentLike = likes_count;
    const [active, setActive] = useState(false);
    const [likes, setLikes] = useState(currentLike);
    const handleLike = () => {
        if (active) {
            setLikes(currentLike + 1);
            setActive(true);
        } else {
            setLikes(currentLike);
        }
    };
    return (
        <div className={cx('videoCard', themeContext.theme)}>
            <div className={cx('videoContent')}>
                <video ref={videoRef} onClick={handleVideo} className={cx('videoPlayer')} src={file_url} loop />
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
                    <strong className={cx('text')}>{likes}</strong>
                </button>
                <button className={cx('btn-actionItem')}>
                    <span className={cx('circle')}>
                        <FontAwesomeIcon icon={faComment} className={cx('actionIcon')} />
                    </span>
                    <strong className={cx('text')}>{comments_count}</strong>
                </button>
                <button className={cx('btn-actionItem')}>
                    <span className={cx('circle')}>
                        <FontAwesomeIcon icon={faShare} className={cx('actionIcon')} />
                    </span>
                    <strong className={cx('text')}>{shares_count}</strong>
                </button>
            </div>
        </div>
    );
}

export default VideoContent;
