import React from "react";
import Navigation from "../../commons/Navigation/Navigation";
import ProjectsPanel from "../../commons/ProjectsPanel/ProjectsPanel";
import { ProjectPage } from "../../commons/theme/Theme";

export default function Film() {
  return (
    <ProjectPage>
      <Navigation />
      <ProjectsPanel type="film" />
    </ProjectPage>
  );
}
