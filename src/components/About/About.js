import React from "react";
import myPicture from './79182621.jpeg';

function About() {
  return (
    <div className="about-me">
      <div className="greet-and-picture">
        <h1 className="hello">Hi, I'm Alex.</h1>
        <h1 className='my-picture'>
          <img src={myPicture} alt="portrait"/>
        </h1>
      </div>
      <div className="about-and-buttons">
        <h2>I am a self-taught programmer and life-long tech enthusiast, who has transitioned from a career as a civil litigation attorney.</h2>
        <ul className="quick-nav">
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#projects">See My Past Projects</a>
          </li>
        </ul>
      </div>
      <div className="intro-video">
        <p>[Insert Intro Video]</p>
      </div>
    </div>
  );
}

export default About;