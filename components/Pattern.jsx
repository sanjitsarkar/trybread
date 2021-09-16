import React from "react";
import PatternBG from "./images/pattern.png";
const Pattern = () => {
  return (
    <div className="h-96 w-screen bg-white -z-0">
      <img className="bg-cover h-full w-full" src={PatternBG.src} />
    </div>
  );
};

export default Pattern;
