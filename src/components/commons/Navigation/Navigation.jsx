import React, { useState } from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import ModalMenu from "./ModalMenu";
import { BurguerIconButton } from "./IconButtons";

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

export default function Navigation(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModalVisibility() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <Nav>
        {/* Icono de hamburguesa */}
        <BurguerIconButton handleClick={toggleModalVisibility} theme={props.theme}/>
        {/* Menu en deskopt */}
        <NavMenu isDeskoptMenu={true} />
      </Nav>
      <ModalMenu
        display={isModalOpen ? "flex" : "none"}
        handleVisibility={toggleModalVisibility}
      />
    </>
  );
}
