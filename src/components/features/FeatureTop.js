import React from "react";
import icon1 from "../../images/pic1.png";
import icon2 from "../../images/pic2.png";
import icon3 from "../../images/pic3.png";
import icon4 from "../../images/pic4.png";
import checkIcon from "../../images/check.png";
import blackInk from "../../images/blackInk.png";

function FeatureTop(props) {
  const { background } = props;
  return (
    <div
      className={`max-w-[1166px] flex flex-col-reverse bigTablet:flex-row items-center justify-center gap-[30px] bigTablet:gap-[100px] ${
        background === "black"
          ? "mt-[220px] tablet:mt-[160px] bigTablet:mt-[40px] laptop:mt-[10px] "
          : "mt-[40px] laptop:mt-[60px]"
      } mx-auto px-3 tablet:px-5`}
    >
      <div
        // data-aos="zoom-in"
        className={`relative w-[331px] h-[280px] laptop:w-[451px] laptop:h-[400px] mt-[10px] ${
          background === "black" ? "bigTablet:mt-[0] " : ""
        }`}
      >
        <div
          className={`relative w-[331px] h-[280px] laptop:w-[451px] laptop:h-[400px] ${
            background === "black" ? "bg-black" : "bg-[#4460EF]"
          } rounded-[20px] overflow-hidden`}
        >
          <img
            src={blackInk}
            alt="/"
            className="absolute top-[-50px] right-[0]"
          />
          <div className="bg-[#FFB865] w-[122px] h-[122px] desktop:w-[162px] desktop:h-[162px] rounded-[50%] absolute top-[-61px] left-[-61px]"></div>
          <div className="bg-[#1FBAEA] w-[182px] h-[182px] desktop:w-[242px] desktop:h-[242px] rounded-[50%] absolute bottom-[-121px] left-[-121px]"></div>
          <div className="bg-[#4F46BA] w-[122px] h-[122px] desktop:w-[162px] desktop:h-[162px] rounded-[50%] absolute top-[180px] right-[-81px]"></div>
        </div>

        <div className="flex items-center gap-4 bg-white w-[233px] h-[60px] laptop:w-[363px] px-5 rounded-[11px] z-10 absolute top-[41px] left-[64px]">
          <img src={icon1} alt="/" className="w-[40px] h-[40px]" />
          <div className="font-[poppins]">
            <p className="text-[12px] font-bold text-[#3734A9] bg-indigo-200 px-1 py-1 text-center rounded-[30px]">
              + $28,900
            </p>
            <p className="font-[manrope] font-[500] text-[12px] text-[#757095] mt-[6px]">
              Received from Michael V
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white w-[233px] h-[60px] laptop:w-[363px] px-5 rounded-[11px] z-10 absolute top-[120px] right-[-20px] laptop:top-[131px] laptop:left-[170px] shadow">
          <img src={icon2} alt="/" className="w-[40px] h-[40px]" />
          <div className="font-[poppins]">
            <p className="text-[12px] font-bold text-[#3734A9] bg-indigo-200 px-1 py-1 text-center rounded-[30px]">
              + $28,900
            </p>
            <p className="font-[manrope] font-[500] text-[12px] text-[#757095] mt-[6px]">
              Received from Michael V
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white w-[233px] h-[60px] laptop:w-[363px] px-5 rounded-[11px] z-10 absolute top-[200px] left-[64px] laptop:top-[225px] laptop:left-[138px] shadow">
          <img src={icon3} alt="/" className="w-[40px] h-[40px]" />
          <div className="font-[poppins]">
            <p className="text-[12px] font-bold text-[#3734A9] bg-indigo-200 px-1 py-1 text-center rounded-[30px]">
              + $28,900
            </p>
            <p className="font-[manrope] font-[500] text-[12px] text-[#757095] mt-[6px]">
              Received from Michael V
            </p>
          </div>
        </div>

        <div className="hidden laptop:flex items-center gap-4 bg-white w-[363px] h-[60px] px-5 rounded-[11px] z-10 absolute top-[321px] left-[47px] shadow ">
          <img src={icon4} alt="/" className="w-[40px] h-[40px]" />
          <div className="font-[poppins]">
            <p className="text-[12px] font-bold text-[#3734A9] bg-indigo-200 px-1 py-1 text-center rounded-[30px]">
              + $28,900
            </p>
            <p className="font-[manrope] font-[500] text-[12px] text-[#757095] mt-[6px]">
              Received from Michael V
            </p>
          </div>
        </div>
      </div>

      <div
        // data-aos="zoom-in"
        className="font-[manrope] flex flex-col justify-center mx-auto bigTablet:mx-[initial] max-w-[700px] bigTablet:w-[350px] laptop:w-[450px] laptop:h-[469px]"
      >
        <p className="text-[14px] text-[#3734A9] font-[700]">Why Choose Us</p>
        <h4 className="text-[26px] laptop:text-[35px] font-[800] laptop:mt-[13px] leading-[30px] laptop:leading-[40px] ">
          Track your payments on the go with the best way possible
        </h4>
        <p className="mt-[18px] laptop:mt-[29px] text-[14px] font-[500]">
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.{" "}
        </p>
        <div className="mt-[23px] bg-[#C4C4C4] h-[2px] w-[490]"></div>
        <div className="mt-[27px]">
          <p className="text-[14px]">
            <img
              src={checkIcon}
              alt="check"
              className="inline-block bg-[#FFB865] p-[4px] mr-[10px] rounded-[50%]"
            />{" "}
            Get Overview at a glance
          </p>
          <p className="text-[14px]">
            <img
              src={checkIcon}
              alt="check"
              className="inline-block bg-[#FFB865] p-[4px] mr-[10px] rounded-[50%]"
            />{" "}
            Deoposit funds easily, securlity
          </p>
          <p className="text-[14px]">
            <img
              src={checkIcon}
              alt="check"
              className="inline-block bg-[#FFB865] p-[4px] mr-[10px] rounded-[50%]"
            />{" "}
            Get Live Support
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureTop;
