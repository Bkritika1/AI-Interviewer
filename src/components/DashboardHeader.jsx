// import { NavLink } from "react-router-dom";
// import "./dashboardHeader.css";

// const DashboardHeader = () => {
//   return (
//     <header className="dashboard-header">
//       <div className="tabs">
//         <NavLink to="/dashboard/learn">Learn</NavLink>
//         <NavLink to="/dashboard/practice" className="active">
//           Practice
//         </NavLink>
//         <NavLink to="/dashboard/mock">Mock Interviews</NavLink>
//       </div>

//       <div className="right">
//         <span className="ai-status">🟢 AI Online</span>
//         <span className="avatar">👤</span>
//       </div>
//     </header>
//   );
// };

// export default DashboardHeader;


// import { NavLink } from "react-router-dom";
// import "./dashboardHeader.css";

// const DashboardHeader = () => {
//   return (
//     <header className="dashboard-header">
//       <div className="tabs">
//         <NavLink to="/dashboard/learn">Learn</NavLink>
//         <NavLink to="/dashboard/practice">Practice</NavLink>
//         <NavLink to="/dashboard/mock">Mock Interviews</NavLink>
//       </div>

//       <div className="right">
//         <span className="ai-status">🟢 AI Online</span>
//         <span className="avatar">👤</span>
//       </div>
//     </header>
//   );
// };

// export default DashboardHeader;


import { NavLink } from "react-router-dom";
import { useDashboard } from "../context/DashboardContext";
import "./dashboardHeader.css";

const DashboardHeader = () => {
  const { setActiveMode } = useDashboard();

  return (
    <header className="dashboard-header">
      <div className="tabs">
        <NavLink
          to="/dashboard/learn"
          onClick={() => setActiveMode("learn")}
        >
          Learn
        </NavLink>

        <NavLink
          to="/dashboard/practice"
          onClick={() => setActiveMode("practice")}
        >
          Practice
        </NavLink>

        <NavLink
          to="/dashboard/mock"
          onClick={() => setActiveMode("mock")}
        >
          Mock Interviews
        </NavLink>
      </div>

      <div className="right">
        <span className="ai-status">🟢 AI Online</span>
        <span className="avatar">👤</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
