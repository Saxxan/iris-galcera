// Dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Database
import {
  deleteFiles,
  downloadFiles,
} from "../../../../../../../api/database.js";

// Components
import {
  AcceptButton,
  CancelButton,
} from "../../../../../../commons/Buttons/Buttons";
import { ModalLayout } from "../../../../../../commons/Modal/Modal";

// Styled components
const Frame = styled.article`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > img {
    width: 100%;
    border-radius: 6px;
    margin-top: -20px;
  }

  @media (min-width: 800px) {
    width: 100px;
  }
`;

const ProjectImagesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 350px;
  overflow-y: scroll;
`;

const DeleteImgBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: var(--primary);
  color: var(--ice);
  z-index: 1;
  cursor: pointer;
`;

function EditProject(props) {
  const [projectName, setProjectName] = useState(props.project.projectName);
  const [projectImages, setProjectImages] = useState();
  const [files, setFiles] = useState(props.project.files);
  const [projectDescription, setProjectDescription] = useState(
    props.project.description
  );
  const [projectThumbnail, setProjectThumbnail] = useState(
    props.project.thumbnail
  );
  const [thumbnail, setThumbnail] = useState();

  /**
   * Effect hook to get the files of the project from the database
   */
  useEffect(() => {
    let updateThumbnail = projectThumbnail;
    let updateFiles = files;

    updateFiles.forEach((file) => {
      let promise = downloadFiles(file.fileName);
      Promise.resolve(promise).then((res) => {
        file.url = res;
      });
    });

    let promise = downloadFiles(updateThumbnail.fileName);

    Promise.resolve(promise).then((res) => {
      updateThumbnail.url = res;
    });
  }, [files, projectThumbnail]);

  /**
   * Function that handles submit form for edit a existing project
   * @param {*} e
   */
  function handleEditProject(e) {
    e.preventDefault();

    let updateProject = props.project;

    console.log(updateProject);

    props.handleClose();
  }

  /**
   * Function that handles thumbnail attached to the add project form
   * @param {*} inputThumbnail
   */
  function handleThumbnailInputChange(inputThumbnail) {
    setThumbnail(inputThumbnail);
    let thumbnail = { fileName: inputThumbnail[0].name, url: "" };
    setProjectThumbnail(thumbnail);
  }

  /**
   * Function that handles the files attached to get the files and their names
   * @param {*} inputFiles
   */
  function handleFilesInputChange(inputFiles) {
    let files = [];

    for (let i = 0; i < inputFiles.length; i++) {
      let newFile = { fileName: inputFiles[i].name, url: "" };
      files = [...files, newFile];
    }

    setFiles(files);
    setProjectImages(inputFiles);
  }

  /**
   * Function to handle click on delete image
   * @param {*} fileToDeleteName
   */
  function handleDeleteImageClick(e, fileToDeleteName) {
    e.preventDefault();

    deleteFiles(fileToDeleteName);
  }

  return (
    <ModalLayout>
      <h2>Edit project</h2>
      <form>
        <label htmlFor="projectName">Project name</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label htmlFor="projectDescription">Description</label>
        <textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <label htmlFor="projectThumbnail">Project main image</label>
        <section></section>
        {projectThumbnail ? (
          <section>
            <Frame>
              <DeleteImgBtn>X</DeleteImgBtn>
              <img src={projectThumbnail.url} alt={projectThumbnail.fileName} />
            </Frame>
          </section>
        ) : (
          <input
            type="file"
            name="thumbnail"
            id="projectThumbnail"
            onChange={(e) => handleThumbnailInputChange(e.target.files)}
          />
        )}
        <label htmlFor="projectImages">Project images</label>
        {files ? (
          <ProjectImagesContainer>
            {files.map((file, index) => (
              <Frame key={index}>
                <DeleteImgBtn
                  onClick={(e) => handleDeleteImageClick(e, file.fileName)}
                >
                  X
                </DeleteImgBtn>
                <img src={file.url} alt={file.fileName} />
              </Frame>
            ))}
          </ProjectImagesContainer>
        ) : (
          <input
            type="file"
            name="files"
            data-multiple-caption="{count} files selected"
            multiple
            id="projectImages"
            onChange={(e) => handleFilesInputChange(e.target.files)}
          />
        )}
      </form>
      <footer>
        <CancelButton onClick={props.handleClose}>Cancel changes</CancelButton>
        <AcceptButton onClick={handleEditProject}>Save changes</AcceptButton>
      </footer>
    </ModalLayout>
  );
}

export default EditProject;
