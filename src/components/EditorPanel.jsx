import { useState, useEffect } from "react";
// import "./EditorPanel.css";

const EditorPanel = ({ lesson, markLessonComplete }) => {

  const [code, setCode] = useState(lesson.starterCode);

  useEffect(() => {
    setCode(lesson.starterCode);
  }, [lesson]);

  return (
    <div className="editor-panel">

      <textarea
        className="editor-area"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        className="run-btn"
        onClick={() => markLessonComplete(lesson.id)}
      >
        RUN CODE & SUBMIT
      </button>

      <iframe
        title="preview"
        className="preview"
        srcDoc={code}
      />

    </div>
  );
};

export default EditorPanel;
