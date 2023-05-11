import { HeaderOnly } from '~/Layout';

import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';

const publicRoutes = [
    {path: '/', components: Home},
    {path: '/following', components: Following},
    {path: '/profile', components: Profile},
    {path: '/upload', components: Upload, layout: HeaderOnly},
];

const privateRoutes = [

];

export {publicRoutes, privateRoutes};