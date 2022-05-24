import React from "react";
import Image from "next/image";
import about from "../public/assets/aboutbg.svg"

const About: React.FC = ()=> {
  return (
    <section className={`flex flex-col text-center text-3xl md:text-4xl`}>
      <div className="relative"><Image src={about} width={1000} height={1000} alt="about"/></div>
      <div className=" absolute text-white w-full left-4 py-about "><strong className="text-about"><h1>About me</h1></strong></div>
      <div className="absolute text-white text-comment w-full left-20 py-comment">
        My name is Sourasith Phomhome
      <p>I’m a UI Designer and a instrutor
      <br/>based in Montreal. I’m curently
      <br/>working with Design+Code. I’m
      <br/>passionate about creating digital
      <br/>experiences and teaching design.
      <br/>My goal is to help beginners to
      <br/>grow their skills...<span>read more</span>
      </p>
      </div>
    </section>
  )
}

export default About