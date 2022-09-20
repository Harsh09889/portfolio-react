import React from "react";

export default function Skills(props) {
    
    return (
        <>
            <div className="flex card bg-[#f3f2f0] border-l-8 border-gray-600 my-3 p-7 justify-between items-center">
                <span
                    id="salutation"
                    className="text
                    text-2xl 
                    lg:text-3xl   
                    text-zinc-600
                    "
                >
                    {props.title}
                </span>
                <div className="flex h-[32px] sm:h-[50px]">
                    {props.children}
                </div>
            </div>


        </>
    );
}
