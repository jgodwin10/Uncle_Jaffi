import React from "react";
import Img from "../../Images/Menu.png";
import Img1 from "../../Images/Menu1.jpeg";
import Img2 from "../../Images/Menu2.png";

const Menu = () => {
  return (
    <div className="lg:px-[70px] px-6">
      <div className=" max-w-[1352px] mx-auto py-8">
        <h2 className="josefin text-center text-[28px] md:text-[36px] text-[#3F4045]">
          Our Menu Specials
        </h2>
        <div className="grid md:py-[80px] py-10 gap-[36px] md:gap-[24px] md:grid-cols-3">
          <div className="flex flex-col items-center gap-[24px] ">
            <img
              className="xl:size-[380px] lg:size-[280px] md:size-[230px] shadow size-[280px] rounded-full object-cover"
              src={Img}
              alt=""
            />
            <p className="md:text-[20px] text-[14px]">Uncle Jaffi’s Picante</p>
          </div>
          <div className="flex flex-col items-center gap-[24px] ">
            <img
              className="xl:size-[380px] lg:size-[280px] md:size-[230px] size-[280px] shadow rounded-full object-cover"
              src={Img1}
              alt=""
            />
            <p className="md:text-[20px] text-[14px]">Chicken Pesto Pasta</p>
          </div>
          <div className="flex flex-col items-center gap-[24px] ">
            <img
              className="xl:size-[380px] lg:size-[280px] md:size-[230px] shadow size-[280px] rounded-full object-cover"
              src={Img2}
              alt=""
            />
            <p className="md:text-[20px] text-[14px]">
              Uncle’s Whole Flaming Chicken
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="py-[12px] uppercase shadow px-[16px] bg-[#FAB939] rounded-[99px] w-[150px] xl:w-[175px]">
            View menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
