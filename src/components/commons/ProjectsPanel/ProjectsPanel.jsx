// Dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Components
import ProjectCard from "./components/ProjectCard";

// Data
import { getCommercials, getFilmSeries, getTV } from "../../../api/database";

// Styled component
export const Panel = styled.div`
  background-color: var(--grey);
  display: flex;
  padding: 12px 24px;

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
    let promise;

    if (props.type === "commercials") {
      promise = getCommercials();
    } else if (props.type === "filmseries") {
      promise = getFilmSeries();
    } else {
      promise = getTV();
    }

    Promise.resolve(promise).then((res) => {
      let currentProjects = res;
      setProjectsOnPage(currentProjects);
    });
  }, [props.type]);

  return (
    <Panel>
      {projectsOnPage && (
        <ProjectsList>
          {projectsOnPage.projects.map((item) => (
            <ProjectCard project={item} key={item.id} />
          ))}
        </ProjectsList>
      )}
    </Panel>
  );
}

ProjectsPanel.propTypes = {
  type: PropTypes.string,
};

export default ProjectsPanel;
