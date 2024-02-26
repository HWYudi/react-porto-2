import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky w-full top-0 bg-[#27313B] text-white">
      <div className="max-w-screen-xl mx-auto py-4">
        <div className="px-10 xl:px-0 md:flex items-center justify-between">
          <div className="font-bold text-xl cursor-pointer flex items-center">
            <h1>Yudi</h1>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="absolute right-4 top-5 cursor-pointer md:hidden"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            )}
          </div>

          <div
            className={`md:flex  shadow-md md:shadow-none md:items-center  absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  bg-[#27313B] ${
              open ? "top-[55px]" : "top-[-490px]"
            }`}
          >
            <div className="ml-8 md:ml-0 mt-1 md:mt-0 mb-4 md:mb-0 flex flex-col md:flex-row md:gap-5">
              <a href="#about" className=" hover:text-[#5E3BEE]">
                <div className="items-center">About</div>
              </a>
              <a
                href="#experience"
                className="hover:text-[#5E3BEE] duration-200"
              >
                <div className="items-center">Experience</div>
              </a>
              <a href="#services">
                <h1 className="items-center hover:underline">Services</h1>
              </a>
              <a href="#project">
                <h1 className="items-center hover:underline">Project</h1>
              </a>
              <a href="#contact" className="block md:hidden ">
                <div className="items-center">Contact</div>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
