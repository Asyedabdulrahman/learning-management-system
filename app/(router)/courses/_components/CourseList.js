"use client";
// import GlobalApi from "@/app/_utils/GlobalApi";
import GlobalApi from "../../../_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

import { Skeleton } from "../../../../components/ui/skeleton";

function CourseList() {
  const [courseList, setcourseList] = useState([]);

  useEffect(() => {
    getallCourses();
  }, []);

  const getallCourses = () => {
    GlobalApi.getCourselist().then((resp) => {
      setcourseList(resp?.courseLists);
      //   console.log(resp);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg mt-3">
      {/* Title and filter */}
      <div className="flex  items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display course list */}
      <div className="grid grid-cols-2 lg:grid-cols-2 mt-3 gap-3">
        {courseList?.length > 0
          ? courseList.map((item, index) => (
              <Link href={"/course-preview/" + item.slug}>
                <div key={index}>
                  <CourseItem course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div key={index}>
                <Skeleton className="h-[200px] w-full bg-slate-400" />
              </div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
