// import "./modeCard.css";

// const ModeCard = ({
//   icon,
//   tag,
//   title,
//   desc,
//   badge,
//   buttonText,
// }) => {
//   return (
//     <div className="mode-card">
//       {badge && <span className="badge">{badge}</span>}

//       <div className="card-top">
//         <div className="icon">{icon}</div>
//         <span className="tag">{tag}</span>
//       </div>

//       <h3>{title}</h3>
//       <p>{desc}</p>

//       <button>{buttonText}</button>
//     </div>
//   );
// };

// export default ModeCard;


import { useNavigate } from "react-router-dom";
import "./modeCard.css";

const ModeCard = ({ icon, tag, title, desc, buttonText, badge, to }) => {
  const navigate = useNavigate();

  return (
    <div className="mode-card">
      {badge && <span className="badge">{badge}</span>}

      <div className="icon">{icon}</div>
      <span className="tag">{tag}</span>

      <h3>{title}</h3>
      <p>{desc}</p>

      <button onClick={() => navigate(to)}>
        {buttonText}
      </button>
    </div>
  );
};

export default ModeCard;
