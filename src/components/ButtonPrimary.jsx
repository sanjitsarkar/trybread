import React, { useState } from "react";

const ButtonPrimary = ({
  title,
  padding = "py-1  px-0",
  size = "md:text-sm",
}) => {
  return (
    <button
      className={`${padding} md:px-3 md:py-2 bg-primary text-white rounded-md ${size}`}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
