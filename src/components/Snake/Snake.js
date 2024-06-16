import React, { useEffect, useRef, useState, useCallback } from 'react';

import './Snake.css';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const playerPositionX = useRef(10);
  const playerPositionY = useRef(10);
  const applePositionX = useRef(15);
  const applePositionY = useRef(15);
  const snakeTrajectoryX = useRef(0);
  const snakeTrajectoryY = useRef(0);
  const snakeVelocity = 1000 / 10;
  const snakeLength = useRef(5);
  const gridSquareSize = useRef(20);
  const gridSquaresOnCanvas = useRef(20);
  const snakeSquaresPositions = useRef([]);
  const [score, setScore] = useState(0);
  const [gameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerStartedMoving, setPlayerStartedMoving] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const intervalId = useRef(null);

  const resetGame = () => {
    playerPositionX.current = 10;
    playerPositionY.current = 10;
    snakeTrajectoryX.current = 0;
    snakeTrajectoryY.current = 0;
    snakeLength.current = 5;
    snakeSquaresPositions.current = [];
    setScore(0);
    setIsGameOver(false);
    setPlayerStartedMoving(false);
  };

  const keyPush = useCallback((e) => {    
    if (!isGameStarted) return; 
    if (gameOver) return;
    setPlayerStartedMoving(true);

    switch (e.keyCode) {
      case 37:
        snakeTrajectoryX.current = -1; snakeTrajectoryY.current = 0;
        e.preventDefault();
        break;
      case 38:
        snakeTrajectoryX.current = 0; snakeTrajectoryY.current = -1;
        e.preventDefault();
        break;
      case 39:
        snakeTrajectoryX.current = 1; snakeTrajectoryY.current = 0;
        e.preventDefault();
        break;
      case 40:
        snakeTrajectoryX.current = 0; snakeTrajectoryY.current = 1;
        e.preventDefault();
        break;
      case 65:
        snakeTrajectoryX.current = -1; snakeTrajectoryY.current = 0;
        e.preventDefault();
        break;
      case 87:
        snakeTrajectoryX.current = 0; snakeTrajectoryY.current = -1;
        e.preventDefault();
        break;
      case 68:
        snakeTrajectoryX.current = 1; snakeTrajectoryY.current = 0;
        e.preventDefault();
        break;
      case 83:
        snakeTrajectoryX.current = 0; snakeTrajectoryY.current = 1;
        e.preventDefault();
        break;
      default:
        break;
    }
  }, [isGameStarted, gameOver]);  // Only recreate the function when isGameStarted changes
  
  useEffect(() => {
    const canv = canvasRef.current;
    const ctx = canv.getContext("2d");
    
    window.addEventListener('keydown', keyPush);

    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    intervalId.current = setInterval(game, snakeVelocity);

    function game() {
      playerPositionX.current += snakeTrajectoryX.current;
      playerPositionY.current += snakeTrajectoryY.current;

      if (playerPositionX.current < 0) {
        playerPositionX.current = gridSquaresOnCanvas.current - 1;
      }
      if (playerPositionX.current > gridSquaresOnCanvas.current - 1) {
        playerPositionX.current = 0;
      }
      if (playerPositionY.current < 0) {
        playerPositionY.current = gridSquaresOnCanvas.current - 1;
      }
      if (playerPositionY.current > gridSquaresOnCanvas.current - 1) {
        playerPositionY.current = 0;
      }

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canv.width, canv.height);
      ctx.fillStyle = "lime";

      // Draw the snake
      for (let i = 0; i < snakeSquaresPositions.current.length; i++) {
        ctx.fillRect(
          snakeSquaresPositions.current[i].x * gridSquareSize.current,
          snakeSquaresPositions.current[i].y * gridSquareSize.current,
          gridSquareSize.current - 2,
          gridSquareSize.current - 2
        );
        
        if (playerStartedMoving) {
          if (
            snakeSquaresPositions.current[i].x === playerPositionX.current &&
            snakeSquaresPositions.current[i].y === playerPositionY.current
          ) {
            setIsGameOver(true);
            if (score > highScore) {
              setHighScore(score);
            }
          }
  
          if (
            i > 0 &&
            snakeSquaresPositions.current[0].x === snakeSquaresPositions.current[i].x &&
            snakeSquaresPositions.current[0].y === snakeSquaresPositions.current[i].y
          ) {
            setIsGameOver(true);
            if (score > highScore) {
              setHighScore(score);
            }
            playerPositionX.current = 10;
            playerPositionY.current = 10;
            snakeTrajectoryX.current = 0;
            snakeTrajectoryY.current = 0;
            snakeLength.current = 5;
            snakeSquaresPositions.current = [];
          }
        }
      }

      snakeSquaresPositions.current.push({ x: playerPositionX.current, y: playerPositionY.current });
      while (snakeSquaresPositions.current.length > snakeLength.current) {
        snakeSquaresPositions.current.shift();
      }
      if (applePositionX.current === playerPositionX.current && applePositionY.current === playerPositionY.current) {
        snakeLength.current++;
        applePositionX.current = Math.floor(Math.random() * gridSquaresOnCanvas.current);
        applePositionY.current = Math.floor(Math.random() * gridSquaresOnCanvas.current);
        setScore(score + 1);
      }
      ctx.fillStyle = "red";
      ctx.fillRect(applePositionX.current * gridSquareSize.current, applePositionY.current * gridSquareSize.current, gridSquareSize.current - 2, gridSquareSize.current - 2);    
    }

    return () => {
      clearInterval(intervalId.current);
      window.removeEventListener('keydown', keyPush);
    };
  // eslint-disable-next-line
  }, [score, keyPush, isGameStarted]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center' }}>Snake</h2>
        <div style={{position: "relative"}}>
          {!isGameStarted ? (
            <button onClick={() => setIsGameStarted(true)}
                    className="btn btn-success start-button">Start</button>
          ) : (
             gameOver ? (
            <div className="game-over">
              <h3 className="white">Game Over</h3>
              <h5 className="white">Score: {score}</h5>
              <button onClick={resetGame} className="btn btn-secondary">Restart</button>
            </div>
            ) : null 
          )}
            <canvas ref={canvasRef} width="400" height="400" style={{ display: 'block', margin: '0 auto', position: "relative" }}></canvas>
        </div>
      </div>
  );
}

export default SnakeGame;