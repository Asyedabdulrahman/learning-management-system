"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import CourseVideoDescription from "../../course-preview/[courseId]/_components/CourseVideoDescription";
import Descriptionforwatchcourse from "../_components/Descriptionforwatchcourse";
import CourseContentSection from "../../course-preview/[courseId]/_components/CourseContentSection";
import CoursecontentSectionForWatchcourse from "../_components/CoursecontentSectionForWatchcourse";
import { toast } from "sonner";

function WatchCourse({ params }) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState();
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [completedChapter, setCompletedChapter] = useState();

  useEffect(() => {
    user && params && getUserEnrollCourseDetail();
  }, [params, user]);

  const getUserEnrollCourseDetail = () => {
    GlobalApi.getUserEnrolledCoursetwo(params.enrollId).then((resp) => {
      setCourseInfo(resp.userEnrollCourse);
      setCompletedChapter(resp.userEnrollCourse.completedChapter);
      console.log(resp.userEnrollCourse.completedChapter);
    });
  };

  // save completed chapter id
  const onChapterComplete = (chapterId) => {
    GlobalApi.markChapterCompleted(params.enrollId, chapterId).then((resp) => {
      console.log(resp);
      if (resp) {
        toast("chapter marked as completed");
        getUserEnrollCourseDetail();
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3 ">
      <div className="col-span-2 bg-white p-3">
        {/* the below component is also named as courseVideodescription on the Yt tutorial */}
        <Descriptionforwatchcourse
          courseInfo={courseInfo}
          ActiveChapterIndex={activeChapterIndex}
          setChapterIndex={(chapterId) => onChapterComplete(chapterId)}
        />
      </div>
      <CoursecontentSectionForWatchcourse
        courseInfo={courseInfo}
        isUserAlreadyEnrolled={true}
        setActiveChapterIndex={(index) => setActiveChapterIndex(index)}
        completedChapter={completedChapter}
      />
    </div>
  );
}

export default WatchCourse;
