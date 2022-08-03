import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [nav, setnav] = useState(false);

  const handleMenuClick = () => {
    setnav(!nav);
  }; 

 

  return (
    <>
      <div className=" w-screen h-[100px] z-50 bg-[#1A1914] fixed overflow-hidden drop-shadow-2xl px-4 justify-between items-center flex top-0">
        <div className="hidden lg:flex  flex-1 ">
          
        </div>

        <div className="lg:hidden invisible w-5 h-5 bg-red-500">
         
        </div>


        <div className="flex-1 relative h-[70px] flex flex-col items-start ">
          <h1 className={'absolute left-[50%] translate-x-[-50%]  text-3xl lg:text-4xl font-extrabold  transition duration-300 ease-in'}>
            Harsh
          </h1>
          <h2 className={'absolute left-[50%] translate-x-[-50%] font-normal bottom-0 text-lg transition duration-300 delay-[0.1s] ease-in z-[60]'}>Kumar</h2>
        </div>

        <ul className="hidden lg:flex flex-1 justify-end ">
          <a href="#home"><li>Home</li></a>
          <a href="#mywork"><li>My Work</li></a>
          <a href="#aboutme"><li>About Me</li></a>
          <li>Contact Me</li>
        </ul>
        <div className="lg:hidden">
          {!nav ? (
            <MenuIcon className="w-6 " onClick={handleMenuClick} />
          ) : (
            <XIcon className="w-6 " onClick={handleMenuClick} />
          )}
        </div>
      </div>

      <ul
        className={
          !nav ? "absolute w-full top-[60px] pt-8 px-8 translate-y-[-150%] transition-all duration-1000 ease-in z-20" : " fixed bg-[#1D1B19] z-40 w-full pt-8 px-8 top-[60px] translate-y-0 transition-all duration-1000 ease-out"
        }
      >
        <a href="#home"><li className="border-b-[1px] border-zinc-200 w-full text-center">Home</li></a>
        <a href="#mywork"><li className="border-b-[1px] border-zinc-200 w-full text-center">
          My Work
        </li></a>
        <a href="#aboutme"><li className="border-b-[1px] border-zinc-200 w-full text-center">
          About Me
        </li></a>
        <a href="#contactme"><li className="border-b-[1px] border-zinc-200 w-full text-center">
          Contact Me
        </li></a>
        <div className="flex flex-col w-full">
          <button className="my-2  text-white bg-zinc-700 p-3 mx-1 rounded-lg border-white">Sign in</button>
          <button className="mb-2 text-white bg-zinc-700 p-3 mx-1 rounded-lg border-white">Sign Up</button>
        </div>
      </ul>
    </>
  );
}
