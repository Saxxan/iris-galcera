import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled component
const LinkToAdmin = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  text-decoration: none;
  padding: 6px;
  font-size: 13px;
  color: var(--grey-placeholder);
`;

function AccesToAdmin() {
  return <LinkToAdmin to="/admin">Admin</LinkToAdmin>;
}

export default AccesToAdmin;
