import React, { useState } from "react";
import styled from "styled-components";
import DashboarMain from "./components/DashboarMain";

// Components
import NavAside from "./components/NavAside";

// Styled Components
const Dashboard = styled.article`
  width: 95vw;
  height: 100%;
  margin: 0 auto;
  padding: 12px 0;
  display: flex;
`;

function AdminDashboard() {
  const [projectsType, setProjectsType] = useState();

  /**
   * Function that changes the main type of projects to handle in dashboard
   * @param {*} type
   */
  function changeProjectType(type) {
    setProjectsType(type);
  }

  return (
    <Dashboard>
      <NavAside changeProjectType={changeProjectType} />
      <DashboarMain type={projectsType} />
    </Dashboard>
  );
}

export default AdminDashboard;
