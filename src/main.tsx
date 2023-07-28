import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './TicTacToe/TicTacToeApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <QuickStartApp /> */}
    <Game />
  </React.StrictMode>
);
