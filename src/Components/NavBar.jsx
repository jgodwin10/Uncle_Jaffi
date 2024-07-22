import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ clas }) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (scrollY > 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  return (
    <div
      className={` w-full ${
        nav ? "navbar fixed" : "absolute"
      } duration-300 ${clas} left-0 z-[9999999] pr-4  top-0`}
    >
      <div className="max-w-[1352px] h-[100px] md:h-[128px] flex items-center justify-between mx-auto">
        <img className="w-[120.81px] h-[120px]" src={Logo} alt="" />
        <div className="items-center hidden lg:flex xl:text-base text-[14px] uppercase nav gap-4 xl:gap-8 text-[#D2D5E0] josefin">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/activities"}>Activities</Link>
          <Link to={"/stories"}>Stories</Link>
          <Link to={"/franchise"}>Franchise</Link>
          <Link to={"/ambassador"}>Ambassador</Link>
          <Link>Contact</Link>
        </div>
        <button
          onClick={() => navigate("/reservation")}
          className="py-[12px] hidden md:block px-[16px] bg-[#FAB939] rounded-[99px] w-[150px] xl:w-[175px]"
        >
          RESERVATION
        </button>
      </div>
    </div>
  );
};

export default NavBar;
