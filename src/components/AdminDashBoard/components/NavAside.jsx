import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import { ArrowIconButton } from "../../commons/IconButtons/IconButtons";
import ArrowLeft from "../../commons/Icons/ArrowLeft";
import { CancelButton } from "../../commons/Buttons/Buttons";

// Firebase auth
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

// Styled components
const AsideNavigation = styled.aside`
  background-color: var(--grey);
  box-shadow: var(--grey-shadow) 0px 3px 8px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  transition: width 0.4s ease-in-out;
  padding: 12px;
  margin-right: 12px;

  @media (min-width: 800px) {
    padding: 12px 24px;
  }
`;

const ProjectsLink = styled.li`
  margin-bottom: 6px;
  cursor: pointer;
`;

const LinkToHome = styled(Link)`
  text-decoration: none;
  color: var(--ice);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.8s ease-out;
`;

function NavAside(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projectTypes = [
    { key: "commercials", title: "Commercials" },
    { key: "film", title: "Film" },
    { key: "tvseries", title: "TV Series" },
  ];

  /**
   * Function to handle open the navigation admin menu
   */
  function toggleNavMenuState() {
    setIsMenuOpen(!isMenuOpen);
  }

  /**
   * Function that handles click on log out button
   */
  function handleLogOut() {
    signOut(auth);
  }

  function handleClickProjectOption(type) {
    props.changeProjectType(type);
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <AsideNavigation>
      <ArrowIconButton handleClick={toggleNavMenuState} isOpen={isMenuOpen} />
      {isMenuOpen && (
        <section
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <nav style={{ margin: "24px 0" }}>
            <h4 style={{ color: "var(--tertiary)", marginBottom: "12px" }}>
              Projects
            </h4>
            <ul style={{ listStyleType: "none", marginLeft: "6px" }}>
              {projectTypes.map((item, index) => (
                <ProjectsLink
                  key={index}
                  onClick={() => handleClickProjectOption(item.key)}
                >
                  {item.title}
                </ProjectsLink>
              ))}
            </ul>
          </nav>
          <section>
            <LinkToHome to="/">
              <ArrowLeft fill="var(--ice)" />
              <span>Portfolio</span>
            </LinkToHome>
            <CancelButton onClick={handleLogOut}>Log out</CancelButton>
          </section>
        </section>
      )}
    </AsideNavigation>
  );
}

export default NavAside;
