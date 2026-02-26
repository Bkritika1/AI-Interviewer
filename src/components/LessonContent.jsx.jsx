// // import "./LessonPanel.css";

// const LessonContent = ({ lesson, completedLessons }) => {

//   return (
//     <div className="lesson-panel">

//       <h1>{lesson.title}</h1>

//       <p>{lesson.description}</p>

//       <div className="instructions">
//         {lesson.instructions}
//       </div>

//     </div>
//   );
// };

// export default LessonContent;


// export default function LessonContent({ topic }) {

//   if (!topic) return null;

//   const { content } = topic;

//   return (
//     <div className="lessonContent">

//       <h1 className="lessonContent__heading">
//         {content.heading}
//       </h1>

//       <p className="lessonContent__desc">
//         {content.description}
//       </p>

//       {content.quote && (
//         <div className="lessonContent__quote">
//           {content.quote}
//         </div>
//       )}

//       {content.tasks?.length > 0 && (
//         <>
//           <h3>Task Requirements</h3>
//           <ul>
//             {content.tasks.map((task, i) => (
//               <li key={i}>{task}</li>
//             ))}
//           </ul>
//         </>
//       )}

//       {content.exampleCode && (
//         <pre className="lessonContent__example">
//           {content.exampleCode}
//         </pre>
//       )}
//     </div>
//   );
// }


// export default function LessonContent({ topic, onCompleteQuestion }) {


//   if (!topic) return null;

//   const { content } = topic;

//   return (
//     <div className="lesson-content">

//       <h1 className="lesson-heading">
//         {content.heading}
//       </h1>

//       <p className="lesson-desc">
//         {content.description}
//       </p>

//       {/* QUOTE BOX */}
//       {content.quote && (
//         <div className="quote-box">
//           {content.quote}
//         </div>
//       )}

//       {/* TASK REQUIREMENTS */}
//       {content.tasks?.length > 0 && (
//         <div className="tasks">
//           <h3>Task Requirements</h3>

//           {content.tasks.map((task, i) => (
//             <div key={i} className="task-item">
//               {task}
//             </div>
//           ))}
//         </div>
//       )}
//       {topic.questions?.map(q => (
//   <button
//     key={q.id}
//     disabled={q.locked}
//     onClick={() =>
//       onCompleteQuestion(topic.id, q.id)
//     }
//     style={{
//       opacity: q.locked ? 0.4 : 1,
//       cursor: q.locked ? "not-allowed" : "pointer",
//       marginTop: "10px"
//     }}
//   >
//     {q.completed ? "✅" : "⬜"} {q.title}
//   </button>
// ))}


//       {/* CODE SNIPPET */}
//       {content.exampleCode && (
//         <pre className="code-example">
//           {content.exampleCode}
//         </pre>
//       )}

//     </div>
//   );
// }


// export default function LessonContent({
//   topic,
//   onCompleteQuestion,
//   onSelectQuestion
// }) {

//   if (!topic) return null;

//   const { content } = topic;

//   return (
//     <div className="lesson-content">

//       <h1>{content.heading}</h1>
//       <p>{content.description}</p>

//       {topic.questions?.map(q => (
//         <button
//           key={q.id}
//           disabled={q.locked}
//           onClick={() => {
//             onSelectQuestion(q);
//             onCompleteQuestion(topic.id, q.id);
//           }}
//           style={{
//             opacity: q.locked ? 0.4 : 1,
//             marginTop: "10px"
//           }}
//         >
//           {q.completed ? "✅" : "⬜"} {q.title}
//         </button>
//       ))}

//     </div>
//   );
// }

import './LessonContent.css';
export default function LessonContent({
  topic,
  onSelectQuestion
}) {
  if (!topic) return null;

  const { content } = topic;

  return (
    <div className="lesson-wrapper">

      {/* 🔥 TOP HEADER ROW */}
      <div className="lesson-header">
        <div className="lesson-badge">
          📖 LESSON DETAILS
        </div>

        <div className="lesson-progress">
          <span>Progress</span>
          <div className="mini-progress-bar">
            <div className="mini-progress-fill" />
          </div>
        </div>
      </div>

      {/* 🔥 MAIN HEADING */}
      <h1 className="lesson-title">
        {content.heading}
      </h1>

      <p className="lesson-description">
        {content.description}
      </p>

      {/* 🔥 QUOTE BOX */}
      <div className="lesson-quote">
        “The secret of getting ahead is getting started.
        Structure your code like you structure your goals —
        one clear heading at a time.”
      </div>

      {/* 🔥 TASK REQUIREMENTS */}
      <div className="task-section">
        <h3>💡 Task Requirements</h3>

        <div className="task-list">
          {topic.questions?.map(q => (
            <div
              key={q.id}
              className={`task-item ${q.completed ? "done" : ""}`}
              onClick={() => !q.locked && onSelectQuestion(q)}
            >
              <span className="task-icon">
                {q.completed ? "✅" : "⬜"}
              </span>
              <span>{q.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CODE SNIPPET CARD */}
      <div className="code-snippet-card">
        <div className="snippet-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <pre>
{`<h1>My Awesome Title</h1>
<h2>The Subtitle</h2>`}
        </pre>
      </div>

    </div>
  );
}