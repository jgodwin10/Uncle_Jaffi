import React, { useState } from "react";
import Img from "../Images/Stories.jpeg";
import NavBar from "../Components/NavBar";
import Pictures from "../Components/Stories/Pictures";
import Videos from "../Components/Stories/Videos";

const Stories = () => {
  const [type, setType] = useState("pictures");

  return (
    <>
      <NavBar />
      <div
        style={{ "--image-url": `url(${Img})` }}
        className=" h-[565px] before:contents-[''] bg-cover bg-center mage before:absolute bg-[image:var(--image-url)] before:top-0 before:w-full before:h-[565px] before:bg-[#00000080] overflow-hidden relatve w-full"
      >
        <div className="absolute space-y-[24px] flex justify-center items-center flex-col h-[565px]  duration-500 md:space-y-[35px] text-center w-full">
          <h3 className="text-[#FAB939] dancing text-[28px] md:text-[48px]">
            Stories
          </h3>
          <h2 className="md:text-[48px] text-[32px] josefin text-[#DDDFE7]">
            We Capture The Best Moments, Take A Look!
          </h2>
        </div>
      </div>

      <div className="py-20 md:px-[70px] px-6">
        <div className="border flex justify-between items-center text-[#9DA0AD] border-[#D2D5E0] mx-auto w-[218px] p-2 rounded-[99px]">
          <button
            onClick={() => setType("pictures")}
            className={`${
              type == "pictures" && "bg-[#FAB939] text-[#3F4045] rounded-[99px]"
            } w-[89px] h-[40px]  `}
          >
            Pictures
          </button>
          <button
            onClick={() => setType("videos")}
            className={`${
              type == "videos" && "bg-[#FAB939] text-[#3F4045] rounded-[99px]"
            } w-[89px] h-[40px]  `}
          >
            Videos
          </button>
        </div>
        <h2 className="text-[#3F4045] text-[28px] md:text-[36px] text-center pt-10">
          Food, Drinks and Pure Vibes
        </h2>

        {/* PICTURES */}
        {type == "pictures" && <Pictures />}

        {/* VIDEOS    */}
        {type == "videos" && <Videos />}
      </div>
    </>
  );
};

export default Stories;
