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


// import { useState } from "react";
// import { usePractice } from "../../context/PracticeContext";
// import Breadcrumbs from "../../components/Breadcrumbs";
// import "./practice.css";

// const Practice = () => {
//   const { activeQuestion } = usePractice();
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");
//   const [testResults, setTestResults] = useState([]);

//   if (!activeQuestion) {
//     return <p className="empty-state">👈 Select a question</p>;
//   }

//   const runCode = () => {
//   if (!activeQuestion) return;

//   const results = [];

//   try {
//     eval(code); // user ka code load

//     activeQuestion.testCases.forEach((test, index) => {
//       const fnName = activeQuestion.starterCode
//         .match(/function (\w+)/)[1];

//       const output = Array.isArray(test.input)
//         ? window[fnName](...test.input)
//         : window[fnName](test.input);

//       if (JSON.stringify(output) === JSON.stringify(test.output)) {
//         results.push({ id: index + 1, status: "passed" });
//       } else {
//         results.push({ id: index + 1, status: "failed" });
//       }
//     });

//     setTestResults(results);
//   } catch (e) {
//     console.error(e);
//   }
// };

//   return (
//     <div className="practice-layout">
//       {/* LEFT: DESCRIPTION */}
//       <section className="panel description-panel">
//         <Breadcrumbs />

//         <div className="question-header">
//           <h2>{activeQuestion.title}</h2>
//           <span className={`difficulty ${activeQuestion.difficulty}`}>
//             {activeQuestion.difficulty}
//           </span>
//         </div>

//         <div className="description-box">
//           {activeQuestion.description}
//         </div>
//       </section>

//       {/* CENTER: EDITOR */}
//       <section className="panel editor-panel">
//         <div className="editor-header">
//           <span>{"</> JavaScript"}</span>
//         </div>

//         <textarea
//           className="code-editor"
//           value={code}
//           placeholder={activeQuestion.starterCode}
//           onChange={(e) => setCode(e.target.value)}
//         />

//         <div className="editor-actions">
//           <button className="run-btn">▶ Run Code</button>
//           <button className="submit-btn">Submit Solution</button>
//         </div>

//         {output && <div className="console">{output}</div>}
//       </section>

//       {/* RIGHT: TEST CASES */}
//       <section className="panel testcase-panel">
//         <h4>Test Cases</h4>

//         {activeQuestion.testCases.map((tc, i) => (
//           <div key={i} className="testcase">
//             <span>Case {i + 1}</span>
//             <span className="status pending">PENDING</span>
//           </div>
//         ))}
//         <div className="test-cases-panel">
//   <h3>Test Cases</h3>

//   {testResults.length === 0 &&
//     activeQuestion.testCases.map((_, i) => (
//       <div key={i} className="test pending">
//         Case {i + 1} — PENDING
//       </div>
//     ))}

//   {testResults.map((t) => (
//     <div key={t.id} className={`test ${t.status}`}>
//       Case {t.id} — {t.status.toUpperCase()}
//     </div>
//   ))}
// </div>

//       </section>
//     </div>
//   );
// };

// export default Practice;


// import { useState, useEffect } from "react";
// import { usePractice } from "../../context/PracticeContext";
// import Breadcrumbs from "../../components/Breadcrumbs";
// import "./practice.css";

// const Practice = () => {
//   const { activeQuestion } = usePractice();

//   const [code, setCode] = useState("");
//   const [testResults, setTestResults] = useState([]);

//   // Reset when question changes
//   useEffect(() => {
//     if (activeQuestion) {
//       setCode(activeQuestion.starterCode);
//       setTestResults([]);
//     }
//   }, [activeQuestion]);

//   if (!activeQuestion) {
//     return <p className="empty-state">👈 Select a question</p>;
//   }

//   const runCode = () => {
//     const results = [];

//     try {
//       // extract function name from starterCode
//       const fnName = activeQuestion.starterCode.match(
//         /function\s+(\w+)/
//       )[1];

