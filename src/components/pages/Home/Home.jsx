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
    border-radius: 6px;

    & > img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
    }

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
  const randomNumber = Math.floor(Math.random() * (15 - 1 + 1)) + 1;

  return (
    <HomePage>
      <Navigation title="" />
      <TitleLayout>
        <TitleH1>iris</TitleH1>
        <TitleH2>galcerà</TitleH2>
        <div>
          <img src={`fondo-home-${randomNumber}.webp`} alt="Ilustración home" />
        </div>
        <SubTitleH3>ART DEPARTMENT</SubTitleH3>
      </TitleLayout>
      <AccesToAdmin />
    </HomePage>
  );
}

export default Home;
