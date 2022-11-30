import styled from "styled-components";

export const ProjectPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey);
  color: var(--ice);
`;

export const ProjectsPageDeskopt = styled(ProjectPage)`
  @media (min-width: 800px) {
    background-color: var(--ice);
  }
`;

export const HomePage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsPanel = styled.div`
  background-color: var(--grey);
  display: flex;
  padding: 12px 24px;
  height: 90vh;

  @media (min-width: 800px) {
    margin: 0 5vw;
  }
`;
