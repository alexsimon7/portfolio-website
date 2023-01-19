import React from 'react';

import javascript from '../data/skills-logos/javascript.png';
import node from '../data/skills-logos/node.png';
import react from '../data/skills-logos/react.png';
import html5 from '../data/skills-logos/html5.png';
import css3 from '../data/skills-logos/css3.png';
import git from '../data/skills-logos/git.png';
import linux from '../data/skills-logos/linux.png';

function Skills() {
  // const { skills } = experience;
  const skills = [javascript, node, react, html5, css3, git, linux];
  const listOfSkills = skills.map((skill) => (
    <ul>
      <li>
        <img className="skills-logos" src={skill} alt="skills-images" />
      </li>
    </ul>
  ));

  return (
    <div className="skills" id="skills">
      <h3 className="section-title">My Skills</h3>
      <div className="list-of-skills">{listOfSkills}</div>
    </div>
  );
}

export default Skills;
