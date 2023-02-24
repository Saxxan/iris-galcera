// Dependencies
import React from "react";
import styled from "styled-components";

// Components
import { HomePage } from "../../commons/theme/Theme";
import Navigation from "../../commons/Navigation/Navigation";
import {
  SubTitleH3,
  TitleH1,
  TitleH2,
} from "../../commons/Typography/Typography";
import AccesToAdmin from "../../AccessToAdmin/AccesToAdmin";

// Page styled components
const TitleLayout = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    width: 300px;
    height: 300px;
    margin-bottom: 12px;
    background: url("fondo-home-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-width: 500px) {
      width: 400px;
      height: 400px;
    }

    @media (min-width: 800px) {
      width: 500px;
      height: 500px;
    }
  }
`;

function Home() {
  return (
    <HomePage>
      <Navigation title="" />
      <TitleLayout>
        <TitleH1>iris</TitleH1>
        <TitleH2>galcerà</TitleH2>
        <div></div>
        <SubTitleH3>ART DEPARTMENT</SubTitleH3>
      </TitleLayout>
      <AccesToAdmin />
    </HomePage>
  );
}

export default Home;
