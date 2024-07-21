import React from 'react'
import NavBar from '../Components/NavBar';

const Contacts = () => {

  return (
    <>
      <div
        style={{ "--image-url": `url(${Img})` }}
        className=" md:h-[456px] before:contents-[''] bg-cover bg-center bg-[image:var(--image-url)] before:absolute before:h-[738px] h-[738px] before:top-0 before:w-full md:before:h-[456px] before:bg-[#00000080] overflow-hidden relatve w-full"
      >
        <NavBar />
        <div className="absolute top-0 left-0 w-full md:h-[456px] h-[738px] flex items-center justify-center">
          <h3 className="text-[#FAB939] dancing text-[64px] md:text-[50px]">
            About Us
          </h3>
        </div>
      </div>
      {/* MAIN BODY */}

      <Body />
    </>
  );
}

export default Contacts
