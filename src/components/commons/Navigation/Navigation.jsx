// Dependencies
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import NavMenu from "./components/NavMenu";
import ModalMenu from "./components/ModalMenu";
import { BurguerIconButton } from "../IconButtons/IconButtons";

// Styled component
const Nav = styled.nav`
  width: 90vw;
  height: 10vh;
  margin: 0 auto;
  padding: 12px 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

function Navigation(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Function that handles modal close or open action
   */
  function toggleModalVisibility() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <Nav>
        {/* Burger icon */}
        <BurguerIconButton
          handleClick={toggleModalVisibility}
          theme={props.theme}
        />
        {/* Deskopt menu */}
        <NavMenu isDeskoptMenu={true} />
      </Nav>
      {/* Modal menu */}
      <ModalMenu
        display={isModalOpen ? "flex" : "none"}
        handleVisibility={toggleModalVisibility}
      />
    </>
  );
}

Navigation.propTypes = {
  theme: PropTypes.string,
};

export default Navigation;
