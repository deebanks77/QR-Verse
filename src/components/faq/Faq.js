import React from "react";
import plusIcon from "../../images/plus.png";
import spiralIcon from "../../images/69.png";
import blackboxIcon from "../../images/blackbox.png";
import spiral from "../../images/69.png";

function Faq() {
  return (
    <div className="font-[manrope] mx-auto w-[1400px]">
      <h4
        data-aos="zoom-out"
        className="w-[500px] font-[800] text-[56px] leading-[50px] mt-[175px] mb-[45px]"
      >
        Fequently <span className="block">asked questions</span>
      </h4>
      <div className="flex items-center gap-16">
        <div>
          <div
            data-aos="zoom-out"
            className="w-[852px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px]"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-[800] text-[24px] ">What is QR Verse?</h4>
              <img src={plusIcon} alt="/" />
            </div>
            <p className="mt-[17px] w-[758px]">
              QR Verse is the World's First QR Code Builder Which Lets You
              Create, Share And Profit From 20+ Types Of QR Codes In 60 Seconds
              Or Less… Making It The Safest, Easiest, Fastest And Most Engaging
              Way To Profit!
            </p>
          </div>
          <div
            data-aos="zoom-out"
            className="w-[852px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-[800] text-[24px] ">How does it work?</h4>
              <img src={plusIcon} alt="/" />
            </div>
          </div>
          <div
            data-aos="zoom-out"
            className="w-[852px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-[800] text-[24px] ">
                Will you teach me how to use the app?
              </h4>
              <img src={plusIcon} alt="/" />
            </div>
          </div>
          <div
            data-aos="zoom-out"
            className="w-[852px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-[800] text-[24px] ">
                {" "}
                Do I need to have any coding experience?
              </h4>
              <img src={plusIcon} alt="/" />
            </div>
          </div>
          <div
            data-aos="zoom-out"
            className="w-[852px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-[800] text-[24px] ">
                How do I make money with it?
              </h4>
              <img src={plusIcon} alt="/" />
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-delay="300"
          className="relative w-[455px] h-[580px] p-9 bg-[#1FBAEA] rounded-[11px]"
        >
          <img
            src={spiral}
            alt="/"
            className="absolute right-[10px] top-[-50px]"
          />
          <img src={blackboxIcon} alt="/" className="mt-[75px] mx-auto" />
          <h4 className="font-[800] text-[24px] text-center mt-[63px]">
            Do you have more questions?
          </h4>
          <p className="mt-[26px] text-center text-[18px] font-[600]">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <button className="w-[258px] h-[77px] bg-[#FF7F5C] text-white text-[20px] rounded-[11px] mt-12 mx-auto block">
            Shoot a Direct Mail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
