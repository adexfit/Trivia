import React from "react";

const GameOver = ({ earned, setTimeOut }) => {
  const handleClick = () => {
    setTimeOut(false);
  };
  return (
    <div className="gameOver">
      <p className="gameOverText">GameOver, you earned {earned}</p>
      <br />
      {/* <button onClick={handleClick}>Play Again</button> */}
    </div>
  );
};

export default GameOver;
