// Dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import { ProjectCardHeader } from "../../Typography/Typography";

// Styled component
const Card = styled.li`
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.article`
  display: flex;
  flex-wrap: wrap;
`;

function ProjectCard(props) {
  return (
    <Card>
      <Link to={props.project.path}>
        <ProjectCardHeader>{props.project.projectName}</ProjectCardHeader>
        <CardContent></CardContent>
      </Link>
    </Card>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectThumbnail: PropTypes.string,
};

export default ProjectCard;
