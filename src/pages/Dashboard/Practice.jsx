// const Practice = () => {
//   return (
//     <div className="practice-page">
//       <h1>Coding Challenges</h1>
//       <p>Sharpen your skills with AI-powered challenges.</p>

//       <div className="cards">
//         <div className="card">
//           <h3>Two Sum Problem</h3>
//           <p>Easy • 15 mins</p>
//         </div>

//         <div className="card">
//           <h3>LRU Cache Design</h3>
//           <p>Medium • 45 mins</p>
//         </div>

//         <div className="card">
//           <h3>Binary Tree Maximum Path</h3>
//           <p>Hard • 60 mins</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Practice;


const Practice = () => {
  return (
    <div className="practice-page">
      <div className="top">
        <h1>Coding Challenges</h1>
        <div className="xp">
          <p>POINTS EARNED</p>
          <h2>2,450 XP</h2>
        </div>
      </div>

      <div className="cards">
        <div className="card easy">
          <h3>Two Sum Problem</h3>
          <p>Easy • 15 mins</p>
        </div>

        <div className="card medium">
          <h3>LRU Cache Design</h3>
          <p>Medium • 45 mins</p>
        </div>

        <div className="card hard">
          <h3>Binary Tree Maximum Path</h3>
          <p>Hard • 60 mins</p>
        </div>
      </div>

      <div className="bottom">
        <div className="activity">
          <h3>Recent Activity</h3>
          <p>✔ Solved "Merge Intervals" (+50 XP)</p>
          <p>⏳ Attempted "QuickSort"</p>
        </div>

        <div className="skills">
          <h3>Skills Matrix</h3>
          <p>Problem Solving — 85%</p>
          <p>Complexity Analysis — 62%</p>
          <p>System Design — 40%</p>
        </div>
      </div>
    </div>
  );
};

export default Practice;
