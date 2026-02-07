// import "./LessonPanel.css";

const LessonContent = ({ lesson, completedLessons }) => {

  return (
    <div className="lesson-panel">

      <h1>{lesson.title}</h1>

      <p>{lesson.description}</p>

      <div className="instructions">
        {lesson.instructions}
      </div>

    </div>
  );
};

export default LessonContent;
