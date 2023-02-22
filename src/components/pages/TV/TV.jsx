// Dependencies
import React from "react";

// Components
import Navigation from "../../commons/Navigation/Navigation";
import ProjectsPanel from "../../commons/ProjectsPanel/ProjectsPanel";
import { ProjectPage } from "../../commons/theme/Theme";

function TV() {
  return (
    <ProjectPage>
      <Navigation title="tv" />
      <ProjectsPanel type="tv" />
    </ProjectPage>
  );
}

export default TV;
