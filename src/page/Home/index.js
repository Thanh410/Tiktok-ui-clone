import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Video from '~/components/Video';
import * as contentServices from '~/apiServices/contentServices';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [contents, setContents] = useState([]);

    const fetchApi = async () => {
        const result = await contentServices.content('for-you', 15);
        return setContents(result);
    };
    fetchApi();
    return (
        <div className={cx('wrapper')}>
            {contents.map((data, index) => (
                <Video key={index} data={data} />
            ))}
        </div>
    );
}

export default Home;
