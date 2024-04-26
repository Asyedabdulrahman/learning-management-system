"use client";
// import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Button } from "../../../../../components/ui/button";
import React, { useEffect } from "react";
import Link from "next/link";
import GlobalApi from "../../../../_utils/GlobalApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
  const membership = false;
  const user = useUser();
  const router = useRouter();

  //enroll to the course
  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.slug,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      if (resp) {
        //show toast on successfull Enroll
        // toast("User enrolled Successfully", {
        //   description: "success",
        // });

         if (!user) {
          router.push("/watch-course/" + resp.createUserEnrollCourse.id);
        }
        //Redirect to Watch course
       
      }
    });
  };

  useEffect(() => {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
  }, []);

  return (
    <div className="p-3 text-center rounded-sm bg-primary flex flex-col gap-3 ">
      <h2 className="text-[22px] font-bold text-white">Enroll to the course</h2>
      {/* user has membership and already login */}
      {user && (membership || courseInfo.free) && !isUserAlreadyEnrolled ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll now to Start Learning and Building the project{" "}
          </h2>
          <Link href={"/sign-in"}>
            <Button
              className="bg-white w-full text-primary hover:bg-white hover:text-primary"
              onClick={() => onEnrollCourse()}
            >
              Enroll now{" "}
            </Button>
          </Link>
        </div>
      ) : !user ? (
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-light">
            Enroll now to Start Learning and Building the project{" "}
          </h2>
          <Link href={"/sign-in"}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Enroll now
            </Button>
          </Link>
        </div>
      ) : (
        !isUserAlreadyEnrolled && (
          <div className="flex flex-col gap-3 ">
            <h2 className="text-white font-light">
              Buy monthly membership and get access to all courses
            </h2>
            <Link href={"/checkouts"}>
              <Button className="bg-white text-primary hover:bg-white hover:text-primary w-full">
                Buy Membership just $2.99
              </Button>
            </Link>
          </div>
        )
      )}
      {/* Above section user does not have membership or not signup/login */}

      {isUserAlreadyEnrolled && (
        <div className="flex flex-col gap-3 ">
          <h2 className="text-white font-light">
            Continue to learn your project
          </h2>
          <Link href={"/watch-course/" + isUserAlreadyEnrolled}>
            <Button className="bg-white text-primary hover:bg-white hover:text-primary w-full">
              Continue
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollSection;
