import { Link, Outlet } from 'react-router-dom';
import Messages from './components/messages/Messages';

const TourOfHeroesApp = () => {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:id" element={<HeroDetail />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense> */}

      <Outlet />
      <Messages />
    </>
  );
};

export default TourOfHeroesApp;
