import React from "react";
// import { Link } from "react-router-dom";

const GameOver = ({ earned, setTimeOut }) => {
  return (
    // <div className="gameOver">
    //   <p className="gameOverText">Game over, you earned {earned} !!!</p>
    //   <br />
    //   {/* <Link to="/">
    //     <button className="btn">Play Again</button>
    //   </Link> */}
    // </div>
    <div className="error">
      <div className="error_wrap">
        <p className="gameOverText">Game over, you earned {earned} !!!</p>

        <a href="/">
          <button className="btn">Play again</button>
        </a>
      </div>
    </div>
  );
};

export default GameOver;
