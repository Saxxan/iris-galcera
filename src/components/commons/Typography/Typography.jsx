// Dependencies
import styled from "styled-components";

// Styled components for typography
export const TitleH1 = styled.h1`
  font-size: clamp(35px, 15vw, 60px);
  font-weight: 700;
  font-family: var(--font-italic);
  z-index: 1;
  margin: -36px -60px -50px 0;
  color: var(--primary);
`;

export const TitleH2 = styled.h2`
  font-size: clamp(45px, 15vw, 70px);
  font-weight: 700;
  font-family: var(--font-italic);
  z-index: 1;
  margin: -12px 0 -36px 0;
  color: var(--primary);

  @media (min-width: 600px) {
    margin: -24px 0 -40px 0;
  }

  @media (min-width: 800px) {
    margin: -24px 0 -50px 0;
  }
`;

export const SubTitleH3 = styled.h3`
  font-size: clamp(15px, 5vw, 25px);
  font-weight: 700;
  color: var(--primary);
  font-family: var(--font-body);
`;

export const ProjectTitleH1 = styled.h1`
  font-size: clamp(16px, 2vw, 50px);
  color: var(--ice);
  font-weight: 500;
  letter-spacing: 0.5px;
`;
