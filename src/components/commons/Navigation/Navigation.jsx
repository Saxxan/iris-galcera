import React, { useState } from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import ModalMenu from "./ModalMenu";

const Nav = styled.nav`
  width: 90vw;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Nav>
        {/* Icono de hamburguesa */}
        {/* Menu en deskopt */}
        <NavMenu isDeskoptMenu={true} />
      </Nav>
      <ModalMenu display={isModalOpen ? "block" : "none"} />
    </>
  );
}
