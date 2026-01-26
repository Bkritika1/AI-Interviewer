// import { createContext, useContext, useState } from "react";

// const PracticeContext = createContext();

// export const PracticeProvider = ({ children }) => {
//   const [activeQuestion, setActiveQuestion] = useState(null);

//   return (
//     <PracticeContext.Provider value={{ activeQuestion, setActiveQuestion }}>
//       {children}
//     </PracticeContext.Provider>
//   );
// };

// export const usePractice = () => useContext(PracticeContext);


// import { createContext, useContext, useState } from "react";

// const PracticeContext = createContext();

// export const PracticeProvider = ({ children }) => {
//   const [activeQuestion, setActiveQuestion] = useState(null);

//   return (
//     <PracticeContext.Provider value={{ activeQuestion, setActiveQuestion }}>
//       {children}
//     </PracticeContext.Provider>
//   );
// };

// export const usePractice = () => {
//   return useContext(PracticeContext);
// };


import { createContext, useContext, useState } from "react";

const PracticeContext = createContext();

export const PracticeProvider = ({ children }) => {
  // current selected topic (arrays, strings, etc.)
  const [activeTopic, setActiveTopic] = useState(null);

  // current selected question object
  const [activeQuestion, setActiveQuestion] = useState(null);

  // code written in editor
  const [code, setCode] = useState("");

  // test case execution result
  const [testResults, setTestResults] = useState([]);

  // track solved questions
  const [solvedQuestions, setSolvedQuestions] = useState({});

  const selectQuestion = (topicId, question) => {
    setActiveTopic(topicId);
    setActiveQuestion(question);
    setCode(question.starterCode || "");
    setTestResults([]);
  };

  const markSolved = (questionId) => {
    setSolvedQuestions((prev) => ({
      ...prev,
      [questionId]: true
    }));
  };

  return (
    <PracticeContext.Provider
      value={{
        // state
        activeTopic,
        activeQuestion,
        code,
        testResults,
        solvedQuestions,

        // setters
        setCode,
        setTestResults,

        // actions
        selectQuestion,
        markSolved
      }}
    >
      {children}
    </PracticeContext.Provider>
  );
};

export const usePractice = () => useContext(PracticeContext);
