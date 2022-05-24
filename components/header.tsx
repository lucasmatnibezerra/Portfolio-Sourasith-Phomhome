import React from "react";
import Image from "next/image";
import shortmoon from "../public/assets/back.png";

const Header: React.FC = () => {
  return (
    <header className=" w-full flex flex-wrap justify-center  py-8  ">
        <div className=" px-80 space-x-52 flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className=" text-selected-text text-white">Home</a>
          <a href="#about" className="text-selected-text text-white">About</a>
          <div className="justif-center"><Image src="/assets/logoname.png" width={50} height={50} alt="logo"/></div>
          <a href="#work" className="text-selected-text text-white">Work</a>
          <a href="#contact" className="text-selected-text text-white">Contact</a>
        </div>
    </header>
  )
}

export default Header