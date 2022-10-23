import React from "react";
import TrophyIcon from "../../images/TrophyIcon.png";
import videoIcon from "../../images/videoIcon.png";
import cubeIcon from "../../images/cubeIcon.png";
import computerIcon from "../../images/computerIcon.png";

function Box() {
  return (
    <div data-aos="zoom-in">
      <div className="flex flex-col midTablet:flex-row items-center justify-center gap-4 desktop:gap-9  h-[136px] border-y-[#1FBAEA] border">
        <img
          src={TrophyIcon}
          alt="/"
          className="w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px] object-contain"
        />
        <p className="font-[manrope] font-[600] text-center text-[12px] tablet:text-[15px] desktop:text-[18px]">
          Coupon QR Codes
        </p>
      </div>

      <div className="flex flex-col midTablet:flex-row items-center justify-center gap-4 desktop:gap-9 h-[136px] border-y-[#1FBAEA] border">
        <img
          src={computerIcon}
          alt="/"
          className="w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px] object-contain"
        />
        <p className="font-[manrope] font-[600] text-center text-[12px] tablet:text-[15px] desktop:text-[18px]">
          Coupon QR Codes
        </p>
      </div>

      <div className="flex flex-col midTablet:flex-row items-center justify-center gap-4 desktop:gap-9 h-[136px] border-y-[#1FBAEA] border">
        <img
          src={cubeIcon}
          alt="/"
          className="w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px] object-contain"
        />
        <p className="font-[manrope] font-[600] text-center text-[12px] tablet:text-[15px] desktop:text-[18px]">
          Coupon QR Codes
        </p>
      </div>

      <div className="flex flex-col midTablet:flex-row items-center justify-center gap-4 desktop:gap-9 h-[136px] border-y-[#1FBAEA] border">
        <img
          src={videoIcon}
          alt="/"
          className="w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px] object-contain"
        />
        <p className="font-[manrope] font-[600] text-center text-[12px] tablet:text-[15px] desktop:text-[18px]">
          Coupon QR Codes
        </p>
      </div>
    </div>
  );
}

export default Box;
