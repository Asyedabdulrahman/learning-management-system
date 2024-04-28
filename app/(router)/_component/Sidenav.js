"use client";

import {
  BadgeIcon,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LayoutGrid,
  Mail,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

function Sidenav() {
  const { user } = useUser();
  const menu = [
    {
      id: 9,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 1,
      name: "All courses",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: "/lms-pro",
      auth: true,
    },
    {
      id: 3,
      name: "Instructor",
      icon: GraduationCap,
      path: "/instructor",
      auth: true,
    },
    {
      id: 4,
      name: "Store",
      icon: LayoutGrid,
      path: "/store",
      auth: true,
    },
    {
      id: 5,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
      auth: true,
    },
  ];

  const path = usePathname();
  return (
    <div className="p-7 bg-white shadow-sm border h-screen">
      <Image alt="image" src="/logos.png" width={170} height={80} />
      <hr className="mt-7" />
      {/* menu list */}
      <div className="mt-5">
        {menu.map(
          (item, index) =>
            item.auth && (
              <Link href={item.path}>
                <div
                  key={index}
                  className={`group flex gap-3 mt-3 p-3 items-center text-gray-600 cursor-pointer hover:bg-primary hover:text-white hover:rounded-sm hover:transition ease-in-out  hover:scale-110 hover:translate-y-1 transition-all ${
                    path.includes(item.path) &&
                    "bg-primary text-white rounded-sm"
                  }`}
                >
                  <item.icon />
                  <h2>{item.name} </h2>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default Sidenav;
