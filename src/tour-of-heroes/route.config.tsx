import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import TourOfHeroesApp from './TourOfHeroesApp';

const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
const HeroDetail = lazy(() => import('./components/hero-detail/HeroDetail'));
const Heroes = lazy(() => import('./components/heroes/Heroes'));

const TOUR_OF_HERO_ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <TourOfHeroesApp />,
    errorElement: <Dashboard />,
    children: [
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
