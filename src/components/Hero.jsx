import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">The #1 AI Career Coach</span>

        <h1>
          Master Your Next <span>Tech Interview</span> with AI
        </h1>

        <p>
          Practice coding challenges, system design, and behavioral
          questions with personalized AI feedback.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/modes")}
          >
            Start Preparing Free
          </button>

          <button className="secondary-btn">Watch Demo</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="../../image.png" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
