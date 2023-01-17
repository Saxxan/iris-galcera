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
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
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
      style={{ margin: "12px 6px" }}
    >
      <path d="M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z" />
    </IconButton>
  );
}

CloseIconButton.propTypes = {
  handleClick: PropTypes.func,
};

const ArrowsIconButton = styled(IconButton)`
  background-color: var(--tertiary);
  fill: var(--ice);
  border-radius: 6px;

  @media (min-width: 800px) {
    display: block;
  }
`;

function ArrowIconButton(props) {
  return (
    <ArrowsIconButton
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.handleClick}
      style={
        props.isOpen
          ? { transform: "rotateY(180deg)" }
          : { transform: "rotateY(0)" }
      }
    >
      <path d="M16.5 12L8.5 20L7 18.5L13.5 12L7 5.5L8.5 4L16.5 12Z" />
    </ArrowsIconButton>
  );
}

export { BurguerIconButton, CloseIconButton, ArrowIconButton };
