import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Navbar/>
      <main className="flex-1 overflow-auto p-0 bg-[#F4F7F9]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
