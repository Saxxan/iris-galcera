// Dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled component
const Card = styled.li`
  height: 250px;
  // background-color: var(--grey-placeholder);

  @media (min-width: 800px) {
    height: 300px;
  }

  & > a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

function ProjectCard(props) {
  return (
    <Card>
      <Link to={props.project.path}>{props.project.projectName}</Link>
      {/* {props.project.files && <img src={props.project.files}></img>} */}
    </Card>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectThumbnail: PropTypes.string,
};

export default ProjectCard;
