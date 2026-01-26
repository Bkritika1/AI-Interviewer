// const Practice = () => {
//   return (
//     <div className="practice-page">
//       <h1>Coding Challenges</h1>
//       <p>Sharpen your skills with AI-powered challenges.</p>


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


// import { useState } from "react";
// import { usePractice } from "../../context/PracticeContext";
// // import "./practice.css";

// const Practice = () => {
//   const { activeQuestion } = usePractice(); // 👈 get active question from context
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
//       eval(code); // 👈 run user's code

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
//       <Breadcrumbs/>
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




//https://nextstepresumecv.netlify.app/



// import { useState, useEffect } from "react";
// import { usePractice } from "../../context/PracticeContext";
// import Breadcrumbs from "../../components/Breadcrumbs";
// //import "./practice.css";

// const Practice = () => {
//   const { activeQuestion } = usePractice();

//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");
//   const [activeTab, setActiveTab] = useState("description");

//   // 👉 jab question change ho, starter code load ho
//   useEffect(() => {
//     if (activeQuestion?.starterCode) {
//       setCode(activeQuestion.starterCode);
//       setOutput("");
//     }
//   }, [activeQuestion]);

//   const runCode = () => {
//     if (!activeQuestion) return;

//     let consoleOutput = "";
//     const originalConsoleLog = console.log;

//     console.log = (...args) => {
//       consoleOutput += args.join(" ");
//     };

//     try {
//       eval(code);

//       if (
//         consoleOutput.trim() ===
//         String(activeQuestion.expectedOutput)
//       ) {
//         setOutput("✅ Correct Answer");
//       } else {
//         setOutput(
//           `❌ Wrong Answer (Output: ${consoleOutput})`
//         );
//       }
//     } catch (error) {
//       setOutput("❌ Error in code");
//     }

//     console.log = originalConsoleLog;
//   };

//   if (!activeQuestion) {
//     return (
//       <div className="practice-content">
//         <Breadcrumbs />
//         <p className="empty-state">
//           👈 Select a question from sidebar
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="practice-content">
//       {/* Breadcrumbs */}
//       <Breadcrumbs />

//       {/* Header */}
//       <div className="question-header">
//         <h2>{activeQuestion.title}</h2>
//         <span className={`difficulty ${activeQuestion.difficulty}`}>
//           {activeQuestion.difficulty}
//         </span>
//       </div>

//       {/* Tabs */}
//       <div className="tabs">
//         <button
//           className={activeTab === "description" ? "active" : ""}
//           onClick={() => setActiveTab("description")}
//         >
//           Description
//         </button>
//         <button disabled>Editorial</button>
//         <button disabled>Solutions</button>
//       </div>

//       {/* Description */}
//       {activeTab === "description" && (
//         <div className="description-box">
//           <p>{activeQuestion.description}</p>
//         </div>
//       )}

//       {/* Code Editor */}
//       <div className="editor-section">
//         <textarea
//           className="code-editor"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//         />
//       </div>

//       {/* Actions */}
//       <div className="actions">
//         <button className="run-btn" onClick={runCode}>
//           ▶ Run Code
//         </button>
//       </div>

//       {/* Output */}
//       {output && (
//         <div className="output-box">
//           <strong>Output:</strong>
//           <p>{output}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Practice;


import { useState } from "react";
import { usePractice } from "../../context/PracticeContext";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./practice.css";

const Practice = () => {
  const { activeQuestion } = usePractice();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  if (!activeQuestion) {
    return <p className="empty-state">👈 Select a question</p>;
  }

  return (
    <div className="practice-layout">
      {/* LEFT: DESCRIPTION */}
      <section className="panel description-panel">
        <Breadcrumbs />

        <div className="question-header">
          <h2>{activeQuestion.title}</h2>
          <span className={`difficulty ${activeQuestion.difficulty}`}>
            {activeQuestion.difficulty}
          </span>
        </div>

        <div className="description-box">
          {activeQuestion.description}
        </div>
      </section>

      {/* CENTER: EDITOR */}
      <section className="panel editor-panel">
        <div className="editor-header">
          <span>{"</> JavaScript"}</span>
        </div>

        <textarea
          className="code-editor"
          value={code}
          placeholder={activeQuestion.starterCode}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="editor-actions">
          <button className="run-btn">▶ Run Code</button>
          <button className="submit-btn">Submit Solution</button>
        </div>

        {output && <div className="console">{output}</div>}
      </section>

      {/* RIGHT: TEST CASES */}
      <section className="panel testcase-panel">
        <h4>Test Cases</h4>

        {activeQuestion.testCases.map((tc, i) => (
          <div key={i} className="testcase">
            <span>Case {i + 1}</span>
            <span className="status pending">PENDING</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Practice;