//       // create sandbox function
//       const userFunction = new Function(
//         `${code}; return ${fnName};`
//       )();

//       activeQuestion.testCases.forEach((test, index) => {
//         let actualOutput;

//         if (Array.isArray(test.input)) {
//           actualOutput = userFunction(...test.input);
//         } else {
//           actualOutput = userFunction(test.input);
//         }

//         const passed =
//           JSON.stringify(actualOutput) ===
//           JSON.stringify(test.output);

//         results.push({
//           id: index + 1,
//           input: test.input,
//           expected: test.output,
//           actual: actualOutput,
//           status: passed ? "pass" : "fail",
//         });
//       });

//       setTestResults(results);
//     } catch (error) {
//       console.error(error);
//       setTestResults(
//         activeQuestion.testCases.map((_, i) => ({
//           id: i + 1,
//           status: "fail",
//           error: true,
//         }))
//       );
//     }
//   };

//   return (
//     <div className="practice-layout">
//       {/* LEFT */}
//       <section className="panel description-panel">
//         <Breadcrumbs />

//         <div className="question-header">
//           <h2>{activeQuestion.title}</h2>
//           <span className={`difficulty ${activeQuestion.difficulty}`}>
//             {activeQuestion.difficulty}
//           </span>
//         </div>

//         <div className="description-box">
//           {activeQuestion.description}
//         </div>
//       </section>

//       {/* CENTER */}
//       <section className="panel editor-panel">
//         <div className="editor-header">
//           <span>{"</> JavaScript"}</span>
//         </div>

//         <textarea
//           className="code-editor"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//         />

//         <div className="editor-actions">
//           <button className="run-btn" onClick={runCode}>
//             ▶ Run Code
//           </button>
//           <button className="submit-btn" disabled>
//             Submit Solution
//           </button>
//         </div>
//       </section>

//       {/* RIGHT */}
//       <section className="panel testcase-panel">
//         <h4>Test Cases</h4>

//         {testResults.length === 0 &&
//           activeQuestion.testCases.map((tc, i) => (
//             <div key={i} className="test pending">
//               <div>Case {i + 1}</div>
//               <div className="meta">
//                 Input: {JSON.stringify(tc.input)}
//               </div>
//               <div className="meta">
//                 Expected: {JSON.stringify(tc.output)}
//               </div>
//               <span className="status pending">PENDING</span>
//             </div>
//           ))}

//         {testResults.map((t) => (
//           <div key={t.id} className={`test ${t.status}`}>
//             <div>Case {t.id}</div>
//             <div className="meta">
//               Input: {JSON.stringify(t.input)}
//             </div>
//             <div className="meta">
//               Expected: {JSON.stringify(t.expected)}
//             </div>
//             <div className="meta">
//               Output: {JSON.stringify(t.actual)}
//             </div>
//             <span className={`status ${t.status}`}>
//               {t.status.toUpperCase()}
//             </span>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Practice;




// import { useState, useEffect } from "react";
// import { usePractice } from "../../context/PracticeContext";
// import Breadcrumbs from "../../components/Breadcrumbs";
// import "./practice.css";
// import Editor from "@monaco-editor/react";


// const Practice = () => {
//   const { activeQuestion } = usePractice();

//   const [code, setCode] = useState("");
//   const [testResults, setTestResults] = useState([]);

//   useEffect(() => {
//     if (activeQuestion) {
//       setCode(activeQuestion.starterCode);
//       setTestResults([]);
//     }
//   }, [activeQuestion]);

//   if (!activeQuestion) {
//     return <p className="empty-state">👈 Select a question</p>;
//   }

//   const runCode = () => {
//     const results = [];

//     try {
//       const fnName = activeQuestion.functionName;

//       const userFunction = new Function(
//         `${code}; return ${fnName};`
//       )();

//       activeQuestion.testCases.forEach((test, index) => {
//         const actualOutput = userFunction(...test.args);

//         const passed =
//           JSON.stringify(actualOutput) ===
//           JSON.stringify(test.expected);

