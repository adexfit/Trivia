import React, { useEffect, useState } from "react";

const Testin = () => {
  const [variable, setVariable] = useState([1]);
  console.log(`from Testin components ${1}`);

  // useEffect(() => {
  //   console.log(`from Testin components ${ourQuestion}`);
  //   let generalArr = [];

  // for (let i = 0; i < apiQuestion.length; i++) {
  //   let iteratedQuestion = apiQuestion[i]?.question.text;
  //   // let item = { id: `${i}`, question: `${iteratedQuestion}` };
  //   // generalArr.push(item);
  //   generalArr.push(iteratedQuestion);
  // }

  // setVariable(generalArr);
  // console.log(variable);
  // }, []);
  return <div></div>;
};

export default Testin;
