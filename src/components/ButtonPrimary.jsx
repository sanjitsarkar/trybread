import React, { useState } from "react";

const ButtonPrimary = ({ title, padding = "px-3 py-2" }) => {
  return (
    <button className={`${padding} bg-primary text-white rounded-md`}>
      {title}
    </button>
  );
};

export default ButtonPrimary;
