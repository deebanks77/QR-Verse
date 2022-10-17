import React from "react";
import TrophyIcon from "../../images/TrophyIcon.png";
import videoIcon from "../../images/videoIcon.png";
import cubeIcon from "../../images/cubeIcon.png";
import computerIcon from "../../images/computerIcon.png";

function Box() {
  return (
    <div data-aos="zoom-in">
      <div className="flex items-center justify-center gap-9 w-[363px] h-[136px] border-y-[#1FBAEA] border">
        <img src={TrophyIcon} alt="/" />
        <p className="font-[manrope] font-[600] text-[18px]">Coupon QR Codes</p>
      </div>
      <div className="flex items-center justify-center gap-9 w-[363px] h-[136px] border-y-[#1FBAEA] border">
        <img src={computerIcon} alt="/" />
        <p className="font-[manrope] font-[600] text-[18px]">Coupon QR Codes</p>
      </div>
      <div className="flex items-center justify-center gap-9 w-[363px] h-[136px] border-y-[#1FBAEA] border">
        <img src={cubeIcon} alt="/" />
        <p className="font-[manrope] font-[600] text-[18px]">Coupon QR Codes</p>
      </div>
      <div className="flex items-center justify-center gap-9 w-[363px] h-[136px] border-y-[#1FBAEA] border">
        <img src={videoIcon} alt="/" />
        <p className="font-[manrope] font-[600] text-[18px]">Coupon QR Codes</p>
      </div>
    </div>
  );
}

export default Box;
