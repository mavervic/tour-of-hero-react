import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Messages from './components/messages/Messages';
import { MessageContextProvider } from './contexts/MessageContext';

const TourOfHeroesApp = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Location changed:', location.pathname);
    // TODO: Perform some action on route change
  }, [location]);

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

      <MessageContextProvider>
        <Outlet />
        <Messages />
      </MessageContextProvider>
    </>
  );
};

export default TourOfHeroesApp;
