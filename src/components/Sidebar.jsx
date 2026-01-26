// import { NavLink } from "react-router-dom";
//  import "./sidebar.css";

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <h2 className="logo">DEVPREP AI</h2>

//       <nav>
//         <NavLink to="/dashboard/learn">Learn Mode</NavLink>
//         <NavLink to="/dashboard/practice">Practice Mode</NavLink>
//         <NavLink to="/dashboard/mock">Mock Interview</NavLink>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

// import { NavLink } from "react-router-dom";
// import "./sidebar.css";

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <h2 className="logo">DEVPREP AI</h2>

//       <p className="section-title">GENERAL</p>

//       <NavLink to="/dashboard/practice" className="nav-link">
//         Dashboard
//       </NavLink>

//       <p className="section-title">PRACTICE CATEGORIES</p>

//       <NavLink to="/dashboard/practice" className="nav-link">
//         Coding Challenges
//       </NavLink>

//       <NavLink to="/dashboard/practice" className="nav-link">
//         Debugging Tasks
//       </NavLink>

//       <NavLink to="/dashboard/practice" className="nav-link">
//         SQL Practice
//       </NavLink>

//       <NavLink to="/dashboard/practice" className="nav-link">
//         MCQ Quizzes
//       </NavLink>

//       <div className="upgrade-box">
//         <p>Free Tier</p>
//         <button>Upgrade to Pro</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;





// import { NavLink } from "react-router-dom";
// import "./sidebar.css";

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <h2 className="logo">DEVPREP AI</h2>

//       <p className="section-title">GENERAL</p>
//       <NavLink to="/dashboard/practice">Dashboard</NavLink>

//       <p className="section-title">PRACTICE CATEGORIES</p>
//       <NavLink to="/dashboard/practice">Coding Challenges</NavLink>
//       <NavLink to="/dashboard/practice">Debugging Tasks</NavLink>
//       <NavLink to="/dashboard/practice">SQL Practice</NavLink>
//       <NavLink to="/dashboard/practice">MCQ Quizzes</NavLink>

//       <div className="upgrade-box">
//         <p>Free Tier</p>
//         <button>Upgrade to Pro</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// import { NavLink } from "react-router-dom";
// import { useDashboard } from "../context/DashboardContext";
// import "./sidebar.css";

// const Sidebar = () => {
//   const { activeMode } = useDashboard();

//   return (
//     <aside className="sidebar">
//       <h2 className="logo">DEVPREP AI</h2>

//       {activeMode === "practice" && (
//         <>
//           <p className="section-title">PRACTICE</p>
//           <NavLink to="/dashboard/practice">Coding Challenges</NavLink>
//           <NavLink to="/dashboard/practice">Debugging Tasks</NavLink>
//           <NavLink to="/dashboard/practice">SQL Practice</NavLink>
//           <NavLink to="/dashboard/practice">MCQ Quizzes</NavLink>
//         </>
//       )}

//       {activeMode === "learn" && (
//         <>
//           <p className="section-title">LEARN</p>
//           <NavLink to="/dashboard/learn">Topics</NavLink>
//           <NavLink to="/dashboard/learn">Roadmaps</NavLink>
//           <NavLink to="/dashboard/learn">Notes</NavLink>
//         </>
//       )}

//       {activeMode === "mock" && (
//         <>
//           <p className="section-title">MOCK INTERVIEWS</p>
//           <NavLink to="/dashboard/mock">Start Interview</NavLink>
//           <NavLink to="/dashboard/mock">Past Sessions</NavLink>
//         </>
//       )}

//       <div className="upgrade-box">
//         <p>Free Tier</p>
//         <button>Upgrade to Pro</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useDashboard } from "../context/DashboardContext";
// import { codingChallenges } from "../data/codingChallengesData";
// import "./sidebar.css";
// import { usePractice } from "../context/PracticeContext";

// const Sidebar = ({ onQuestionSelect }) => {
//   const { activeMode } = useDashboard();
//   const [topic, setTopic] = useState("");
//   const [questions, setQuestions] = useState([]);
//     const { setActiveQuestion } = usePractice();

