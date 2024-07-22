import React from 'react'
import NavBar from "../Components/NavBar";
import Img from "../Images/Foot.png";
import Body from '../Components/Reservation/Body';

const Reservation = () => {
  return (
    <>
      <div
        style={{ "--image-url": `url(${Img})` }}
        className=" md:h-[378px] before:contents-[''] bg-cover reserve bg-[image:var(--image-url)] before:absolute before:h-[738px] h-[738px] before:top-0 before:w-full md:before:h-[378px] before:bg-[#00000080] overflow-hidden relatve w-full"
      >
        <NavBar />
        <div className="absolute top-0 left-0 w-full md:h-[378px] h-[738px] flex items-center justify-center">
          <h3 className="text-[#FAB939] dancing text-[64px] md:text-[50px]">
            Franchise
          </h3>
        </div>
      </div>

      {/* MAIN BODY */}
      <Body />
    </>
  );
}

export default Reservation