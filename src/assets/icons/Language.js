import React from "react";

const LanguageIcon = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="#fff"
        strokeWidth="1.5"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 8.38h4.5m0 0h3m-3 0V7M17 8.38h-2.5m0 0c-.527 1.886-1.632 3.669-2.893 5.236m0 0C10.563 14.913 9.412 16.063 8.393 17m3.214-3.384c-.643-.754-1.543-1.973-1.8-2.525m1.8 2.525l1.929 2.005"
      ></path>
    </svg>
  );
};

export default LanguageIcon;