//         results.push({
//           id: index + 1,
//           input: test.args,
//           expected: test.expected,
//           actual: actualOutput,
//           status: passed ? "pass" : "fail",
//         });
//       });

//       setTestResults(results);
//     } catch (err) {
//       console.error(err);
//       setTestResults(
//         activeQuestion.testCases.map((_, i) => ({
//           id: i + 1,
//           status: "fail",
//         }))
//       );
//     }
//   };

//   return (
//     <div className="practice-layout">
//       {/* LEFT */}
//       <section className="panel description-panel">
//         <Breadcrumbs />

//         <div className="question-header">
//           <h2>{activeQuestion.title}</h2>
//           <span className={`difficulty ${activeQuestion.difficulty}`}>
//             {activeQuestion.difficulty}
//           </span>
//         </div>

//         <div className="description-box">
//           {activeQuestion.description}
//         </div>
//       </section>

//       {/* CENTER */}
//       <section className="panel editor-panel">
//         <div className="editor-header">{"</> JavaScript"}</div>

//       <Editor
//   height="100%"
//   language="javascript"
//   theme="vs-dark"
//   value={code}
//   onChange={(value) => setCode(value)}
// />

//         <div className="editor-actions">
//           <button className="run-btn" onClick={runCode}>
//             ▶ Run Code
//           </button>
//         </div>
//       </section>

//       {/* RIGHT */}
//       <section className="panel testcase-panel">
//         <h4>Test Cases</h4>

//         {testResults.length === 0 &&
//           activeQuestion.testCases.map((tc, i) => (
//             <div key={i} className="test pending">
//               <div>Case {i + 1}</div>
//               <div className="meta">
//                 Input: {JSON.stringify(tc.args)}
//               </div>
//               <div className="meta">
//                 Expected: {JSON.stringify(tc.expected)}
//               </div>
//               <span className="status pending">PENDING</span>
//             </div>
//           ))}

//         {testResults.map((t) => (
//           <div key={t.id} className={`test ${t.status}`}>
//             <div>Case {t.id}</div>
//             <div className="meta">
//               Input: {JSON.stringify(t.input)}
//             </div>
//             <div className="meta">
//               Expected: {JSON.stringify(t.expected)}
//             </div>
//             <div className="meta">
//               Output: {JSON.stringify(t.actual)}
//             </div>
//             <span className={`status ${t.status}`}>
//               {t.status.toUpperCase()}
//             </span>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Practice;

// import { validateSolution } from "../../utils";

// import { useState, useEffect } from "react";
// import { usePractice } from "../../context/PracticeContext";
// import Breadcrumbs from "../../components/Breadcrumbs";
// import Editor from "@monaco-editor/react";
// import "./practice.css";

// const languageMap = {
//   javascript: {
//     label: "JavaScript",
//     monacoLang: "javascript",
//   },
//   python: {
//     label: "Python",
//     monacoLang: "python",
//   },
//   java: {
//     label: "Java",
//     monacoLang: "java",
//   },
// };

// const Practice = () => {
//   const { activeQuestion } = usePractice();

//   const [code, setCode] = useState("");
//   const [testResults, setTestResults] = useState([]);
//   const [language, setLanguage] = useState("javascript");

//   useEffect(() => {
//     if (activeQuestion) {
//       setCode(activeQuestion.starterCode[language]);

//       setTestResults([]);
//       setLanguage("javascript"); // default
//     }
//   }, [activeQuestion]);



//   if (!activeQuestion) {
//     return <p className="empty-state">👈 Select a question</p>;
//   }

//   const runCode = () => {
//     const results = [];

//     try {
//       const fnName = activeQuestion.functionName;

//       const userFunction = new Function(
//         `${code}; return ${fnName};`
//       )();

//       activeQuestion.testCases.forEach((test, index) => {
//         const actualOutput = userFunction(...test.args);

//         const passed =
//           JSON.stringify(actualOutput) ===
//           JSON.stringify(test.expected);

