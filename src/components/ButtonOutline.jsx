import React, { useState } from "react";

const ButtonOutline = ({
  title,
  padding = "py-1  px-0",
  size = "md:text-sm",
}) => {
  return (
    <button
      className={` ${size} md:px-3 md:py-2 border border-gray-600 rounded-md text-gray-600 ${padding}`}
    >
      {title}
    </button>
  );
};

export default ButtonOutline;
