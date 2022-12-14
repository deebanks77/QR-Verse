import React, { useState } from "react";
import QRVerseLogo from "../../images/QRVerseLogo.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscClose } from "react-icons/vsc";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleHamburger = () => {
    setClick(true);
  };
  const handleClose = () => {
    setClick(false);
  };

  return (
    <div className="flex items-center justify-between gap-10 pt-[31px] px-5 tablet:px-10  font-[poppins] max-w-[1200px] mx-auto">
      <div className="w-[128px] h-[50px] cursor-pointer">
        <img
          src={QRVerseLogo}
          alt="xcod logo"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>

      <div className="nav hidden bigTablet:flex items-center">
        <ul className="flex items-center gap-10 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Support</li>
        </ul>
      </div>

      <div className="what-next hidden bigTablet:flex items-center gap-7 ">
        <span className="text-blue-500 hover:text-blue-700 font-[18px] font-[600] mr-[20px] cursor-pointer">
          Login
        </span>
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[22px] py-[10px] text-white rounded-[7px] cursor-pointer">
          What's New!
        </span>
      </div>
      <GiHamburgerMenu
        onClick={handleHamburger}
        className="hamburger bigTablet:hidden cursor-pointer w-[30px] h-[30px]"
      />

      <div
        className={`fixed flex flex-col items-center justify-center bigTablet:hidden gap-10 ${
          click ? "translate-x-[0]" : "translate-x-[100%]"
        } top-[0px] right-[0px] w-[50%] h-[80%] bg-gray-700 transition-all duration-500 z-10`}
      >
        <VscClose
          onClick={handleClose}
          className={`absolute  cursor-pointer top-[10px] right-[10px] w-[20px] h-[20px] text-white`}
        />
        <div className="flex items-center text-gray-200">
          <ul className="flex items-center flex-col gap-10 ">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Products</li>
            <li className="cursor-pointer hover:text-white">Support</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-7">
          <p className="text-blue-500 font-[18px] font-[600] hover:text-blue-400 cursor-pointer">
            Login
          </p>
          <p className="bg-gradient-to-r from-sky-500 to-indigo-500 px-[22px] py-[10px] text-white rounded-[7px] cursor-pointer">
            What's New!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
