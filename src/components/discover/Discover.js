import React from "react";
import icon from "../../images/81.png";
import image from "../../images/Image.png";
import cone from "../../images/cone.png";
import vector from "../../images/Vector1.png";
import thread from "../../images/thread.png";

function Discover() {
  return (
    <div className="px-10">
      <div data-aos="zoom-out">
        <h2 className="font-[manrope] font-[800] text-[28px] tablet:text-[36px] laptop:text-[47px] text-center mt-[100px] tablet:mt-[140px] mb-0">
          Just Give It A Try...
        </h2>
        <img
          src={icon}
          alt=""
          className="mx-auto mt-[-23px] w-[150px] h-[100px] desktop:w-[initial] desktop:h-[initial] object-contain"
        />
      </div>

      <div className="relative mt-[25px] tablet:mt-[50px] laptop:mt-[73px] mx-auto midTablet:max-w-[650px] laptop:max-w-[900px] desktop:max-w-[1100px] bg-gradient-to-r from-[#7060EF] to-[#1FBAEA] rounded-[23px] pt-[30px] midTablet:pt-[40px] laptop:pt-[60px]  desktop:pt-[94px] pb-[30px] laptop:pb-[50px] pl-[20px] midTablet:pl-[65px] laptop:pl-[96px] ">
        <div>
          <h4 className="max-w-[400px] midTablet:w-[300px] laptop:w-[450px] desktop:w-[665px] font-[manrope] font-[800] text-[26px] midTablet:text-[32px] laptop:text-[45px] desktop:text-[65px] text-white leading-[40px] laptop:leading-[50px] desktop:leading-[70px]">
            Discover a better way to manage spendings
          </h4>
          <button className="px-5 py-3 desktop:w-[258px] desktop:h-[77px] bg-[#FF7F5C] text-white text-[16px] laptop:text-[18px] desktop:text-[20px] rounded-[11px] mt-6 laptop:mt-12">
            Get Started Now
          </button>
        </div>
        <div className="absolute top-[-35px] midTablet:top-[-50px] laptop:top-[-70px] desktop:top-[-140px] right-[20px]">
          <img
            src={image}
            alt=""
            className="hidden tablet:inline-block w-[220px] h-[270px] midTablet:w-[280px] midTablet:h-[340px] laptop:w-[350px] laptop:h-[450px] desktop:w-[540px] desktop:h-[710px] object-contain"
          />
        </div>
        <img
          src={cone}
          alt="/"
          className="absolute top-0 left-2 w-[30px] h-[30px] midTablet:w-[50px] midTablet:h-[50px] laptop:w-[70px] laptop:h-[70px] desktop:w-[initial] desktop:h-[initial]"
        />
        <img
          src={vector}
          alt="/"
          className="absolute top-[100px] left-[250px] laptop:top-[140px] laptop:left-[380px] desktop:top-[180px] desktop:left-[470px] w-[100px] h-[100px] laptop:w-[130px] laptop:h-[130px] desktop:w-[initial] desktop:h-[initial]"
        />
        <img
          src={thread}
          alt="/"
          className="absolute h-[60px] laptop:h-[100px] desktop:h-[initial] top-[120px] left-[250px] midTablet:top-[150px] midTablet:left-[300px] laptop:top-[200px] laptop:left-[450px] desktop:top-[310px] desktop:left-[550px] "
        />
      </div>
    </div>
  );
}

export default Discover;
