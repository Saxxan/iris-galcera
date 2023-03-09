// Dependencies
import React from "react";
import styled from "styled-components";

// Components
import {
  AcceptButton,
  CancelButton,
} from "../../../../../../commons/Buttons/Buttons";
import { ModalLayout } from "../../../../../../commons/Modal/Modal";

const DeleteProjectList = styled.ul`
  margin-left: 36px;
`;

function ConfirmDialog(props) {
  const confirmDeleteButtoClick = () => {
    props.handleDelete();
    props.handleClose();
  };

  return (
    <ModalLayout>
      <h2>Confirmación</h2>
      <p>¿Estás segura de que quieres borrar los proyectos seleccionados?</p>
      <DeleteProjectList>
        {props.projectsToDelete.map((project) => (
          <li key={project}>Proyecto {project}</li>
        ))}
      </DeleteProjectList>
      <footer>
        <CancelButton onClick={props.handleClose}>Cancelar</CancelButton>
        <AcceptButton onClick={confirmDeleteButtoClick}>Borrar</AcceptButton>
      </footer>
    </ModalLayout>
  );
}

export default ConfirmDialog;
