import React from "react";
import styled from "styled-components";
import { CloseIconButton } from "./IconButtons";
import NavMenu from "./NavMenu";

export default function ModalMenu(props) {
  const Modal = styled.div`
    display: ${(props) => props.display};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 12px 5vw;
    flex-direction: column;
    background-color: var(--primary);
  `;
  return (
    <Modal display={props.display}>
      {/* Icon button to close modal */}
      <CloseIconButton handleClick={props.handleVisibility} />
      {/* Navigation menu */}
      <NavMenu isDeskoptMenu={false} />
    </Modal>
  );
}
