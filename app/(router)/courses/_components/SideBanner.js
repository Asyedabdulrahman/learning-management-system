"use client";
// import GlobalApi from "@/app/_utils/GlobalApi";
import GlobalApi from "../../../_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const SideBanner = () => {
  const [Sidebannering, Setsidebanner] = useState([]);

  useEffect(() => {
    getSideBannerList();
  }, []);
  useEffect(() => {
    // console.log(Sidebannering);
  }, [Sidebannering]);

  const getSideBannerList = () => {
    GlobalApi.getSideBanner().then((resp) => {
      Setsidebanner(resp.sideBanners);
      // console.log(resp);
    });
  };

  return (
    <div>
      {Sidebannering &&
        Sidebannering?.map((item, index) => (
          <div key={index}>
            <Image
              src={item.banner.url}
              alt="banner"
              width={500}
              height={300}
              className="rounded-xl cursor-pointer"
              onClick={() => window.open(item?.url)}
            />
            <h2>{item.name}</h2>{" "}
            {/* Correct placement of h2 inside the map function */}
          </div>
        ))}
    </div>
  );
};
export default SideBanner;
