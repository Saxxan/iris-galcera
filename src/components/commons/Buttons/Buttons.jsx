import styled from "styled-components";

const ButtonBase = styled.button`
  margin: 24px 0;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease-in-out;
`;

const SubmitButton = styled.input`
  background-color: var(--tertiary);
  border: 1px solid var(--tertiary);
  color: var(--ice);
  padding: 12px 24px;
  margin: 24px 0;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
`;

const AcceptButton = styled(ButtonBase)`
  color: var(--ice);
  background-color: var(--tertiary);
  border: 1px solid var(--tertiary);
  padding: 12px 24px;
`;

const CancelButton = styled(ButtonBase)`
  color: var(--ice);
  border: 1px solid var(--primary);
  padding: 12px 24px;

  &:hover {
    background-color: var(--primary);
  }
`;

const AddButton = styled(ButtonBase)`
  color: var(--tertiary);
  border: 2px solid var(--tertiary);
  border-radius: 24px;
  margin: 0;
  margin-right: 12px;
  padding: 6px 12px;
`;

const DeleteButton = styled(ButtonBase)`
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 24px;
  margin: 0;
  padding: 6px 12px;
`;

export { SubmitButton, CancelButton, AddButton, DeleteButton, AcceptButton };
