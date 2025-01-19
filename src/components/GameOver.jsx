import React from "react";

const GameOver = ({ earned, setTimeOut }) => {
  const handleClick = () => {
    setTimeOut(false);
  };
  return (
    <div>
      <div>GameOver, you earned {earned}</div>
      <br />
      <button onClick={handleClick}>Play Again</button>
    </div>
  );
};

export default GameOver;
