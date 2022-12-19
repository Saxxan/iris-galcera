// Dependencies
import styled from "styled-components";

// Styled components for typography
export const TitleH1 = styled.h1`
  font-size: clamp(96px, 15vw, 387px);
  font-weight: 700;
`;

export const TitleH2 = styled.h2`
  font-size: clamp(40px, 15vw, 250px);
  font-weight: 700;
`;

export const SubTitleH3 = styled.h3`
  font-size: clamp(15px, 8vw, 80px);
  font-weight: 700;
  margin-top: -30px;
  margin-bottom: -10px;
  color: var(--primary);
  font-family: var(--font-italic);

  @media (min-width: 800px) {
    margin-top: -80px;
    margin-bottom: -60px;
  }
`;

export const ProjectTitleH1 = styled.h1`
  font-size: clamp(20px, 2vw, 50px);
  color: var(--ice);
  font-weight: 500;
  letter-spacing: 0.5px;
  height: fit-content;
`;

export const ProjectCardHeader = styled.h2`
  font-size: clamp(16px, 2vw, 30px);
  color: var(--ice);
  font-weight: 500;
  letter-spacing: 0.5px;
  display: flex;
`;
