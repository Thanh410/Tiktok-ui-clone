import Button from '~/components/Button/Button';
import styles from './Follow.module.scss';
import classNames from 'classnames/bind';
import * as suggestServices from '~/apiServices/suggestServices';
import { useState } from 'react';
import Image from '~/components/Image/image';
const cx = classNames.bind(styles);

function Following() {
    const [follows, setFollow] = useState([]);
    const fetchApi = async () => {
        const result = await suggestServices.suggested(9, 15);
        return setFollow(result);
    };
    fetchApi();

    return (
        <div className={cx('Wapper')}>
            {follows.map((follow) => (
                <div className={cx('CardItem')}>
                    <div className={cx('cardContainer')}>
                        <video src={follow.popular_video.file_url} className={cx('cardImg')} loop></video>
                    </div>
                    <div className={cx('CardInfo')}>
                        <Image className={cx('avatar')} src={follow.avatar}></Image>
                        <h2 className={cx('nameuser')}>{follow.first_name + ' ' + follow.last_name}</h2>
                        <p className={cx('nickname')}>{follow.nickname}</p>
                        <Button className={cx('btnFollow')} primary>
                            Folllow
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Following;
