import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
