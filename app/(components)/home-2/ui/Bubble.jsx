import React from "react";

const Bubble = ({ text, left, rotate }) => {
  return (
    <div
      className={`p-4 rounded-[20px] bg-[#FFE9F1] hover:bg-[var(--bg-primary-color)] hover:text-white transition-colors duration-200 `}
      style={{ transform: `translate(${left}px) rotate(${rotate}deg)` }}
    >
      {text}
    </div>
  );
};

export default Bubble;
