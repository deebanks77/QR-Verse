import React from "react";
import macHplogo from "../../images/hp-mac-logo.png";
import screenshot from "../../images/Screenshot.png";
import FireHeart from "../../images/FireHeart.png";
import markIcon from "../../images/mark.png";

function Hero() {
  return (
    <div className="w-full">
      <div className="font-[poppins] max-w-[1200px] mx-auto mt-[50px] desktop:mt-[50px] px-3 tablet:px-10">
        <div className="bigTablet:flex items-center gap-16">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className=" basis-[50%]"
          >
            <h4 className="font-[poppins] font-[700] text-[24px] mobile2:text-[30px] tablet:text-[40px] bigTablet:text-[30px] laptop:text-[40px] desktop:text-[55px] text-center bigTablet:text-left  leading-[122%]">
              Optimize Your <span className="text-[#4361EE]">Business</span>{" "}
              With Our Premium Solution
            </h4>
            <p className="font-[manrope] text-center bigTablet:text-left bigTablet:text-[18px] laptop:text-[20px] desktop:text-[24px] mt-[26px] tablet:mt-[32px]">
              Make Profits With QR Codes In Front Of 1+ Billion Smartphones In
              60 Seconds Or Less
            </p>
            <div className="mt-[30px] flex items-center justify-center bigTablet:justify-start gap-10">
              <button className="px-2 h-[50px] laptop:w-[200px] laptop:h-[60px] desktop:w-[258px] desktop:h-[77px] bg-[#FF7F5C] text-white bigTablet:text-[16px] laptop:text-[18px]  desktop:text-[20px] rounded-[11px]">
                Get Started Now
              </button>
              <img
                src={macHplogo}
                alt="/"
                className="w-[100px] laptop:w-[150px] desktop:w-[200px] object-contain"
              />
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="mt-10 pb-4 bigTablet:w-[400px] bigTablet:h-[350px] laptop:w-[500px] laptop:h-[400px] desktop:w-[700px] desktop:h-[500px] bg-white relative rounded-[8px] basis-[50%]"
          >
            <div className="flex items-center gap-1 my-4 mx-4 p-2">
              <div className="w-2 h-2 desktop:w-3 desktop:h-3 rounded-[50%] border-gray-400 border-[2px]"></div>
              <div className="w-2 h-2 desktop:w-3 desktop:h-3  rounded-[50%] border-gray-400 border-[2px]"></div>
              <div className="w-2 h-2 desktop:w-3 desktop:h-3  rounded-[50%] border-gray-400 border-[2px]"></div>
            </div>
            <img
              src={screenshot}
              alt="/"
              className="mx-auto w-[100%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit desktop:h-[462px] bg-[#E2E8FB] px-[10px] tablet:p-[20px] mt-[50px] tablet:mt-[80px]">
        <div className="flex flex-col desktop:flex-row items-center laptop:justify-between gap-10 max-w-[1200px] mx-auto desktop:h-[462px] py-4 px-4">
          <div data-aos="zoom-in" className="font-[manrope] text-center">
            {" "}
            {/*w-[481px] */}
            <h4 className=" font-[800] text-[18px] mobile2:text-[20px] tablet:text-[28px] midTablet:text-[30px] bigTablet:text-[34px] laptop:text-[40px] desktop:text-[56px] text-center desktop:text-left   leading-[120%]">
              Our Beta Testers{" "}
              <img
                src={FireHeart}
                alt="/"
                className="inline w-[40px] h-[40px] bigTablet:w-[60px] bigTablet:h-[60px] laptop:w-[82px] laptop:h-[82px] object-contain"
              />
              LOVE QR Verse{" "}
            </h4>
            <p className="text-[16px] tablet:text-[18px] mt-[14px] laptop:mt-[28px] desktop:text-left">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.{" "}
            </p>
          </div>

          <div className="flex flex-col midTablet:flex-row items-center gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="150"
              className="relative w-fit laptop:w-[450px] desktop:h-[179px] desktop:w-[350px]  bg-white text-[15px] font-[600] px-[34px] py-[38px] rounded-[20px]"
            >
              <p className="mb-[18px]">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows adapted
                sir. Wrong widen.
              </p>
              <p>- Mike Taylor, Web Designer</p>
              <img
                src={markIcon}
                alt="/"
                className="absolute left-[40px] top-[-18px]"
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="relative w-fit laptop:w-[450px] desktop:w-[350px] desktop:h-[179px] bg-white text-[15px] font-[600] px-[34px] py-[38px] rounded-[20px] mt-4 midTablet:mt-0"
            >
              <p className="mb-[18px]">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows adapted
                sir. Wrong widen.
              </p>
              <p>- Mike Taylor, Web Designer</p>
              <img
                src={markIcon}
                alt="/"
                className="absolute left-[40px] top-[-18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
