import React, { useState } from "react";
import Img from "../../Images/everything.jpeg";
import Img1 from "../../Images/everything1.jpeg";
import Img2 from "../../Images/everything2.jpeg";
import Img3 from "../../Images/everything3.jpeg";

const Everthing = () => {
  const [isShown, setIsShown] = useState("");

  return (
    <div className="max-w-[1352px] px-4 py-12 md:py-20  mx-auto">
      <h2 className="josefin text-center text-[24px] md:text-[36px] text-[#3F4045]">
        Everything We Are About
      </h2>
      <div className="grid pt-5 md:pt-10 md:grid-cols-2 gap-[16px] lg:gap-[22px]">
        <div
          onMouseEnter={() => setIsShown("ambience")}
          onMouseLeave={() => setIsShown("")}
          className="md:h-[380px] h-[208px] cursor-pointer relative before:contents-[''] before:absolute before:top-0 before:w-full before:md:h-[380px] before:h-[208px] before:bg-[#0000004D]  rounded-[14.96px] overflow-hidden"
        >
          <img
            className="md:h-[380px] h-[208px] hover:scale-[1.1] duration-500 cursor-pointer overflow-hidden w-full rounded-[14.96px] object-cover"
            src={Img}
            alt=""
          />
          <div className="md:text-[24px] text-[15px] gap-[24px] flex-col absolute top-0 left-0 w-full h-full text-white flex justify-center items-center">
            <div className={`text-center `}>
              <p>Ambience</p>
              <p
                className={`md:text-base text-[12px] ${
                  isShown == "ambience" ? "" : "hidden"
                } px-[30px] pb-[24px]  duration-1000 text-center`}
              >
                At Uncle Jaffi's, the ambience is a perfect blend of cozy
                comfort and vibrant energy, featuring warm lighting, stylish
                decor, and an inviting atmosphere. With lively music, friendly
                staff, and a welcoming vibe, every visit feels like a special
                occasion.
              </p>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsShown("food")}
          onMouseLeave={() => setIsShown("")}
          className="md:h-[380px] h-[208px] cursor-pointer relative before:contents-[''] before:absolute before:top-0 before:w-full before:md:h-[380px] before:h-[208px] before:bg-[#0000004D]  rounded-[14.96px] overflow-hidden"
        >
          <img
            className="md:h-[380px] h-[208px] hover:scale-[1.1] duration-500 cursor-pointer overflow-hidden w-full rounded-[14.96px] object-cover"
            src={Img1}
            alt=""
          />
          <div className="md:text-[24px] text-[15px] gap-[24px] flex-col absolute top-0 left-0 w-full h-full text-white flex justify-center items-center">
            <div className={`text-center `}>
              <p>Food</p>
              <p
                className={`md:text-base text-[12px] ${
                  isShown == "food" ? "" : "hidden"
                } px-[30px] pb-[24px]  duration-1000 text-center`}
              >
                Uncle Jaffi's serves an exceptional array of dishes, each
                prepared with the freshest ingredients and crafted to delight
                your taste buds. From hearty mains to delectable desserts, our
                menu offers a diverse selection that promises to satisfy every
                craving.
              </p>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsShown("entertainment")}
          onMouseLeave={() => setIsShown("")}
          className="md:h-[380px] h-[208px] cursor-pointer relative before:contents-[''] before:absolute before:top-0 before:w-full before:md:h-[380px] before:h-[208px] before:bg-[#0000004D]  rounded-[14.96px] overflow-hidden"
        >
          <img
            className="md:h-[380px] h-[208px] hover:scale-[1.1] duration-500 cursor-pointer overflow-hidden w-full rounded-[14.96px] object-cover"
            src={Img2}
            alt=""
          />
          <div className="md:text-[24px] text-[15px] gap-[24px] flex-col absolute top-0 left-0 w-full h-full text-white flex justify-center items-center">
            <div className={`text-center `}>
              <p>Entertainment</p>
              <p
                className={`md:text-base text-[12px] ${
                  isShown == "entertainment" ? "" : "hidden"
                } px-[30px] pb-[24px]  duration-1000 text-center`}
              >
                At Uncle Jaffi's, entertainment is top-notch, featuring live
                music performances, themed parties, and exciting events that
                keep the atmosphere lively and engaging. With the best DJ in the
                city and a schedule packed with fun activities, there's never a
                dull moment at Uncle Jaffi's.
              </p>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsShown("lifestyle")}
          onMouseLeave={() => setIsShown("")}
          className="md:h-[380px] h-[208px] cursor-pointer relative before:contents-[''] before:absolute before:top-0 before:w-full before:md:h-[380px] before:h-[208px] before:bg-[#0000004D]  rounded-[14.96px] overflow-hidden"
        >
          <img
            className="md:h-[380px] h-[208px] hover:scale-[1.1] duration-500 cursor-pointer overflow-hidden w-full rounded-[14.96px] object-cover"
            src={Img3}
            alt=""
          />
          <div className="md:text-[24px] text-[15px] gap-[24px] flex-col absolute top-0 left-0 w-full h-full text-white flex justify-center items-center">
            <div className={`text-center `}>
              <p>LifeStyle</p>
              <p
                className={`md:text-base text-[12px] ${
                  isShown == "lifestyle" ? "" : "hidden"
                } px-[30px] pb-[24px]  duration-1000 text-center`}
              >
                Uncle Jaffi's embodies a dynamic and vibrant lifestyle, where
                great food, lively entertainment, and a welcoming atmosphere
                come together to create unforgettable experiences. It's more
                than just a restaurant—it's a hub for socializing, celebrating,
                and enjoying life's best moments with friends and family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Everthing;
