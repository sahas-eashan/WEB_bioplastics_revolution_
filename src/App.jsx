import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header"; // Changed from Navbar to Header
import Footer from "./components/Footer"; // New Footer component
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
            <div className="min-h-screen">                 
                <Header />  {/* This is your new green header */}
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
                <Footer />  {/* This is your new green footer */}
            </div>         
        </Router>     
    ); 
}