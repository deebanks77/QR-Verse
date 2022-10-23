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
      className={`max-w-[1166px] flex flex-col bigTablet:flex-row items-center justify-center gap-[20px] mobile2:gap-[60px] bigTablet:gap-[100px] ${
        background === "black" ? "mt-[40px] " : "mt-[80px]"
      } desktop:mt-[140px] mx-auto`}
    >
      <div
        data-aos="fade-right"
        className={`relative w-[331px] h-[280px] desktop:w-[451px] desktop:h-[460px] ${
          background === "black"
            ? "mt-[220px] tablet:mt-[220px] bigTablet:mt-[0] "
            : ""
        }`}
      >
        <div
          className={`relative w-[331px] h-[280px] desktop:w-[451px] desktop:h-[460px] ${
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
        <div className="flex items-center gap-4 bg-white w-[233px] h-[60px] desktop:w-[363px] desktop:h-[75px] px-5 rounded-[11px] z-10 absolute top-[41px] left-[64px]">
          <img
            src={icon1}
            alt="/"
            className="w-[40px] h-[40px] desktop:w-[initial] desktop:h-[initial]"
          />
          <div className="font-[poppins]">
            <p className="text-[12px] desktop:text-[16px] font-bold text-[#3734A9] bg-indigo-200 px-1 py-1 text-center rounded-[30px]">
              + $28,900
            </p>
            <p className="font-[manrope] font-[500] text-[12px] desktop:text-[14px] text-[#757095] mt-[6px]">
              Received from Michael V
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white w-[233px] h-[60px] desktop:w-[363px] desktop:h-[75px] px-5 rounded-[11px] z-10 absolute top-[120px] right-[-20px] desktop:top-[141px] desktop:left-[170px] shadow">
          <img
            src={icon2}
            alt="/"
            className="w-[40px] h-[40px] desktop:w-[initial] desktop:h-[initial]"
          />
          <div className="font-[poppins]">
            <p className="text-[12px] desktop:text-[16px] font-bold text-[#3734A9] bg-indigo-200 px-1 py-1 text-center rounded-[30px]">
              + $28,900
            </p>
            <p className="font-[manrope] font-[500] text-[12px] desktop:text-[14px] text-[#757095] mt-[6px]">
              Received from Michael V
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white w-[233px] h-[60px] desktop:w-[363px] desktop:h-[75px] px-5 rounded-[11px] z-10 absolute top-[200px] left-[64px] desktop:top-[241px] desktop:left-[138px] shadow">
          <img
            src={icon3}
            alt="/"
            className="w-[40px] h-[40px] desktop:w-[initial] desktop:h-[initial]"
          />
          <div className="font-[poppins]">
            <p className="text-[12px] desktop:text-[16px] font-bold text-[#3734A9] bg-indigo-200 px-1 py-1 text-center rounded-[30px]">
              + $28,900
            </p>
            <p className="font-[manrope] font-[500] text-[12px] desktop:text-[14px] text-[#757095] mt-[6px]">
              Received from Michael V
            </p>
          </div>
        </div>

        <div className="hidden desktop:flex items-center gap-4 bg-white w-[363px] h-[75px] px-5 rounded-[11px] z-10 absolute top-[341px] left-[47px] shadow ">
          <img src={icon4} alt="/" />
          <div className="font-[poppins]">
            <p className="text-[12px] desktop:text-[16px] font-bold text-[#3734A9] bg-indigo-200 w-[86px] h-[26px] text-center rounded-[30px]">
              + $28,900
            </p>
            <p className="font-[manrope] font-[500] text-[14px] text-[#757095] mt-[6px]">
              Received from Michael V
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="font-[manrope] flex flex-col justify-center w-[290px] desktop:w-[450px] desktop:h-[469px]"
      >
        <p className="text-[14px] text-[#3734A9] font-[700]">Why Choose Us</p>
        <h4 className="text-[26px] desktop:text-[40px] font-[800] desktop:mt-[13px] leading-[30px] desktop:leading-[50px] ">
          Track your payments on the go with the best way possible
        </h4>
        <p className="mt-[18px] desktop:mt-[29px] text-[14px] desktop:text-[18px] font-[500]">
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.{" "}
        </p>
        <div className="mt-[23px] bg-[#C4C4C4] h-[2px] w-[490]"></div>
        <div className="mt-[27px]">
          <p className="text-[14px] desktop:text-[16px]">
            <img
              src={checkIcon}
              alt="check"
              className="inline-block bg-[#FFB865] p-[4px] mr-[10px] rounded-[50%]"
            />{" "}
            Get Overview at a glance
          </p>
          <p className="text-[14px] desktop:text-[16px]">
            <img
              src={checkIcon}
              alt="check"
              className="inline-block bg-[#FFB865] p-[4px] mr-[10px] rounded-[50%]"
            />{" "}
            Deoposit funds easily, securlity
          </p>
          <p className="text-[14px] desktop:text-[16px]">
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
