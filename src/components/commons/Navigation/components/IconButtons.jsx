// Dependencies
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled components
const IconButton = styled.svg`
  width: 30px;
  height: 30px;
  fill: var(--primary);
  display: flex;
  align-self: flex-end;
  @media (min-width: 800px) {
    display: none;
  }
`;

function BurguerIconButton(props) {
  return (
    <IconButton
      onClick={props.handleClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" />
    </IconButton>
  );
}

BurguerIconButton.propTypes = {
  handleClick: PropTypes.func,
};

function CloseIconButton(props) {
  return (
    <IconButton
      onClick={props.handleClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z" />
    </IconButton>
  );
}

CloseIconButton.propTypes = {
  handleClick: PropTypes.func,
};

export { BurguerIconButton, CloseIconButton };
