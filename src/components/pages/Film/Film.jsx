// Dependencies
import React from "react";

// Components
import Navigation from "../../commons/Navigation/Navigation";
import ProjectsPanel from "../../commons/ProjectsPanel/ProjectsPanel";
import { ProjectPage } from "../../commons/theme/Theme";

function Film() {
  return (
    <ProjectPage>
      <Navigation title="film and series" />
      <ProjectsPanel type="filmseries" />
    </ProjectPage>
  );
}

export default Film;
