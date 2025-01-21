import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import { moneyParam } from "./components/moneyParam";
import { useGetAllQuestionsQuery } from "./components/dataService/apiData";
import GameOver from "./components/GameOver";
import load from "./assets/load.gif";
import { escapeSpecialChars } from "./components/function";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const { data, isError, isLoading } = useGetAllQuestionsQuery();
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    let generalArray = [];

    if (data) {
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

    setQuestion(generalArray);
  }, [data]);

  //money pyramid
  const moneyPyramid = useMemo(() => moneyParam, []);
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  if (isLoading) {
    return (
      <div className="error">
        <img src={load} alt="Loading..." width={80} />
      </div>
    );
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (data) {
    console.log(question);
    // console.log(question.length);
    // console.log(questionNumber);
    <Routes>
      <Route path="/" element={<Start />} />
    </Routes>;
  }

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || questionNumber > question?.length ? (
              <GameOver earned={earned} setTimeOut={setTimeOut} />
            ) : (
              <>
                <div className="top">
                  <p>Current Earnings: {earned}</p>
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={question}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

{
  /* <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? ( //timeOut
              <>
                <h1 className="endText">You earned: {earned}</h1>
                <button>Play Again</button>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div> */
}
