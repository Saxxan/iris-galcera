// Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import { CloseIconButton } from "../../IconButtons/IconButtons";
import NavMenu from "./NavMenu";

// Styled components
const Modal = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: var(--grey-placeholder);
  color: var(--ice);
  z-index: 5;

  & > header {
    width: 90vw;
    margin: 0 auto;
    height: 10vh;
    padding: 12px 6px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

function ModalMenu(props) {
  return (
    <Modal display={props.display}>
      {/* Icon button to close modal */}
      <header>
        <CloseIconButton handleClick={props.handleVisibility} />
      </header>
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
