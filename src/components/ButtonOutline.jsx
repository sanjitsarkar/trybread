import React, { useState } from "react";

const ButtonOutline = ({ title }) => {
  return (
    <button className="px-3 py-1.5 border border-gray-600 rounded-md text-gray-600">
      {title}
    </button>
  );
};

export default ButtonOutline;
