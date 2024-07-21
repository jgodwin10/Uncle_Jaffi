import React from "react";
import Img from "../Images/activity.jpeg";
import NavBar from "../Components/NavBar";
import Upcoming from "../Components/Activities/Upcoming";
import Past from "../Components/Activities/Past";

const Activities = () => {
  return (
    <>
      <NavBar />
      <div
        style={{ "--image-url": `url(${Img})` }}
        className=" md:h-[464px] before:contents-[''] activity bg-cover bg-[image:var(--image-url)] before:absolute before:h-[738px] h-[738px] before:top-0 before:w-full md:before:h-[464px] before:bg-[#00000080] overflow-hidden relatve w-full"
      >
        <div className="absolute flip top-0 left-0 w-full md:h-[464px] h-[738px] flex items-center justify-center">
          <h3 className="text-[#FAB939] dancing text-[64px] md:text-[50px]">
            Activities
          </h3>
        </div>
      </div>
      {/* UPCOMING */}
      <Upcoming />

      {/* PAST */}
      <Past />
    </>
  );
};

export default Activities;
