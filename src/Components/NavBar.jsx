import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import Nav from "../Images/Vector.png";
import Plus from "../Images/plus.png";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ clas }) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#D2D5E0");
  const [NavOpen, setNavOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (scrollY > 10) {
      setNav(true);
    } else {
      setNav(false);
    }
    if (scrollY > 550) {
      setColor("#000");
    } else {
      setColor("#D2D5E0");
    }
  });

  return (
    <>
      <div
        className={` w-full ${
          nav ? "navbar fixed" : "absolute"
        } duration-300 ${clas} left-0 z-[9999999]   top-0`}
      >
        <div className="md:pr-[70px] max-w-[1472px] mx-auto h-[100px] md:h-[128px] flex items-center justify-between md:pl-6 pr-6">
          <img className="md:size-[180px] size-[120px]" src={Logo} alt="" />
          <div
            className={`items-center hidden lg:flex xl:text-base pr-6 text-[13px] uppercase nav gap-4 xl:gap-8 text-[${color}] josefin`}
          >
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/menu"}>Menu</NavLink>
            <NavLink to={"/activities"}>Activities</NavLink>
            <NavLink to={"/stories"}>Stories</NavLink>
            <NavLink to={"/franchise"}>Franchise</NavLink>
            <NavLink to={"/ambassador"}>Ambassador</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
          <button
            onClick={() => navigate("/reservation")}
            className="py-[12px] hidden lg:block lg:text-[14px] xl:text-base px-[16px] bg-[#FAB939] rounded-[99px] w-[140px] xl:w-[175px]"
          >
            RESERVATION
          </button>
          <img
            onClick={() => setNavOpen(true)}
            className="lg:hidden cursor-pointer"
            src={Nav}
            alt=""
          />
        </div>
      </div>
      <div
        className={`fixed ${
          NavOpen ? "translate-x-0" : "translate-x-[120vw]"
        } duration-500 w-full text-[#D2D5E0]   gap-[40px] nav h-screen z-[9999999999] flex flex-col pt-20 items-center top-0 left-0 bg-black`}
      >
        <img
          onClick={() => setNavOpen(false)}
          className="absolute top-8 right-10 lg:hidden cursor-pointer"
          src={Plus}
          alt=""
        />
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/menu"}>Menu</NavLink>
        <NavLink to={"/activities"}>Activities</NavLink>
        <NavLink to={"/stories"}>Stories</NavLink>
        <NavLink to={"/franchise"}>Franchise</NavLink>
        <NavLink to={"/ambassador"}>Ambassador</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>

        <button
          onClick={() => navigate("/reservation")}
          className="py-[12px] text-[#26262A] hover:text-[#26262A] px-[16px] bg-[#FAB939] rounded-[99px] w-[150px] xl:w-[175px]"
        >
          RESERVATION
        </button>
      </div>
    </>
  );
};

export default NavBar;
