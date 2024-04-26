import React from "react";
import ProgressCourseItem from "./ProgressCourseItem";

function ProgressInCourseList({ userEnrolledCourses }) {
  console.log(userEnrolledCourses);
  return (
    <div className="p-5 bg-white mt-3 rounded-lg">
      <h2 className="text-primary text-[18px] font-semibold ">
        Recent courselist
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 rounded-md">
        {userEnrolledCourses?.userEnrollCourses?.map((item, index) => (
          <ProgressCourseItem key={index} course={item} />
        ))}
      </div>
    </div>
  );
}

export default ProgressInCourseList;
