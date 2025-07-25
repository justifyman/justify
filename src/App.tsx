import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PageTransition from "./components/PageTransition";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <PageTransition>
      <SmoothScroll>
        <div className="bg-[#0a0a13] min-h-screen">
          <Navbar />
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </PageTransition>
  );
}

export default App;
