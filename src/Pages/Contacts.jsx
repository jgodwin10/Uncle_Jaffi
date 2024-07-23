import React from "react";
import NavBar from "../Components/NavBar";

const Contacts = () => {
  return (
    <>
      <div className=" md:h-[377px] bg-[#000000E5] h-[738px] overflow-hidden relatve w-full">
        <NavBar />
        <div className="absolute top-6 left-0 w-full md:h-[377px] h-[738px] flex items-center justify-center">
          <h3 className="text-[#FAB939] dancing text-[64px] md:text-[50px]">
            Contact
          </h3>
        </div>
      </div>
      {/* MAIN BODY */}

      <div className="max-w-[536px] text-[#3F4045] py-20 grid md:grid-cols-2 gap-[56px] mx-auto px-6">
        <div className="space-y-[50px] flex justify-center flex-col items-center">
          <h2 className="text-[#3F4045] text-[28px] md:text-[30px]">Warri</h2>
          <div className="space-y-[24px]">
            <p>Location of Asaba Branch</p>
            <p>Email of Asaba Branch</p>
            <p>Numbers of Asaba Branch</p>
          </div>
        </div>
        <div className="space-y-[50px] flex justify-center flex-col items-center">
          <h2 className="text-[#3F4045] text-[28px] md:text-[30px]">
            Port-Harcourt
          </h2>
          <div className="space-y-[24px]">
            <p>Location of Asaba Branch</p>
            <p>Email of Asaba Branch</p>
            <p>Numbers of Asaba Branch</p>
          </div>
        </div>
        <div className="space-y-[24px] flex justify-center flex-col items-center">
          <h2 className="text-[#3F4045] text-[28px] md:text-[36px]">Asaba</h2>
          <div className="space-y-[24px]">
            <p>Coming Soon!</p>
          </div>
        </div>
        <div className="space-y-[24px] flex justify-center flex-col items-center">
          <h2 className="text-[#3F4045] text-[28px] md:text-[36px]">Abuja</h2>
          <div className="space-y-[24px]">
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
