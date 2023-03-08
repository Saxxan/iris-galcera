// Dependencies
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Database
import { downloadFiles } from "../../../../api/database";

// Styled component
const Card = styled.li`
  // height: 250px;

  @media (min-width: 800px) {
    height: 300px;
  }

  & > a {
    display: block;
    width: 100%;

    & > img {
      width: 100%;
    }
  }
`;
function ProjectCard({ project }) {
  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    let updateProject = project;
    let promise = downloadFiles(updateProject.thumbnail.fileName);
    Promise.resolve(promise).then((res) => {
      updateProject.thumbnail.url = res;

      setCurrentProject(updateProject);
    });
  }, [project]);

  return (
    currentProject && (
      <Card>
        <Link to={currentProject.path}>
          <img
            src={currentProject.thumbnail.url}
            alt={currentProject.thumbnail.fileName}
          />
        </Link>
      </Card>
    )
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
