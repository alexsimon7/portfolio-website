import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
