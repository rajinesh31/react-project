import React, { useState } from "react";
import "./../Game.css"
import GameCircle from "./GameCircle";
import { render } from "@testing-library/react";

const No_PLAYER = 0;
const player_1 = 1;
const player_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(No_PLAYER));
    const [currentPlayer, setcurrentPlayer] = useState(player_1);
    console.log(gameBoard); 

    const CircleClicked = (id) => {
        console.log('circle clicked:' + id);
        gameBoard[id] = currentPlayer;
        setGameBoard(currentPlayer === player_1 ? player_2 : player_1);

        console.log(gameBoard);
    }
    
    const renderCircle = id => {
        return <GameCircle id={id} className={`player_${gameBoard[id]}`} onCircleClicked={CircleClicked} />
    }

    return (
        <div className="gameBoard">
            {renderCircle(0)}
            {renderCircle(1)}
            {renderCircle(2)}
            {renderCircle(3)}
            {renderCircle(4)}
            {renderCircle(5)}
            {renderCircle(6)}
            {renderCircle(7)}
        </div>
    )
}


export default GameBoard;