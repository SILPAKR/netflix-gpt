import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="md:text-6xl text-2xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 text-xl hover:bg-opacity-80 rounded-lg">
          ▶ Play
        </button>
        <button className="bg-gray-500 mx-2 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
