import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import Navigation from "../../commons/Navigation/Navigation";
import { Panel } from "../../commons/ProjectsPanel/ProjectsPanel";
import { ProjectPage } from "../../commons/theme/Theme";
import { ProjectTitleH1 } from "../../commons/Typography/Typography";

// Data
import { getCommercials, getFilmSeries, getTV } from "../../../api/database";

function Project(props) {
  const [project, setProject] = useState();
  const location = useLocation();

  /**
   * Effect hook to get the project selected
   */
  useEffect(() => {
    let promise;

    if (location.pathname.includes("commercial")) {
      promise = getCommercials();
    } else if (location.pathname.includes("filmseries")) {
      promise = getFilmSeries();
    } else if (location.pathname.includes("tv")) {
      promise = getTV();
    } else {
      promise = null;
    }

    Promise.resolve(promise).then((res) => {
      console.log(res.projects);
      let currentProject = res.projects.filter(
        (item) => item.path === location.pathname
      );
      setProject(currentProject[0]);
    });
  }, [location, setProject]);

  return (
    <ProjectPage>
      {project && (
        <>
          <Navigation title={project.projectName} />
          <Panel></Panel>
        </>
      )}
    </ProjectPage>
  );
}

export default Project;
