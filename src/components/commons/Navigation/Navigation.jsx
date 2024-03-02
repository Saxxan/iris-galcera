// Dependencies
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Components
import NavMenu from "./components/NavMenu";
import ModalMenu from "./components/ModalMenu";
import { BurguerIconButton } from "../IconButtons/IconButtons";
import { ProjectTitleH1 } from "../Typography/Typography";

// Styled component
const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  width: 100%;
  height: 10vh;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 800px) {
    padding: 12px 48px;
  }
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
    <Header>
      <ProjectTitleH1>{props.title.toUpperCase()}</ProjectTitleH1>
      <nav>
        {/* Burger icon */}
        <BurguerIconButton
          handleClick={toggleModalVisibility}
          theme={props.theme}
        />
        {/* Deskopt menu */}
        <NavMenu isDeskoptMenu={true} />
      </nav>
      {/* Modal menu */}
      <ModalMenu
        display={isModalOpen ? "flex" : "none"}
        handleVisibility={toggleModalVisibility}
      />
    </Header>
  );
}

Navigation.propTypes = {
  theme: PropTypes.string,
};

export default Navigation;
