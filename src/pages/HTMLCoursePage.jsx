// import { useState } from "react";
// import { htmlCourse } from "../data/htmlCourseData";
// import "./htmlCourse.css";

// const HTMLCoursePage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [selectedLesson, setSelectedLesson] = useState(
//     htmlCourse.topics[0].lessons[0]
//   );

//   const [code, setCode] = useState(selectedLesson.starterCode);
//   const [output, setOutput] = useState("");

//   const handleRun = () => {
//     setOutput(code);
//   };

//   return (
//     <div className={`course-layout ${sidebarOpen ? "open" : "closed"}`}>
//       {/* 🔹 Sidebar */}
//       <aside className="sidebar">
//         <h3>HTML Tutorial</h3>

//         {htmlCourse.topics.map((topic) =>
//           topic.lessons.map((lesson) => (
//             <button
//               key={lesson.id}
//               className={`lesson-btn ${
//                 selectedLesson.id === lesson.id ? "active" : ""
//               }`}
//               onClick={() => {
//                 setSelectedLesson(lesson);
//                 setCode(lesson.starterCode);
//               }}
//             >
//               {lesson.title}
//             </button>
//           ))
//         )}
//       </aside>

//       {/* 🔹 Main Content */}
//       <div className="main-area">
//         {/* Toggle Button */}
//         <button
//           className="toggle-btn"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           {sidebarOpen ? "☰ Close" : "☰ Open"}
//         </button>

//         {/* CENTER CONTENT */}
//         <div className="lesson-content">
//           <h1>{selectedLesson.title}</h1>

//           <p className="desc">{selectedLesson.description}</p>

//           <div className="instruction-box">
//             {selectedLesson.instructions}
//           </div>

//           <h3>Code Example</h3>

//           <pre className="example-code">
// {`<h1>This is heading 1</h1>
// <h2>This is heading 2</h2>
// <h3>This is heading 3</h3>`}
//           </pre>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="editor-area">
//           <h3>CODE EDITOR</h3>

//           <textarea
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             className="code-editor"
//           />

//           <button className="run-btn" onClick={handleRun}>
//             ▶ Run Code
//           </button>

//           <h4>LIVE PREVIEW</h4>

//           <iframe
//             title="preview"
//             srcDoc={output}
//             className="preview-frame"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HTMLCoursePage;


// import { useState } from "react";
// import Editor from "@monaco-editor/react";
// import { htmlCourse } from "../data/htmlCourseData";
// import "./htmlCourse.css";

// const HTMLCoursePage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [selectedLesson, setSelectedLesson] = useState(
//     htmlCourse.topics[0].lessons[0]
//   );

//   const [code, setCode] = useState(selectedLesson.starterCode);
//   const [output, setOutput] = useState("");

//   return (
//     <div className={`html-course ${sidebarOpen ? "" : "sidebar-hidden"}`}>
      
//       {/* 🔹 LEFT SIDEBAR */}
//       <aside className="html-sidebar">
//         <h3>HTML Tutorial</h3>
//         <p className="sidebar-sub">BEGINNER COURSE</p>

//         {htmlCourse.topics[0].lessons.map((lesson) => (
//           <button
//             key={lesson.id}
//             className={`sidebar-item ${
//               selectedLesson.id === lesson.id ? "active" : ""
//             }`}
//             onClick={() => {
//               setSelectedLesson(lesson);
//               setCode(lesson.starterCode);
//             }}
//           >
//             {lesson.title}
//           </button>
//         ))}
//       </aside>

//       {/* 🔹 MAIN AREA */}
//       <div className="html-main">

//         {/* Sidebar toggle */}
//         <button
//           className="sidebar-toggle"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           ☰
//         </button>

//         {/* 🔸 CENTER CONTENT */}
//         <section className="lesson-panel">
//           <p className="breadcrumb">HTML Tutorial › {selectedLesson.title}</p>

//           <h1>{selectedLesson.title}</h1>
//           <p className="lesson-desc">{selectedLesson.description}</p>

