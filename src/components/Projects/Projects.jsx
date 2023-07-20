import React, { useEffect, useState } from "react";
import "./Projects.css";
import { projectsData, projectsNav } from "./ProjectsData";
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <section className="section projects" id="projects">
      <h2 className="section-title">My Latest Projects</h2>
      <span className="section-subtitle">Let's See My Projects</span>

      <div>
        <div className="projects-filters">
          {projectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => handleClick(e, index)}
                className={`${
                  active === index ? "active-projects" : ""
                } projects-item`}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>

        <div className="projects-container container grid">
          {projects.map((data) => (
            <Project key={data.id} data={data}></Project>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
