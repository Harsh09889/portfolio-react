import React from "react";
// import Parallax from "react-rellax";


export default function AboutMe() {
  return (
    <div id="aboutme" className="h-full py-10  relative flex items-center  justify-center flex-col ">
    <div
      className="justify-center flex flex-col transition-all duration-1000"
    >
      
        <h1
          className="
    text-lg
    md:text-xl
    tracking-wider
    font-bold 
    my-5 
    md:my-7
    text-[#1A1914]
    underline 
    underline-offset-4 
    decoration-slate-400"
        >
          About Me
        </h1>
     

      <span 
        id="salutation"

        className="text
      text-4xl 
      md:text-6xl 
       
      text-zinc-600
    
      "
      
      >BioGraphy</span>

      
        <h1
          className={`
          text-lg
          md:text-3xl
          font-normal font-sans mt-10 text-zinc-600 md:min-h-[150px]`}
        >
          I am a Developer and Teacher by choice. Whether it be Designing a
          Website or Teaching someone something I do it in the best way
          possible.
        </h1>

        <div className=" flex flex-col lg:flex-row">
      
          <table className="table-fixed my-7 text-lg md:text-xl flex-[2] lg:w-full">
            <thead></thead>
            <tbody className="">

            <tr><th className="text-left  pr-3 text-zinc-600">NAME</th><td className="text-lg font-mono text-black align-middle">Harsh Kumar</td></tr>
            <tr><th className="text-left  pr-3 text-zinc-600">AGE</th><td className="text-lg font-mono text-black align-middle">21</td></tr>
            <tr><th className="text-left  pr-3 text-zinc-600">FROM</th><td className="text-lg font-mono text-black align-middle">New Delhi</td></tr>
            <tr><th className="text-left  pr-3 text-zinc-600">PHONE</th><td className="text-lg font-mono text-black align-middle">+91 8527718561</td></tr>
            <tr><th className="text-left  pr-3 text-zinc-600">EMAIL</th><td className="text-lg font-mono text-black align-middle">harsh09889@gmail.com</td></tr>
            </tbody>
          </table>

          <div className="lg:w-3/4 flex-col border-2 mt-6 min-h-[15vh]  lg:h-40 flex-1 group border-zinc-600  rounded-2xl flex items-center justify-center ">
          <svg className="w-14  group-hover:animate-bounce  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 344 368 344zM208 320c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 291.3 172.7 320 208 320zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16h-192c0-44.18-35.82-80-80-80h-64C131.8 352 96 387.8 96 432H64c-8.822 0-16-7.178-16-16V160h480V416zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 264 368 264z"/></svg>
          <h1 className="text-black">Download Resume</h1>
          </div>
        </div>
    </div>
  </div>
   
  );
}
