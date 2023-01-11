import React, { useState } from "react";
import styled from "styled-components";

// Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// Styled components
const LoginModal = styled.article`
  padding: 24px;
  border-radius: 6px;
  box-shadow: var(--grey-shadow) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const SubmitButton = styled.input`
  background-color: var(--tertiary);
  color: var(--ice);
  padding: 12px 24px;
  margin: 24px 0;
  border-radius: 6px;
  border: 1px solid var(--tertiary);
  font-weight: 600;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Function that handles log in
   * @param {*} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password);
    }
    onRegister();
  }

  return (
    <LoginModal>
      <h1>Iniciar sesión</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit" value="Iniciar sesión" />
      </Form>
    </LoginModal>
  );
}

export default LoginForm;
