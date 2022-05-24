import React from "react";
import Image from "next/image";
import shortmoon from "../public/assets/back.png";

const Masthead: React.FC = () => {
  return ( 
      <div className=" min-h-screen w-full flex flex-col justify-center ml-96 mt-0 ">
        <h1 className=" font-bold text-white text-masthead">Creative UI Designer<p>Sourasith Phomhome</p><p>Based in Montreal</p></h1>
            <div className="flex justify-start mt-4">
              <button type="button" className="transition ease-in-out delay-150 box-border bg-slate-600 text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-20 rounded-full items-center mr-10 mb-2 ">
                  Hire Me
              </button>
              <button type="button" className="transition ease-in-out delay-150 box-border text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm py-3 px-16 rounded-full text-center mr-2 mb-2">
                  Download CV
              </button>
            </div>
          </div>
  )
}

export default Masthead