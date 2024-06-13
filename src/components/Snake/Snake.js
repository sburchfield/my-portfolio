import React, { useEffect, useRef, useState } from 'react';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const playerPositionX = useRef(10);
  const playerPositionY = useRef(10);
  const applePositionX = useRef(15);
  const applePositionY = useRef(15);
  const snakeVelocityX = useRef(0);
  const snakeVelocityY = useRef(0);
  const snakeLength = useRef(5);
  const gridSquareSize = useRef(20);
  const gridSquaresOnCanvas = useRef(20);
  const snakeSquaresPositions = useRef([]);
  const [score, setScore] = useState(0);
  const intervalId = useRef(null);
  


  useEffect(() => {
    const canv = canvasRef.current;
    const ctx = canv.getContext("2d");
    window.addEventListener("keydown", keyPush);
    if (intervalId.current) {
        clearInterval(intervalId.current);
      }

      intervalId.current = setInterval(game, 1000 / 15);


    function game() {
      playerPositionX.current += snakeVelocityX.current;
      playerPositionY.current += snakeVelocityY.current;
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
        if (
          snakeSquaresPositions.current[i].x === playerPositionX.current &&
          snakeSquaresPositions.current[i].y === playerPositionY.current
        ) {
          snakeLength.current = 5;
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
      ctx.fillRect(applePositionX.current * gridSquareSize.current, applePositionY.current * gridSquareSize.current, gridSquareSize.current - 2, gridSquareSize.current - 2);    }

    function keyPush(e) {
      switch (e.keyCode) {
        case 37:
          snakeVelocityX.current = -1; snakeVelocityY.current = 0;
          e.preventDefault();
          break;
        case 38:
          snakeVelocityX.current = 0; snakeVelocityY.current = -1;
          e.preventDefault();
          break;
        case 39:
          snakeVelocityX.current = 1; snakeVelocityY.current = 0;
          e.preventDefault();
          break;
        case 40:
          snakeVelocityX.current = 0; snakeVelocityY.current = 1;
          e.preventDefault();
          break;
        case 65:
          snakeVelocityX.current = -1; snakeVelocityY.current = 0;
          e.preventDefault();
          break;
        case 87:
          snakeVelocityX.current = 0; snakeVelocityY.current = -1;
          e.preventDefault();
          break;
        case 68:
          snakeVelocityX.current = 1; snakeVelocityY.current = 0;
          e.preventDefault();
          break;
        case 83:
          snakeVelocityX.current = 0; snakeVelocityY.current = 1;
          e.preventDefault();
          break;
        default:
          break;
      }
    }
return () => {
    clearInterval(intervalId.current);
  };
  }, [score]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Snake</h2>
      <h4 style={{ textAlign: 'center' }}>Score: {score}</h4>
      <canvas ref={canvasRef} width="400" height="400" style={{display: 'block', margin: '0 auto'}}></canvas>
    </div>
  );
}

export default SnakeGame;