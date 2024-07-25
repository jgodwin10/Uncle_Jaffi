import React from "react";
import Img from "../../Images/Upcoming.jpeg";

const Upcoming = () => {
  return (
    <div className="md:px-[70px] pt-10 md:py-20 md:text-center px-6">
      <div>
        <h2 className="md:text-[36px] text-[28px] text-[#3F4045] pb-4 md:pb-8">
          Upcoming Activities
        </h2>

        {/* ARRAY OF ITEMS */}

        <div className="md:w-[664px] w-full shadow relative mx-auto h-[256px] md:h-[470px] rounded-[20px]">
          <img
            className="md:w-[664px] w-full object-cover h-[256px] md:h-[470px] rounded-[20px]"
            src={Img}
            alt=""
          />
          <div className="absolute top-0 py-3 px-5 text-white left-0 w-full h-full flex flex-col justify-between items-start ">
            <div className="text-start">
              <p className="md:text-[32px] text-[24px]">Vibes With Oso</p>
              <p>Strictly By Reservation</p>
            </div>
            <div className="flex md:text-base text-[13px] items-center gap-2 md:gap-3">
              <p>Date: Every Thurdays, 6pm</p>
              <p>Venue: The Playground</p>
            </div>
          </div>
        </div>

        {/* END */}
      </div>
    </div>
  );
};

export default Upcoming;
