import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ProjectTitleH1 } from "../Typography/Typography";

// Data
import Projects from "../../../data/projects.json";

export const Panel = styled.div`
  background-color: var(--grey);
  display: flex;
  padding: 12px 24px;
  height: 90vh;

  @media (min-width: 800px) {
    margin: 0 5vw;
    padding: 36px;
  }
`;

function ProjectsPanel(props) {
  const [projectsOnPage, setProjectsOnPage] = useState();

  useEffect(() => {
    let currentProjects = Projects.filter((item) => item.type === props.type);
    setProjectsOnPage(currentProjects[0]);
  }, [props.type]);

  return (
    <Panel>
      <ProjectTitleH1>{projectsOnPage ? projectsOnPage.type.toUpperCase() : ""}</ProjectTitleH1>
      {/* componente lista de proyectos */}
    </Panel>
  );
}

ProjectsPanel.propTypes = {
  type: PropTypes.string,
};

export default ProjectsPanel;
