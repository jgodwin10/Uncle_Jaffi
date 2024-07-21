import React from "react";
import NavBar from "../Components/NavBar";
import Body from "../Components/Ambassador/Body";

const Ambassador = () => {
  return (
    <div>
      <NavBar />
      <div
        // style={{ "--image-url": `url(${Img})` }}
        className=" h-[565px] before:contents-[''] bg-[#000000E5] bg-auto bg-center mage before:absolute bg-[image:var(--image-url)] before:top-0 before:w-full before:h-[565px] before:bg-[#00000080] overflow-hidden relatve w-full"
      >
        <div className="absolute space-y-[20px] flex justify-center items-center flex-col h-[565px]  duration-500 md:space-y-[35px] text-center w-full">
          <h3 className="text-[#FAB939] dancing text-[28px] md:text-[48px]">
            Ambassador
          </h3>
          <h2 className="md:text-[48px] text-[32px] josefin text-[#DDDFE7]">
            Want To Be an Uncle Jaffi Ambassador?
          </h2>
          <button className="py-[12px]  px-[16px] text-[#26262A] bg-[#FAB939] rounded-[99px] w-[175px] h-[48px]">
            Apply Now
          </button>
        </div>
      </div>
      {/* AMBASSADOR BODY */}
      <Body />
    </div>
  );
};

export default Ambassador;
