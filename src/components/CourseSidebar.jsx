export default function CourseSidebar({
  topics,
  selectedLesson,
  setSelectedLesson,
  progress = {}
}) {
  return (
    <aside className="df-sidebar">
      <h4 className="curriculum">CURRICULUM</h4>

      {topics.map((topic, topicIndex) => (
        <div key={topic.id}>
          <p className="module">MODULE {topicIndex + 1}</p>
          <p className="module-title">{topic.title}</p>

          <div className="timeline">
            {topic.lessons.map((lesson, index) => {
              const isCompleted = progress[lesson.id] === "completed";
              const isCurrent = selectedLesson.id === lesson.id;

              const prevLesson =
                topic.lessons[index - 1];

              const isLocked =
                index !== 0 &&
                progress[prevLesson?.id] !== "completed";

              return (
                <div
                  key={lesson.id}
                  className={`timeline-item ${
                    isLocked ? "locked" : ""
                  }`}
                  onClick={() => {
                    if (!isLocked) {
                      setSelectedLesson(lesson);
                    }
                  }}
                >
                  {/* LEFT SIDE TIMELINE */}
                  <div className="timeline-left">
                    <div
                      className={`circle ${
                        isCompleted
                          ? "completed"
                          : isCurrent
                          ? "current"
                          : isLocked
                          ? "locked"
                          : "default"
                      }`}
                    >
                      {isCompleted ? "✓" : isLocked ? "🔒" : ""}
                    </div>

                    {index !== topic.lessons.length - 1 && (
                      <div
                        className={`line ${
                          isCompleted ? "gold" : ""
                        }`}
                      ></div>
                    )}
                  </div>

                  {/* RIGHT CONTENT */}
                  <div>
                    <p
                      className={
                        isCompleted
                          ? "lesson-done"
                          : isCurrent
                          ? "lesson-active"
                          : ""
                      }
                    >
                      {lesson.title}
                    </p>

                    {/* COMPLETED BADGE */}
                    {isCompleted && (
                      <span className="completed-badge">
                        COMPLETED
                      </span>
                    )}

                    {/* QUESTIONS */}
                    {isCurrent &&
                      lesson.questions?.map((q, i) => {
                        const qCompleted =
                          progress[`${lesson.id}-${i}`] ===
                          "completed";

                        const qLocked =
                          i !== 0 &&
                          progress[
                            `${lesson.id}-${i - 1}`
                          ] !== "completed";

                        return (
                          <div
                            key={i}
                            className={`question ${
                              qLocked
                                ? "locked"
                                : "active"
                            }`}
                          >
                            {qLocked ? "🔒" : "▶"} {q.title}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* DAILY GOAL */}
      <div className="daily">
        <p>DAILY GOAL 70%</p>
        <div className="goal-bar">
          <div className="goal-fill"></div>
        </div>
      </div>
    </aside>
  );
}
