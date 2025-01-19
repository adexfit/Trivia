import "./App.css";
// import { useEffect, useMemo, useState } from "react";
import { useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Testin from "./components/Testin";
import { data } from "./components/data";
import { moneyParam } from "./components/moneyParam";
import { useGetAllQuestionsQuery } from "./components/dataService/apiData";

function App() {
  const { data, isError, isLoading } = useGetAllQuestionsQuery();
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [apiQuestion, setApiQuestion] = useState({});
  const [transQuestion, setTransQuestion] = useState([]);

  // console.log(data);

  //fetch data
  // useEffect(() => {
  //   let str2 = "https://opentdb.com/api.php?amount=15&type=multiple";
  //   const fetchQuestions = async () => {
  //     const response = await fetch(str2);
  //     const data = await response.json();
  //     setApiQuestion(data.results);
  //   };

  //   fetchQuestions();
  // }, []);

  // //transformed fetched data
  // useEffect(() => {
  //   let generalArray = [];

  //   function escapeSpecialChars(htmlStr) {
  //     htmlStr = htmlStr.replace(/&lt;/g, "<");
  //     htmlStr = htmlStr.replace(/&gt;/g, ">");
  //     htmlStr = htmlStr.replace(/&quot;/g, '"');
  //     htmlStr = htmlStr.replace(/&#39;/g, "'");
  //     htmlStr = htmlStr.replace(/&#039;/g, "'");
  //     htmlStr = htmlStr.replace(/&amp;/g, "&");
  //     return htmlStr;
  //   }

  //   for (let i = 0; i < apiQuestion.length; i++) {
  //     let iteratedQuestion = escapeSpecialChars(apiQuestion[i]?.question);
  //     let iteratedAnswer = escapeSpecialChars(apiQuestion[i]?.correct_answer);
  //     let wronganswers = apiQuestion[i].incorrect_answers;

  //     let choice = [];
  //     for (const x of wronganswers) {
  //       choice.push({
  //         id: wronganswers.indexOf(x),
  //         text: escapeSpecialChars(x),
  //         correct: false,
  //       });
  //     }

  //     // Add correct option
  //     let unshuffledOptions = [
  //       ...choice,
  //       { id: 3, text: iteratedAnswer, correct: true },
  //     ];
  //     //shuffled options so answers won't always be at the same position
  //     let shuffledOptions = unshuffledOptions
  //       .map((value) => ({ value, sort: Math.random() }))
  //       .sort((a, b) => a.sort - b.sort)
  //       .map(({ value }) => value);

  //     // Add each questions
  //     let item = {
  //       id: `${i}`,
  //       question: `${iteratedQuestion}`,
  //       answers: shuffledOptions,
  //     };

  //     generalArray.push(item);
  //   }

  //   setTransQuestion(generalArray);
  //   console.log(generalArray);
  // }, []);

  // const moneyPyramid = useMemo(() => moneyParam, []);

  // useEffect(() => {
  //   questionNumber > 1 &&
  //     setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  // }, [questionNumber, moneyPyramid]);

  return (
    <div>
      <Trivia />
      We are troubleshooting our app
    </div>

    // <div className="app">
    //   {!username ? (
    //     <Start setUsername={setUsername} />
    //   ) : data?.length < 1 ? (
    //     <Testin />
    //   ) : (
    //     <>
    //       <div className="main">
    //         {false ? ( //timeOut
    //           <>
    //             <h1 className="endText">You earned: {earned}</h1>
    //             <button>Play Again</button>
    //           </>
    //         ) : (
    //           <>
    //             <div className="top">
    //               <div className="timer">
    //                 <Timer
    //                   setTimeOut={setTimeOut}
    //                   questionNumber={questionNumber}
    //                 />
    //               </div>
    //             </div>
    //             <div className="bottom">
    //               <Trivia
    //                 data={data}
    //                 questionNumber={questionNumber}
    //                 setQuestionNumber={setQuestionNumber}
    //                 setTimeOut={setTimeOut}
    //               />
    //             </div>
    //           </>
    //         )}
    //       </div>
    //       <div className="pyramid">
    //         <ul className="moneyList">
    //           {moneyPyramid.map((m) => (
    //             <li
    //               key={m.id}
    //               className={
    //                 questionNumber === m.id
    //                   ? "moneyListItem active"
    //                   : "moneyListItem"
    //               }
    //             >
    //               <span className="moneyListItemNumber">{m.id}</span>
    //               <span className="moneyListItemAmount">{m.amount}</span>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
}

export default App;
