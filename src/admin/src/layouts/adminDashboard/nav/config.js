// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/Admin/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Users',
    path: '/Admin/users',
    icon: icon('ic_user'),
  },
  {
    title: 'Role requests',
    path: '/Admin/roles',
    icon: icon('ic_user'),
  },
  {
    title: 'Glossary',
    path: '/Admin/glossary',
    icon: icon('ic_user'),
  },
  

];

export default navConfig;
