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


export default function LessonContent({ topic }) {

  if (!topic) return null;

  const { content } = topic;

  return (
    <div className="lesson-content">

      <h1 className="lesson-heading">
        {content.heading}
      </h1>

      <p className="lesson-desc">
        {content.description}
      </p>

      {/* QUOTE BOX */}
      {content.quote && (
        <div className="quote-box">
          {content.quote}
        </div>
      )}

      {/* TASK REQUIREMENTS */}
      {content.tasks?.length > 0 && (
        <div className="tasks">
          <h3>Task Requirements</h3>

          {content.tasks.map((task, i) => (
            <div key={i} className="task-item">
              {task}
            </div>
          ))}
        </div>
      )}

      {/* CODE SNIPPET */}
      {content.exampleCode && (
        <pre className="code-example">
          {content.exampleCode}
        </pre>
      )}

    </div>
  );
}
