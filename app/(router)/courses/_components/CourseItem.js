import React from "react";
import Image from "next/image";

const CourseItem = ({ course }) => {
  // console.log(course);
  return (
    <div className="shadow-xl cursor-pointer hover:shadow-purple-300 ">
      <Image
        src={course?.banner?.url}
        width={500}
        height={150}
        alt="banner"
        className="rounded-md"
      />
      {course.totalChapters?.length !== 0 ? (
        <div className="flex flex-col gap-1 p-1">
          <div className="flex justify-between">
            <h2 className="font-semibold capitalize">{course.name}</h2>
            <p className="text-gray-400 ">{course?.free ? "Free" : "Paid"} </p>
          </div>
          <div className="flex gap-2 items-center ">
            <Image
              alt="chapter image"
              src="/chapter.png"
              width={20}
              height={20}
            />
            <h2 className="text-[13px] text-gray-400"> {course.author}</h2>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 justify-between ">
          <div className="flex gap-2 text-center ">
            <Image
              alt="youtube image"
              src="/youtube.png"
              width={20}
              height={20}
            />
            <h2 className="text-[13px] text-gray-400 text-center">
              {" "}
              {course.author}
            </h2>
          </div>
          <p>{course?.free ? "Free" : "Paid"} </p>
        </div>
      )}
    </div>
  );
};
export default CourseItem;
