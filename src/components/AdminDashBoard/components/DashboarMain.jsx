// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Data
import { getCommercials, getFilmSeries, getTV } from "../../../api/database";
import ProjectsTable from "./ProjectsTable";

// Components
import { ProjectTitleH1 } from "../../commons/Typography/Typography";

// Styled components
const MainDash = styled.main`
  width: 100%;
  padding: 24px;
  background-color: var(--grey);
  box-shadow: var(--grey-shadow) 0px 3px 8px;
  border-radius: 6px;
`;

const WelcomePage = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function DashboarMain(props) {
  const [projects, setProjects] = useState();
  const [projectsTitle, setProjectsTitle] = useState("");
  const [refresh, setRefresh] = useState(false);

  /**
   * Effect hook to get the type projects of the page
   */
  useEffect(() => {
    let promise;

    if (props.type === "commercials") {
      promise = getCommercials();
      setProjectsTitle("commercials");
    } else if (props.type === "filmseries") {
      promise = getFilmSeries();
      setProjectsTitle("film and series");
    } else if (props.type === "tv") {
      promise = getTV();
      setProjectsTitle("tv");
    } else {
      promise = null;
    }

    Promise.resolve(promise).then((res) => {
      let currentProjects = res;
      setProjects(currentProjects);

      if (refresh) {
        setRefresh(false);
      }
    });
  }, [props.type, refresh]);

  return (
    <MainDash>
      {projects ? (
        <>
          <ProjectTitleH1>{projectsTitle.toUpperCase()}</ProjectTitleH1>
          <ProjectsTable
            projects={projects.projects}
            type={projects.type}
            refresh={setRefresh}
          />
        </>
      ) : (
        <WelcomePage>
          <ProjectTitleH1>Benvolguda al teu portfolio</ProjectTitleH1>
        </WelcomePage>
      )}
    </MainDash>
  );
}

export default DashboarMain;
