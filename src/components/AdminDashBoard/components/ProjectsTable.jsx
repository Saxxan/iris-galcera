// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// API
import { deleteProject } from "../../../api/database";

// Components
import { AddButton, DeleteButton } from "../../commons/Buttons/Buttons";
import AddProjectModal from "./AddProjectModal";

// Styled components
const Table = styled.table`
  width: 80%;

  & > tr {
    margin: 0;
    border: none;
  }

  & > thead {
    background-color: var(--tertiary);
    color: var(--ice);

    & > tr > th {
      margin: 0;
      padding: 6px 12px;
      border: 1px solid var(--ice);
      text-align: left;
    }
  }

  & > tbody > tr > td {
    margin: 0;
    padding: 6px 12px;
    border: 1px solid var(--ice);
  }
`;

function ProjectsTable(props) {
  const [projects, setProjects] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);

  /**
   * Effect hook to set projects state value as given value
   */
  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);

  /**
   * Function that handles the state of the modal
   */
  function handleToggleModalState() {
    setIsModalVisible(!isModalVisible);
  }

  /**
   * Function that handles check a project checkbox
   * @param {*} e
   */
  function handleCheckboxChange(e) {
    let arrayOfId = selectedProjects;

    if (e.currentTarget.checked) {
      if (!arrayOfId.includes(e.currentTarget.id)) {
        arrayOfId.push(e.currentTarget.id);
      }
    } else {
      if (arrayOfId.includes(e.currentTarget.id)) {
        let index = arrayOfId.indexOf(e.currentTarget.id);
        arrayOfId.splice(index, 1);
      }
    }

    setSelectedProjects(arrayOfId);
  }

  /**
   * Function that handles click on delete project button
   */
  function handleDeleteClick() {
    selectedProjects.forEach((item) => {
      deleteProject(props.type, item);
    });
  }

  return (
    <>
      {isModalVisible && (
        <AddProjectModal
          display={isModalVisible}
          handleClose={handleToggleModalState}
          type={props.type}
        />
      )}
      <AddButton onClick={handleToggleModalState}>Add project</AddButton>
      <DeleteButton onClick={handleDeleteClick}>Delete project</DeleteButton>
      <Table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>
              <b>ID</b>
            </th>
            <th>
              <b>Project name</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {projects &&
            projects.map((project) => (
              <tr key={project.id}>
                <td>
                  <input
                    type="checkbox"
                    id={project.id}
                    onChange={(e) => handleCheckboxChange(e)}
                  />
                </td>
                <td>{project.id}</td>
                <td>{project.projectName}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default ProjectsTable;
