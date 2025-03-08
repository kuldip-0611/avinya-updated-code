import React from "react";

const Play = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 96 96"
    >
      <g filter="url(#filter0_b_181_354)">
        <circle cx="48" cy="48" r="48" fill="rgba(255, 255, 255, 0.3)" />

        <path fill="#fff" d="M40 34l24 14-24 14V34z" />
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

export default Play;
