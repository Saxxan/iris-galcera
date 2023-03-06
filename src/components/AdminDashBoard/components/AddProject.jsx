// Dependencies
import React, { useState } from "react";

// Database
import { updateProjects, uploadFiles } from "../../../api/database";

// Components
import { AcceptButton, CancelButton } from "../../commons/Buttons/Buttons";
import { ModalLayout } from "../../commons/Modal/Modal";

function AddProject(props) {
  const [projectName, setProjectName] = useState("");
  const [projectImages, setProjectImages] = useState();

  /**
   * Function that handles submit form for add a new project
   * @param {*} e
   */
  function handleAddProject(e) {
    e.preventDefault();

    let promise = uploadFiles(projectImages);

    Promise.resolve(promise).then((res) => {
      let newProject = {
        projectName: projectName,
        projectImages: projectImages,
      };

      let promise = updateProjects(props.type, newProject);

      Promise.resolve(promise).then((res) => {
        props.handleClose();
      });
    });
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
          // onChange={(e) => setProjectDescription(e.target.value)}
        />
        <label htmlFor="projectImages">Project images</label>
        <input
          type="file"
          name="files"
          data-multiple-caption="{count} files selected"
          multiple
          id="projectImages"
          onChange={(e) => setProjectImages(e.target.files)}
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
