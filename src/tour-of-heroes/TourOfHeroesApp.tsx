import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import HeroDetail from './components/hero-detail/HeroDetail';
import Heroes from './components/heroes/Heroes';
import Messages from './components/messages/Messages';

export default function TourOfHeroesApp() {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>

      <Routes>
        <Route path="" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/heroes/:id" element={<HeroDetail />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>

      <Messages />
    </>
  );
}
