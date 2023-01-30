// Dependencies
import React, { useState } from "react";
import styled from "styled-components";

// Database
import { updateProjects } from "../../../api/database";

// Components
import { AddButton } from "../../commons/Buttons/Buttons";

// Styled components
const Modal = styled.div`
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
`;

function AddProjectModal(props) {
  const [projectName, setProjectName] = useState("");

  /**
   * Function that handles submit form for add a new project
   * @param {*} e
   */
  function handleAddProject() {
    let newProject = {
      projectName: projectName,
    };

    let promise = updateProjects(props.type, newProject);

    Promise.resolve(promise).then((res) => {
      props.handleClose();
    });
  }

  return (
    <Modal>
      <h2>Add new project</h2>
      <label htmlFor="projectName">Project name</label>
      <input
        type="text"
        id="projectName"
        onChange={(e) => setProjectName(e.target.value)}
      />
      <AddButton onClick={handleAddProject}>Add new Project</AddButton>
    </Modal>
  );
}

export default AddProjectModal;
