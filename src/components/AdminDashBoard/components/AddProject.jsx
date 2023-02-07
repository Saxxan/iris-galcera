// Dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Database
import { updateProjects } from "../../../api/database";

// Components
import { AcceptButton, CancelButton } from "../../commons/Buttons/Buttons";

// Styled components
const ModalLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  background-color: var(--grey);
  box-shadow: var(--grey-shadow) 0px 3px 8px;
  border-radius: 6px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  & > form {
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    gap: 6px;

    & > input,
    & > textarea {
      margin-bottom: 6px;
    }

    & > button {
      margin-top: 12px;
    }
  }

  & > footer {
    display: flex;
    gap: 6px;
  }
`;

function AddProject(props) {
  const [projectName, setProjectName] = useState("");
  // const [projectImages, setProjectImages] = useState();

  /**
   * Function that handles submit form for add a new project
   * @param {*} e
   */
  function handleAddProject(e) {
    e.preventDefault();

    let newProject = {
      projectName: projectName,
      // projectImages: projectImages,
    };

    let promise = updateProjects(props.type, newProject);

    Promise.resolve(promise).then((res) => {
      props.handleClose();
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
        <label htmlFor="projectDescription">Project description</label>
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
        <CancelButton onClick={props.handleClose}>Cancel</CancelButton>
        <AcceptButton onClick={handleAddProject}>Save changes</AcceptButton>
      </footer>
    </ModalLayout>
  );
}

export default AddProject;
