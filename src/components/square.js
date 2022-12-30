import React from "react";

const Square = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="border text-5xl border-outlineColor bg-boxColor text-textColor h-28 w-28 flex justify-center items-center"
    >
      <h2>{props.value}</h2>
    </button>
  );
};

export default Square;
