import { useState } from 'react';

import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Image from '~/components/Image/image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import { Link } from 'react-router-dom';
import config from '~/config/config';

const cx = classNames.bind(styles);

function VideoItem({ user, description, music }) {
    const [active, setActive] = useState(false);
    const handleActive = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    };

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview {...user} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('infoItem')}>
            <Tippy placement="bottom-start" delay={[0, 200]} offset={[0, 1]} interactive render={renderPreview}>
                <Link to={config.routes.profile}>
                    <Image src={user.avatar} alt={user.nickname} className={cx('avatar')} />
                </Link>
            </Tippy>
            <div className={cx('info')}>
                <div className={cx('authorContainer')}>
                    <Button to={user.nickname} text className={cx('title')}>
                        {user.first_name}
                    </Button>
                    <h4 className={cx('authorName')}>{user.nickname}</h4>
                </div>
                <span className={cx('text')}>{description} </span>
                <h4>
                    <Button text className={cx('Linkmusic')}>
                        <FontAwesomeIcon icon={faMusic} className={cx('Music')}></FontAwesomeIcon>
                        {music}
                    </Button>
                </h4>
            </div>

            <Button
                small
                primaryOutline
                className={cx('follow', {
                    active: active,
                })}
                onClick={handleActive}
            >
                Follow
            </Button>
        </div>
    );
}

export default VideoItem;
