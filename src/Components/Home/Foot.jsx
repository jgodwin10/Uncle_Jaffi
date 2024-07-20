import React from "react";
import Img from "../../Images/Foot.png";

const Foot = () => {
  return (
    <div
      style={{ "--image-url": `url(${Img})` }}
      className={`w-full relative bg-[image:var(--image-url)] before:contents-[''] before:h-[384px] before:absolute before:top-0 before:w-full before:bg-[#00000066] overflow-hidden bg-cover md:bg-bottom h-[384px]`}
    >
      {/* <img className=" w-full object-fill h-[384px]" src={Img} alt="" /> */}
      <div className="absolute gap-[24px] top-0 left-0 w-full h-full flex justify-center items-center flex-col">
        <p className="md:text-[36px] text-center text-[28px] text-white">
          The Perfect Place to Make Beautiful Memories
        </p>
        <button className="py-[12px] bg-[#FAB939] text-[#26262A] rounded-[99px] w-[175px]">
          Reserve a Table
        </button>
      </div>
    </div>
  );
};

export default Foot;
