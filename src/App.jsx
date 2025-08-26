import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
