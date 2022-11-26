import React from "react";
import styled from "styled-components";
import Navigation from "../../commons/Navigation/Navigation";


const PageProject = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--secondary);
`;

export default function Film() {
  return (
    <PageProject>
      <Navigation />
      <h1>COMMERCIALS</h1>
    </PageProject>
  );
}
