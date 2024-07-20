import React from "react";
import NavBar from "../Components/NavBar";
import Everthing from "../Components/Home/Everthing";
import Menu from "../Components/Home/Menu";
import About from "../Components/Home/About";
import Foot from "../Components/Home/Foot";

const HomePage = () => {
  return (
    <>
      <div className=" h-[738px] before:contents-[''] image before:absolute before:top-0 before:w-full before:h-[738px] before:bg-[#00000080] overflow-hidden relatve w-full">
        <NavBar />
        <div className="absolute space-y-[24px] duration-500 md:space-y-[35px] top-[25%] md:top-[35%] text-center w-full">
          <h3 className="text-[#FAB939] dancing text-[28px] md:text-[36px]">
            Welcome
          </h3>
          <h2 className="md:text-[48px] text-[32px] josefin text-[#DDDFE7]">
            Savour the Experience One Taste at A Time
          </h2>
          <button className="py-[12px] hidden md:block mx-auto px-[16px] text-[#26262A] bg-[#FAB939] rounded-[99px] w-[175px] h-[48px]">
            Book a Table
          </button>
          <button className="py-[12px] md:hidden  px-[16px] text-[#26262A] bg-[#FAB939] rounded-[99px] w-[175px] h-[48px]">
            Reserve a Table
          </button>
        </div>
      </div>

      {/* EVERYTHING WE'RE */}

      <Everthing />

      {/* MENU */}

      <Menu />

      {/* ABOUT */}
      <About />

      {/* FOOT */}
      <Foot />
    </>
  );
};

export default HomePage;
