// Dependencies
import React, { useState } from "react";

// Database
import { addProjects, uploadFiles } from "../../../../../../../api/database";

// Components
import {
  AcceptButton,
  CancelButton,
} from "../../../../../../commons/Buttons/Buttons";
import { ModalLayout } from "../../../../../../commons/Modal/Modal";

function AddProject(props) {
  const [projectName, setProjectName] = useState("");
  const [projectImages, setProjectImages] = useState();
  const [files, setFiles] = useState([]);
  const [projectDescription, setProjectDescription] = useState("");
  const [projectThumbnail, setProjectThumbnail] = useState();
  const [thumbnail, setThumbnail] = useState();

  /**
   * Function that handles submit form for add a new project
   * @param {*} e
   */
  function handleAddProject(e) {
    e.preventDefault();

    uploadFiles(projectImages);
    uploadFiles(thumbnail);

    let newProject = {
      projectName: projectName,
      projectDescription: projectDescription,
      files: files,
      thumbnail: projectThumbnail,
    };

    let promise = addProjects(props.type, newProject);

    Promise.resolve(promise).then((res) => {
      props.handleClose();
    });
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
      <h2>Add new project</h2>
      <form>
        <label htmlFor="projectName">Project name</label>
        <input
          type="text"
          id="projectName"
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label htmlFor="projectDescription">Description</label>
        <textarea
          id="projectDescription"
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
        <CancelButton onClick={props.handleClose}>Cancel</CancelButton>
        <AcceptButton onClick={handleAddProject}>Save changes</AcceptButton>
      </footer>
    </ModalLayout>
  );
}

export default AddProject;
