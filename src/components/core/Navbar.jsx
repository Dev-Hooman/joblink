import React, { useState } from "react";
import { Logo } from "../../icons";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const links = ["Home", "How to use", "Key Feature", "Pricing"];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white mt-6 shadow-md shadow-gray-600 rounded-full py-[12px] px-[23px] z-40">
      <div className="flex justify-between items-center w-full px-4 md:px-0">
        <Logo />
        <div className="hidden md:flex justify-center items-center space-x-[66px]">
          {links.map((linkName) => (
            <a className="font-semibold" key={linkName} href={`/${linkName}`}>
              {linkName}
            </a>
          ))}
        </div>
        <a href="/login" className="hidden md:block btn-primary">
          Login
        </a>
        <button
          className="md:hidden flex items-center"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button className="absolute top-4 right-4" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        {links.map((linkName) => (
          <a
            key={linkName}
            href={`/${linkName}`}
            className="text-white text-lg my-2"
            onClick={toggleSidebar}
          >
            {linkName}
          </a>
        ))}
        <a href="/login" className="text-white text-lg my-2" onClick={toggleSidebar}>
          Login
        </a>
      </div>
    </div>
  );
}

export default Navbar;
