import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//layouts
import { HeaderOnly } from '~/components/Layouts';
// import { DefaultLayout } from '~/components/Layout';
//Public
const publicRouter = [
  {
    path: '/',
    component: Home,
    // layout: DefaultLayout,
  },
  {
    path: '/folowing',
    component: Following,
    // layout: DefaultLayout,
  },
  {
    path: '/profile',
    component: Profile,
    // layout: DefaultLayout,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];
const privateRouter = [];

export { publicRouter, privateRouter };
