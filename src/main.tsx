import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './TicTacToe/TicTacToeApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <QuickStartApp /> */}
    <Board />
  </React.StrictMode>
);
