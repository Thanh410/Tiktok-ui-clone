import { useContext, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { Link, Navigate } from 'react-router-dom';
import styles from './Header.module.scss';

import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faPlus, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'tippy.js/dist/tippy.css';
import image from '~/assets/image';
import Button from '~/components/Button/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons/icon';
import Image from '~/components/Image/image';
import Menu from '~/components/Popper/Menu/Menu';
import Search from '~/components/Search/Search';
import config from '~/config/config';
import { auth } from '~/firebase';
import { AuthContext } from '~/context/AuthContext';
import { ThemeContext } from '~/context/ThemeContext';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 2C7.68629 2 5 4.68629 5 8V40C5 43.3137 7.68629 46 11 46H37C40.3137 46 43 43.3137 43 40V8C43 4.68629 40.3137 2 37 2H11ZM9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V40C39 41.1046 38.1046 42 37 42H11C9.89543 42 9 41.1046 9 40V8ZM26.063 14.1175C25.7306 13.4415 25.0465 13.0096 24.2933 13.0002C23.54 12.9907 22.8453 13.4054 22.4961 14.0729L15.6945 27.0746L12.4672 33.1814C12.2092 33.6697 12.3958 34.2747 12.8841 34.5328L14.6524 35.4672C15.1407 35.7253 15.7457 35.5386 16.0038 35.0503L18.6718 30.0017H29.4421L32.0324 35.0274C32.2854 35.5183 32.8885 35.7112 33.3794 35.4581L35.1572 34.5419C35.6481 34.2888 35.8409 33.6858 35.5879 33.1948L32.4477 27.1022L26.063 14.1175ZM27.4492 26.0017H20.77L24.213 19.4202L27.4492 26.0017Z"
                ></path>
            </svg>
        ),
        title: 'English',
        children: {
            title: 'Languare',
            data: [
                {
                    type: 'Languare',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Languare',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24ZM24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 14C14.4477 14 14 14.4477 14 15V17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V15C18 14.4477 17.5523 14 17 14H15ZM14 31C14 30.4477 14.4477 30 15 30H33C33.5523 30 34 30.4477 34 31V33C34 33.5523 33.5523 34 33 34H15C14.4477 34 14 33.5523 14 33V31ZM15 22C14.4477 22 14 22.4477 14 23V25C14 25.5523 14.4477 26 15 26H17C17.5523 26 18 25.5523 18 25V23C18 22.4477 17.5523 22 17 22H15ZM22 15C22 14.4477 22.4477 14 23 14H25C25.5523 14 26 14.4477 26 15V17C26 17.5523 25.5523 18 25 18H23C22.4477 18 22 17.5523 22 17V15ZM23 22C22.4477 22 22 22.4477 22 23V25C22 25.5523 22.4477 26 23 26H25C25.5523 26 26 25.5523 26 25V23C26 22.4477 25.5523 22 25 22H23ZM30 15C30 14.4477 30.4477 14 31 14H33C33.5523 14 34 14.4477 34 15V17C34 17.5523 33.5523 18 33 18H31C30.4477 18 30 17.5523 30 17V15ZM31 22C30.4477 22 30 22.4477 30 23V25C30 25.5523 30.4477 26 31 26H33C33.5523 26 34 25.5523 34 25V23C34 22.4477 33.5523 22 33 22H31Z"
                ></path>
            </svg>
        ),
        title: 'Keyboard shortcuts',
    },
    {
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3019 6.38068C21.723 6.08373 22.9615 7.16986 23.009 8.50693C23.2751 16.0034 29.4377 22 37 22C37.8141 22 38.6105 21.9307 39.3839 21.7982C40.7019 21.5723 42 22.5655 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 15.3248 12.1351 8.0871 20.3019 6.38068ZM19.2223 10.8358C13.8426 12.7885 10 17.9473 10 24C10 31.732 16.268 38 24 38C31.06 38 36.8994 32.7742 37.8611 25.9797C37.5756 25.9932 37.2886 26 37 26C28.0237 26 20.5827 19.4301 19.2223 10.8358Z"
                ></path>
            </svg>
        ),
        title: 'Dark mode',
    },
];

