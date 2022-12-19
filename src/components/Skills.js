import React from "react";
import experience from "../data/data";

function Skills() {
   const skills = experience.skills;
   const listOfSkills = skills.map((skill) => (
     <ul>
       <li>
         <img className="skills-logos" src={require(`../data/skills-logos/${skill}`)} alt="skills-images"/>
       </li>
     </ul>
   ));

  return(
     <div className="skills" id="skills">
       <h3 className="skills-title">My Skills</h3>
       <p className="skills-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
         incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
         incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
         incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
         incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?</p>
       <div className="list-of-skills">{listOfSkills}</div>
     </div>
   )
}

export default Skills;