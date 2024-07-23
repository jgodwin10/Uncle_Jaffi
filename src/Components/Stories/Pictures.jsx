import React from "react";
import Img from "../../Images/activity.jpeg";
import Img1 from "../../Images/story.jpeg";
import Img2 from "../../Images/story1.jpeg";
import Img3 from "../../Images/story2.jpeg";
import Img4 from "../../Images/story3.jpeg";
import Img5 from "../../Images/story4.png";
import Img6 from "../../Images/story5.png";
import Img7 from "../../Images/Menu3.jpeg";
import Img8 from "../../Images/Menu2.jpeg";

const Pictures = () => {
  return (
    <div className="grid gap-[2px] pt-8 grid-cols-3">
      <img
        className="md:h-[386px] h-[137px] md:mr-[12px] mr-[6px] object-right rounded-[5px] md:rounded-[20px] w-full object-cover col-span-2"
        src={Img}
        alt=""
      />
      <img
        className="md:h-[386px] h-[137px] md:ml-[8px] ml-[6px]  w-full object-cover rounded-[5px] md:rounded-[20px]"
        src={Img1}
        alt=""
      />
      <div className="col-span-3 w-full grid mt-3 md:mt-[24px] grid-cols-2 gap-3 md:gap-[24px]">
        <img
          className="md:h-[386px] h-[152px] object-bottom w-full object-cover col- rounded-[5px] md:rounded-[20px]"
          src={Img2}
          alt=""
        />
        <img
          className="md:h-[828px] h-[221px] row-start-1 row-end-4  col-start-2 w-full object-cover rounded-[5px] md:rounded-[20px]"
          src={Img3}
          alt=""
        />
        <img
          className="md:h-[902px] h-[234px] row-start-2 row-end-6 object-bottom w-full object-cover col- rounded-[5px] md:rounded-[20px]"
          src={Img4}
          alt=""
        />
        <img
          className="md:h-[464px] h-[165px] w-full col-start-2  object-cover rounded-[5px] md:rounded-[20px]"
          src={Img7}
          alt=""
        />
      </div>
      <div className="grid gap-3 md:gap-[24px] grid-cols-2 col-span-3">
        <img
          className="md:h-[584px] h-[160px] w-[700px] object-cover rounded-[5px] md:rounded-[20px]"
          src={Img5}
          alt=""
        />
        <img
          className="md:h-[1184px] h-[324px] col-start-2 col-end-4  row-start-1 row-end-4 w-[700px] object-cover rounded-[5px] md:rounded-[20px]"
          src={Img8}
          alt=""
        />
        <img
          className="md:h-[584px] h-[155px] w-[700px] object-cover rounded-[5px] md:rounded-[20px]"
          src={Img6}
          alt=""
        />
      </div>
    </div>
  );
};

export default Pictures;
