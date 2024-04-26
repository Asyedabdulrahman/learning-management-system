"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (user) {
      //if user is logged in then redirect to dashboard
      router.push("/dashboard");
    } else {
      //if it is a new user then redirect to courses page
      isLoaded && router.push("/courses");
    }
  }, [user]);
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}

//is loaded is implemented because of useUser take time to get data,
// so at the time useEffect will run and execute else block .
