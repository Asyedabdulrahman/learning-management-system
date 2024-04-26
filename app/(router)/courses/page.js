import React from "react";
import Welcome from "./_components/Welcome";
import CourseList from "./_components/CourseList";
import SideBanner from "./_components/SideBanner";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
      {/* left container */}
      <div className="col-span-2">
        {/* Banner */}
        <Welcome />

        {/* course list */}
        <CourseList />
      </div>
      {/* right container */}
      <div className="bg-white p-2 rounded-xl">
        <SideBanner />
      </div>
    </div>
  );
};

export default Courses;
