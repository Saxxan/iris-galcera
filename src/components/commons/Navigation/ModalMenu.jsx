import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";

const Modal = styled.div`
    display: ${(props) => props.display}
    width: 100vw;
    heigth: 100vh;
`;

export default function ModalMenu(props) {
  return (
    <Modal display={props.display}>
      {/* Icono de cerrar menu modal */}
      <NavMenu isDeskoptMenu={false} />
    </Modal>
  );
}
