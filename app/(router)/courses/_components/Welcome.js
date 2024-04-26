import React from "react";
import Image from "next/image";

const Welcomebanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/next.svg" alt="logo image" width={100} height={100} />
      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-primary pr-1">Online Learning</span>
          web app
        </h2>
        <h2 className="text-gray-400">explore all the course at one place</h2>
      </div>
    </div>
  );
};

export default Welcomebanner;
