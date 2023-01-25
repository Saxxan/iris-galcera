// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);

  /**
   * Function that handles the state of the modal
   */
  function handleToggleModalState() {
    setIsModalVisible(!isModalVisible);
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
      <DeleteButton>Delete project</DeleteButton>
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
                  <input type="checkbox" />
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
