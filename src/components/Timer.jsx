import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Timer() {
  const { setTimeOut, questionNumber } = useContext(UserContext);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}
