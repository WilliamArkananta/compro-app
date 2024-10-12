import React from "react";
import ProjectItem from "./ProjectItem";

export const projectData = [
  {
    pathImg: "public/process/Ideation.png",
    title: "Eco-Friendly Mobile App",
    description:
      "A sustainable living app that helps users reduce their carbon footprint through daily challenges and eco-tips.",
  },
  {
    pathImg: "public/process/Prototyping.png",
    title: "AI-Powered Health Tracker",
    description:
      "An innovative health monitoring system that uses artificial intelligence to provide personalized wellness recommendations.",
  },
  {
    pathImg: "public/process/Testing.png",
    title: "Virtual Reality Education Platform",
    description:
      "An immersive learning experience that brings abstract concepts to life through interactive VR lessons and simulations.",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center mb-16">
      <h1 className="text-h1 text-content font-bold">Projects</h1>

      <div className="flex flex-wrap items-start justify-center gap-9 p-8 w-full h-[310px]">
        {projectData.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
