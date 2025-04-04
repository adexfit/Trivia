import { useEffect, useState, useContext } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
// import GameOver from "./GameOver";
import rightans from "../assets/rightans.png";
import { UserContext } from "../context/UserContext";

export default function Trivia({ data }) {
  const { setTimeOut, questionNumber, setQuestionNumber } =
    useContext(UserContext);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [ShowAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

    delay(4000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          // if (questionNumber == question?.length) {
          //   setTimeOut(true);
          // }
          setQuestionNumber((prev) => prev + 1);

          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        setShowAnswer(true);
        delay(5000, () => {
          setTimeOut(true);
        });
      }
      // console.log(question?.length);
    });
  };
  return (
    // <div>App is ready</div>

    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            key={a.id}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
            <img
              src={rightans}
              alt=""
              className="rightans"
              style={
                ShowAnswer && a.correct
                  ? { display: "flex" }
                  : { display: "none" }
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
