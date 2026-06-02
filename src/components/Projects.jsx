import React from 'react';
import projects from '../data/projects';
import '../styles/Projects.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className={`project-thumb ${project.thumbClass}`}>
        <div className="thumb-icon">{project.icon}</div>
        <div className="thumb-overlay">
          <div className="thumb-view">View Project</div>
        </div>
      </div>

      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`tag ${tag.highlight ? 'highlight' : ''}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <div className="section-eyebrow">Selected Work</div>
        <h2 className="section-title">
          Things I've <em>built</em>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
