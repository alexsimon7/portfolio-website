import React from 'react';
import experience from '../../data/data';
import ProjectMedia from './ProjectMedia';

function Projects() {
  const { projects } = experience;
  const projectsList = projects.map((project) => (
    <div className="project-list">
      <h4 className="section-subheading">
        {project.title}
        &nbsp;|&nbsp;
        {project.reason}
      </h4>
      <p className="section-para">{project.description}</p>
      <div className={`${project.title}-video`}>
        <ProjectMedia
          project={project}
        />
      </div>
      <p className="project-details">
        {project.tech}
        &nbsp;|&nbsp;
        <a href={project.link} className={`${project.title}-github`}>
          <svg height="15" width="15" fill="white">
            <path d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47
              8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75
              0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
            />
          </svg>
          &nbsp;Code
        </a>
      </p>
    </div>
  ));

  return (
    <div className="projects" id="projects">
      <h3 className="section-title">My Projects</h3>
      <p>{projectsList}</p>
    </div>
  );
}

export default Projects;
