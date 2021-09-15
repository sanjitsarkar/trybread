import React from "react";
import VideoCard from "./VideoCard";
import Yoga1 from "../images/yoga_4.png";
import Yoga2 from "../images/yoga_3.png";
import Yoga3 from "../images/yoga_2.png";
import ArrowLeft from "../images/arrow_left.svg";
import ArrowRight from "../images/arrow_right_1.svg";
const Gallery = () => {
  return (
    <div className="bg-secondary pt-80 pb-4 ">
      <h1 className="text-white font-semibold text-2xl text-center mb-10">
        BROWSE ALL MY OFFERINGS
      </h1>
      <div className="flex gap-7 ">
        <VideoCard img={Yoga1} scale="90" borderColor="white" />
        <VideoCard img={Yoga2} scale="100" borderColor="white" />
        <VideoCard img={Yoga3} scale="90" borderColor="white" />
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
