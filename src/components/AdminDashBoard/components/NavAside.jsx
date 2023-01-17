import React, { useState } from "react";
import styled from "styled-components";

// Components
import { ArrowIconButton } from "../../commons/IconButtons/IconButtons";

// Styled components
const AsideNavigation = styled.aside`
  width: 200px;
  height: 100%;
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s ease-in-out;
`;

function NavAside() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Function to handle open the navigation admin menu
   */
  function toggleNavMenuState() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <AsideNavigation
      style={
        isMenuOpen
          ? { transform: "translateX(0)" }
          : { transform: "translateX(-150px)" }
      }
    >
      <ArrowIconButton handleClick={toggleNavMenuState} isOpen={isMenuOpen} />
      <nav>
        <h2>Proyectos</h2>
        <ul>
          <li>Comerciales</li>
          <li>Cinematográficos</li>
        </ul>
      </nav>
    </AsideNavigation>
  );
}

export default NavAside;
