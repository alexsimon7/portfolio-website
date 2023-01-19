import React from 'react';
import PropTypes from 'prop-types';
import none from '../../data/none.png';
import punchAnOrk from '../../data/punch_an_ork/punch_an_ork.mp4';
import punchAnOrkPoster from '../../data/punch_an_ork/punch_an_ork_poster.png';
import evtracker from '../../data/evtracker/evtracker.mp4';
import evtrackerPoster from '../../data/evtracker/evtracker_poster.png';

function ProjectMedia({ project }) {
  const mediaLibrary = {
    punch_an_ork: {
      video: punchAnOrk,
      poster: punchAnOrkPoster,
    },
    evtracker: {
      video: evtracker,
      poster: evtrackerPoster,
    },
  };
  let mediaRender;
  const projectName = project.media.name;
  const projectType = project.media.type;
  if (projectType === 'video') {
    mediaRender = (
      <video
        src={mediaLibrary[projectName].video}
        poster={mediaLibrary[projectName].poster}
        width="640"
        height="480"
        preload="auto"
        controls
      >
        <p>{`${project.title} Video`}</p>
      </video>
    );
  } else if (projectType === 'image') {
    mediaRender = (
      <div>
        <img className="project-image" src={mediaLibrary[projectName].poster} alt={`${projectName}`} />
      </div>
    );
  } else {
    mediaRender = (
      <img className="project-none" src={none} alt="Coming Soon..." />
    );
  }

  return (
    <div className="project-media">
      {mediaRender}
    </div>
  );
}

ProjectMedia.propTypes = {
  project: PropTypes.arrayOf.isRequired,
};

export default ProjectMedia;
