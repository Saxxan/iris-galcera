// Dependencies
import React from "react";
import styled from "styled-components";

// Components
import { HomePage } from "../../commons/theme/Theme";
import Navigation from "../../commons/Navigation/Navigation";
// import {
//   SubTitleH3,
//   TitleH1,
//   TitleH2,
// } from "../../commons/Typography/Typography";
import AccesToAdmin from "../../AccessToAdmin/AccesToAdmin";

// Page styled components
// const TitleLayout = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   flex-grow: 1;
//   margin-top: -80px;

//   @media (min-width: 800px) {
//     margin-top: -100px;
//   }
// `;

function Home() {
  return (
    <HomePage>
      <Navigation title="" />
      {/* <TitleLayout>
        <TitleH1>IRIS</TitleH1>
        <SubTitleH3>art department</SubTitleH3>
        <TitleH2>GALCERÀ</TitleH2>
      </TitleLayout> */}
      <AccesToAdmin />
    </HomePage>
  );
}

export default Home;
