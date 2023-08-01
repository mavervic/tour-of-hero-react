import { lazy, Suspense } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Messages from './components/messages/Messages';

const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
const HeroDetail = lazy(() => import('./components/hero-detail/HeroDetail'));
const Heroes = lazy(() => import('./components/heroes/Heroes'));

const TourOfHeroesApp = () => {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:id" element={<HeroDetail />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense>

      <Messages />
    </>
  );
};

export default TourOfHeroesApp;
