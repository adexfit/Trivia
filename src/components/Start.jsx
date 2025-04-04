import { useEffect, useRef, useContext, useState } from "react";
import smiley from "../assets/smiley.gif";
import { UserContext } from "../context/UserContext";

export default function Start() {
  const { username, setUsername, setShowHomeScreen, setTimeOut } =
    useContext(UserContext);
  const [myname, setMyName] = useState(username);
  const inputRef = useRef();

  // console.log(myname);
  // console.log(username);

  const handleStart = () => {
    if (myname != "" && myname.length > 2) {
      setUsername(myname);
      setShowHomeScreen(false);
      setTimeOut(false);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setMyName(e.target.value);
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
          value={myname}
          onChange={handleChange}
        />{" "}
        <br />
        <button className="startButton" onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  );
}
