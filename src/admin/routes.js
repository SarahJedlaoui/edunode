import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './src/layouts/dashboard';
import SimpleLayout from './src/layouts/simple';
//
import BlogPage from './src/pages/BlogPage';
import UserPage from './src/pages/UserPage';
import LoginPage from './src/pages/LoginPage';
import Page404 from './/src/pages/Page404';
import ProductsPage from './src/pages/ProductsPage';
import DashboardAppPage from './src/pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Routerrr() {
  const routes = useRoutes([
    {
      path: '/AdminDashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
