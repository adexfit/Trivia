import "./App.css";
// import { useEffect, useMemo, useState } from "react";
import { useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Testin from "./components/Testin";
// import { data } from "./components/data";
import { moneyParam } from "./components/moneyParam";
import { useGetAllQuestionsQuery } from "./components/dataService/apiData";

function App() {
  const { data, isError, isLoading } = useGetAllQuestionsQuery();
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [apiQuestion, setApiQuestion] = useState({});

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
