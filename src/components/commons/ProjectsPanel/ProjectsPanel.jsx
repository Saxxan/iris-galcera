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

  @media (min-width: 800px) {
    padding: 12px 36px;
  }
`;

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  list-style: none;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 6px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
  }
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
      // console.log(res);
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
