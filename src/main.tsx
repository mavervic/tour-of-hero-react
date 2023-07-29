import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import TourOfHeroesApp from './tour-of-heroes/TourOfHeroesApp';
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

    <BrowserRouter>
      <TourOfHeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
