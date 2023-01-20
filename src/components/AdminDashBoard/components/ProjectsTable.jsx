// Dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import { AddButton, DeleteButton } from "../../commons/Buttons/Buttons";

// Styled components
const Table = styled.table`
  width: 80%;

  & > tr {
    margin: 0;
    border: none;
  }

  & > tr:first-child {
    background-color: var(--tertiary);
    color: var(--ice);
  }
`;

const TableCell = styled.td`
  margin: 0;
  padding: 6px 12px;
  border: 1px solid var(--ice);
`;

function ProjectsTable(props) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);

  return (
    <>
      <AddButton>Add project</AddButton>
      <DeleteButton>Delete project</DeleteButton>
      <Table>
        <tr>
          <TableCell>
            <input type="checkbox" />
          </TableCell>
          <TableCell>
            <b>ID</b>
          </TableCell>
          <TableCell>
            <b>Project name</b>
          </TableCell>
        </tr>
        {projects &&
          projects.map((project) => (
            <tr>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>{project.id}</TableCell>
              <TableCell>{project.projectName}</TableCell>
            </tr>
          ))}
      </Table>
    </>
  );
}

export default ProjectsTable;
