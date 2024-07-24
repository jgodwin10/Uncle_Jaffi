import React from "react";
import Img from "../../Images/About.jpeg";

const About = () => {
  return (
    <div className="max-w-[1272px] mx-auto space-y-[24px] py-20 gap-[20px] grid md:grid-cols-2 lg:-[120px]">
      <img
        className="md:w-[624px] h-[561px] object-right-bottom cursor-pointer rounded-[20px] object-cover"
        src={Img}
        alt=""
      />
      <div className="flex items-center">
        <div className="md:w-[614px] space-y-[26px] shadow py-[32px] px-[16px] xl:p-[40px] xl:h-[456px] bg-[#FAB939]">
          <button className="text-[12px] h-[30px] py-[3px] rounded-[99px] bg-[#FCD07B] w-[70px]">
            Event
          </button>
          <h2 className="lg:text-[35px] text-[28px] text-[#3F4045]">
            Vibe With Oso, Every Thursday !
          </h2>
          <p className="text-[#3F4045] lg:text-base text-[14px] leading-[24px]">
            Join us for an unforgettable evening hosted by the best DJ in the
            city, spinning the hottest tracks and keeping the energy high all
            night long. This exclusive event promises fantastic music, vibrant
            vibes, and a lively crowd, making it the perfect way to kick off
            your weekend. Please note that entry is strictly by reservation, so
            be sure to book your spot in advance. Don't miss out on the most
            exciting party in town—reserve your place today and let the good
            times roll at Uncle Jaffi's!
          </p>
          <button className="border border-[#26262A] text-[#26262A] rounded-[99px] w-[175px] h-[48px]">
            Book a Spot
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
