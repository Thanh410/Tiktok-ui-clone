import config from '~/config/config';

import { HeaderOnly } from '~/Layout';

import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/components/Search/Search';
import Live from '~/page/Live';
import Login from '~/Layout/components/screens/Login';
import SignUp from '~/Layout/components/screens/Signup';
import UserName from '~/Layout/components/screens/Username';

const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.following, components: Following },
    { path: config.routes.profile, components: Profile },
    { path: config.routes.upload, components: Upload, layout: HeaderOnly },
    { path: config.routes.search, components: Search, layout: HeaderOnly },
    { path: config.routes.live, components: Live, layout: HeaderOnly },
    { path: config.routes.signup, components: SignUp, layout: SignUp },
    { path: config.routes.login, components: Login, layout: Login },
    { path: config.routes.qrcode, components: UserName, layout: UserName },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
