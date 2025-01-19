import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import play from "../sounds/play.mp3";
// import correct from "../sounds/correct.mp3";
// import wrong from "../sounds/wrong.mp3";
import { useGetAllQuestionsQuery } from "./dataService/apiData";

// {
//   questionNumber,
//   setQuestionNumber,
//   setTimeOut,
// }
export default function Trivia() {
  const { data, isError, isLoading } = useGetAllQuestionsQuery();
  // const [question, setQuestion] = useState(null);
  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  // const [className, setClassName] = useState("answer");
  // // const [letsPlay] = useSound(play);
  // const [correctAnswer] = useSound(correct);
  // const [wrongAnswer] = useSound(wrong);

  console.log(data);
  if (isError) {
    return <h1>OOOhNoooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading your questions...</h1>;
  }

  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  // useEffect(() => {
  //   setQuestion(data[questionNumber - 1]);
  // }, [data, questionNumber]);

  // const delay = (duration, callback) => {
  //   setTimeout(() => {
  //     callback();
  //   }, duration);
  // };

  // const handleClick = (a) => {
  //   setSelectedAnswer(a);
  //   setClassName("answer active");
  //   delay(3000, () => {
  //     setClassName(a.correct ? "answer correct" : "answer wrong");
  //   });

  // delay(5000, () => {
  //   if (a.correct) {
  //     correctAnswer();
  //     delay(1000, () => {
  //       setQuestionNumber((prev) => prev + 1);
  //       setSelectedAnswer(null);
  //     });
  //   } else {
  //     wrongAnswer();
  //     delay(1000, () => {
  //       setTimeOut(true);
  //     });
  //   }
  // });
  // };
  return (
    <div>We are testing our app</div>
    // <div className="trivia">
    //   <div className="question">{question?.question}</div>
    //   <div className="answers">
    //     {question?.answers.map((a) => (
    //       <div
    //         key={a.id}
    //         className={selectedAnswer === a ? className : "answer"}
    //         onClick={() => !selectedAnswer && handleClick(a)}
    //       >
    //         {a.text}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
