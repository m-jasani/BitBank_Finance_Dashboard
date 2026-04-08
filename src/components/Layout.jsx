
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import useStore from "../store/usestore";

const Layout = () => {
  const { theme } = useStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-[#020617]" : "bg-[#f8fafc]"}`}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="lg:ml-72 pt-20 p-4 sm:p-8 min-h-screen transition-all duration-300 z-10">
          <div className="max-w-7xl mx-auto sm:mt-14 mt-3">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;