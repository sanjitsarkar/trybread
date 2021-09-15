import React from "react";
const VideoCard = ({ img, scale = 100, borderColor = "secondary" }) => {
  return (
    <div
      className={`rounded-xl border border-${borderColor} p-4 w-max h-2/6 transform scale-${scale} cursor-pointer`}
    >
      <img className="rounded-xl bg-cover w-full h-full" src={img} />
    </div>
  );
};

export default VideoCard;
