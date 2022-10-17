import React from "react";
import xcodLogo from "../../images/xcodLogo1.png";
import QRVerseLogo from "../../images/QRVerseLogo.png";

function Header() {
  return (
    <div className="flex items-center justify-between pt-[31px] px-3  font-[poppins] max-w-[1400px] mx-auto">
      <div className="w-[128px] h-[50px]">
        <img
          src={QRVerseLogo}
          alt="xcod logo"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className="nav flex items-center gap-14">
        <ul className="flex items-center gap-10 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Support</li>
        </ul>
      </div>
      <div className="flex items-center gap-7">
        <p className="text-blue-500 font-[18px] font-[600]">Login</p>
        <p className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[22px] py-[10px] text-white rounded-[7px] cursor-pointer">
          What's New!
        </p>
      </div>
    </div>
  );
}

export default Header;
