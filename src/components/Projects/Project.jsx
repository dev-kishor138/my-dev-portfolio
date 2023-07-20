import React from "react";

const Project = ({ data }) => {
  const { image, title, category, link } = data;
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={image} alt="" />
      </div>

      <h3 className="project-title">{title}</h3>
      <a href={link} target="_blank" className="project-button">
        Demo <i className="bx bx-right-arrow-alt project-button-icon"></i>
      </a>
    </div>
  );
};

export default Project;
