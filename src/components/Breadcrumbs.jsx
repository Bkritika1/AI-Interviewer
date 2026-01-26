// import { useDashboard } from "../context/DashboardContext";
// import { useLocation } from "react-router-dom";
// // import "./breadcrumbs.css";

// const Breadcrumbs = () => {
//   const { activeMode } = useDashboard();
//   const location = useLocation();

//   const page =
//     location.pathname.split("/").slice(-1)[0];

//   const labels = {
//     practice: "Coding Challenges",
//     learn: "Topics",
//     mock: "Sessions",
//   };

//   return (
//     <div className="breadcrumbs">
//       <span className="parent">
//         {activeMode.charAt(0).toUpperCase() + activeMode.slice(1)}
//       </span>
//       <span className="separator"> / </span>
//       <span className="current">
//         {labels[activeMode] || page}
//       </span>
//     </div>
//   );
// };

// export default Breadcrumbs;



// import { useDashboard } from "../context/DashboardContext";
// import { useLocation, Link } from "react-router-dom";
// import { codingChallenges } from "../data/codingChallengesData";
// //import "./breadcrumbs.css";

// const Breadcrumbs = () => {
//   const { activeMode } = useDashboard();
//   const location = useLocation();

//   const pathParts = location.pathname.split("/").filter(Boolean);

//   // Example:
//   // dashboard / practice / coding / closures / create-counter
//   const section = pathParts[2];
//   const topicId = pathParts[3];
//   const questionId = pathParts[4];

//   const topic =
//     topicId && codingChallenges[topicId];

//   const question =
//     topic && topic.questions.find(
//       (q) => q.id === questionId
//     );

//   return (
//     <div className="breadcrumbs">
//       <Link to="/dashboard/practice">Practice</Link>

//       {section && (
//         <>
//           <span className="separator"> / </span>
//           <span>Coding Challenges</span>
//         </>
//       )}

//       {topic && (
//         <>
//           <span className="separator"> / </span>
//           <span>{topic.title}</span>
//         </>
//       )}

//       {question && (
//         <>
//           <span className="separator"> / </span>
//           <span className="current">
//             {question.title}
//           </span>
//         </>
//       )}
//     </div>
//   );
// };

// export default Breadcrumbs;

import { Link, useLocation } from "react-router-dom";
import { codingChallenges } from "../data/codingChallengesData";
//import "./breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter(Boolean);

  /*
    Expected path:
    dashboard / practice / coding / topicId / questionId
  */

  const section = pathParts[2];     // coding
  const topicId = pathParts[3];     // arrays / closures etc
  const questionId = pathParts[4];  // two-sum etc

  const topic = topicId ? codingChallenges[topicId] : null;

  const question =
    topic && questionId
      ? topic.questions.find((q) => q.id === questionId)
      : null;

  return (
    <div className="breadcrumbs">
      {/* Practice */}
      <Link to="/dashboard/practice">Practice</Link>

      {/* Coding Challenges */}
      {section === "coding" && (
        <>
          <span className="separator"> / </span>
          <Link to="/dashboard/practice/coding">
            Coding Challenges
          </Link>
        </>
      )}

      {/* Topic */}
      {topic && (
        <>
          <span className="separator"> / </span>
          <Link to={`/dashboard/practice/coding/${topicId}`}>
            {topic.title}
          </Link>
        </>
      )}

      {/* Question */}
      {question && (
        <>
          <span className="separator"> / </span>
          <span className="current">
            {question.title}
          </span>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;



  //techStack- editor  built-in   drag drop,   quiz-multiple answers ,   matching, 


// multipe value and mulitiple questions 
// 