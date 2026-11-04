import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navebar/Navebar";
import Footer from "./Components/Footer/footer";

// Import your pages
import Home from "./Components/pages/Home/Home";
import Services from "./Components/pages/Services/Services";
import Projects from "./Components/pages/Projects/Projects";
import About from "./Components/pages/About Me/About Me";
import Contact from "./Components/pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <Navbar />

        {/* Page Routes */}
        <main style={{ minHeight: "80vh", paddingTop: "60px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
