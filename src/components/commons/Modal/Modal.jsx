import styled from "styled-components";

export const ModalLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  background-color: var(--grey);
  box-shadow: var(--grey-shadow) 0px 3px 8px;
  border-radius: 6px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  & > * {
    width: 95%;
  }

  & > h2 {
    text-align: center;
  }

  & > form {
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    gap: 6px;

    & > input,
    & > textarea {
      margin-bottom: 6px;
    }

    & > button {
      margin-top: 12px;
    }
  }

  & > footer {
    display: flex;
    gap: 6px;
  }
`;
