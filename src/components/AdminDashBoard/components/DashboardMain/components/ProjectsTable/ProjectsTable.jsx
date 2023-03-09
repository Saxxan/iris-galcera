// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// API
import { deleteProject } from "../../../../../../api/database";

// Components
import {
  AddButton,
  DeleteButton,
} from "../../../../../commons/Buttons/Buttons";
import { EditProjectIconButton } from "../../../../../commons/IconButtons/IconButtons";
import AddProject from "./components/AddProject";
import ConfirmDialog from "./components/ConfirmDialog";
import EditProject from "./components/EditProject";

// Styled components
const Table = styled.table`
  width: 100%;
  max-width: 800px;

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
    }
  }

  & > tbody > tr > td {
    margin: 0;
    padding: 6px 12px;
    border: 1px solid var(--ice);
    text-align: center;
  }
`;

function ProjectsTable(props) {
  const [projects, setProjects] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [modalType, setModalType] = useState("");
  const [projectToEdit, setProjectToEdit] = useState();

  /**
   * Effect hook to set projects state value as given value
   */
  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);

  useEffect(() => {
    props.refresh(true);
  }, [projects, selectedProjects, props]);

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
   * Function that handles delete selected projects
   */
  function handleDeleteProjects() {
    deleteProject(props.type, selectedProjects);
    setSelectedProjects([]);
  }

  /**
   * Function that handles delete selected projects
   */
  function handleDeleteButtonClick() {
    setModalType("confirm");
    handleToggleModalState();
  }

  /**
   * Function that handles click on edit project icon button
   * @param {*} projectId
   */
  function handleClickEditButton(project) {
    setProjectToEdit(project);
    setModalType("edit");
    handleToggleModalState();
  }

  /**
   * Function that handles click on add project button
   */
  function handleClickAddButton() {
    setModalType("add");
    handleToggleModalState();
  }

  /**
   * Function that toggles modal state
   */
  function handleToggleModalState() {
    setIsModalVisible(!isModalVisible);

    if (isModalVisible) {
      props.refresh(true);
    }
  }

  return (
    <>
      {isModalVisible && modalType === "add" && (
        <AddProject handleClose={handleToggleModalState} type={props.type} />
      )}
      {isModalVisible && modalType === "edit" && (
        <EditProject
          handleClose={handleToggleModalState}
          type={props.type}
          project={projectToEdit}
        />
      )}
      {isModalVisible && modalType === "confirm" && (
        <ConfirmDialog
          handleClose={handleToggleModalState}
          handleDelete={handleDeleteProjects}
          projectsToDelete={selectedProjects}
        />
      )}
      <section style={{ margin: "24px 0 12px 0" }}>
        <AddButton onClick={handleClickAddButton}>Add project</AddButton>
        <DeleteButton onClick={handleDeleteButtonClick}>
          Delete project
        </DeleteButton>
      </section>
      {projects ? (
        <Table>
          <thead>
            <tr>
              <th style={{ width: "37px" }} />
              <th style={{ width: "50px" }}>
                <b>ID</b>
              </th>
              <th>
                <b>Project name</b>
              </th>
              <th>
                <b>Edit</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map((project) => (
                <tr key={project.id}>
                  <td style={{ width: "37px" }}>
                    <input
                      type="checkbox"
                      id={project.id}
                      style={{ cursor: "pointer" }}
                      onChange={(e) => handleCheckboxChange(e)}
                    />
                  </td>
                  <td style={{ width: "37px" }}>{project.id}</td>
                  <td>{project.projectName}</td>
                  <td>
                    <EditProjectIconButton
                      handleClick={() => handleClickEditButton(project)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <p>No hay proyectos de este tipo.</p>
      )}
    </>
  );
}

export default ProjectsTable;
