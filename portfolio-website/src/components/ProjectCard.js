// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl, projectUrl, technologies, aosType, aosDelay }) { // Added aosType, aosDelay
  return (
    <div className="project-card" data-aos={aosType} data-aos-delay={aosDelay}> {/* Apply AOS attributes here */}
      {imageUrl && <img src={imageUrl} alt={`Screenshot of ${title}`} className="project-card-image" />}
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="project-card-technologies">
            <strong>Technologies:</strong>
            <ul>
              {technologies.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
          </div>
        )}
      </div>
      {projectUrl && projectUrl !== "#" && <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">View Project</a>}
    </div>
  );
}
export default ProjectCard;
