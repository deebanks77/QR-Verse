import React from "react";
import macHplogo from "../../images/hp-mac-logo.png";
import screenshot from "../../images/Screenshot.png";
import FireHeart from "../../images/FireHeart.png";
import markIcon from "../../images/mark.png";

function Hero() {
  return (
    <div className="w-full mt-[30px]">
      <div className="font-[poppins] max-w-[1200px] mx-auto mt-[40px] px-5 tablet:px-10">
        <div className="bigTablet:flex items-center justify-between gap-5 laptop:gap-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-[100%] bigTablet:w-[45%]"
          >
            <h4 className="font-[poppins] font-[700] text-[24px] mobile2:text-[30px] tablet:text-[37px] bigTablet:text-[35px] laptop:text-[40px] laptop2:text-[50px] text-center bigTablet:text-left  leading-[122%]">
              Optimize Your <span className="text-[#4361EE]">Business</span>{" "}
              With Our Premium Solution
            </h4>
            <p className="font-[manrope] text-center bigTablet:text-left bigTablet:text-[16px] laptop:text-[18px] laptop2:text-[20px] mt-[15px] laptop:mt-[26px] ">
              Make Profits With QR Codes In Front Of 1+ Billion Smartphones In
              60 Seconds Or Less
            </p>
            <div className="mt-[15px] laptop:mt-[20px] flex items-center justify-center bigTablet:justify-start gap-10">
              <button className="px-2 h-[50px] laptop:w-[200px] laptop:h-[60px] bg-[#FF7F5C] text-white bigTablet:text-[16px] laptop:text-[18px] rounded-[11px]">
                Get Started Now
              </button>
              <img
                src={macHplogo}
                alt="/"
                className="w-[100px] laptop:w-[150px] object-contain"
              />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="mt-10 pb-4 bigTablet:w-[500px] bigTablet:h-[350px] laptop:w-[600px] laptop:h-[400px] bg-white relative rounded-[8px]"
          >
            <div className="flex items-center gap-1 my-4 mx-4 p-2">
              <div className="w-2 h-2 rounded-[50%] border-gray-400 border-[2px]"></div>
              <div className="w-2 h-2 rounded-[50%] border-gray-400 border-[2px]"></div>
              <div className="w-2 h-2 rounded-[50%] border-gray-400 border-[2px]"></div>
            </div>
            <img
              src={screenshot}
              alt="/"
              className="mx-auto w-[100%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit bg-[#E2E8FB] px-[10px] laptop1:py-14 mt-[50px] tablet:mt-[80px]">
        <div className="flex flex-col laptop1:flex-row items-center laptop:justify-center gap-5 max-w-[1200px] mx-auto my-auto py-4 px-4 pb-[30px]">
          <div className="font-[manrope] text-center laptop1:w-[40%]">
            <h4 className=" font-[800] text-[20px] tablet:text-[28px] midTablet:text-[30px] bigTablet:text-[34px] laptop1:text-[45px] laptop1:text-left   leading-[120%]">
              Our Beta Testers{" "}
              <img
                src={FireHeart}
                alt="/"
                className="inline w-[40px] h-[40px] bigTablet:w-[60px] bigTablet:h-[60px] laptop:w-[82px] laptop:h-[82px] object-contain"
              />
              LOVE QR Verse{" "}
            </h4>
            <p className="text-[16px] tablet:text-[18px] mt-[14px] laptop1:mt-[28px] laptop:text-left">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.{" "}
            </p>
          </div>

          <div className="flex flex-col midTablet:flex-row items-center justify-around gap-10 mt-[30px] laptop1:mt-0 laptop1:gap-6 w-full laptop1:w-[60%]">
            <div className="relative w-fit laptop1:w-[350px] bg-white text-[15px] font-[600] px-[20px] py-[20px] rounded-[20px]">
              <p className="mb-[18px]">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows adapted
                sir. Wrong widen.
              </p>
              <p>- Mike Taylor, Web Designer</p>
              <img
                src={markIcon}
                alt="/"
                className="absolute left-[40px] top-[-15px] w-[30px] h-[30px]"
              />
            </div>
            <div className="relative w-fit laptop1:w-[350px] bg-white text-[15px] font-[600] px-[20px] py-[20px] rounded-[20px] mt-4 midTablet:mt-0">
              <p className="mb-[18px]">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows adapted
                sir. Wrong widen.
              </p>
              <p>- Mike Taylor, Web Designer</p>
              <img
                src={markIcon}
                alt="/"
                className="absolute left-[40px] top-[-15px] w-[30px] h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
