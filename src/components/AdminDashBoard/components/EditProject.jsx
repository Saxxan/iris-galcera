// Dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Components
import { AcceptButton, CancelButton } from "../../commons/Buttons/Buttons";
import { ModalLayout } from "../../commons/Modal/Modal";

// Styled components
const Frame = styled.article`
  width: 50px;
  height: 50px;
  border-radius: 6px;

  & > img {
    width: 100%;
  }
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
        <input
          type="file"
          name="thumbnail"
          id="projectThumbnail"
          onChange={(e) => handleThumbnailInputChange(e.target.files)}
        />
        <label htmlFor="projectImages">Project images</label>
        <input
          type="file"
          name="files"
          data-multiple-caption="{count} files selected"
          multiple
          id="projectImages"
          onChange={(e) => handleFilesInputChange(e.target.files)}
        />
      </form>
      <footer>
        <CancelButton onClick={props.handleClose}>Cancel changes</CancelButton>
        <AcceptButton onClick={handleEditProject}>Save changes</AcceptButton>
      </footer>
    </ModalLayout>
  );
}

export default EditProject;
