import React, { useContext } from "react";
import styled from "styled-components";
import AdminDashboard from "../../AdminDashBoard/AdminDashboard";

// Authentication context
import { AuthContext } from "../../LoginForm/AuthProvider";

// Components
import LoginForm from "../../LoginForm/LoginForm";

// Styled component
const AdminTheme = styled.main`
  background-color: var(--grey);
  color: var(--ice);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function Admin() {
  const { currentUser } = useContext(AuthContext);

  return (
    <AdminTheme>{currentUser ? <AdminDashboard /> : <LoginForm />}</AdminTheme>
  );
}

export default Admin;
