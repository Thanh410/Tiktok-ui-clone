import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config/config';
import Menu, { MenuItem } from './Menu/index';
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

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('scrollSidebar')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title="Explore"
                        to={config.routes.explore}
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                    ></MenuItem>
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    ></MenuItem>
                </Menu>
                <SuggestedAccounts label="Suggested accounts " />
                <Discover label="Discover" />
                <div className={cx('scrollBar')}>
                    <div className={cx('scrollBarThumb')}></div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
