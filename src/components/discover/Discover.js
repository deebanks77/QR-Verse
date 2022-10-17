import React from "react";
import icon from "../../images/81.png";
import image from "../../images/Image.png";
import cone from "../../images/cone.png";
import vector from "../../images/Vector1.png";
import thread from "../../images/thread.png";

function Discover() {
  return (
    <div>
      <div data-aos="zoom-out">
        <h2 className="font-[manrope] font-[800] text-[47px] text-center mt-[140px] mb-0">
          Just Give It A Try...
        </h2>
        <img src={icon} alt="" className="mx-auto mt-[-23px] " />
      </div>

      <div className="relative mt-[73px] mx-auto w-[1400px] h-[510px] bg-gradient-to-r from-[#7060EF] to-[#1FBAEA] rounded-[23px]  pt-[94px] pl-[96px] ">
        <div>
          <h4 className="w-[665px] font-[manrope] font-[800] text-[68px] text-white leading-[70px]">
            Discover a better way to manage spendings
          </h4>
          <button className="w-[258px] h-[77px] bg-[#FF7F5C] text-white text-[20px] rounded-[11px] mt-12">
            Get Started Now
          </button>
        </div>
        <div className="absolute top-[-140px] right-[20px]">
          <img
            src={image}
            alt=""
            className="w-[540px] h-[710px] object-contain"
          />
        </div>
        <img src={cone} alt="/" className="absolute top-0 left-2" />
        <img
          src={vector}
          alt="/"
          className="absolute top-[180px] left-[470px]"
        />
        <img
          src={thread}
          alt="/"
          className="absolute top-[310px] left-[550px]"
        />
      </div>
    </div>
  );
}

export default Discover;