//         results.push({
//           id: index + 1,
//           input: test.args,
//           expected: test.expected,
//           actual: actualOutput,
//           status: passed ? "pass" : "fail",
//         });
//       });

//       setTestResults(results);
//     } catch (error) {
//       console.error(error);
//       setTestResults(
//         activeQuestion.testCases.map((_, i) => ({
//           id: i + 1,
//           status: "fail",
//         }))
//       );
//     }
//   };


//   return (
//     <div className="practice-layout">
//       {/* LEFT */}
//       <section className="panel description-panel">
//         <Breadcrumbs />

//         <div className="question-header">
//           <h2>{activeQuestion.title}</h2>
//           <span className={`difficulty ${activeQuestion.difficulty}`}>
//             {activeQuestion.difficulty}
//           </span>
//         </div>

//         <div className="description-box">
//           {activeQuestion.description}
//         </div>
//       </section>

//       {/* CENTER */}
//       <section className="panel editor-panel">
//         <div className="editor-topbar">
//           <span>{"</> Code Editor"}</span>

//           {/* Language Selector */}
//           <select
//             className="language-select"
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//           >
//             {Object.entries(languageMap).map(([key, lang]) => (
//               <option key={key} value={key}>
//                 {lang.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         <Editor
//           height="100%"
//           language={languageMap[language].monacoLang}
//           theme="vs-dark"
//           value={code}
//           onChange={(value) => setCode(value || "")}
//           options={{
//             fontSize: 14,
//             fontFamily: "Fira Code, monospace",
//             minimap: { enabled: true },
//             smoothScrolling: true,
//             cursorSmoothCaretAnimation: true,
//             wordWrap: "on",
//             lineNumbers: "on",
//             scrollBeyondLastLine: false,
//             automaticLayout: true,
//             padding: { top: 12 },
//           }}
//         />

//         <div className="editor-actions">
//           <button className="run-btn" onClick={runCode}>
//             ▶ Run Code
//           </button>
//         </div>
//       </section>

//       {/* RIGHT */}
//       <section className="panel testcase-panel">
//         <h4>Test Cases</h4>

//         {testResults.length === 0 &&
//           activeQuestion.testCases.map((tc, i) => (
//             <div key={i} className="test pending">
//               <div>Case {i + 1}</div>
//               <div className="meta">
//                 Input: {JSON.stringify(tc.args)}
//               </div>
//               <div className="meta">
//                 Expected: {JSON.stringify(tc.expected)}
//               </div>
//               <span className="status pending">PENDING</span>
//             </div>
//           ))}

//         {testResults.map((t) => (
//           <div key={t.id} className={`test ${t.status}`}>
//             <div>Case {t.id}</div>
//             <div className="meta">
//               Input: {JSON.stringify(t.input)}
//             </div>
//             <div className="meta">
//               Expected: {JSON.stringify(t.expected)}
//             </div>
//             <div className="meta">
//               Output: {JSON.stringify(t.actual)}
//             </div>
//             <span className={`status ${t.status}`}>
//               {t.status.toUpperCase()}
//             </span>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Practice;


import { useState, useEffect } from "react";
import { usePractice } from "../../context/PracticeContext";
import Breadcrumbs from "../../components/Breadcrumbs";
import Editor from "@monaco-editor/react";
import "./practice.css";

// ⭐ NEW IMPORT (Phase1 Validator)
import { validatePhase1 } from "../../utils/phase1Validator";

const languageMap = {
  javascript: {
    label: "JavaScript",
    monacoLang: "javascript",
  },
  python: {
    label: "Python",
    monacoLang: "python",
  },
  java: {
    label: "Java",
    monacoLang: "java",
  },
};

