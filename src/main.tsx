import React from 'react';
import ReactDOM from 'react-dom/client';
import TourOfHeroesApp from './tour-of-heroes/TourOfHeroesApp';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
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

    {/* <button className="selected"></button>
    <h2>123</h2> */}

    <BrowserRouter>
      <TourOfHeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
