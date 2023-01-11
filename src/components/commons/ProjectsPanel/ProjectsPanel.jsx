// Dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Components
import { ProjectTitleH1 } from "../Typography/Typography";
import ProjectCard from "./components/ProjectCard";

// Data
import { getCommercials, getFilm } from "../../../api/database";

// Styled component
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

const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function ProjectsPanel(props) {
  const [projectsOnPage, setProjectsOnPage] = useState();

  /**
   * Effect hook to get the type projects of the page
   */
  useEffect(() => {
    let promise = props.type === "commercials" ? getCommercials() : getFilm();

    Promise.resolve(promise).then((res) => {
      let currentProjects = res;
      setProjectsOnPage(currentProjects);
    });
  }, [props.type]);

  return (
    <Panel>
      {projectsOnPage && (
        <>
          <ProjectTitleH1>{projectsOnPage.type.toUpperCase()}</ProjectTitleH1>
          <ProjectsList>
            {projectsOnPage.projects.map((item) => (
              <ProjectCard project={item} key={item.id} />
            ))}
          </ProjectsList>
        </>
      )}
    </Panel>
  );
}

ProjectsPanel.propTypes = {
  type: PropTypes.string,
};

export default ProjectsPanel;
