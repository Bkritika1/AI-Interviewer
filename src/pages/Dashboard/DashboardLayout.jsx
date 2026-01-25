// import { Outlet } from "react-router-dom";
// import Sidebar from "../../components/Sidebar";
//  import "./dashboard.css";

// const DashboardLayout = () => {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <div className="dashboard-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


// import { Outlet } from "react-router-dom";
// import Sidebar from "../../components/Sidebar";
// import DashboardHeader from "../../components/DashboardHeader";
// import "./dashboard.css";

// const DashboardLayout = () => {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <div className="dashboard-main">
//         <DashboardHeader />
//         <div className="dashboard-content">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


// import { Outlet } from "react-router-dom";
// import Sidebar from "../../components/Sidebar";
// import DashboardHeader from "../../components/DashboardHeader";
// import { DashboardProvider } from "../../context/DashboardContext";
// import "./dashboard.css";

// const DashboardLayout = () => {
//   return (
//     <DashboardProvider>
//       <div className="dashboard-layout">
//         <Sidebar />

//         <div className="dashboard-main">
//           <DashboardHeader />
//           <div className="dashboard-content">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </DashboardProvider>
//   );
// };

// export default DashboardLayout;



import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import { DashboardProvider } from "../../context/DashboardContext";
import { PracticeProvider } from "../../context/PracticeContext"; // 👈 import
import "./dashboard.css";

const DashboardLayout = () => {
  return (
    <DashboardProvider>
      <PracticeProvider> {/* 👈 wrap here */}
        <div className="dashboard-layout">
          <Sidebar />

          <div className="dashboard-main">
            <DashboardHeader />
            <div className="dashboard-content">
              <Outlet />
            </div>
          </div>
        </div>
      </PracticeProvider>
    </DashboardProvider>
  );
};

export default DashboardLayout;
