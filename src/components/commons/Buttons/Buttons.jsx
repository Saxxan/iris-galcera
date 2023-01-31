import styled from "styled-components";

const ButtonBase = styled.button`
  color: var(--ice);
  padding: 12px 24px;
  margin: 24px 0;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
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

const CancelButton = styled(ButtonBase)`
  background-color: var(--primary);
  border: 1px solid var(--primary);
`;

const AddButton = styled(ButtonBase)`
  color: var(--tertiary);
  border: 2px solid var(--tertiary);
  border-radius: 24px;
  margin: 0;
  margin-right: 12px;
`;

const DeleteButton = styled(ButtonBase)`
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 24px;
  margin: 0;
`;

export { SubmitButton, CancelButton, AddButton, DeleteButton };
