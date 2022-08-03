import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";



export default function HeroSection(props) {
  const el = useRef("span");

  useEffect(() => {
    const typed1 = new Typed(el.current, {
      strings: ["नमस्ते", "Hello" ,"ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ","Bonjour", "आदाब","Hola", "Ciao","Olá "], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 120,
      backSpeed: 50,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    },'salutation');

    // Destropying
    return () => {
      typed1.destroy();
    };
  }, []);


  return (
    <div id="home" className=" py-10  relative flex items-center  justify-center flex-col ">
      <div
        className="justify-center flex flex-col transition-all duration-1000"
      >
        
          <h1
            className="
      text-lg
      md:text-xl
      tracking-wider
      font-bold 
      my-14 
      md:my-12 
      text-[#1A1914]
      underline 
      underline-offset-4 
      decoration-slate-400"
          >
            Introduction
          </h1>
       

        <span ref={el}
          id="salutation"

          className="text
        text-4xl 
        md:text-6xl 
        
        my-2
        md:my-2  
        text-zinc-600
        min-h-[65px]
        md:min-h-[90px]
        "
        
        ></span>

        
          <h1
            className={`
            text-lg
            md:text-3xl
            font-normal font-sans mt-12 text-zinc-600 md:min-h-[150px]`}
          >
            I am a Developer and Teacher by choice. Whether it be Designing a
            Website or Teaching someone something I do it in the best way
            possible.
          </h1>

          <span style={{fontFamily:'Mr Dafoe'}} className="text-3xl md:text-6xl mt-20  text-black text-right -rotate-12 origin-center  ">
            Harsh kumar
          </span>
        
      </div>
    </div>
  );
}
