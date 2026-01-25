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


import { createContext, useContext, useState } from "react";

const PracticeContext = createContext();

export const PracticeProvider = ({ children }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <PracticeContext.Provider value={{ activeQuestion, setActiveQuestion }}>
      {children}
    </PracticeContext.Provider>
  );
};

export const usePractice = () => {
  return useContext(PracticeContext);
};
