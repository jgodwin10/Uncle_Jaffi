import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Img from "../Images/MenuPage.png";
import Img1 from "../Images/Menu2.jpeg";
import Img2 from "../Images/Menu3.jpeg";
import Img3 from "../Images/Menu4.jpeg";
import Food from "../Components/Main/Food";
import Drinks from "../Components/Main/Drinks";
import TakeOut from "../Components/Main/TakeOut";
import Shisha from "../Components/Main/Shisha";

const Menu = () => {
  const [menus, setMenus] = useState("Food");
  const [image, setImage] = useState(Img);
  const menuArray = ["Food", "Drinks", "Take Out", "Shisha"];

  useEffect(() => {
    if (menus == "Food") {
      setImage(Img);
    } else if (menus == "Drinks") {
      setImage(Img1);
    } else if (menus == "Take Out") {
      setImage(Img2);
    } else {
      setImage(Img3);
    }
  }, [menus]);

  return (
    <>
      <div
        style={{ "--image-url": `url(${image})` }}
        className=" md:h-[565px] before:contents-[''] bg-cover bg-center bg-[image:var(--image-url)] before:absolute before:h-[738px] h-[738px] before:top-0 before:w-full md:before:h-[565px] before:bg-[#00000080] overflow-hidden relatve w-full"
      >
        <NavBar />
        <div className="absolute top-0 left-0 flex-col w-full md:h-[565px] h-[738px] flex items-center justify-center">
          <h3 className="text-[#FAB939] -mt-28 md:mt-0 dancing text-[64px] md:text-[50px]">
            Our Menu
          </h3>
        </div>
        <div className="flex absolute md:items-end  w-full top-0 h-[738px] md:h-[565px] text-white md:justify-between">
          <div className="mx-auto text-[#D2D5E0] lg:text-[32px] w-[1008px] menu pb-16 gap-9 flex text-[24px] px-8 md:justify-between md:flex-row flex-col items-center justify-end md:items-center">
            {menuArray.map((item, index) => {
              return (
                <p
                  key={index}
                  onClick={() => setMenus(item)}
                  className={`${
                    menus == item
                      ? 'before:contents-[""] before:w-full before:absolute before:top-9 md:before:top-12 text-[#FAB939] before:h-[3px] before:bg-[#FAB939]'
                      : ""
                  } relative duration-500`}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {/* FOOD */}
      {menus == "Food" && <Food />}

      {/* DRINKS */}
      {menus == "Drinks" && <Drinks />}

      {/* TAKE_OUT */}
      {menus == "Take Out" && <TakeOut />}

      {/* SHISHA  */}
      {menus == "Shisha" && <Shisha />}
    </>
  );
};

export default Menu;
