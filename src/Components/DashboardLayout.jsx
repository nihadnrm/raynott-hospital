import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-blue-50 min-h-screen w-full overflow-x-hidden">

      <Sidebar />

      <main className="flex-1 p-4 pt-16 md:pt-4 w-full">
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;
