import React, { useContext } from "react";
import LaughingSticker from "../assets/LaughingSticker.gif";
// import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const GameOver = () => {
  const {
    setTimeOut,
    setShowHomeScreen,
    earned,
    setEarned,
    setQuestionNumber,
    setNewTriviaRound,
  } = useContext(UserContext);
  const handleNewGame = () => {
    setShowHomeScreen(true);
    setEarned("$ 0");
    setQuestionNumber(1);
    setNewTriviaRound((prev) => prev + 1);
  };
  return (
    <div className="error">
      <div className="error_wrap">
        <img src={LaughingSticker} alt="" width={100} />
        <p>Game over, you earned {earned} !!!</p>

        {/* <a href="/"> */}
        <button className="btn" onClick={handleNewGame}>
          Play again
        </button>
        {/* </a> */}
      </div>
    </div>
  );
};

export default GameOver;
