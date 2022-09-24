import React from "react";
import ProjectItem from "./ProjectItem";
import project1 from "../public/assets/projects/project1.jpg";
import project3 from "../public/assets/projects/project3.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#6fb632]">
          Projects
        </p>
        <h2 className="py-4">My Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-8 py-6">
          <ProjectItem
            title="Hospital Finder"
            backgroundImg={project1}
            languageUsed="React JS"
            projectUrl="/project1"
          />

          <ProjectItem
            title="Facebook Clone"
            backgroundImg={project3}
            languageUsed="Vue JS"
            projectUrl="/project3"
          />

          <ProjectItem
            title="Facebook Clone"
            backgroundImg={project3}
            languageUsed="Vue JS"
            projectUrl="/project3"
          />

          <ProjectItem
            title="Hospital Finder"
            backgroundImg={project1}
            languageUsed="React JS"
            projectUrl="/project1"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
