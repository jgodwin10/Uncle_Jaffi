import React from "react";
import NavBar from "../Components/NavBar";

const About = () => {
  return (
    <div className=" h-[738px] before:contents-[''] before:absolute before:top-0 before:w-full before:h-[738px] before:bg-[#00000080] overflow-hidden relatve w-full">
      <NavBar />
      <div className="absolute space-y-[24px] duration-500 md:space-y-[35px] top-[25%] md:top-[35%] text-center w-full">
        <h3 className="text-[#FAB939] dancing text-[28px] md:text-[36px]">
          About Us
        </h3>
      </div>
    </div>
  );
};

export default About;