//           <div className="how-box">
//             <h4>💡 How it works</h4>
//             <p>{selectedLesson.instructions}</p>
//           </div>

//           <h3>Code Example</h3>

//           <pre className="code-example">
// {`<h1>This is heading 1</h1>
// <h2>This is heading 2</h2>
// <h3>This is heading 3</h3>`}
//           </pre>

//           <h3>Your Task</h3>
//           <ol className="task-list">
//             <li>Add an <code>&lt;h1&gt;</code> tag with your name</li>
//             <li>Add an <code>&lt;h2&gt;</code> tag below it</li>
//             <li>Click Run Code</li>
//           </ol>
//         </section>

//         {/* 🔸 RIGHT EDITOR */}
//         <section className="editor-panel">
//           <div className="editor-header">CODE EDITOR</div>

//           <Editor
//             height="280px"
//             defaultLanguage="html"
//             theme="vs-dark"
//             language="html"
//             value={code}
//             onChange={(val) => setCode(val)}
//             options={{
//               fontSize: 14,
//               minimap: { enabled: false },
//               scrollBeyondLastLine: false
//             }}
//           />

//           <button
//             className="run-btn"
//             onClick={() => setOutput(code)}
//           >
//             ▶ Run Code
//           </button>

//           <div className="preview-title">LIVE PREVIEW</div>

//           <iframe
//            title="preview"
//            srcDoc={code}

//             className="preview-frame"
//           />
//         </section>

//       </div>
//     </div>
//   );
// };

// export default HTMLCoursePage;


// import { useState } from "react";
// import { htmlCourse } from "../data/htmlCourseData";
// import Header from "../components/Header";
// import CourseSidebar from "../components/CourseSidebar";
// import LessonPanel from "../components/LessonPanel";
// import EditorPanel from "../components/EditorPanel";
// import "./htmlCourse.css";

// const HTMLCoursePage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const [selectedLesson, setSelectedLesson] = useState(
//     htmlCourse.topics[0].lessons[0]
//   );

//   return (
//     <div className="course-wrapper">
//       <Header />

//       <div className="course-layout">

//         {sidebarOpen && (
//           <CourseSidebar
//             lessons={htmlCourse.topics[0].lessons}
//             selectedLesson={selectedLesson}
//             setSelectedLesson={setSelectedLesson}
//           />
//         )}

//         <LessonPanel lesson={selectedLesson} />

//         <EditorPanel lesson={selectedLesson} />

//         <button
//           className="collapse-btn"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           ☰
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HTMLCoursePage;

import { useState } from "react";
import { htmlCourse } from "../data/htmlCourseData";
import Header from "../components/Header";
import CourseSidebar from "../components/CourseSidebar";
import EditorPanel from "../components/EditorPanel";
import "./htmlCourse.css";
import LessonContent from "../components/LessonContent.jsx";

const HTMLCoursePage = () => {
const lessons = htmlCourse.topics[0].lessons;
const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState([]);



const [selectedQuestion, setSelectedQuestion] = useState(
  lessons[1].questions[0]
);


  // ===== UNLOCK LOGIC =====
  const isLessonUnlocked = (lessonIndex) => {
    if (lessonIndex === 0) return true;

    const prevLesson = lessons[lessonIndex - 1];
    return completedLessons.includes(prevLesson.id);
  };

  // ===== COMPLETE LESSON =====
  const markLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <div className="course-wrapper">

      <Header />

      <div className="course-layout">

        {sidebarOpen && (
       <CourseSidebar
  topics={htmlCourse.topics}
  selectedLesson={selectedLesson}
  setSelectedLesson={setSelectedLesson}
/>
        )}

        <LessonContent
          lesson={selectedLesson}
          completedLessons={completedLessons}
        />

        <EditorPanel
          lesson={selectedLesson}
          markLessonComplete={markLessonComplete}
        />

        <button
          className="collapse-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

      </div>
    </div>
  );
};

export default HTMLCoursePage;
