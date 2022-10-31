import React from "react";
import checkIcon from "../../images/check.png";
import phones from "../../images/2phone.png";
import phones2 from "../../images/2phone2.png";
import barChart from "../../images/Group.png";
import mark from "../../images/mark.png";

function FeatureBottom(props) {
  const { phone } = props;
  return (
    <div className="max-w-[1166px] h-[500px] flex flex-col bigTablet:flex-row items-center justify-center gap-[40px] bigTablet:gap-[100px] mx-auto mt-[220px] mobile2:mt-[240px] tablet:mt-[150px] bigTablet:mt-[50px] laptop:mt-[90px] px-3 tablet:px-5">
      <div
        // data-aos="zoom-in"
        className="font-[manrope] mt-[15px] mobile2:mt-[25px]  bigTablet:mt-0 bigTablet:p-0  mx-auto bigTablet:mx-[initial] max-w-[700px] bigTablet:w-[350px] laptop:w-[400px] laptop:h-[469px]"
      >
        <p className="text-[14px] text-[#3734A9] font-[700]">Why Choose Us</p>
        <h4 className="text-[26px] laptop:text-[35px] font-[800] mt-[13px] leading-[30px] laptop:leading-[40px] ">
          Save money with proper transaction
        </h4>
        <p className="mt-[18px] laptop:mt-[29px] text-[14px] font-[500]">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className="relative font-[manrope] font-[600] px-5 py-5 mt-[35px] laptop:w-[420px] laptop:h-[152px] bg-[#C4C4C4] flex flex-col items-center justify-center rounded-[20px]">
          <img
            src={mark}
            alt=""
            className="absolute w-[30px] h-[30px] left-[30px] top-[-15px]"
          />
          <p className="text-center">
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income. The expense windows .
          </p>
          <p className="mt-[14px] text-[14px]">- Mike Taylor, Web Designer</p>
        </div>
      </div>

      <div
        // data-aos="zoom-in"
        className="relative bigTablet:mt-[0] w-[290px] laptop:w-[450px] laptop:h-[464px]"
      >
        <div className="w-[220px] h-[300px] laptop:w-[350px] laptop:h-[380px] bg-[#DBF1FA] ml-[70px] mt-[24px] rounded-md"></div>
        <img
          src={`${phone === "green" ? phones2 : phones}`}
          alt="phone"
          className="absolute  top-[-15px] right-[0px] w-[300px] h-[300px]"
        />
        <div className=" bg-[white] w-[200px] h-[130px] laptop:w-[300px] laptop:h-[150px] pt-[10px] absolute bottom-[20px] laptop:bottom-[90px] left-0 font-[manrope]">
          <p className="text-[16px] laptop:text-[20px] font-[500] ml-[20px]">
            Total Balance
          </p>
          <p className="text-[16px] laptop:text-[22px] font-[700] ml-[20px]">
            $4,200 <span className="text-[#00E1F0] text-[16px]">+10%</span>
          </p>
          <img
            src={barChart}
            alt="/"
            className="absolute bottom-[5px] right-[10px] w-[150px] h-[70px]"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureBottom;
