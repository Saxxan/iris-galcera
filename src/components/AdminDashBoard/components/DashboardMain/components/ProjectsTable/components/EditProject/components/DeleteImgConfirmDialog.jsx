// Dependencies
import React from "react";
import styled from "styled-components";

// Components
import {
  AcceptButton,
  CancelButton,
} from "../../../../../../../../commons/Buttons/Buttons";
import { ModalLayout } from "../../../../../../../../commons/Modal/Modal";

// Styled components
const ImgContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmModal = styled(ModalLayout)`
  z-index: 4;

  & > footer {
    display: flex;
    justify-content: center;
    gap: 12px;
  }
`;

function DeleteImgConfirmDialog(props) {
  const confirmDeleteButtonClick = () => {
    props.handleDelete();
    props.handleClose();
  };

  return (
    <ConfirmModal>
      <h2>Confirmación</h2>
      <p>¿Estás segura de que quieres borrar esta imagen de tu proyecto?</p>
      <ImgContainer>
        <p>{props.fileToDelete}</p>
      </ImgContainer>
      <footer>
        <CancelButton onClick={props.handleClose}>Cancelar</CancelButton>
        <AcceptButton onClick={confirmDeleteButtonClick}>Borrar</AcceptButton>
      </footer>
    </ConfirmModal>
  );
}

export default DeleteImgConfirmDialog;
