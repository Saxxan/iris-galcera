import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Authentication context
import { AuthContext } from "../../LoginForm/AuthProvider";

// Components
import LoginForm from "../../LoginForm/LoginForm";
import AdminDashboard from "../../AdminDashBoard/AdminDashboard";
import ArrowLeft from "../../commons/Icons/ArrowLeft";

// Styled component
const AdminTheme = styled.main`
  background-color: var(--grey);
  color: var(--ice);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const LinkToHome = styled(Link)`
  text-decoration: none;
  color: var(--ice);
  cursor: pointer;
  padding: 12px 24px;
  position: absolute;
  top: 10%;
  left: 10%;
  display: flex;
  align-items: center;
  gap: 6px;
`;

function Admin() {
  const { currentUser } = useContext(AuthContext);

  return (
    <AdminTheme>
      {currentUser ? (
        <AdminDashboard />
      ) : (
        <>
          <LinkToHome to="/">
            <ArrowLeft fill="var(--ice)" />
            <span>Volver al portfolio</span>
          </LinkToHome>
          <LoginForm />
        </>
      )}
    </AdminTheme>
  );
}

export default Admin;
