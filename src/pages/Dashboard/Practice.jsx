// const Practice = () => {
//   return (
//     <div className="practice-page">
//       <h1>Coding Challenges</h1>
//       <p>Sharpen your skills with AI-powered challenges.</p>

import Breadcrumbs from "../../components/Breadcrumbs";

//       <div className="cards">
//         <div className="card">
//           <h3>Two Sum Problem</h3>
//           <p>Easy • 15 mins</p>
//         </div>

//         <div className="card">
//           <h3>LRU Cache Design</h3>
//           <p>Medium • 45 mins</p>
//         </div>

//         <div className="card">
//           <h3>Binary Tree Maximum Path</h3>
//           <p>Hard • 60 mins</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Practice;


// const Practice = () => {
//   return (
//     <div className="practice-page">
//       <Breadcrumbs/>
//       <div className="top">
//         <h1>Coding Challenges</h1>
//         <div className="xp">
//           <p>POINTS EARNED</p>
//           <h2>2,450 XP</h2>
//         </div>
//       </div>

//       <div className="cards">
//         <div className="card easy">
//           <h3>Two Sum Problem</h3>
//           <p>Easy • 15 mins</p>
//         </div>

//         <div className="card medium">
//           <h3>LRU Cache Design</h3>
//           <p>Medium • 45 mins</p>
//         </div>

//         <div className="card hard">
//           <h3>Binary Tree Maximum Path</h3>
//           <p>Hard • 60 mins</p>
//         </div>
//       </div>

//       <div className="bottom">
//         <div className="activity">
//           <h3>Recent Activity</h3>
//           <p>✔ Solved "Merge Intervals" (+50 XP)</p>
//           <p>⏳ Attempted "QuickSort"</p>
//         </div>

//         <div className="skills">
//           <h3>Skills Matrix</h3>
//           <p>Problem Solving — 85%</p>
//           <p>Complexity Analysis — 62%</p>
//           <p>System Design — 40%</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Practice;


// import { useState } from "react";
// // import "./practice.css";
// import Sidebar from "../../components/Sidebar";

// const Practice = () => {
//   const [activeQuestion, setActiveQuestion] = useState(null);
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");

// const runCode = () => {
//   if (!activeQuestion) return;

//   let consoleOutput = "";

//   const originalConsoleLog = console.log;

//   console.log = (...args) => {
//     consoleOutput += args.join(" ");
//   };

//   try {
//     eval(code); // 👈 user ka code RUN hoga

//     if (consoleOutput.trim() === activeQuestion.expectedOutput) {
//       setOutput("✅ Correct Answer");
//     } else {
//       setOutput(`❌ Wrong Answer (Output: ${consoleOutput})`);
//     }
//   } catch (error) {
//     setOutput("❌ Error in code");
//   }

//   console.log = originalConsoleLog;
// };


//   return (
//     <div className="practice-layout">
//       <Sidebar onQuestionSelect={setActiveQuestion} />

//       <div className="practice-content">
//         {activeQuestion ? (
//           <>
//             <h2>{activeQuestion.title}</h2>
//             <p>{activeQuestion.description}</p>

//             <textarea
//               placeholder="Write your JavaScript code here..."
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//             />

//             <button onClick={runCode}>Run Code</button>

//             {output && <p className="output">{output}</p>}
//           </>
//         ) : (
//           <p>Select a question to start coding 👈</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Practice;



// const Practice = () => {
//   const [activeQuestion, setActiveQuestion] = useState(null);
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");

//   const runCode = () => {
//     if (!activeQuestion) return;

//     let consoleOutput = "";
//     const originalConsoleLog = console.log;

//     console.log = (...args) => {
//       consoleOutput += args.join(" ");
//     };

//     try {
//       eval(code);

//       if (consoleOutput.trim() === activeQuestion.expectedOutput) {
//         setOutput("✅ Correct Answer");
//       } else {
//         setOutput(`❌ Wrong Answer (Output: ${consoleOutput})`);
//       }
//     } catch (error) {
//       setOutput("❌ Error in code");
//     }

//     console.log = originalConsoleLog;
//   };

//   return (
//     <div className="practice-content">
//       {activeQuestion ? (
//         <>
//           <h2>{activeQuestion.title}</h2>
//           <p>{activeQuestion.description}</p>

//           <textarea
//             placeholder="Write your JavaScript code here..."
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//           />

//           <button onClick={runCode}>Run Code</button>

//           {output && <p className="output">{output}</p>}
//         </>
//       ) : (
//         <p>Select a question from sidebar 👈</p>
//       )}
//     </div>
//   );
// };

// export default Practice;


import { useState } from "react";
import { usePractice } from "../../context/PracticeContext";
// import "./practice.css";

const Practice = () => {
  const { activeQuestion } = usePractice(); // 👈 get active question from context
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    if (!activeQuestion) return;

    let consoleOutput = "";
    const originalConsoleLog = console.log;

    console.log = (...args) => {
      consoleOutput += args.join(" ");
    };

    try {
      eval(code); // 👈 run user's code

      if (consoleOutput.trim() === activeQuestion.expectedOutput) {
        setOutput("✅ Correct Answer");
      } else {
        setOutput(`❌ Wrong Answer (Output: ${consoleOutput})`);
      }
    } catch (error) {
      setOutput("❌ Error in code");
    }

    console.log = originalConsoleLog;
  };

  return (
    <div className="practice-content">
      <Breadcrumbs/>
      {activeQuestion ? (
        <>
          <h2>{activeQuestion.title}</h2>
          <p>{activeQuestion.description}</p>

          <textarea
            placeholder="Write your JavaScript code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button onClick={runCode}>Run Code</button>

          {output && <p className="output">{output}</p>}
        </>
      ) : (
        <p>Select a question from sidebar 👈</p>
      )}
    </div>
  );
};

export default Practice;