function Header() {
    const handleonChange = (menuItem) => {
        if (menuItem.title === 'Log out') {
            auth.signOut();
            Navigate(menuItem.to);
        }
        switch (menuItem.title) {
            case 'Dark mode':
                return;
            default:
                console.log('err');
        }
    };

    // Xu li dang nhap

    const [user, setUser] = useState(null);
    const currentUser = firebase.auth().currentUser;
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                return null;
            }
            setUser(user);

            const token = await user.getIdToken();
        });
        return () => {
            unregisterAuthObserver();
        };
    }, []);
    const userMenu = [
        {
            icon: (
                <svg
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"
                    ></path>
                </svg>
            ),
            title: 'View Profile',
            to: `/@admin`,
        },
        {
            icon: (
                <svg
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0002 2.49992C5.85803 2.49992 2.50016 5.85778 2.50016 9.99992C2.50016 14.1421 5.85803 17.4999 10.0002 17.4999C14.1423 17.4999 17.5002 14.1421 17.5002 9.99992C17.5002 5.85778 14.1423 2.49992 10.0002 2.49992ZM0.833496 9.99992C0.833496 4.93731 4.93755 0.833252 10.0002 0.833252C15.0628 0.833252 19.1668 4.93731 19.1668 9.99992C19.1668 15.0625 15.0628 19.1666 10.0002 19.1666C4.93755 19.1666 0.833496 15.0625 0.833496 9.99992Z"
                    ></path>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.141 4.99992C12.141 6.27424 13.2115 7.3484 14.5835 7.3484V9.01507C13.6736 9.01507 12.8267 8.72389 12.141 8.22854V11.4961C12.141 13.2238 10.7059 14.5833 8.98723 14.5833C7.26852 14.5833 5.8335 13.2238 5.8335 11.4961C5.8335 9.76845 7.26852 8.40901 8.98723 8.40901V10.0757C8.1429 10.0757 7.50016 10.7343 7.50016 11.4961C7.50016 12.2579 8.1429 12.9166 8.98723 12.9166C9.83156 12.9166 10.4743 12.2579 10.4743 11.4961V4.99992H12.141Z"
                    ></path>
                </svg>
            ),
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: (
                <svg
                    width="1em"
                    data-e2e=""
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.375 44.2391C21.375 44.6593 21.7157 45 22.1359 45H25.8641C26.2843 45 26.625 44.6593 26.625 44.2391V41.3044C29.4979 40.8723 32.1421 39.7417 34.3792 38.0912L36.4554 40.1674C36.7525 40.4646 37.2343 40.4646 37.5314 40.1674L40.1677 37.5311C40.4648 37.234 40.4648 36.7522 40.1677 36.4551L38.0915 34.3789C39.7419 32.1418 40.8723 29.4978 41.3044 26.625H44.2391C44.6593 26.625 45 26.2843 45 25.8641V22.1359C45 21.7157 44.6593 21.375 44.2391 21.375H41.3044C40.8723 18.5021 39.7418 15.858 38.0913 13.6209L40.1673 11.5449C40.4644 11.2478 40.4644 10.766 40.1673 10.4689L37.531 7.83262C37.2339 7.53548 36.7521 7.53548 36.455 7.83262L34.379 9.90863C32.1419 8.25818 29.4978 7.1277 26.625 6.69556V3.76087C26.625 3.34065 26.2843 3 25.8641 3H22.1359C21.7156 3 21.375 3.34065 21.375 3.76087V6.69556C18.5022 7.1277 15.8582 8.25815 13.6211 9.90854L11.5452 7.83265C11.2481 7.53551 10.7664 7.53551 10.4692 7.83265L7.83294 10.4689C7.5358 10.7661 7.5358 11.2478 7.83294 11.545L9.90878 13.6208C8.25826 15.8579 7.12772 18.5021 6.69556 21.375H3.76087C3.34065 21.375 3 21.7157 3 22.1359V25.8641C3 26.2843 3.34065 26.625 3.76087 26.625H6.69556C7.1277 29.4978 8.25819 32.1419 9.90863 34.379L7.83255 36.4551C7.53541 36.7522 7.53541 37.234 7.83255 37.5311L10.4688 40.1674C10.766 40.4645 11.2477 40.4645 11.5449 40.1674L13.6209 38.0913C15.858 39.7418 18.5021 40.8723 21.375 41.3044V44.2391ZM24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"
                    ></path>
                </svg>
            ),
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignIn} />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];
    const themeContext = useContext(ThemeContext);
    return (
        <header className={cx('wrapper', themeContext.theme)}>
            <div className={cx('inner')}>
                <div className={cx('leftContainer')}>
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img
                            src={themeContext.theme === 'dark' ? image.logoLight : image.logoDark}
                            alt="TikTok"
                            className={cx('tiktok')}
                        />
                    </Link>
                </div>
                {/* Search */}
                <Search />
                <div className={cx('actions', themeContext.theme)}>
                    {user ? (
                        <>
                            <Link to={config.routes.upload}>
                                <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                    <span>Upload</span>
                                </Button>
                            </Link>
                            {/* message */}
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            {/* Inbox */}
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline className={cx('btnUpload')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                <span>Upload</span>
                            </Button>
                            <Button to={config.routes.login} primary>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={!user ? userMenu : MENU_ITEMS} onChange={handleonChange}>
                        {user ? (
                            <Image
                                src={
                                    currentUser.photoURL ||
                                    'data:image/png;base64,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'
                                }
                                className={cx('user-avatar')}
                                alt={currentUser.displayName || 'User'}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
