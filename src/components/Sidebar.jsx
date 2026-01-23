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

import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">DEVPREP AI</h2>

      <p className="section-title">GENERAL</p>

      <NavLink to="/dashboard/practice" className="nav-link">
        Dashboard
      </NavLink>

      <p className="section-title">PRACTICE CATEGORIES</p>

      <NavLink to="/dashboard/practice" className="nav-link">
        Coding Challenges
      </NavLink>

      <NavLink to="/dashboard/practice" className="nav-link">
        Debugging Tasks
      </NavLink>

      <NavLink to="/dashboard/practice" className="nav-link">
        SQL Practice
      </NavLink>

      <NavLink to="/dashboard/practice" className="nav-link">
        MCQ Quizzes
      </NavLink>

      <div className="upgrade-box">
        <p>Free Tier</p>
        <button>Upgrade to Pro</button>
      </div>
    </aside>
  );
};

export default Sidebar;
