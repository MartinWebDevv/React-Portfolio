import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const allProjects = [
    {
      name: "project 1",
      desc: "desc 1",
    },
    {
      name: "project 2",
      desc: "desc 2",
    },
    {
      name: "project 3",
      desc: "desc 3",
    },
  ];

  return (
    // the id given here is for the nav bar CTA links to scroll to each section
    <section id="projects">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 my-6 pt-2">
        {/* Responsive grid: 1 col on mobile, 2 on small, 3 on medium+ */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {/* Card */}
          {allProjects.map((project, index) => (
            <ProjectCard
              key={index}
              id={index}
              name={project.name}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
