import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <main>
      <div className="main-container">
        <NavBar />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
