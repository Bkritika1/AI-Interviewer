export default function CourseSidebar() {
  return (
    <aside className="df-sidebar">
      <h4 className="curriculum">CURRICULUM</h4>

      <p className="module">MODULE 1</p>
      <p className="module-title">HTML Fundamentals</p>

      <div className="timeline">

        {/* COMPLETED */}
        <div className="timeline-item">
          <div className="timeline-left">
            <div className="circle completed">✓</div>
            <div className="line gold"></div>
          </div>

          <div>
            <p className="lesson-done">Lesson Intro</p>
            <span className="completed-badge">COMPLETED</span>
          </div>
        </div>

        {/* CURRENT */}
        <div className="timeline-item">
          <div className="timeline-left">
            <div className="circle current"></div>
            <div className="line"></div>
          </div>

          <div>
            <p className="lesson-active">HTML Headings</p>

            <div className="question active">
              ▶ Question 1: The H1 Tag
            </div>

            <div className="question locked">
              🔒 Question 2: Sub-headings
            </div>
          </div>
        </div>

        {/* LOCKED */}
        <div className="timeline-item locked">
          <div className="timeline-left">
            <div className="circle locked">🔒</div>
            <div className="line"></div>
          </div>

          <p>Paragraph Tags</p>
        </div>
      </div>

      <div className="daily">
        <p>DAILY GOAL 70%</p>
        <div className="goal-bar">
          <div className="goal-fill"></div>
        </div>
      </div>
    </aside>
  );
}
