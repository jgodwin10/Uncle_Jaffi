import React from "react";
import Img from "../../Images/Food.png";

const Item = () => {
  return (
    <div className="bg-[#E9EAEF] overflow-hidden shadow rounded-[20px]">
      <img
        className="h-[256px] w-full hover:scale-[1.1] duration-500 cursor-pointer rounded-t-[20px] object-cover"
        src={Img}
        alt=""
      />
      <div className="py-4 overflow-hidden space-y-2 px-3">
        <div className="text-[#26262A] p w-full text-[20px] flex justify-between items-center">
          <p>Shrimps Spring Rolls</p>
          <p>N4,500</p>
        </div>
        <button className="text-[12px] h-[30px] py-[3px] text-[#5E6068] rounded-[99px] bg-[#DDDFE7] w-[70px]">
          Event
        </button>
      </div>
    </div>
  );
};

export default Item;
