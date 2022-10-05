import React from 'react';

const Arrow = (): JSX.Element => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinecap="square"
    strokeMiterlimit="1.5"
    viewBox="0 0 103 58"
    xmlns="http://www.w3.org/2000/svg"
  >
    <clipPath id="a">
      <path clipRule="evenodd" d="m0 0h102.912v57.783h-102.912z" />
    </clipPath>
    <path d="m0 0h102.912v57.783h-102.912z" fill="none" />
    <g clipPath="url(#a)">
      <path
        d="m6.081 6.098 45.471 45.471 45.47-45.471"
        fill="none"
        stroke="#000"
        strokeWidth="8"
      />
    </g>
  </svg>
);

export default Arrow;
