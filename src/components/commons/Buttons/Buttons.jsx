import styled from "styled-components";

const ButtonBase = styled.button`
  color: var(--ice);
  padding: 12px 24px;
  margin: 24px 0;
  border-radius: 6px;
  font-weight: 600;
`;

const SubmitButton = styled.input`
  background-color: var(--tertiary);
  border: 1px solid var(--tertiary);
  color: var(--ice);
  padding: 12px 24px;
  margin: 24px 0;
  border-radius: 6px;
  font-weight: 600;
`;

const CancelButton = styled(ButtonBase)`
  background-color: var(--primary);
  border: 1px solid var(--primary);
`;

export { SubmitButton, CancelButton };
