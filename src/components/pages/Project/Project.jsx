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

  & > section {
    width: 100%;
    padding: 36px 24px;

    & > p {
      margin: 5px 0;
      font-size: clamp(1rem, 0.4643rem + 1.4286vw, 1.25rem);
    }
  }

  @media (min-width: 800px) {
    padding: 12px 48px;

    & > section {
      width: 100%;
      padding: 36px 0;
    }
  }
`;

function Project(props) {
  const [project, setProject] = useState();
  const [projectFiles, setProjectFiles] = useState();
  const [descriptionArray, setDescriptionArray] = useState([]);
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
      let currentProject = res.projects.filter(
        (item) => item.path === location.pathname
      );
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
        thumbnail: project.thumbnailImg,
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

  /**
   * Effect hook to transform the description string to an array of strings
   */
  useEffect(() => {
    if (project) {
      const descriptionArray = project.projectDescription.split(/[.]+/);
      setDescriptionArray(descriptionArray);
    }
  }, [project]);

  return (
    <ProjectPage>
      {project && (
        <>
          <Navigation title={project.projectName} />
          <ProjectMain>
            {project.thumbnailVideo !== null ? (
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
            <section>
              {descriptionArray.map((item) => (
                <p>{item}</p>
              ))}
            </section>
            {projectFiles &&
              projectFiles.files.map((file) => (
                <img
                  key={file.fileName}
                  src={file.url}
                  alt={file.fileName}
                  loading="lazy"
                />
              ))}
          </ProjectMain>
        </>
      )}
    </ProjectPage>
  );
}

export default Project;
