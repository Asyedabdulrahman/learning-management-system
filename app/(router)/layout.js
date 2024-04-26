import React from "react";
import Sidenav from "./_component/Sidenav";
import Header from "./_component/Header";

function layout({ children }) {
  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed">
        <Sidenav />
      </div>
      <div className="ml-64">
        <Header />

        {children}
      </div>
    </div>
  );
}

export default layout;
