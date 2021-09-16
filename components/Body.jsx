import ProfileCard from "./ProfileCard";
import React, { useState } from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Pattern from "./Pattern";

const Body = () => {
  return (
    <div className="body">
      <Hero />
      <ProfileCard />
      <Pattern />
      <Gallery />
    </div>
  );
};

export default Body;
