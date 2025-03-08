import React from "react";

function Reactangle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
    >
      <rect
        width="10"
        height="10"
        y="7.5"
        fill="url(#paint0_linear_453_648)"
        rx="1"
        transform="rotate(-45 0 7.5)"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_453_648"
          x1="5"
          x2="5"
          y1="7.5"
          y2="23.273"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#466645"></stop>
          <stop offset="1" stopColor="#1C3628"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Reactangle;
