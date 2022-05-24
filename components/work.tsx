import React from "react";
import Image from "next/image";
import workbg from "../public/assets/bgwork.svg"
import phone1 from "../public/assets/phone1.svg"
import phone2 from "../public/assets/phone2.svg"
import phone3 from "../public/assets/phone3.svg"

const Work: React.FC = () => {
  return (
    <div className=" py-6 flex flex-col justify-center sm:py-12 ">
      <div className="text-center">
        <h1 className="text-white font-bold font-size-w">My recent Work</h1>
      </div>
      <div className="relative py-3 px-96 ">
        <div className=" h-96 bg-white shadow-lg sm:rounded-3xl  bg-opacity-30 ">
          <div className="flex md:justify-center -space-x-56">
              <div><Image src={phone1} height={500} width={500} alt="phone1"/></div>
              <div><Image src={phone2} height={550} width={550} alt="phone1"/></div>
              <div><Image src={phone3} height={500} width={500} alt="phone1"/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work