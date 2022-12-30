import React, { useState } from "react";

const ReplayButton = (props) => {
  const copyState = [...props.state];
  const setState = props.updateState;

  for (let i = 0; i < copyState.length; i++) {
    copyState[i] = null;
  }

  const updateState = props.updateState;

  return (
    <button
      className="border border-outlineColor bg-blue-500 hover:bg-textColor hover:text-blue-500 rounded-md mt-4 text-3xl p-2 items-center text-textColor"
      onClick={() => updateState(copyState)}
    >
      Replay
    </button>
  );
};

export default ReplayButton;
