import React from "react";

function ArrowLeft(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12L15 4L16.5 5.5L10 12L16.5 18.5L15 20L7 12Z"
        fill={props.fill}
      />
    </svg>
  );
}

export default ArrowLeft;
