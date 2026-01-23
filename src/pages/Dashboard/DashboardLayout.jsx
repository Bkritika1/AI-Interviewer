import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
 import "./dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
