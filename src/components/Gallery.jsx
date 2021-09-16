import React from "react";
import VideoCard from "./VideoCard";
import Yoga1 from "../images/yoga_4.png";
import Yoga2 from "../images/yoga_3.png";
import Yoga3 from "../images/yoga_2.png";
import ArrowLeft from "../images/arrow_left.svg";
import ArrowRight from "../images/arrow_right_1.svg";
const Gallery = () => {
  return (
    <div className="bg-secondary gallery pb-4 ">
      <h1 className="text-white font-semibold text-2xl text-center md:mb-10">
        BROWSE ALL MY OFFERINGS
      </h1>
      <div className="flex  md:gap-7 gap-0 justify-center items-center">
        <VideoCard
          live={true}
          img={Yoga1}
          timing="Mon-Fri, 9:00 AM to 11:00 AM IST"
          hidden="hidden md:flex"
          scale="md:scale-90"
          borderColor="white"
        />
        <VideoCard
          live={true}
          img={Yoga2}
          scale="md:scale-100 scale-90"
          borderColor="white"
        />
        <VideoCard
          timing="Aug 8, 9:00 AM to 11:00 AM IST"
          live={true}
          hidden="hidden md:flex"
          img={Yoga3}
          scale="md:scale-90 scale-0"
          borderColor="white"
        />
      </div>
      <div className="flex gap-3 justify-center my-7">
        <div className="p-1 rounded-full cursor-pointer  ">
          <img src={ArrowLeft} />
        </div>
        <div className="p-1 rounded-full cursor-pointer  ">
          <img src={ArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
