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
  const [transQuestion, setTransQuestion] = useState([]);

  useEffect(() => {
    let generalArray = [];

    function escapeSpecialChars(htmlStr) {
      htmlStr = htmlStr.replace(/&lt;/g, "<");
      htmlStr = htmlStr.replace(/&gt;/g, ">");
      htmlStr = htmlStr.replace(/&quot;/g, '"');
      htmlStr = htmlStr.replace(/&#39;/g, "'");
      htmlStr = htmlStr.replace(/&#039;/g, "'");
      htmlStr = htmlStr.replace(/&amp;/g, "&");
      return htmlStr;
    }
    if (data.results !== undefined) {
      for (let i = 0; i < data.results.length; i++) {
        let iteratedQuestion = escapeSpecialChars(data.results[i]?.question);
        let iteratedAnswer = escapeSpecialChars(
          data.results[i]?.correct_answer
        );
        let wronganswers = data.results[i].incorrect_answers;

        let choice = [];
        for (const x of wronganswers) {
          choice.push({
            id: wronganswers.indexOf(x),
            text: escapeSpecialChars(x),
            correct: false,
          });
        }

        // Add correct option
        let unshuffledOptions = [
          ...choice,
          { id: 3, text: iteratedAnswer, correct: true },
        ];
        //shuffled options so answers won't always be at the same position
        let shuffledOptions = unshuffledOptions
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);

        // Add each questions
        let item = {
          id: `${i}`,
          question: `${iteratedQuestion}`,
          answers: shuffledOptions,
        };

        generalArray.push(item);
      }
    }

    setTransQuestion(generalArray);
    console.log(generalArray);
  }, [data.results]);
  // const [question, setQuestion] = useState(null);
  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  // const [className, setClassName] = useState("answer");
  // // const [letsPlay] = useSound(play);
  // const [correctAnswer] = useSound(correct);
  // const [wrongAnswer] = useSound(wrong);

  console.log(data.results.length);
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
    <div>App is ready</div>
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
