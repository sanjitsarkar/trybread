import React from "react";
const VideoCard = ({
  timing = "",
  live = false,
  img,
  scale = "scale-100",
  borderColor = "secondary",
  height = "h-2/6",
  width = "w-max",
  padding = "p-2",
  hidden,
}) => {
  return (
    <div
      className={`${hidden} rounded-xl border border-${borderColor} ${padding} ${width} ${height}  transform ${scale} cursor-pointer`}
    >
      <img
        className={`rounded-xl bg-cover w-full h-full ${live && "opacity-50"}`}
        src={img}
      />
      {live && (
        <div className="absolute bottom-5 left-5 text-white space-y-1 ">
          <button className="rounded-lg  border border-green-400 px-4 py-1 text-sm ">
            Live
          </button>
          {timing && (
            <>
              <h3>Online Class</h3>
              <p>{timing}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoCard;
