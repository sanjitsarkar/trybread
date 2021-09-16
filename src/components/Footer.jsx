import React from "react";
import FB from "../images/fb1.svg";
import IG from "../images/ig1.svg";
import Linkedin from "../images/linkedin1.svg";
import Spotify from "../images/spotify1.svg";
import Twitter from "../images/twitter1.svg";
import YT from "../images/yt1.svg";

export const Footer = () => {
  return (
    <footer className="md:flex grid md:gap-0 place-content-center place-items-center text-center gap-6  md:justify-between md:items-center p-7 bg-primary text-white w-screen">
      <div>
        <h4 className="mb-2">
          Powered by <span className="italic text-xl">bread</span>
        </h4>
        <div className="flex gap-6 items-center ">
          <a href="">
            <img src={IG} />
          </a>
          <a href="">
            <img src={FB} />
          </a>
          <a href="">
            <img src={YT} />
          </a>
          <a href="">
            <img src={Twitter} />
          </a>
          <a href="">
            <img src={Linkedin} />
          </a>
          <a href="">
            <img src={Spotify} />
          </a>
        </div>
      </div>
      <div>
        <p className="mb-2">Bread 2021 All rights reserved</p>
        <div className="flex gap-5">
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">About</a>
        </div>
      </div>
    </footer>
  );
};
