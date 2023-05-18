import { useState } from 'react';

import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Image from '~/components/Image/image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';

const cx = classNames.bind(styles);

function VideoItem() {
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
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('infoItem')}>
            <Tippy placement="bottom-start" delay={[0, 200]} offset={[0, 1]} interactive render={renderPreview}>
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5dc3df94bd9801c3d7c9bddb4e42f911~c5_100x100.jpeg?x-expires=1684159200&x-signature=MkhipiudOmXYf0C3eGKTfaiSNS8%3D"
                    alt=""
                    className={cx('avatar')}
                />
            </Tippy>
            <div className={cx('info')}>
                <div className={cx('authorContainer')}>
                    <Button text className={cx('title')}>
                        pets.cuti22
                    </Button>
                    <h4 className={cx('authorName')}>Pets Funny Cute</h4>
                </div>
                <span className={cx('text')}>Hội những đứa sợ bác suỹ 🥴😸🐶🥰 </span>
                <h4>
                    <Button text className={cx('Linkmusic')}>
                        <FontAwesomeIcon icon={faMusic} className={cx('Music')}></FontAwesomeIcon>
                        原聲 - ABCandE
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
