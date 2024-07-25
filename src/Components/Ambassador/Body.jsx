import React from "react";
import Img from "../../Images/ambassador.jpeg";
import Img1 from "../../Images/Stories.jpeg";
import Img2 from "../../Images/past.jpeg";

const Body = () => {
  return (
    <div className="md:px-[70px] py-20 px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        <img
          className="md:h-[384px] h-[256px] shadow rounded-[20px] object-cover w-full"
          src={Img}
          alt=""
        />
        <img
          className="md:h-[384px] h-[256px] shadow rounded-[20px] object-cover w-full"
          src={Img1}
          alt=""
        />
        <img
          className="md:h-[384px] h-[256px] shadow scale-x-[-1] rounded-[20px] object-cover w-full"
          src={Img2}
          alt=""
        />
      </div>
      <div className="pt-16 max-w-[894px] mx-auto space-y-[32px] md:space-y-[64px] text-center ">
        <h2 className="md:text-[36px] text-[28px] text-[#3F4045]">
          Wanna make it official?
        </h2>
        <div className="text-[#3F4045] md:text-base text-[14px] space-y-6">
          <p>
            If you love Uncle Jaffi (and who doesn't?), it's time to take that
            fandom to the next level. Use your influence to spread the Uncle
            Jaffi vibe as an Uncle Jaffi Influencer! This is your shot to get in
            with one of the coolest brands around.
          </p>
          <p>
            Uncle Jaffi isn't just a restaurant—it's a lifestyle. Adding Uncle
            Jaffi to your personal brand means adding some serious flair and
            global recognition. Your profile is about to explode!
          </p>
          <p>
            Ready to make it official? Anyone can become an awesome Uncle Jaffi
            Influencer. Just fill out a few questions on our application form.
          </p>
        </div>
        <button className="py-[12px]  px-[16px] text-[#26262A] bg-[#FAB939] rounded-[99px] w-[175px] h-[48px]">
          Apply Now
        </button>
      </div>
      <p className="italy text-[#26262A] text-center pt-24">
        *Must be 18+ years of age to apply. Social media profiles must be
        public.
      </p>
    </div>
  );
};

export default Body;
