// Dependencies
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
      <ProjectCardHeader>{props.projectName}</ProjectCardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  );
}

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  projectThumbnail: PropTypes.string,
};

export default ProjectCard;
