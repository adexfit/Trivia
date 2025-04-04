import { createContext, useState, useEffect } from "react";

// Create a context
const UserContext = createContext();

function storedData() {
  const storedVal = localStorage.getItem("myName");
  if (!storedVal)
    return {
      username: "",
    };

  return JSON.parse(storedVal);
}

// Create a provider component
const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(storedData);
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [newTriviaRound, setNewTriviaRound] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    localStorage.setItem("myName", JSON.stringify(username));
  }, [username]);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        showHomeScreen,
        setShowHomeScreen,
        timeOut,
        setTimeOut,
        questionNumber,
        setQuestionNumber,
        earned,
        setEarned,
        newTriviaRound,
        setNewTriviaRound,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
