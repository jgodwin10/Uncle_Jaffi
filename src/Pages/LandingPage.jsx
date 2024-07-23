import React from "react";
import Img from "../Images/landing.png";
import Logo from "../Images/Logo.png";
import Locate from "../Images/location.png";
import Line from "../Images/line.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ "--image-url": `url(${Img})` }}
      className=" md:h-[982px] before:contents-[''] bg-cover botto bg-[image:var(--image-url)] before:absolute before:h-[852px] h-[852px] before:top-0 before:w-full md:before:h-[982px] before:bg-[#00000080] overflow-hidden relatve w-full"
    >
      <div className="absolute px-6 top-0 space-y-[64px] md:space-y-[128px] left-0 w-full md:h-[982px] h-[852px] flex flex-col items-center">
        <img className="size-[130px]" src={Logo} alt="" />
        <div className="text-center space-y-[16px]">
          <h3 className="text-[#FAB939] dancing text-[28px] md:text-[50px]">
            Smoky Southern Flavours
          </h3>
          <p className="text-[#DDDFE7] md:text-[48px] text-[32px]">
            Ultimate Gastropub and Upscale Sports Bar
          </p>
        </div>
        <div className="md:w-[900px] grid grid-cols-2 gap-y-6 md:grid-cols-4 mx-auto px-6">
          <div className="flex justify-evenly items-center">
            <div className="flex  justify-center flex-col items-center">
              <img src={Locate} alt="" />
              <p
                onClick={() => navigate("/home")}
                className="text-[#FAB939] cursor-pointer text-[24px] md:text-[28px]"
              >
                Warri
              </p>
            </div>
            <img src={Line} alt="" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex  justify-center flex-col items-center">
              <img src={Locate} alt="" />
              <p className="text-[#FAB939] text-[24px] md:text-[28px]">
                Port-Harcourt
              </p>
            </div>
            <img className="hidden md:block" src={Line} alt="" />
          </div>
          <div className="flex justify-evenly items-center">
            <div className="flex  justify-center flex-col items-center">
              {/* <img src={Locate} alt="" /> */}
              <p className="text-[#9DA0AD] text-[24px] md:text-[28px]">Asaba</p>
            </div>
            <img src={Line} alt="" />
          </div>
          <div className="flex  justify-center flex-col items-center">
            {/* <img src={Locate} alt="" /> */}
            <p className="text-[#9DA0AD] text-[24px] md:text-[28px]">Abuja</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
