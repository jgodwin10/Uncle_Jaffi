import React from 'react'
import Img from "../../Images/video.png";
import Img1 from "../../Images/video1.png";
import Img2 from "../../Images/video2.png";
import Img3 from "../../Images/video3.png";
import Img4 from "../../Images/video4.png";
import Img5 from "../../Images/video5.png";
import Icon from "../../Images/Video-icon.png";

const Videos = () => {
  return (
    <div className="pt-8 grid gap-4 grid-cols-2">
      <div className='max-w-[663px] before:contents-[""] before:w-full before:absolute before:h-full before:top-0 before:left-0 before:bg-[#00000066] relative rounded-[5px] lg:before:rounded-[20px]'>
        <img
          className="lg:h-[902px] h-[272px] w-full rounded-[5px] lg:rounded-[20px] object-cover"
          src={Img}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src={Icon} alt="" />
        </div>
      </div>
      <div className='max-w-[663px] h-[244px] lg:h-[829px] before:contents-[""] before:w-full before:absolute before:h-full before:top-0 before:left-0 before:bg-[#00000066] relative rounded-[5px] lg:before:rounded-[20px]'>
        <img
          className="lg:h-[829px] h-[244px] w-full rounded-[5px] lg:rounded-[20px] object-cover"
          src={Img1}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src={Icon} alt="" />
        </div>
      </div>
      <div className='max-w-[663px] h-[328px] lg:h-[1244px] before:contents-[""] before:w-full before:absolute before:h-full before:top-0 before:left-0 before:bg-[#00000066] relative rounded-[5px] lg:before:rounded-[20px]'>
        <img
          className="lg:h-[1244px] h-[328px] w-full rounded-[5px] lg:rounded-[20px] object-cover"
          src={Img3}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src={Icon} alt="" />
        </div>
      </div>
      <div className='max-w-[663px] -mt-[30px] lg:-mt-[70px] h-[342px] lg:h-[1280px] before:contents-[""] before:w-full before:absolute before:h-full before:top-0 before:left-0 before:bg-[#00000066] relative rounded-[5px] lg:before:rounded-[20px]'>
        <img
          className="lg:h-[1280px] h-[342px] w-full rounded-[5px] lg:rounded-[20px] object-cover"
          src={Img2}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src={Icon} alt="" />
        </div>
      </div>
      <div className='max-w-[663px] h-[242px] lg:h-[906px] before:contents-[""] before:w-full before:absolute before:h-full before:top-0 before:left-0 before:bg-[#00000066] relative rounded-[5px] lg:before:rounded-[20px]'>
        <img
          className="lg:h-[906px] h-[242px] w-full rounded-[5px] lg:rounded-[20px] object-cover"
          src={Img4}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src={Icon} alt="" />
        </div>
      </div>
      <div className='max-w-[663px] -mt-[15px] lg:-mt-[30px] h-[256px] lg:h-[939px] before:contents-[""] before:w-full before:absolute before:h-full before:top-0 before:left-0 before:bg-[#00000066] relative rounded-[5px] lg:before:rounded-[20px]'>
        <img
          className="lg:h-[939px] h-[256px] w-full rounded-[5px] lg:rounded-[20px] object-cover"
          src={Img5}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src={Icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Videos