import React from "react";
import laugh from "../assets/laughingSticker.gif";
// import { Link } from "react-router-dom";

const GameOver = ({ earned, setTimeOut }) => {
  return (
    <div className="error">
      <div className="error_wrap">
        <img src={laugh} alt="" width={100} />
        <p>Game over, you earned {earned} !!!</p>

        <a href="/">
          <button className="btn">Play again</button>
        </a>
      </div>
    </div>
  );
};

export default GameOver;
