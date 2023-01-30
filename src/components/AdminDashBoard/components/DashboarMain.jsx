// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Data
import { getCommercials, getFilm, getTVSeries } from "../../../api/database";
import ProjectsTable from "./ProjectsTable";

// Styled components
const MainDash = styled.main`
  width: 100%;
  padding: 24px;
  background-color: var(--grey);
  box-shadow: var(--grey-shadow) 0px 3px 8px;
  border-radius: 6px;
`;

function DashboarMain(props) {
  const [projects, setProjects] = useState();

  /**
   * Effect hook to get the type projects of the page
   */
  useEffect(() => {
    let promise;

    if (props.type === "commercials") {
      promise = getCommercials();
    } else if (props.type === "film") {
      promise = getFilm();
    } else {
      promise = getTVSeries();
    }

    Promise.resolve(promise).then((res) => {
      let currentProjects = res;
      setProjects(currentProjects);
    });
  }, [props.type]);

  return (
    <MainDash>
      {projects && (
        <>
          <h1>{projects.type.toUpperCase()}</h1>
          <ProjectsTable projects={projects.projects} type={projects.type} />
        </>
      )}
    </MainDash>
  );
}

export default DashboarMain;
