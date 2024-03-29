// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/AdminDashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Certificates',
    path: '/AdminDashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Badges',
    path: '/AdminDashboard/badges',
    icon: icon('ic_user'),
  },
  {
    title: 'Courses',
    path: '/AdminDashboard/courses',
    icon: icon('ic_user'),
  },



  /**
  {
    title: 'product',
    path: '/AdminDashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/AdminDashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  }, */
];

export default navConfig;
