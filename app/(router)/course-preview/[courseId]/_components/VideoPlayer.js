import React from "react";

const VideoPlayer = ({ videoUrl, poster }) => {
  return (
    <div>
      <video
        width={1000}
        height={200}
        controls
        key={videoUrl}
        autoPlay
        loop
        className="rounded-sm "
        poster={poster}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
