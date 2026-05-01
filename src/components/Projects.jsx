import React from "react";
import SafariTab from "./SafariTab.jsx"; // adjust the path if needed
import projects from "../data/projectsData.js";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects I've worked on..</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <SafariTab /* SafariTab component to display each project - passing parameters */
            key={index}
            image={proj.image}
            title={proj.title}
            description={proj.description}
            techStack={proj.techStack}
            github={proj.github}
          />
        ))}
      </div>
    </div>
  );
}
