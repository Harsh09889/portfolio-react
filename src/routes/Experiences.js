import React from "react";

export default function Experiences(props) {
  return (
    <div  className="flex flex-col bg-[#f3f2f0] border-l-8 border-gray-600 my-5 p-7 ">
      <div className="card mb-4">
        <div className="card-head flex items-center  py-5">
          <h1
            className="
            text-lg
            lg:text-xl
            tracking-wider
            font-bold 
            text-[#1A1914]
            underline 
            underline-offset-4 
            decoration-slate-400"
          >
            {props.boardname}
          </h1>
          <h1 className="font-mono ml-3 text-[#1A1914]">{props.session}</h1>
        </div>
        <span
          id="salutation"
          className="text
            text-2xl 
            lg:text-3xl   
            text-zinc-600
            min-h-[65px]
            md:min-h-[90px]
            
            "
        >
          {props.title}
        </span>

        <h1
          className={`
          mt-6
          text-lg
          md:text-3xl
          font-normal font-sans text-zinc-600 md:min-h-[150px]`}
        >
          {props.description}
        </h1>
      </div>

    </div>
  );
}