const Practice = () => {
  const { activeQuestion } = usePractice();

  const [code, setCode] = useState("");
  const [testResults, setTestResults] = useState([]);
  const [language, setLanguage] = useState("javascript");
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    if (activeQuestion) {
      setCode(activeQuestion.starterCode[language]);
      setTestResults([]);
      setLanguage("javascript");
    }
  }, [activeQuestion]);

  if (!activeQuestion) {
    return <p className="empty-state">👈 Select a question</p>;
  }

  // ⭐ UPDATED RUN CODE (Backward Compatible)
  const runCode = () => {

    // ⭐ Phase1 Debug Validator
    if (activeQuestion.validationType === "phase1") {

      const phaseResult = validatePhase1({
        code,
        question: activeQuestion
      });

      setTestResults(phaseResult.results);
      return;
    }

    // ⭐ EXISTING NORMAL FLOW (UNCHANGED)
    const results = [];

    try {
      const fnName = activeQuestion.functionName;

      const userFunction = new Function(
        `${code}; return ${fnName};`
      )();

      activeQuestion.testCases.forEach((test, index) => {
        const actualOutput = userFunction(...test.args);

        const passed =
          JSON.stringify(actualOutput) ===
          JSON.stringify(test.expected);

        results.push({
          id: index + 1,
          input: test.args,
          expected: test.expected,
          actual: actualOutput,
          status: passed ? "pass" : "fail",
        });
      });

      setTestResults(results);

    } catch (error) {
      console.error(error);

      setTestResults(
        activeQuestion.testCases.map((_, i) => ({
          id: i + 1,
          status: "fail",
        }))
      );
    }
  };

  return (
    <div className="practice-layout">

      {/* LEFT */}
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

        {/* ⭐ OPTIONAL DEBUG BADGE */}
        {activeQuestion.validationType === "phase1" && (
          <div style={{
            marginTop: "10px",
            padding: "6px 10px",
            background: "#2a2a2a",
            borderRadius: "6px",
            fontSize: "12px"
          }}>
            🛠 Debug Challenge Mode
          </div>
        )}
      </section>

      {/* CENTER */}
      <section className="panel editor-panel">
        <div className="editor-topbar">
          <span>{"</> Code Editor"}</span>

          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {Object.entries(languageMap).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <Editor
          height="100%"
          language={languageMap[language].monacoLang}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            fontFamily: "Fira Code, monospace",
            minimap: { enabled: true },
            smoothScrolling: true,
            cursorSmoothCaretAnimation: true,
            wordWrap: "on",
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 12 },
          }}
        />

        <div className="editor-actions">
          <button className="run-btn" onClick={runCode}>
            ▶ Run Code
          </button>
        </div>
      </section>

      {/* RIGHT */}
      <section className="panel testcase-panel">
        <h4>Test Cases</h4>

        {testResults.length === 0 &&
          activeQuestion.testCases.map((tc, i) => (
            <div key={i} className="test pending">
              <div>Case {i + 1}</div>
              <div className="meta">
                Input: {JSON.stringify(tc.args)}
              </div>
              <div className="meta">
                Expected: {JSON.stringify(tc.expected)}
              </div>
              <span className="status pending">PENDING</span>
            </div>
          ))}
         {Array.isArray(activeQuestion.hints) && activeQuestion.hints.length > 0 && (
  <div className="hint-box">
    <button
      className="hint-btn"
      onClick={() => setShowHints(!showHints)}
    >
      💡 {showHints ? "Hide Hints" : "Show Hints"}
    </button>

    {showHints && (
      <ul className="hint-list">
        {activeQuestion.hints.map((hint, index) => (
          <li key={index}>
            Hint {index + 1}: {hint}
          </li>
        ))}
      </ul>
    )}
  </div>
)}


        {testResults.map((t) => (
          <div key={t.id} className={`test ${t.status}`}>
            <div>Case {t.id}</div>
            <div className="meta">
              Input: {JSON.stringify(t.input)}
            </div>
            <div className="meta">
              Expected: {JSON.stringify(t.expected)}
            </div>
            <div className="meta">
              Output: {JSON.stringify(t.actual)}
            </div>
            <span className={`status ${t.status}`}>
              {t.status.toUpperCase()}
            </span>
          </div>
        ))}
        
      </section>
    </div>
  );
};

export default Practice;
