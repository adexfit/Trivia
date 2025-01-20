import React from "react";
// import { Link } from "react-router-dom";

const GameOver = ({ earned, setTimeOut }) => {
  return (
    <div className="error">
      <div className="error_wrap">
        <p>Game over, you earned {earned} !!!</p>

        <a href="/">
          <button className="btn">Play again</button>
        </a>
      </div>
    </div>
  );
};

export default GameOver;
