import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import Navigation from "../../commons/Navigation/Navigation";
import { Panel } from "../../commons/ProjectsPanel/ProjectsPanel";
import { ProjectPage } from "../../commons/theme/Theme";
import { ProjectTitleH1 } from "../../commons/Typography/Typography";

// Data
import { getCommercials, getFilm } from "../../../api/database";

function Project(props) {
  const [project, setProject] = useState();
  const location = useLocation();

  /**
   * Effect hook to get the project selected
   */
  useEffect(() => {
    let promise = location.pathname.includes("commercial")
      ? getCommercials()
      : getFilm();

    Promise.resolve(promise).then((res) => {
      let currentProject = res.projects.filter(
        (item) => item.path === location.pathname
      );
      setProject(currentProject[0]);
    });
  }, [location, setProject]);

  return (
    <ProjectPage>
      <Navigation />
      {project && (
        <Panel>
          <ProjectTitleH1>{project.projectName.toUpperCase()}</ProjectTitleH1>
        </Panel>
      )}
    </ProjectPage>
  );
}

export default Project;
