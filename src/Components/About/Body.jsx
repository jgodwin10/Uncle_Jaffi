import React from "react";

const Body = () => {
  return (
    <div className="max-w-[1065px] py-[40px] md:py-[147px] gap-10 xl:gap-[147px] mx-auto px-6 grid md:grid-cols-2 ">
      <div className="space-y-[33px]">
        <h2 className="text-[36px] text-[#26262A]">
          Exquisite Cuisine with a Memorable Outdoor Experience
        </h2>
        <button className="py-[12px] bg-[#FAB939] text-[#26262A] rounded-[99px] w-[175px]">
          Reserve a Table
        </button>
      </div>
      <p className="text-[#3F4045] leading-[24px]">
        Welcome to Uncle Jaffi, we are a premium gastropub and upscale sports
        bar. We offer a unique atmosphere where food, sports, music and events
        come together seamlessly to give you a savouring experience. Our
        mouth-watering menu features a range of gourmet dishes crafted with the
        finest ingredients. We host events to keep you entertained while
        enjoying expertly mixed drinks and cocktails from our extensive bar. So,
        whether you're here for a lively night out, a special event, or simply
        to relax with friends, Uncle Jaffi promises great times and exceptional
        hospitality in every visit.
      </p>
    </div>
  );
};

export default Body;
