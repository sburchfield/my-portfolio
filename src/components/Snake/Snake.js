import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import axios from 'axios';

import SnakeGame from './SnakeGame';
import SnakeHighScores from './SnakeHighScores.js';

import './Snake.css';

const Snake = () => {

    const scoreAPI = 'https://bryupcpel1.execute-api.us-east-2.amazonaws.com/prod/highscore';

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [playerStartedMoving, setPlayerStartedMoving] = useState(false);
    const [highScores, sethighScores] = useState([]);
    const [newHighScore, setNewHighScore] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset} = useForm();


    const onSubmit = (data) => {
        const payload = {
            name: data.name,
            score: score,
        };

        axios.post(scoreAPI, payload)
        .then(function (response) {
            const items = response.data.Items;
            items.sort((a, b) => b.score - a.score);
            sethighScores(items.slice(0, 10))
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    useEffect(() => {
        const getHighScores = async () => {
          await axios.get(scoreAPI)
          .then( response => {
            const items = response.data.Items;
            items.sort((a, b) => b.score - a.score);
            sethighScores(items.slice(0, 10))
          })
        }

        if (isSubmitSuccessful) {
            setNewHighScore(false);
            reset({ name: "" })
          }

        getHighScores(); 
      }, [reset, isSubmitSuccessful]);

    return (
        <div id="snake_wrapper">
            <h2 className="pt-4 text-center">Snake</h2>
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="text-center" style={{ padding: "5rem 4rem 0 4rem", fontSize: "0.8rem"}}>
                        <p>Use the arrow keys to move the snake.</p>
                        <p>Collect the apples to grow.</p>
                        <p>Don't run into yourself.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <SnakeGame
                        isGameStarted={isGameStarted} 
                        setIsGameStarted={setIsGameStarted} 
                        score={score}
                        setScore={setScore}
                        playerStartedMoving={playerStartedMoving}
                        setPlayerStartedMoving={setPlayerStartedMoving}
                        gameOver={gameOver} 
                        setGameOver={setGameOver}
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        register={register}
                        newHighScore={newHighScore}
                        setNewHighScore={setNewHighScore}
                        highScores={highScores}
                        errors={errors} />
                </div>
                <div className="col-lg-4"> 
                    <SnakeHighScores
                        highScores={highScores} />
                </div>
            </div>
        </div>
    )
}

export default Snake;