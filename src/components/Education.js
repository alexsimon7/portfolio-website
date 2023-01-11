import React from "react";
import experience from "../data/data";
function Education() {
  const education = experience.education;
  const educationList = education.map((school) => (
    <div className='education-list'>
      <h4 className="section-subheading">
        {`${school.degree} - ${school.institution}, ${school.year === "Current" ? school.year: `Graduated ${school.year}`}`}
      </h4>
      <p className="section-para">
        {school.other.map((other) => (
          <ul className="each-education-experiences-list">
            <li>
              <strong>{other.slice(0, other.indexOf(":") + 1)}</strong>{other.slice(other.indexOf(":") + 1)}
            </li>
          </ul>
        ))}
      </p>
    </div>
  ));


  return (
    <div className="education" id="education">
      <h3 className="section-title">
        My Education
      </h3>
      <p>{educationList}</p>
    </div>
  );
}

export default Education;