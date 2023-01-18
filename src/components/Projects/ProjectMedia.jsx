import React from 'react';
import PropTypes from 'prop-types';

function ProjectMedia({ project }) {
  let mediaRender;
  const projectType = project.media.type;

  if (projectType === 'video') {
    mediaRender = (
      <video
        src={require(`../../data/${project.media.video.videoFile}`)}
        poster={require(`../../data/${project.media.video.videoPoster}`)}
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
        <img className="project-image" src={require(`../../data/${project.media.image.imageFile}`)} alt="" />
      </div>
    );
  } else {
    mediaRender = (
      <img className="project-none" src={require('../../data/none.png')} alt="Coming Soon..." />
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
