import React from "react";
import Img from "../../Images/everything2.jpeg";
import Img1 from "../../Images/past.jpeg";

const Past = () => {
  return (
    <div className="md:px-[70px] py-10 md:py-20 px-6">
      <div>
        <h2 className="md:text-[36px] text-[28px] text-[#3F4045] pb-4 md:pb-8">
          Past Activities
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* ARRAY OF ITEMS */}

          <div className="w-full shadow relative h-[256px] md:h-[470px] rounded-[20px]">
            <img
              className="w-full object-cover object-center h-[256px] md:h-[470px] rounded-[20px]"
              src={Img}
              alt=""
            />
            <div className="absolute top-0 py-3 px-5 text-white left-0 w-full h-full flex flex-col justify-between items-start ">
              <div className="text-start">
                <p className="md:text-[32px] text-[24px]">Friday Party</p>
              </div>
              <div className="flex md:text-base text-[13px] items-center gap-5">
                <p>Date: 28th June 2024</p>
                <p>Venue: The Playground</p>
              </div>
            </div>
          </div>

          <div className="w-full shadow relative h-[256px] md:h-[470px] rounded-[20px]">
            <img
              className="w-full object-cover object-center h-[256px] md:h-[470px] rounded-[20px]"
              src={Img1}
              alt=""
            />
            <div className="absolute top-0 py-3 px-5 text-white left-0 w-full h-full flex flex-col justify-between items-start ">
              <div className="text-start">
                <p className="md:text-[32px] text-[24px]">Vibes With Oso</p>
              </div>
              <div className="flex md:text-base text-[13px] items-center gap-5">
                <p>Date: 27th June 2024</p>
                <p>Venue: The Playground</p>
              </div>
            </div>
          </div>

          {/* END */}
        </div>
      </div>
    </div>
  );
};

export default Past;
