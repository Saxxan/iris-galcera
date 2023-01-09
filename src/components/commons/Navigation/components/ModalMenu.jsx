// Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import { CloseIconButton } from "./IconButtons";
import NavMenu from "./NavMenu";

// Styled components
const Modal = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 12px 5vw;
  flex-direction: column;
  background-color: var(--secondary);
  z-index: 5;
`;

function ModalMenu(props) {
  return (
    <Modal display={props.display}>
      {/* Icon button to close modal */}
      <CloseIconButton handleClick={props.handleVisibility} />
      {/* Navigation menu */}
      <NavMenu isDeskoptMenu={false} />
    </Modal>
  );
}

ModalMenu.propTypes = {
  display: PropTypes.string,
  handleVisibility: PropTypes.func,
};

export default ModalMenu;
