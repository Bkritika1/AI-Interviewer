// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Homepage";
// import ModeSelection from "./pages/ModeSelection";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/modes" element={<ModeSelection />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Homepage";
// import ModeSelection from "./pages/ModeSelection";

// // Dashboard pages
// // import Learn from "./pages/Dashboard/Learn";
// import Practice from "./pages/Dashboard/Practice";
// import DashboardLayout from "./pages/dashboard/DashboardLayout";
// // import Mock from "./pages/Dashboard/Mock";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/modes" element={<ModeSelection />} />

//         {/* Dashboard Routes */}
//         <Route path="/dashboard" element={<DashboardLayout />}>
//           {/* <Route path="learn" element={<Learn />} /> */}
//           <Route path="practice" element={<Practice />} />
//           {/* //<Route path="mock" element={<Mock />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//practice like   main featire mujhe ese pe kaam karna hai ohkk .?  pratice mode pe  like usne woh questions daal sake  pratice template  like user code kar paye codde ko movebale bana paye code o sahi kar paye..? 
// basically mujhe pratice mode pe hi focus karna  hai ohkk..?   


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Homepage";
// import ModeSelection from "./pages/ModeSelection";
// import Practice from "./pages/Dashboard/Practice";
// import DashboardLayout from "./pages/dashboard/DashboardLayout";
// import { PracticeProvider } from "./context/PracticeContext";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/modes" element={<ModeSelection />} />

//         <Route path="/dashboard" element={<DashboardLayout />}>
//           <Route
//   path="practice"
//   element={
//     <PracticeProvider>
//       <Practice />
//     </PracticeProvider>
//   }
// />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Homepage";
// import ModeSelection from "./pages/ModeSelection";
// import Practice from "./pages/Dashboard/Practice";
// import DashboardLayout from "./pages/dashboard/DashboardLayout";
// import { PracticeProvider } from "./context/PracticeContext";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/modes" element={<ModeSelection />} />

//         <Route path="/dashboard" element={<DashboardLayout />}>
//           <Route
//             path="practice"
//             element={
//               <PracticeProvider>
//                 <Practice />
//               </PracticeProvider>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import ModeSelection from "./pages/ModeSelection";
import Practice from "./pages/Dashboard/Practice";
import DashboardLayout from "./pages/dashboard/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modes" element={<ModeSelection />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="practice" element={<Practice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
