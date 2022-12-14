import React, { useState, useReducer } from "react";
import blackboxIcon from "../../images/blackbox.png";
import spiral from "../../images/69.png";
// import { initialState, reducer } from "./reducer";
import Cards from "./Cards";

function Faq() {
  // const handleShow = (e) => {
  //   dispatch(e.target.id);
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState("state-1");
  const handleState = (e) => {
    if (e.target.id === state) {
      setState("");
    } else {
      setState(e.target.id);
    }
  };

  return (
    <div className="font-[manrope] px-10 mx-auto laptop:max-w-[1200px] ">
      <h4
        data-aos="zoom-out"
        className="w-[500px] font-[800] text-[35px] midTablet:text-[40px] laptop:text-[50px] leading-[50px] mt-[100px] tablet:mt-[175px] mb-[45px]"
      >
        Fequently <span className="block">asked questions</span>
      </h4>

      <div className="flex flex-col midTablet:flex-row midTablet:items-start gap-7 laptop:gap-16">
        <Cards handleState={handleState} state={state} />

        <div
          data-aos="zoom-out"
          data-aos-delay="300"
          className="relative midTablet:w-[320px] laptop:max-w-[455px]  p-9 mt-6 midTablet:mt-[initial] bg-[#1FBAEA] rounded-[11px] basis-[40%]"
        >
          <img
            src={spiral}
            alt="/"
            className="absolute right-[10px] top-[-50px]"
          />
          <img src={blackboxIcon} alt="/" className="mt-[75px] mx-auto" />
          <h4 className="font-[800] text-[20px] laptop:text-[24px] text-center mt-[50px] laptop:mt-[63px] leading-[24px]">
            Do you have more questions?
          </h4>
          <p className="mt-[26px] text-center text-[16px] laptop:text-[18px] font-[600]">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <button className="w-[258px] h-[77px] bg-[#FF7F5C] text-white text-[18px] laptop:text-[20px] rounded-[11px] mt-12 mx-auto block">
            Shoot a Direct Mail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
