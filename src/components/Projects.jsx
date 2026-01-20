import React from "react";
import Title from "./Title";
import { useLanguage } from "../hooks/useLanguage";
import { assets } from "../assets/assets";

const Projects = () => {
  const { data, loading, lang } = useLanguage();
  if (loading || !data) return null;
  const projects = data.projects.map((p, i) => ({
    ...p,
    title: p.title[lang],          
    description: p.description,
    image:
      i === 0 ? assets.projects :
      i === 1 ? assets.projects2 :
      assets.projects3,          
  }));

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
 <Title text1={lang === "tr" ? "Projeler" : "Projects"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg"
            />

            <h3 className="text-[18px] font-inter font-medium text-[#3730A3] ">
              {project.title}
            </h3>

            <p className="text-[14px] leading-[20px] text-slate-500">
              {project.description}
            </p>

            <div className="flex gap-2">
              {project.technologies.map((tech, i) => (
                <button
                  key={i}
                  className="px-3 py-1 text-[12px] border border-[#3730A3] text-[#3730A3] rounded dark:text-white cursor-default"
                >
                  {tech}
                </button>
              ))}
            </div>

            <div className="flex gap-6 text-[14px] font-medium justify-between">
              <a
                href={project.links.github}
                className="text-[#3730A3] underline hover:no-underline dark:text-white"
              >
                Github
              </a>
              <a
                href={project.links.site}
                className="text-[#3730A3] underline hover:no-underline dark:text-white"
              >
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
