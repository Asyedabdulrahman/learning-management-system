"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";

function PricingTable() {
  const [subscriptionId, setSubscribtionId] = useState(null);

  return (
    <div className="pricing-table container mx-auto gap-3 ">
      <h2 className="text-center pt-3 text-[35px] text-primary font-bold capitalize">
        Pricing Plans
      </h2>
      <div className="flex flex-wrap justify-center ">
        <div className="pricing-card p-4 m-2 bg-white rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3 ">
          <h3 className="text-xl font-semibold text-center mb-2">Monthly</h3>
          <p className="text-center text-3xl font-bold mb-2">₹200</p>
          <ul className="list-unstyled text-gray-400 text-center">
            <li className="mb-2">Access to All Courses</li>
            <li className="mb-2">Free Source Code</li>
            <li className="mb-2">Free App Membership</li>
            <li>Email & Instagram DM Support</li>
          </ul>
          <Link href="/checkouts">
            <button
              className="w-full py-2 mt-4 font-bold rounded-xl bg-primary text-white hover:bg-blue-700"
              onClick={() => console.log("clicked membership btn")}
            >
              Buy membership
            </button>
          </Link>
        </div>
        <div className="pricing-card p-4 m-2 bg-white  rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-semibold text-center mb-2">Yearly</h3>
          <p className="text-center text-3xl font-bold mb-2">₹1000</p>
          <ul className="list-unstyled text-gray-400 text-center">
            <li className="mb-2">Access to All Courses</li>
            <li className="mb-2">Free Source Code</li>
            <li className="mb-2">Free App Membership</li>
            <li>Email & Instagram DM Support</li>
          </ul>
          <Link href="/checkouts">
            <button
              className="w-full py-2 mt-4 font-bold rounded-xl bg-primary text-white hover:bg-blue-700"
              onClick={() => console.log("clicked membership btn")}
            >
              Buy membership
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
