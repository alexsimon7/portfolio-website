import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Links from './components/Links';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Links />
      <Contact />
    </main>
  );
}

export default App;
