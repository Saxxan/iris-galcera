// Dependencies
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Components
import Navigation from "../../commons/Navigation/Navigation";
import { ProjectPage } from "../../commons/theme/Theme";

// Data
import {
  downloadFiles,
  getCommercials,
  getFilmSeries,
  getTV,
} from "../../../api/database";

// Styled components
const ProjectMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0px;

  & > img,
  & > video {
    width: 100%;
  }

  & > p {
    padding: 36px 0;
  }

  @media (min-width: 800px) {
    padding: 12px 48px;
  }
`;

function Project(props) {
  const [project, setProject] = useState();
  const [projectFiles, setProjectFiles] = useState();
  const location = useLocation();

  /**
   * Effect hook to get the project selected
   */
  useEffect(() => {
    let promise;

    if (location.pathname.includes("commercial")) {
      promise = getCommercials();
    } else if (location.pathname.includes("filmseries")) {
      promise = getFilmSeries();
    } else if (location.pathname.includes("tv")) {
      promise = getTV();
    } else {
      promise = null;
    }

    Promise.resolve(promise).then((res) => {
      console.log(location.pathname);
      let currentProject = res.projects.filter(
        (item) => item.path === location.pathname
      );
      console.log(currentProject[0].pathname);
      setProject(currentProject[0]);
    });
  }, [location, setProject]);

  /**
   * Effect to get the files from the data storage
   */
  useEffect(() => {
    if (project && !projectFiles) {
      let updateFiles = {
        files: project.files,
        thumbnail: project.thumbnail,
      };

      let promises = [];

      promises = [...promises, downloadFiles(updateFiles.thumbnail.fileName)];

      updateFiles.files.forEach((file) => {
        promises = [...promises, downloadFiles(file.fileName)];
      });

      Promise.all(promises).then((res) => {
        res.forEach((url) => {
          if (url.includes(updateFiles.thumbnail.fileName)) {
            updateFiles.thumbnail.url = url;
          } else {
            updateFiles.files.forEach((file) => {
              if (url.includes(file.fileName)) {
                file.url = url;
              }
            });
          }
        });

        setProjectFiles(updateFiles);
      });
    }
  }, [project, projectFiles]);

  useEffect(() => {
    console.log(projectFiles);
  }, [projectFiles]);

  return (
    <ProjectPage>
      {project && (
        <>
          <Navigation title={project.projectName} />
          <ProjectMain>
            {projectFiles && (
              <>
                {projectFiles.thumbnailVideo !== "" ? (
                  <video
                    src={project.thumbnailVideo}
                    alt="Vídeo principal del proyecto"
                    autoPlay
                  />
                ) : (
                  <img
                    src={project.thumbnailImg.url}
                    alt="Imagen principal del proyecto"
                  />
                )}
              </>
            )}
            <p>{project.projectDescription}</p>
            {projectFiles &&
              projectFiles.files.map((file) => (
                <img src={file.url} alt={file.fileName} />
              ))}
          </ProjectMain>
        </>
      )}
    </ProjectPage>
  );
}

export default Project;
