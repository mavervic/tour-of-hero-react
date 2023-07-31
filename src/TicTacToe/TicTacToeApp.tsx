import { useState } from 'react';

type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

type BoardProps = {
  xIsNext: boolean;
  squares: Array<string>;
  onPlay: (nextSquares: Array<string>) => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const hankdleSquareClick = (idx: number) => {
    return () => {
      if (squares[idx] || calculateWinner(squares)) {
        return;
      }

      const nextSquares = squares.slice();
      nextSquares[idx] = xIsNext ? 'X' : 'O';
      onPlay(nextSquares);
    };
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={hankdleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={hankdleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={hankdleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={hankdleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={hankdleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={hankdleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={hankdleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={hankdleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={hankdleSquareClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState<Array<Array<string>>>([
    Array(9).fill(''),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const handleButtonClick = (nextMove: number) => {
    return () => {
      setCurrentMove(nextMove);
    };
  };

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={handleButtonClick(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: Array<string>): string {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return '';
}
