import React from 'react'
import dp from "../assets/dp.jpeg"
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function ProfileContainer(props) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Harsh Kumar", "Teacher", "Web Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);




  return (
    <div className={`relative h-full lg:h-[calc(65%+15vw)] w-[85%]`}>
      <div
        className={`
        before:content-['']
        before:absolute
        before:block
        before:h-[110%]
        before:w-[85%]
        before:left-[50%]
        before:translate-x-[-50%]
        before:border-2
        before:border-[#1A1914]/50
        before:scale-y-[1.02] 
        before:rounded-lg 
        
        absolute flex items-center justify-center  h-[80%] sm:h-[85%]  w-[100%] lg:w-[85%] md:max-w-[550px] border-2  border-[#1A1914]/50 rounded-lg 
        left-[50%] -translate-x-1/2 
        
        after:content-['']
        after:absolute
        after:block
        after:w-[110%]
        after:h-[85%]
        after:top-[50%]
        after:translate-y-[-50%]
        after:border-2
        after:border-[#1a1914]/50
        after:scale-x-[1.02] 
        after:rounded-lg
        `}>

          <div className="absolute w-[65%] md:w-[55%] h-[65%]  top-[10%]  overflow-hidden flex items-start  justify-center hover:shadow-lg hover:shadow-[#1D1B19]
            z-20 rounded-lg ">
           <img className="h-full w-full z-18" src={dp} alt="/" />
          </div>

        <p className="absolute bottom-[20%] text-[#82796C] tracking-wider  text-sm">Hey there, This is me!!</p>
        <h1 ref={el} className="
        absolute 
        bottom-[9%] 
        md:bottom-[11%] 
        py-1
        text-lg
        text-[#1A1914]
        min-w-[70%]
        lg:min-w-[75%]
        md:min-h-[44px]
        min-h-[40px]
        lg:text-xl 
        text-[zinc-900]
        font-normal
        px-6
        lg:px-[10%]
        text-center
        
        before:content-['<']
        before:absolute
        before:left-0
        before:top-1/2
        before:-translate-y-1/2
        before:text-4xl
        before:font-mono
        before:text-green-500
        before:animate-pulse

        after:content-['/>']
        after:absolute
        after:right-0
        after:top-1/2
        after:-translate-y-1/2
        after:text-4xl
        after:font-mono
        after:text-green-500
        after:animate-pulse
        ">
          
        </h1>

      </div>
    </div>
  )
}
