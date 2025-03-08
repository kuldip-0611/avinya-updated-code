import React from "react";

const Pause = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 96 96"
    >
      <g filter="url(#filter0_b_181_354)">
        <rect
          width="96"
          height="96"
          fill="#fff"
          fillOpacity="0.3"
          rx="48"
        ></rect>
        <path
          stroke="#fff"
          strokeWidth="2"
          d="M48 68c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
        ></path>
        <path
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M54.906 48.79c-.303 1.253-1.735 2.139-4.598 3.91-2.769 1.713-4.153 2.57-5.268 2.225a2.752 2.752 0 01-1.22-.785C43 53.24 43 51.493 43 48s0-5.24.82-6.14a2.752 2.752 0 011.22-.785c1.115-.344 2.5.512 5.268 2.225 2.863 1.771 4.295 2.657 4.598 3.91a3.372 3.372 0 010 1.58z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_181_354"
          width="168"
          height="168"
          x="-36"
          y="-36"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="18"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_181_354"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_181_354"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default Pause;
