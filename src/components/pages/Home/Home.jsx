import React from "react";
import styled from "styled-components";
import Navigation from "../../commons/Navigation/Navigation";

const PageHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeTitle = styled.h1`
  color: var(--tertiary-light);
  font-size: clamp(96px, 15vw, 387px);
  margin-top: 20vh;
`;

export default function Home() {
  return (
    <PageHome>
      <Navigation theme="green" />
      <HomeTitle>IRIS</HomeTitle>
    </PageHome>
  );
}
