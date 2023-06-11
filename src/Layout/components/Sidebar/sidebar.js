import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config/config';
import Menu, { MenuItem } from './Menu/index';

import Button from '~/components/Button/Button';
import {
    ExploreIcon,
    ExploreActiveIcon,
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons/icon';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Discover from '~/components/Discover';
import { useContext } from 'react';
import { AuthContext } from '~/context/AuthContext';
import { Link } from 'react-router-dom';
import { ThemeContext } from '~/context/ThemeContext';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Sidebar() {
    const { t } = useTranslation('sidebar');
    const { user } = useContext(AuthContext);
    const themeContext = useContext(ThemeContext);
    return (
        <div className={cx('scrollSidebar', themeContext.theme)}>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title={t('foryou')}
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title={t('following')}
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title={t('explore')}
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title={t('live')}
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    ></MenuItem>
                </Menu>
                {user ? (
                    <div className={cx('container')}>
                        <div className={cx('login')}>
                            <p className={cx('title')}>Log in to follow creators, like videos, and view comments.</p>
                            <Link to={config.routes.login}>
                                <Button className={cx('btnLogin')} primaryOutline>
                                    Log in
                                </Button>
                            </Link>
                        </div>
                        <div className={cx('about')}>
                            <p className={cx('text')}>About</p>
                            <p className={cx('text')}>Newsroom</p>
                            <p className={cx('text')}>Contact</p>
                            <p className={cx('text')}>Careers</p>
                            <p className={cx('text')}>ByteDance</p>
                            <p className={cx('text')}>TikTok for good</p>
                            <p className={cx('text')}>2023 TikTok</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <SuggestedAccounts label={t('suggestedAccounts')} />
                        <Discover label="Discover" />
                    </>
                )}
            </aside>
            <div className={cx('scrollBar')}>
                <div className={cx('scrollBarThumb')}></div>
            </div>
        </div>
    );
}

export default Sidebar;
