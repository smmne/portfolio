import React from "react";
import { projectData } from "../../constants/projectData";
import ProjectLayout from "../../constants/ProjectLayout";

const ProjectSection = () => {
  return (
    <>
      <header>
        <h2>Projects</h2>
      </header>
      <div className="content">
        <p>제가 그동안 작업했던 홈페이지를 소개합니다</p>
        <ProjectLayout project={projectData} />
      </div>
    </>
  );
};

export default ProjectSection;
