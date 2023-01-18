import React from 'react';
import experience from '../data/data';

function Skills() {
  const { skills } = experience;
  const listOfSkills = skills.map((skill) => (
    <ul>
      <li>
        <img className="skills-logos" src={require(`../data/skills-logos/${skill}`)} alt="skills-images" />
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
