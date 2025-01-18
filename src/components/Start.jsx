import { useEffect, useRef, useState } from "react";
import smiley from "../assets/smiley.gif";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <div className="trivia">
        <div className="descrip">
          <h1>React Trivia app</h1>
          <p>How knowledgeable are you? Enter to find out</p>
          <img src={smiley} alt="" height={35} />
        </div>
        <br />
        <input
          className="startInput"
          placeholder="Enter your name"
          ref={inputRef}
        />{" "}
        <br />
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
}
