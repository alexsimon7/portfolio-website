import React from "react";
import experience from "../data";

function Projects() {
  const projects = experience.projects;
  const projectsList = projects.map((project) => (
    <div className="project-list">
      <h3 className="project-title">{project.title} | {project.reason}</h3>
      <p className="project-desc">{project.description}</p>
      <div className={`${project.title}-video`}>
        <video
          src=""
          poster=""
          width="854"
          height="480"
          preload="auto"
          controls>
          <p>{`${project.title} Video`}</p>
        </video>
      </div>
      <p className="project-details">{project.tech} |  <a href={project.link} className={`${project.title}-github`}>Github</a></p>
    </div>
  ));

  return(
    <div className="projects" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <p>{projectsList}</p>
    </div>
  );
}

export default Projects;
