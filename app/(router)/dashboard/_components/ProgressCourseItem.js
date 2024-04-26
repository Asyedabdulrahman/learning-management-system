import Image from "next/image";
import React from "react";
import { Progress } from "../../../../@/components/ui/progress";
import Link from "next/link";
// import { Progress } from "@/components/ui/progress";

function ProgressCourseItem({ course }) {
  // const getTotalCompletedChapterPerc = (item) => {
  //   const perc = (item?.length / item?.courseList?.chapter?.length) * 100;
  //   return perc;
  // };
  return (
    <Link href={"/course-preview/" + course.courseList?.slug}>
      <div className="shadow-xl cursor-pointer hover:shadow-purple-300 w-full ">
        <Image
          src={course?.courseList?.banner?.url}
          width={500}
          height={150}
          alt="banner"
          className="rounded-md"
        />
        <div className="flex flex-col gap-1 p-2">
          <h2 className="font-medium">{course.courseList.name}</h2>
          <h2 className="text-[12]px text-gray-400 flex justify-between">
            {course.courseList.author}
            <span>
              <h2>4/{course?.courseList?.chapter?.length}Chapters</h2>
            </span>
          </h2>
          <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: "57%" }}
            >
              57%
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProgressCourseItem;
