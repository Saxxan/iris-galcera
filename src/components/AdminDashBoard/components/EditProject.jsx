// Dependencies
import React, { useState } from "react";

// Components
import { AcceptButton, CancelButton } from "../../commons/Buttons/Buttons";
import { ModalLayout } from "../../commons/Modal/Modal";

function EditProject(props) {
  const [projectName, setProjectName] = useState(props.project.projectName);

  /**
   * Function that handles submit form for edit a existing project
   * @param {*} e
   */
  function handleEditProject(e) {
    e.preventDefault();

    console.log("Editing project");

    props.handleClose();
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
          // onChange={(e) => setProjectName(e.target.value)}
        />
        <label htmlFor="projectImages">Project images</label>
        <input
          type="file"
          name="files[]"
          data-multiple-caption="{count} files selected"
          multiple
          id="projectImages"
          // onChange={(e) => setProjectImages(e.target.files)}
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
