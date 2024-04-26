import React from "react";
import VideoPlayer from "./VideoPlayer";

const CourseVideoDescription = ({ courseInfo }) => {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">{courseInfo?.name}</h2>
      <h2 className="text-gray-300 text-[14px] mb-3">{courseInfo?.author}</h2>

      {/* video player */}
      <VideoPlayer
        videoUrl={courseInfo?.chapter[0]?.video?.url}
        poster={courseInfo?.banner?.url}
      />

      {/*Description  */}
      <h2 className="font-semibold mt-5 text-[18px]">About this Course</h2>
      <div>
        <h1 className="text-[15px] font-light m-2 ">
          {" "}
          {courseInfo?.description}
        </h1>
      </div>
    </div>
  );
};

export default CourseVideoDescription;
