import { Navigate, createBrowserRouter } from 'react-router-dom';
import TourOfHeroesApp from './TourOfHeroesApp';
import Dashboard from './components/dashboard/Dashboard';
import HeroDetail from './components/hero-detail/HeroDetail';
import Heroes from './components/heroes/Heroes';

// TODO: lazy loading
// const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
// const HeroDetail = lazy(() => import('./components/hero-detail/HeroDetail'));
// const Heroes = lazy(() => import('./components/heroes/Heroes'));

const TOUR_OF_HERO_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <TourOfHeroesApp />,
    errorElement: <Dashboard />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/heroes', element: <Heroes /> },
      { path: '/heroes/:id', element: <HeroDetail /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" />,
  },
]);

export default TOUR_OF_HERO_ROUTER;
