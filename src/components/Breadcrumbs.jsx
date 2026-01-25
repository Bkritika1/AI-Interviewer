import { useDashboard } from "../context/DashboardContext";
import { useLocation } from "react-router-dom";
// import "./breadcrumbs.css";

const Breadcrumbs = () => {
  const { activeMode } = useDashboard();
  const location = useLocation();

  const page =
    location.pathname.split("/").slice(-1)[0];

  const labels = {
    practice: "Coding Challenges",
    learn: "Topics",
    mock: "Sessions",
  };

  return (
    <div className="breadcrumbs">
      <span className="parent">
        {activeMode.charAt(0).toUpperCase() + activeMode.slice(1)}
      </span>
      <span className="separator"> / </span>
      <span className="current">
        {labels[activeMode] || page}
      </span>
    </div>
  );
};

export default Breadcrumbs;




  //techStack- editor  built-in   drag drop,   quiz-multiple answers ,   matching, 


// multipe value and mulitiple questions 
// 