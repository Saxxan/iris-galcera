// Dependencies
import React from "react";

// Components
import { AcceptButton, CancelButton } from "../../commons/Buttons/Buttons";
import { ModalLayout } from "../../commons/Modal/Modal";

function ConfirmDialog(props) {
  const confirmDeleteButtoClick = () => {
    props.handleDelete();
    props.handleClose();
  };

  return (
    <ModalLayout>
      <h2>Confirmación</h2>
      <p>¿Estás segura de que quieres borrar los proyectos seleccionados?</p>
      <ul>
        {props.projectsToDelete.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <footer>
        <CancelButton onClick={props.handleClose}>Cancelar</CancelButton>
        <AcceptButton onClick={confirmDeleteButtoClick}>Borrar</AcceptButton>
      </footer>
    </ModalLayout>
  );
}

export default ConfirmDialog;
