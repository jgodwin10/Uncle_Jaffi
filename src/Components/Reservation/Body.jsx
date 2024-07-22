import React from "react";
import Icon from "../../Images/icon.svg";

const Body = () => {
  return (
    <div className="max-w-[960px] space-y-[56px] mx-auto py-20 px-6 ">
      <div className="space-y-[34px] max-w-[620px] mx-auto">
        <h2 className="text-[#3F4045] text-[36px] text-center">
          Make A Reservation
        </h2>
        <p className="text-[#3F4045] md:text-base text-[14px] text-center">
          Don't miss out! Book a reservation to guarantee your spot for an
          unforgettable dining and entertainment experience at Uncle Jaffi. We
          look forward to seeing you!
        </p>
      </div>
      <div className="border border-[#C7CAD8] mx-auto w-[192px] md:w-full rounded-[20px] md:rounded-[999px] grid md:grid-cols-5">
        <div className="py-[8px] pl-[32px] pr-[16px] border-b md:border-b-0 md:border-r border-[[#C7CAD8]">
          <div className="flex items-center justify-between">
            <p className="text-[#3F4045] text-[20px]">Event</p>
            <img src={Icon} alt="" />
          </div>
          <p className="text-[#7D808B] text-[14px]">Vibes With Oso</p>
        </div>
        <div className="py-[8px] pl-[32px] pr-[16px] border-b md:border-b-0 md:border-r border-[[#C7CAD8]">
          <div className="flex items-center justify-between">
            <p className="text-[#3F4045] text-[20px]">Location</p>
            <img src={Icon} alt="" />
          </div>
          <p className="text-[#7D808B] text-[14px]">Warri</p>
        </div>
        <div className="py-[8px] pl-[32px] pr-[16px] border-b md:border-b-0 md:border-r border-[[#C7CAD8]">
          <div className="flex items-center justify-between">
            <p className="text-[#3F4045] text-[20px]">Guest</p>
            <img src={Icon} alt="" />
          </div>
          <p className="text-[#7D808B] text-[14px]">1 Guest</p>
        </div>
        <div className="py-[8px] pl-[32px] pr-[16px] border-b md:border-b-0 md:border-r border-[[#C7CAD8]">
          <div className="flex items-center justify-between">
            <p className="text-[#3F4045] text-[20px]">Date</p>
            <img src={Icon} alt="" />
          </div>
          <p className="text-[#7D808B] text-[14px]">July 11, 2024</p>
        </div>
        <div className="py-[8px] pl-[32px] pr-[16px]">
          <div className="flex items-center justify-between">
            <p className="text-[#3F4045] text-[20px]">Time</p>
            <img src={Icon} alt="" />
          </div>
          <p className="text-[#7D808B] text-[14px]">8:00 PM</p>
        </div>
      </div>
      <div className="max-w-[712px] mx-auto space-y-[40px]">
        <div className="text-[#3F4045] space-y-[16px]">
          <p>Full Name</p>
          <input
            className="outline-none text-[#9DA0AD] border border-[#9DA0AD] py-[12px] px-[24px] rounded-[99px] w-full"
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter full name"
          />
        </div>
        <div className="text-[#3F4045] space-y-[16px]">
          <p>Email</p>
          <input
            className="outline-none text-[#9DA0AD] border border-[#9DA0AD] py-[12px] px-[24px] rounded-[99px] w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="text-[#3F4045] space-y-[16px]">
          <p>Phone Number</p>
          <input
            className="outline-none text-[#9DA0AD] border border-[#9DA0AD] py-[12px] px-[24px] rounded-[99px] w-full"
            type="tel"
            name="phone_number"
            id="phone_number"
            placeholder="Enter phone number"
          />
        </div>
        <div className="text-[#3F4045] space-y-[16px]">
          <p>Special Request</p>
          <textarea
            className="outline-none h-[118px] text-[#9DA0AD] border border-[#9DA0AD] py-[12px] px-[24px] rounded-[20px] w-full"
            type="text"
            name="request"
            id="request"
            placeholder="Enter special request"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="py-[12px]  px-[16px] text-[#26262A] bg-[#FAB939] rounded-[99px] w-[175px] h-[48px]">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Body;
