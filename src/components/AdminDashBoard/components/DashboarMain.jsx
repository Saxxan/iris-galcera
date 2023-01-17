import React from "react";
import styled from "styled-components";

// Styled components
const MainDash = styled.main`
  width: 100%;
  padding: 12px;
  background-color: var(--grey);
  box-shadow: var(--grey-shadow) 0px 3px 8px;
  border-radius: 6px;
`;

function DashboarMain(props) {
  return (
    <MainDash>
      <h1>{props.type === "film" ? "Cinematográfico" : "Comerciales"}</h1>
    </MainDash>
  );
}

export default DashboarMain;
