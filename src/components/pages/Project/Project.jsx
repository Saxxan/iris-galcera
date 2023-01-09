import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import Navigation from "../../commons/Navigation/Navigation";
import { Panel } from "../../commons/ProjectsPanel/ProjectsPanel";
import { ProjectPage } from "../../commons/theme/Theme";
import { ProjectTitleH1 } from "../../commons/Typography/Typography";

// Data
import Projects from "../../../data/projects.json";

function Project(props) {
  const [project, setProject] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("film")) {
      let currentProjects = Projects.filter((item) => item.type === "film");
      let currentProject = currentProjects[0].projects.filter(
        (item) => item.path === location.pathname
      );
      setProject(currentProject[0]);
    } else {
      let currentProjects = Projects.filter(
        (item) => item.type === "commercials"
      );
      let currentProject = currentProjects[0].projects.filter(
        (item) => item.path === location.pathname
      );
      setProject(currentProject[0]);
    }
  }, [location, setProject]);

  return (
    <ProjectPage>
      <Navigation />
      {project && (
        <Panel>
          <ProjectTitleH1>{project.projectName}</ProjectTitleH1>
        </Panel>
      )}
    </ProjectPage>
  );
}

export default Project;
