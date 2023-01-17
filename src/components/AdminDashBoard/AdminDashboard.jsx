import React from "react";
import styled from "styled-components";

// Components
import NavAside from "./components/NavAside";

// Styled Components
const Dashboard = styled.article`
  width: 90vw;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

function AdminDashboard() {
  return (
    <Dashboard>
      <NavAside />
    </Dashboard>
  );
}

export default AdminDashboard;
