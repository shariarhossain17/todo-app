import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";

const Main = () => {
  return (
    <div className="">
      <NavBar />
      <div className="px-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