//   const handleTopicChange = (e) => {
//     const selected = e.target.value;
//     setTopic(selected);
//     setQuestions(codingChallenges[selected].questions);
//   };

//   return (
//     <aside className="sidebar">
//       <h2 className="logo">DEVPREP AI</h2>

//       {activeMode === "practice" && (
//         <>
//           <p className="section-title">PRACTICE</p>

//           <NavLink to="/dashboard/practice">Coding Challenges</NavLink>

//           {/* Topic Dropdown */}
//           <select className="topic-select" onChange={handleTopicChange}>
//             <option value="">Select Topic</option>
//             {Object.keys(codingChallenges).map((key) => (
//               <option key={key} value={key}>
//                 {codingChallenges[key].title}
//               </option>
//             ))}
//           </select>

//           {/* Questions List */}
//           {questions.map((q) => (
//             <div
//               key={q.id}
//               className="question-item"
//               onClick={() => onQuestionSelect(q)}
//             >
//               Q{q.id}. {q.title}
//             </div>
//           ))}

//           <NavLink to="/dashboard/practice">Debugging Tasks</NavLink>
//           <NavLink to="/dashboard/practice">SQL Practice</NavLink>
//           <NavLink to="/dashboard/practice">MCQ Quizzes</NavLink>
//         </>
//       )}

//       <div className="upgrade-box">
//         <p>Free Tier</p>
//         <button>Upgrade to Pro</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useDashboard } from "../context/DashboardContext";
// import { codingChallenges } from "../data/codingChallengesData";
// import "./sidebar.css";
// import { usePractice } from "../context/PracticeContext";

// const Sidebar = () => {
//   const { activeMode } = useDashboard();
//   const [topic, setTopic] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const { setActiveQuestion } = usePractice(); // 👈 use context

//   const handleTopicChange = (e) => {
//     const selected = e.target.value;
//     setTopic(selected);
//     setQuestions(codingChallenges[selected].questions);
//     setActiveQuestion(null); // reset when topic changes
//   };

//   return (
//     <aside className="sidebar">
//       <h2 className="logo">DEVPREP AI</h2>

//       {activeMode === "practice" && (
//         <>
//           <p className="section-title">PRACTICE</p>

//           <NavLink to="/dashboard/practice">Coding Challenges</NavLink>

//           {/* Topic Dropdown */}
//           <select className="topic-select" onChange={handleTopicChange}>
//             <option value="">Select Topic</option>
//             {Object.keys(codingChallenges).map((key) => (
//               <option key={key} value={key}>
//                 {codingChallenges[key].title}
//               </option>
//             ))}
//           </select>

//           {/* Questions List */}
//           {questions.map((q) => (
//             <div
//               key={q.id}
//               className="question-item"
//               onClick={() => setActiveQuestion(q)} // 👈 use context directly
//             >
//               Q{q.id}. {q.title}
//             </div>
//           ))}

//           <NavLink to="/dashboard/practice">Debugging Tasks</NavLink>
//           <NavLink to="/dashboard/practice">SQL Practice</NavLink>
//           <NavLink to="/dashboard/practice">MCQ Quizzes</NavLink>
//         </>
//       )}

//       <div className="upgrade-box">
//         <p>Free Tier</p>
//         <button>Upgrade to Pro</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDashboard } from "../context/DashboardContext";
// import { codingChallenges } from "../data/codingChallengesData";
// import { usePractice } from "../context/PracticeContext";
// import "./sidebar.css";

// const Sidebar = () => {
//   const { activeMode } = useDashboard();
//   const navigate = useNavigate();

//   const [topic, setTopic] = useState("");
//   const [questions, setQuestions] = useState([]);

//   const { setActiveQuestion } = usePractice();

//   const handleTopicChange = (e) => {
//     const selected = e.target.value;
//     setTopic(selected);
//     setQuestions(codingChallenges[selected]?.questions || []);
//     setActiveQuestion(null);

