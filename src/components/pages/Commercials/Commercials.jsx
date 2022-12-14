// Dependencies
import React from "react";

// Components
import Navigation from "../../commons/Navigation/Navigation";
import ProjectsPanel from "../../commons/ProjectsPanel/ProjectsPanel";
import { ProjectPage } from "../../commons/theme/Theme";

function Commercials() {
  return (
    <ProjectPage>
      <Navigation />
      <ProjectsPanel type="commercials" />
    </ProjectPage>
  );
}

export default Commercials;
