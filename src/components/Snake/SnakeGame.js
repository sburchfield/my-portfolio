import React, { useEffect, useRef, useCallback } from 'react';
import ResetButton from './ResetButton';

import './SnakeGame.css';

const SnakeGame = ({ isGameStarted, setIsGameStarted, gameOver, setGameOver, 
  score, setScore, playerStartedMoving, setPlayerStartedMoving, onSubmit, handleSubmit, register, errors, newHighScore, setNewHighScore, highScores}) => {

  const canvasRef = useRef(null);
  const snakeHeadPositionX = useRef(10);
  const snakeHeadPositionY = useRef(10);
  const applePositionX = useRef(15);
  const applePositionY = useRef(15);
  const snakeTrajectoryX = useRef(0);
  const snakeTrajectoryY = useRef(0);
  const snakeVelocity = 1000 / 10;
  const snakeLength = useRef(5);
  const gridSquareSize = useRef(20);
  const gridSquaresOnCanvas = useRef(20);
  const snakeSquaresPositions = useRef([]);
  const intervalId = useRef(null);

  const startGame = () => {
    game();
    setIsGameStarted(true);
  };

  const resetGame = () => {
    snakeHeadPositionX.current = 10;
    snakeHeadPositionY.current = 10;
    snakeTrajectoryX.current = 0;
    snakeTrajectoryY.current = 0;
    snakeLength.current = 5;
    snakeSquaresPositions.current = [];
    setScore(0);
    setGameOver(false);
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
  }, [isGameStarted, gameOver, setPlayerStartedMoving]);

  const game = useCallback(() => {
    const canv = canvasRef.current;
    const ctx = canv.getContext("2d");

    snakeHeadPositionX.current += snakeTrajectoryX.current;
    snakeHeadPositionY.current += snakeTrajectoryY.current;

    if (snakeHeadPositionX.current < 0) {
      snakeHeadPositionX.current = gridSquaresOnCanvas.current - 1;
    }
    if (snakeHeadPositionX.current > gridSquaresOnCanvas.current - 1) {
      snakeHeadPositionX.current = 0;
    }
    if (snakeHeadPositionY.current < 0) {
      snakeHeadPositionY.current = gridSquaresOnCanvas.current - 1;
    }
    if (snakeHeadPositionY.current > gridSquaresOnCanvas.current - 1) {
      snakeHeadPositionY.current = 0;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);
    ctx.fillStyle = "lime";
    for (let i = 0; i < snakeSquaresPositions.current.length; i++) {
      ctx.fillRect(
        snakeSquaresPositions.current[i].x * gridSquareSize.current,
        snakeSquaresPositions.current[i].y * gridSquareSize.current,
        gridSquareSize.current - 2,
        gridSquareSize.current - 2
      );
      
      if (playerStartedMoving) {
      if (snakeHeadPositionX.current === snakeSquaresPositions.current[i].x &&
        snakeHeadPositionY.current === snakeSquaresPositions.current[i].y) {
          let highScoresLength = highScores.length
          if (highScoresLength < 10) {
            highScoresLength = 10;
          }

          for (let i = 0; i < highScoresLength; i++) {
            if ( highScores[i] === undefined){
              setNewHighScore(true);
              break;  // Exit the loop, a new high score was added
            } else if (score > highScores[i].score) {
              setNewHighScore(true);
              break;  // Exit the loop as soon as a new high score is found
            } 
          }

          setGameOver(true);
        }
      }
      }
      

    snakeSquaresPositions.current.push({ x: snakeHeadPositionX.current, y: snakeHeadPositionY.current });
    while (snakeSquaresPositions.current.length > snakeLength.current) {
      snakeSquaresPositions.current.shift();
    }
    if (applePositionX.current === snakeHeadPositionX.current && applePositionY.current === snakeHeadPositionY.current) {
      snakeLength.current++;
      applePositionX.current = Math.floor(Math.random() * gridSquaresOnCanvas.current);
      applePositionY.current = Math.floor(Math.random() * gridSquaresOnCanvas.current);
      setScore(score + 1);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(applePositionX.current * gridSquareSize.current, applePositionY.current * gridSquareSize.current, gridSquareSize.current - 2, gridSquareSize.current - 2);    
  }, [playerStartedMoving, score, setScore, setGameOver, setNewHighScore, highScores]);
  
  useEffect(() => {;
    
    window.addEventListener('keydown', keyPush);

    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    intervalId.current = setInterval(game, snakeVelocity);
    console.log('playerStartedMoving:', playerStartedMoving);


    return () => {
      clearInterval(intervalId.current);
      window.removeEventListener('keydown', keyPush);
    };
  }, [score, keyPush, isGameStarted, game, snakeVelocity, playerStartedMoving]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{position: "relative"}}>
          {!isGameStarted ? (
            <button onClick={startGame} className="btn btn-success start-button">Start</button>
          ) : (
             gameOver ? (
            <div className="game-over">
              <h3 className="white">Game Over</h3>
              <h5 className="white">Score: {score}</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className={"mt-3"}>
                { !newHighScore ? (
                  <div className="row justify-content-center"> 
                     <ResetButton resetGame={resetGame} />
                  </div>
                  ) : (
                    <div className="text-center">
                      <h6 className="white">New High Score!</h6>
                      <div style={{ width: '5rem', margin: '0 auto'}}>
                        <input
                          className={"form-control"}
                          {...register("name", { required: true })}
                          placeholder="AAA"
                          maxLength="3"
                          type="text"
                          style={{ textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem' }}
                        />
                      </div>
                      <div className="row justify-content-center"> 
                        <ResetButton resetGame={resetGame} />
                        <button type="submit" className="btn btn-primary mx-3">
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                {errors.name?.type === "required" && (
                  <span>This field is required</span>
                )}
              </div>

              </form>
            </div>
            ) : null 
          )}
            <canvas ref={canvasRef} width="372" height="372" style={{ display: 'block', margin: '0 auto', position: "relative" }}></canvas>
        </div>
      </div>
  );
}

export default SnakeGame;