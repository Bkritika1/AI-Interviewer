import { useState } from "react";
import { htmlCourse } from "../data/htmlCourseData";
import "./htmlCourse.css";

const HTMLCoursePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState(
    htmlCourse.topics[0].lessons[0]
  );

  const [code, setCode] = useState(selectedLesson.starterCode);
  const [output, setOutput] = useState("");

  const handleRun = () => {
    setOutput(code);
  };

  return (
    <div className={`course-layout ${sidebarOpen ? "open" : "closed"}`}>
      {/* 🔹 Sidebar */}
      <aside className="sidebar">
        <h3>HTML Tutorial</h3>

        {htmlCourse.topics.map((topic) =>
          topic.lessons.map((lesson) => (
            <button
              key={lesson.id}
              className={`lesson-btn ${
                selectedLesson.id === lesson.id ? "active" : ""
              }`}
              onClick={() => {
                setSelectedLesson(lesson);
                setCode(lesson.starterCode);
              }}
            >
              {lesson.title}
            </button>
          ))
        )}
      </aside>

      {/* 🔹 Main Content */}
      <div className="main-area">
        {/* Toggle Button */}
        <button
          className="toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "☰ Close" : "☰ Open"}
        </button>

        {/* CENTER CONTENT */}
        <div className="lesson-content">
          <h1>{selectedLesson.title}</h1>

          <p className="desc">{selectedLesson.description}</p>

          <div className="instruction-box">
            {selectedLesson.instructions}
          </div>

          <h3>Code Example</h3>

          <pre className="example-code">
{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`}
          </pre>
        </div>

        {/* RIGHT PANEL */}
        <div className="editor-area">
          <h3>CODE EDITOR</h3>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor"
          />

          <button className="run-btn" onClick={handleRun}>
            ▶ Run Code
          </button>

          <h4>LIVE PREVIEW</h4>

          <iframe
            title="preview"
            srcDoc={output}
            className="preview-frame"
          />
        </div>
      </div>
    </div>
  );
};

export default HTMLCoursePage;
