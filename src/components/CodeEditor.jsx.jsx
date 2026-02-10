// // import { useState, useEffect } from "react";
// // // import "./EditorPanel.css";

// // const EditorPanel = ({ lesson, markLessonComplete }) => {

// //   const [code, setCode] = useState(lesson.starterCode);

// //   useEffect(() => {
// //     setCode(lesson.starterCode);
// //   }, [lesson]);

// //   return (
// //     <div className="editor-panel">

// //       <textarea
// //         className="editor-area"
// //         value={code}
// //         onChange={(e) => setCode(e.target.value)}
// //       />

// //       <button
// //         className="run-btn"
// //         onClick={() => markLessonComplete(lesson.id)}
// //       >
// //         RUN CODE & SUBMIT
// //       </button>

// //       <iframe
// //         title="preview"
// //         className="preview"
// //         srcDoc={code}
// //       />

// //     </div>
// //   );
// // };

// // export default EditorPanel;


// export default function CodeWorkspace({ question }) {

//   return (
//     <div style={{ padding: 20, color: "white" }}>
//       <h3>Workspace</h3>

//       {question ? (
//         <pre>
//           {question.starterCode?.html}
//         </pre>
//       ) : (
//         <p>Select a question</p>
//       )}
//     </div>
//   );
// }


// import { useState } from "react";
// import Editor from "@monaco-editor/react";

// export default function CodeEditor() {
//   const starterCode = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <title>HTML Preview</title>
// </head>
// <body>

//   <h1>Type your heading here...</h1>

// </body>
// </html>`;

//   const [code, setCode] = useState(starterCode);
//   const [preview, setPreview] = useState(starterCode);

//   const runCode = () => {
//     setPreview(code);
//   };

//   return (
//     <div className="editor-area">
//       {/* TOP BAR */}
//       <div className="editor-topbar">
//         <div className="editor-tabs">
//           <span className="file-name">index.html</span>
//           <span className="lang-tag">HTML5</span>
//         </div>

//         <button className="run-btn" onClick={runCode}>
//           ▶ Run Code
//         </button>

//         <div className="editor-icons">
//           <span title="Settings">⚙️</span>
//           <span title="Maximize">⛶</span>
//         </div>
//       </div>

//       {/* MONACO EDITOR */}
//       <Editor
//         height="50%"
//         defaultLanguage="html"
//         theme="vs-dark"
//         value={code}
//         onChange={(value) => setCode(value)}
//         options={{
//           fontSize: 14,
//           minimap: { enabled: false },
//           scrollBeyondLastLine: false
//         }}
//       />

//       {/* LIVE PREVIEW */}
//       <iframe
//         title="Live Preview"
//         className="preview-frame"
//         srcDoc={preview}
//       />
//     </div>
//   );
// }


import { useState } from "react";
import Editor from "@monaco-editor/react";
import "./codeEditor.css";

export default function CodeEditor() {
  const starterCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Live Preview</title>
</head>
<body>

  <h1>Hello World</h1>

</body>
</html>`;

  const [code, setCode] = useState(starterCode);
  const [theme, setTheme] = useState("vs-dark");
  const [isMax, setIsMax] = useState(false);

  return (
    <div className={`editor-wrapper ${isMax ? "maximized" : ""}`}>
      {/* TOP BAR */}
      <div className="editor-topbar">
        <div className="left">
          <span className="file">index.html</span>
          <span className="lang">HTML5</span>
        </div>

        <div className="right">
          <button
            className="icon-btn"
            onClick={() =>
              setTheme(theme === "vs-dark" ? "light" : "vs-dark")
            }
          >
            🌙
          </button>

          <button
            className="icon-btn"
            onClick={() => setIsMax(!isMax)}
          >
            ⛶
          </button>
        </div>
      </div>

      {/* EDITOR */}
      <Editor
        height="50%"
        language="html"
        theme={theme}
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false
        }}
      />

      {/* LIVE PREVIEW */}
      <iframe
        title="Live Preview"
        className="preview"
        srcDoc={code}
      />
    </div>
  );
}
