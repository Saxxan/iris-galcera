import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavigationMenu = styled.ul`
  display: flex;
  gap: 12px;
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
  font-weight: 600px;
  color: var(--tertiary-light);

  &.active {
    color: var(--secondary);
    & span {
      width: 90vw;
      height: 4px;
      background-color: var(--primary);
      position: absolute;
      transform: translate(-10%, 19px);
    }
  }

  @media (min-width: 800px) {
    font-size: clamp(15px, 1vw, 20px);

    &.active span {
      width: 20vw;
      max-width: 200px;
    }
  }
`;

export function Menu() {
  const location = useLocation();

  const options = [
    { name: "HOME", path: "/" },
    { name: "COMMERCIALS", path: "/commercials" },
    { name: "FILM", path: "/film" },
  ];

  function handleOptionSelected(optionPath) {
    let response = optionPath === location.pathname ? "active" : "";
    return response;
  }

  return (
    <>
      {options.map((option) => {
        return (
          <OptionLink
            className={handleOptionSelected(option.path)}
            to={option.path}
          >
            {option.name}
            <span> </span>
          </OptionLink>
        );
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
