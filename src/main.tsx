import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { RouterProvider } from 'react-router-dom';
import TOUR_OF_HERO_ROUTER from './tour-of-heroes/route.config';
import './tour-of-heroes/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <QuickStartApp /> */}
    {/* <Game /> */}

    {/* <>
      <MyComponent />
      <h1 className="red">test</h1>
    </> */}

    {/* <BrowserRouter>
      <TourOfHeroesApp />
    </BrowserRouter> */}

    <RouterProvider router={TOUR_OF_HERO_ROUTER} />

    {/* <BrowserRouter>
      <UseEffectApp />
    </BrowserRouter> */}
  </React.StrictMode>
);
