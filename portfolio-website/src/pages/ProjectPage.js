// src/pages/ProjectPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './ProjectPage.css';
import projectsData from '../assets/data/projects.json'; // Import the JSON file

function ProjectPage() {
  return (
    <div className="project-page">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectsData.map((project, index) => ( // Added index for potential staggered delay
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            technologies={project.technologies}
            aosType="fade-up" // Pass AOS type as a prop
            aosDelay={index * 100} // Pass AOS delay as a prop
          />
        ))}
      </div>
    </div>
  );
}
export default ProjectPage;
