import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import './styles/index.css';

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/impact" element={<Impact />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
// import './styles/index.css'

// function App() {
//   return (
//     <div className="min-h-screen bg-blue-100 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-blue-800 mb-4">
//           🎉 React + Vite is Working!
//         </h1>
//         <p className="text-xl text-gray-700">
//           Your development environment is set up correctly.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default App