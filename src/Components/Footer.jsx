import React from "react";
import Logo from "../Images/Logos.png";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] px-6">
      <div className="max-w-[1352px] text-white gap-[22px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-auto pt-10 md:pt-20 pb-16">
        <div className="space-y-[39px] md:pt-10">
          <h2 className="text-[22px]">Open Hours</h2>
          <div className="text-white font-light space-y-[12px]">
            <p>Mondays - Fridays : 1pm - 11pm</p>
            <p>Saturdays - Sundays : 1pm - 11pm</p>
          </div>
        </div>
        <div className="">
          <img className="size-[150px] -ml-8  md:mx-auto" src={Logo} alt="" />
          <p className="text-white md:text-base text-[14px]  font-light md:text-center">
            At Uncle Jaffi, we offer a delightful experience with our diverse
            menu and selections of exquisite dishes. So, whether you're alone or
            with friends and family, our warm ambiance and exceptional service
            ensure that every visit is memorable.
          </p>
        </div>
        <div className="flex lg:items-end pt-12 flex-col">
          <div className="xl:w-[80%] space-y-[21px]">
            <h2 className="text-[22px]">Subscribe to Our Newsletter</h2>
            <p className="text-[14px] font-light">
              Receive weekly highlights and upcoming events directly to your
              email.
            </p>
            <div className="flex items-center border pl-6 p-2 border-[#9DA0AD] rounded-[99px]">
              <input
                className="bg-transparent text-[#9DA0AD] flex-1 outline-none pr-2"
                type="email"
                placeholder="Type in your email"
              />
              <button className=" text-[14px] bg-[#FAB939] text-[#26262A] rounded-[99px] h-[34px] w-[92px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#E9EAEF] text-[14px] font-light pb-5 text-center">
        <span className="text-[18px]">&copy;</span> 2024 Uncle Jaffi. All rights
        reserved
      </p>
    </div>
  );
};

export default Footer;
