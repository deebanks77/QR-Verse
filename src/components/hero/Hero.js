import React from "react";
import macHplogo from "../../images/hp-mac-logo.png";
import screenshot from "../../images/Screenshot.png";
import FireHeart from "../../images/FireHeart.png";
import markIcon from "../../images/mark.png";

function Hero() {
  return (
    <div className="w-full">
      <div className="font-[poppins] max-w-[1400px] mx-auto mt-[90px] ">
        <div className="flex items-center gap-16">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-[662px]"
          >
            <h4 className="font-[poppins] font-[700] text-[70px] leading-[122%]">
              Optimize Your <span className="text-[#4361EE]">Business</span>{" "}
              With Our Premium Solution
            </h4>
            <p className="font-[manrope] w-[488px] text-[24px] mt-[32px]">
              Make Profits With QR Codes In Front Of 1+ Billion Smartphones In
              60 Seconds Or Less
            </p>
            <div className="mt-[30px] flex items-center gap-10">
              <button className="w-[258px] h-[77px] bg-[#FF7F5C] text-white text-[20px] rounded-[11px]">
                Get Started Now
              </button>
              <img src={macHplogo} alt="/" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-[748px] h-[512px] bg-white relative rounded-[8px]"
          >
            <div className="flex items-center gap-1 my-4 mx-4">
              <div className="w-3 h-3 rounded-[50%] border-gray-400 border-[2px]"></div>
              <div className="w-3 h-3 rounded-[50%] border-gray-400 border-[2px]"></div>
              <div className="w-3 h-3 rounded-[50%] border-gray-400 border-[2px]"></div>
            </div>
            <img
              src={screenshot}
              alt="/"
              className="absolute top-[40px] left-[5px] w-[700px] h-[476px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[462px] bg-[#E2E8FB]">
        <div className="flex items-center justify-between gap-10 mt-[122px] max-w-[1400px] mx-auto h-[462px]">
          <div data-aos="zoom-in" className="font-[manrope] w-[481px]">
            <h4 className=" font-[800] text-[56px]  leading-[120%]">
              Our Beta Testers{" "}
              <img
                src={FireHeart}
                alt="/"
                className="inline w-[82px] h-[82px]"
              />
              LOVE QR Verse{" "}
            </h4>
            <p className="text-[16px] mt-[28px]">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.{" "}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div
              data-aos="flip-right"
              data-aos-delay="150"
              className="relative w-[350px] h-[179px] bg-white text-[15px] font-[600] px-[34px] py-[38px] rounded-[20px]"
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
              data-aos="flip-right"
              data-aos-delay="300"
              className="relative w-[350px] h-[179px] bg-white text-[15px] font-[600] px-[34px] py-[38px] rounded-[20px]"
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
