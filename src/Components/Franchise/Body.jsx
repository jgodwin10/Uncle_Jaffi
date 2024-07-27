import React from "react";
import Img from "../../Images/Foot.png";
import Img1 from "../../Images/play.jpeg";
import Img2 from "../../Images/foods.jpeg";

const Body = () => {
  const Items = [
    {
      img: Img,
      title: "Proven Business Model",
      desc: "We offers a well-established and successful business model, reducing the risks associated with starting a new venture. Our efficient operations, marketing strategies, and continuous innovation help drive profitability and growth.",
    },
    {
      img: Img1,
      title: "Established Brand Recognition",
      desc: "You benefit from the strong brand reputation we've built over the years. Our loyal customer base and recognizable name provide a significant advantage in attracting and retaining patrons.",
    },
    {
      img: Img2,
      title: "Innovative Menu and Seasonal Specials",
      desc: "We continuously update our menu with innovative dishes and seasonal specials, keeping customers excited and coming back for more. This dynamic approach helps maintain a competitive edge and boosts customer loyalty.",
    },
  ];

  return (
    <div className="md:px-[70px] py-16 px-6">
      <div className="max-w-[1352px] mx-auto">
        <div className="max-w-[912px] text-center space-y-[42px] mx-auto">
          <h2 className="text-[#26262A] text-[28px] text-center md:text-[36px]">
            About The Brand
          </h2>
          <p className="leading-[24px] text-[#3F4045] md:text-base text-[14px]">
            Established in 2015, Uncle Jaffi's began as a small neighborhood
            eatery and has since grown into a beloved dining destination known
            for its warm hospitality and delicious cuisine. Our unique selling
            points include a vibrant and cozy ambience, an exceptional menu
            crafted from the freshest ingredients, and a dynamic entertainment
            lineup featuring the best local DJs and live music. What sets Uncle
            Jaffi's apart is our commitment to creating a memorable dining
            experience where great food, lively entertainment, and a welcoming
            atmosphere come together seamlessly.
          </p>
        </div>
        <div className="md:pt-24 pt-16 space-y-[36px] md:space-y-[56px]">
          <h2 className="text-[#26262A] text-center md:text-[36px] text-[28px]">
            Benefits Of Owning a Franchise With Us
          </h2>
          <div className="grid xl:grid-cols-3 gap-x-8 gap-y-14 xl:gap-[22px] md:grid-cols-2">
            {Items.map((item, index) => {
              return (
                <div className="space-y-[26px]">
                  <img
                    className="h-[251px] w-full object-cover"
                    src={item.img}
                    alt={item.title}
                  />
                  <h2 className="md:text-[22px] text-[20px] text-[#26262A]">
                    {item.title}
                  </h2>
                  <p className="text-[#3F4045] md:text-base text-[14px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="pt-10 max-w-[912px] mx-auto space-y-[40px] text-center">
            <h1 className="md:text-[36px] text-[28px] text-[#26262A]">
              Want To Own A Franchise?
            </h1>
            <p className="text-[#3F4045] text-[14px] md:text-base">
              Ready to join the Uncle Jaffi's family and own your own franchise?
              We're here to guide you every step of the way with comprehensive
              support and a proven business model. Contact us today to learn
              more and take the first step towards a rewarding business venture!
            </p>
            <button className="py-[12px]  px-[16px] text-[#26262A] bg-[#FAB939] rounded-[99px] w-[175px] h-[48px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
