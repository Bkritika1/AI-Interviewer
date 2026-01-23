import Navbar from "../components/Navbar";
import ModeCard from "../components/ModeCard";
import BottomActions from "../components/BottomActions";
import Header from "../components/Header";
import "./modeSelection.css";

const ModeSelection = () => {
  return (
    <>
      <Header/>

      <main className="mode-page">
        <h1>Choose Your Preparation Path</h1>
        <p className="subtitle">
          Select a mode to begin your journey toward mastering technical
          interviews.
        </p>

        <div className="mode-grid">
          <ModeCard
  icon="📘"
  tag="Foundations"
  title="Learn Mode"
  desc="Topic-based deep dives guided by AI."
  buttonText="Start Learning"
  to="/dashboard/learn"
/>

<ModeCard
  icon="💻"
  tag="Hands-on"
  badge="Recommended"
  title="Practice Mode"
  desc="Solve problems and debug code with instant feedback."
  buttonText="Begin Practice"
  to="/dashboard/practice"
/>

<ModeCard
  icon="🎤"
  tag="Pro"
  title="Mock Interview"
  desc="Real-time AI interview simulation."
  buttonText="Launch Interview"
  to="/dashboard/mock"
/>

        </div>

        <BottomActions />
      </main>

    </>
  );
};

export default ModeSelection;
