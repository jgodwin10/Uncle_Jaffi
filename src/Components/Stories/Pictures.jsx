import React from "react";
import Img from "../../Images/activity.jpeg";
import Img1 from "../../Images/story.jpeg";
import Img2 from "../../Images/story1.jpeg";
import Img3 from "../../Images/story2.jpeg";

const Pictures = () => {
  return (
    <div className="grid gap-[24px] pt-8 grid-cols-3">
      <img
        className="h-[386px] object-right rounded-[20px] w-full object-cover col-span-2"
        src={Img}
        alt=""
      />
      <img
        className="h-[386px] w-full object-cover rounded-[20px]"
        src={Img1}
        alt=""
      />
      <div className="col-span-3 grid grid-cols-2 gap-[24px]">
        <img
          className="h-[386px] object-bottom w-full object-cover col- rounded-[20px]"
          src={Img2}
          alt=""
        />
        <img
          className="h-[828px] row-start-1 row-end-4  col-start-2 col-end-4 w-full object-cover rounded-[20px]"
          src={Img3}
          alt=""
        />
      </div>
      <img
        className="h-[386px] row-start-3 object-bottom w-full object-cover col- rounded-[20px]"
        src={Img2}
        alt=""
      />
    </div>
  );
};

export default Pictures;
