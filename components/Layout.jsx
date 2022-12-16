import React, { useEffect } from "react";
import { Navbar, Sidebar } from '../components';
const Layout = ({ children }) => {
    

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        {children}                
      </div>
    </div>
  );
};

export default Layout;

