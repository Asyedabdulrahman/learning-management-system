import { Lock, Play } from "lucide-react";
import React, { useState } from "react";

function CoursecontentSectionForWatchcourse({
  courseInfo,
  isUserAlreadyEnrolled,
  setActiveChapterIndex,
  completedChapter,
}) {
  const [activeindex, setactiveindex] = useState(0);
  // const [ActiveChapterIndex, setActiveChapterIndex] = useState();

  // use to check the chapter completed or not
  const checkisChapterCompleted = (chapterId) => {
    // return completedChapter.find((item) => item.chapterId == chapterId);
    console.log(completedChapter);
    return completedChapter.chapterId == chapterId;
    // console.log(courseInfo);
  };
  return (
    <div className="p-3 bg-white rounded-md mt-3">
      <h2 className="font-bold text-center border ">Contents</h2>
      {courseInfo?.courseList?.chapter?.map((item, index) => (
        <div>
          {" "}
          <h2
            className={`p-2 text-[14px] flex justify-between items-center
            border rounded-md px-4 cursor-pointer m-2 hover:bg-gray-500 hover:text-gray-200 capitalize ${
              activeindex == index && "bg-primary text-white"
            } 
            ${isUserAlreadyEnrolled && "hover:bg-primary hover:text-white"} 
            ${
              checkisChapterCompleted(item.id) &&
              " where you left" + "border-green-600 bg-green-600"
            }`}
            onClick={() => {
              setActiveChapterIndex(index);
              setactiveindex(index);
            }}
          >
            {" "}
            {index + 1}. {item.name}
            {activeindex == index || isUserAlreadyEnrolled ? (
              <Play className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </h2>{" "}
        </div>
      ))}
      <p className="text-[15px] text-gray-400">❕Green show where you left </p>
    </div>
  );
}

export default CoursecontentSectionForWatchcourse;
