import React, { useState } from "react";

const Heading = (props) => {
  const flag = props.turn;
  const player = (flag) => {
    return flag ? "Player 1" : "Player 2";
  };
  const winner = props.win;

  const copyState = [...props.tie];
  console.log(copyState);
  let tieFlag = true;

  for (let i = 0; i < copyState.length; i++) {
    if (copyState[i] === null) tieFlag = false;
  }
  //console.log(winner);
  return (
    <div>
      {tieFlag && !winner ? (
        <>
          <p className="underline text-3xl text-textColor"> Match Tie!</p>
        </>
      ) : winner ? (
        <>
          <p className="underline text-3xl text-textColor">
            {" "}
            {player(!flag)} Winner!
          </p>
        </>
      ) : (
        <p className="underline text-3xl text-textColor">
          {" "}
          {player(flag)} Turn
        </p>
      )}
    </div>
  );
};

export default Heading;
