import React, { useState } from "react";
import Square from "./square";
import Heading from "./heading";
import ReplayButton from "./replay";

const Game = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isPlayer1, setIsPlayer1] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let idx of winnerLogic) {
      const [a, b, c] = idx;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return state[a];
    }

    return false;
  };

  const isWinner = checkWinner();
  //console.log(isWinner);
  const handleClick = (index) => {
    // console.log("Clicked on ", index);
    if (!isWinner && state[index] === null) {
      const copyState = [...state];
      copyState[index] = isPlayer1 ? "X" : "O";
      setState(copyState);
      Object.freeze(state[index]);
      setIsPlayer1(!isPlayer1);
    }
  };

  const update = (newState) => {
    setState(newState);
  };

  const player = (isPlayer1) => {
    return isPlayer1 ? "Player 1 " : "Player 2";
  };

  return (
    <div className="bg-bgColor h-screen flex items-center justify-center">
      <div>
        <div className="flex-row mb-10">
          {/* <p className="underline text-3xl text-textColor">
            {" "}
            {player(isPlayer1)} Turn
          </p> */}

          <Heading turn={isPlayer1} win={isWinner} tie={state} />
        </div>
        <div className="flex">
          <Square onClick={() => handleClick(0)} value={state[0]} />
          <Square onClick={() => handleClick(1)} value={state[1]} />
          <Square onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className="flex-row flex">
          <Square onClick={() => handleClick(3)} value={state[3]} />
          <Square onClick={() => handleClick(4)} value={state[4]} />
          <Square onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className="flex-row flex">
          <Square onClick={() => handleClick(6)} value={state[6]} />
          <Square onClick={() => handleClick(7)} value={state[7]} />
          <Square onClick={() => handleClick(8)} value={state[8]} />
        </div>
        <div>
          {" "}
          <ReplayButton state={state} updateState={update} />
        </div>
      </div>
    </div>
  );
};

export default Game;
