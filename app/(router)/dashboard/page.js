"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import WelcomeBannerDashboard from "./_components/WelcomeBannerDashboard";
import SideBanner from "../courses/_components/SideBanner";
import ProgressInCourseList from "./_components/ProgressInCourseList";
import GlobalApi from "../../_utils/GlobalApi";

function Dashboard() {
  const [userEnrolledCourses, setUserEnrollCourses] = useState([]);
  const { user } = useUser();
  // console.log(user);

  useEffect(() => {
    getUserAllEnrolledCourseList();
  }, [user]);

  // get all user enrolled user list
  const getUserAllEnrolledCourseList = () => {
    GlobalApi.getUserAllEnrolledCourseList(
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      // console.log(resp);
      setUserEnrollCourses(resp);
      console.log(userEnrolledCourses);
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-3">
      {/* left container */}
      <div className="col-span-3">
        {/* Banner */}
        <WelcomeBannerDashboard user={user} />
        <ProgressInCourseList userEnrolledCourses={userEnrolledCourses} />
      </div>
      {/* right container */}
      <div className="bg-white p-2 rounded-xl ">
        <SideBanner />
      </div>
    </div>
  );
}

export default Dashboard;