//     // 👇 Topic select hone pe base route
//     navigate(`/dashboard/practice/coding/${selected}`);
//   };

//   const handleQuestionClick = (question) => {
//     setActiveQuestion(question);

//     // 👇 MOST IMPORTANT LINE
//     navigate(
//       `/dashboard/practice/coding/${topic}/${question.id}`
//     );
//   };

//   return (
//     <aside className="sidebar">
//       <h2 className="logo">DEVPREP AI</h2>

//       {activeMode === "practice" && (
//         <>
//           <p className="section-title">PRACTICE</p>

//           <NavLink to="/dashboard/practice">
//             Coding Challenges
//           </NavLink>

//           {/* Topic Dropdown */}
//           <select
//             className="topic-select"
//             value={topic}
//             onChange={handleTopicChange}
//           >
//             <option value="">Select Topic</option>
//             {Object.keys(codingChallenges).map((key) => (
//               <option key={key} value={key}>
//                 {codingChallenges[key].title}
//               </option>
//             ))}
//           </select>

//           {/* Questions List */}
//           {questions.map((q) => (
//             <div
//               key={q.id}
//               className="question-item"
//               onClick={() => handleQuestionClick(q)}
//             >
//               Q{q.id}. {q.title}
//             </div>
//           ))}

//           <NavLink to="/dashboard/practice">
//             Debugging Tasks
//           </NavLink>
//           <NavLink to="/dashboard/practice">
//             SQL Practice
//           </NavLink>
//           <NavLink to="/dashboard/practice">
//             MCQ Quizzes
//           </NavLink>
//         </>
//       )}

//       <div className="upgrade-box">
//         <p>Free Tier</p>
//         <button>Upgrade to Pro</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDashboard } from "../context/DashboardContext";
import { codingChallenges } from "../data/codingChallengesData";
import { usePractice } from "../context/PracticeContext";
import "./sidebar.css";

const Sidebar = () => {
  const { activeMode } = useDashboard();
  const navigate = useNavigate();

  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState([]);

  // ✅ UPDATED CONTEXT API
  const { selectQuestion, solvedQuestions } = usePractice();

  const handleTopicChange = (e) => {
    const selected = e.target.value;
    setTopic(selected);
    setQuestions(codingChallenges[selected]?.questions || []);

    // 🔗 topic level route
    navigate(`/dashboard/practice/coding/${selected}`);
  };

  const handleQuestionClick = (question) => {
    // ✅ ONE SOURCE OF TRUTH
    selectQuestion(topic, question);

    // 🔗 full breadcrumb route
    navigate(
      `/dashboard/practice/coding/${topic}/${question.id}`
    );
  };

  return (
    <aside className="sidebar">
      <h2 className="logo">DEVPREP AI</h2>

      {activeMode === "practice" && (
        <>
          <p className="section-title">PRACTICE</p>

          <NavLink to="/dashboard/practice">
            Coding Challenges
          </NavLink>

          {/* Topic Dropdown */}
          <select
            className="topic-select"
            value={topic}
            onChange={handleTopicChange}
          >
            <option value="">Select Topic</option>
            {Object.keys(codingChallenges).map((key) => (
              <option key={key} value={key}>
                {codingChallenges[key].title}
              </option>
            ))}
          </select>

          {/* Questions List */}
          {questions.map((q) => (
            <div
              key={q.id}
              className={`question-item ${
                solvedQuestions[q.id] ? "solved" : ""
              }`}
              onClick={() => handleQuestionClick(q)}
            >
              {solvedQuestions[q.id] && "✔ "}
              {q.title}
            </div>
          ))}

          <NavLink to="/dashboard/practice">
            Debugging Tasks
          </NavLink>
          <NavLink to="/dashboard/practice">
            SQL Practice
          </NavLink>
          <NavLink to="/dashboard/practice">
            MCQ Quizzes
          </NavLink>
        </>
      )}

      <div className="upgrade-box">
        <p>Free Tier</p>
        <button>Upgrade to Pro</button>
      </div>
    </aside>
  );
};

export default Sidebar;
