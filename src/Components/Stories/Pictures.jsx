import React from "react";
import Img from "../../Images/activity.jpeg";

const Pictures = () => {
  return (
    <div className="grid gap-[24px] pt-8 grid-cols-3">
      <img
        className="h-[386px] object-top-center rounded-[20px] w-full object-cover col-span-2"
        src={Img}
        alt=""
      />
      <img className="h-[386px] rounded-[20px]" src={Img} alt="" />
      <img
        className="h-[386px] w-full object-cover col- rounded-[20px]"
        src={Img}
        alt=""
      />
      <img
        className="h-[386px] w-full object-cover col-span-1/5 rounded-[20px]"
        src={Img}
        alt=""
      />
    </div>
  );
};

export default Pictures;
