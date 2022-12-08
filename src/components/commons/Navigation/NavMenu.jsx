import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavigationMenu = styled.ul`
  display: flex;
  gap: 36px;
`;

const NavigationMenuDeskopt = styled(NavigationMenu)`
  flex-direction: row;
  display: none;

  @media (min-width: 800px) {
    display: flex;
  }
`;

const NavigationMenuMobile = styled(NavigationMenu)`
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  gap: 60px;
`;

const OptionLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  font-size: 35px;
  font-weight: 00px;
  color: var(--ice);

  &.active {
    color: var(--primary);
  }

  @media (min-width: 800px) {
    font-size: clamp(15px, 1vw, 20px);
    font-weight: 500;
  }
`;

const OptionLinkSec = styled(OptionLink)`
  @media (min-width: 800px) {
    color: var(--tertiary);
  }
`;

export function Menu() {
  const location = useLocation();

  const options = [
    { name: "HOME", path: "/", key: "1" },
    { name: "COMMERCIALS", path: "/commercials", key: "2" },
    { name: "FILM", path: "/film", key: "3" },
  ];

  function handleOptionSelected(optionPath) {
    return optionPath === location.pathname ? "active" : "";
  }

  function getTheme() {
    const theme = location.pathname !== "/" ? "secondary" : "primary";
    return theme;
  }

  return (
    <>
      {options.map((option) => {
        const theme = getTheme();
        const response =
          theme === "primary" ? (
            <OptionLink
              key={option.key}
              className={handleOptionSelected(option.path)}
              to={option.path}
            >
              {option.name}
            </OptionLink>
          ) : (
            <OptionLinkSec
              key={option.key}
              className={handleOptionSelected(option.path)}
              to={option.path}
            >
              {option.name}
            </OptionLinkSec>
          );
        return response;
      })}
    </>
  );
}
export default function NavMenu(props) {
  return props.isDeskoptMenu ? (
    <NavigationMenuDeskopt>
      <Menu />
    </NavigationMenuDeskopt>
  ) : (
    <NavigationMenuMobile>
      <Menu />
    </NavigationMenuMobile>
  );
}
