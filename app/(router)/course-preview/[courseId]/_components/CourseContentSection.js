import { Activity, Lock, Play } from "lucide-react";
import React, { use, useState } from "react";

function CourseContentSection({ courseInfo, isUserAlreadyEnrolled }) {
  const [activeindex, setactiveindex] = useState(0);
  return (
    <div className="p-3 bg-white rounded-sm mt-3">
      <h2 className="font-bold">Contents</h2>
      {courseInfo?.chapter?.map((item, index) => (
        <div>
          {" "}
          <h2
            className={`p-2 text-[14px] flex justify-between items-center
            border rounded-sm px-4 cursor-pointer m-2 hover:bg-gray-500 hover:text-gray-200 capitalize ${
              activeindex == index && "bg-primary text-white"
            } 
            ${isUserAlreadyEnrolled && "hover:bg-primary hover:text-white"}`}
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
    </div>
  );
}

export default CourseContentSection;
