import React from "react";
import VideoPlayer from "../../course-preview/[courseId]/_components/VideoPlayer";
import button from "../../../../components/ui/button";

function Descriptionforwatchcourse({
  courseInfo,
  ActiveChapterIndex,
  setChapterIndex,
}) {
  // console.log(ActiveChapterIndex);
  return (
    <div>
      <div className="grid grid-cols-1">
        <h2 className="text-[20px] font-semibold text-center capitalize">
          {courseInfo?.courseId}
          <span className="text-[6px] pl-1">
            By {courseInfo?.courseList?.author}
          </span>{" "}
        </h2>

        <div className="col-span-2">
          <VideoPlayer
            className="w-full"
            videoUrl={
              courseInfo?.courseList?.chapter[ActiveChapterIndex]?.video?.url
            }
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between ">
          <h2 className="font-semibold capitalize mt-5 text-[18px]">
            {courseInfo?.courseList?.chapter[ActiveChapterIndex]?.name}{" "}
          </h2>
          {/* Button for mark complete */}
          <button
            onClick={() =>
              setChapterIndex(
                courseInfo?.courseList?.chapter[ActiveChapterIndex]?.id
              )
            }
            className="bg-primary text-white rounded-xl justify-between items-center mt-2 p-3"
          >
            mark complete
          </button>
        </div>
        <h1 className="text-[15px] font-light m-2 ">
          {/* {" Description"} */}

          {courseInfo?.courseList?.chapter[ActiveChapterIndex]?.shortDesc}
        </h1>
      </div>
    </div>
  );
}

export default Descriptionforwatchcourse;
