import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationMenu = styled.ul`
  display: flex;
`;

const NavigationMenuDeskopt = styled(NavigationMenu)`
  flex-direction: row;
  display: none;
`;

const NavigationMenuMobile = styled(NavigationMenu)`
  flex-direction: column;
`;

export default function NavMenu(props) {
  return props.isDeskoptMenu ? (
    <NavigationMenuDeskopt />
  ) : (
    <NavigationMenuMobile />
  );
}
