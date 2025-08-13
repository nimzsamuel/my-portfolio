import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "RoboFriends",
      description: "A fun React app that displays robot friends and lets you search them.",
      link: "https://your-robofriends-link.com"
    },
    {
      title: "Weather App",
      description: "A weather forecast app that fetches live data from an API.",
      link: "https://your-weatherapp-link.com"
    },
    {
      title: "Auto Shop",
      description: "A modern real cars platform with search and filters.",
      link: "https://your-realestate-link.com"
    },
    {
      title: "Fashion Store",
      description: "Fully responsive online shop with cart system.",
      link: "https://your-ecommerce-link.com"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my works.",
      link: "https://your-portfolio-link.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
