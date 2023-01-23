import React from 'react';
import myPicture from './79182621.jpeg';
import introMovie from '../../data/intro_movie/intro_movie.mp4';

function About() {
  return (
    <div className="about-me">
      <div className="greet-and-picture">
        <h1 className="hello">
          Hi, I&#39;m Alex
        </h1>
        <p className="my-picture">
          <img src={myPicture} alt="portrait" />
        </p>
      </div>
      <div className="about-and-video" id="about-me">
        <h2 className="section-subheading">I am a self-taught programmer and life-long tech enthusiast, who has transitioned from a career as a civil litigation attorney.</h2>
      </div>
      <div className="intro-video">
        <video
          src={introMovie}
          preload="metadata"
          controls
          playsInline
        >
          <p>Introduction of Myself</p>
        </video>
      </div>
    </div>
  );
}

export default About;
