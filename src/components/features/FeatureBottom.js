import React from "react";
import checkIcon from "../../images/check.png";
import phones from "../../images/2phone.png";
import phones2 from "../../images/2phone2.png";
import barChart from "../../images/Group.png";
import mark from "../../images/mark.png";

function FeatureBottom(props) {
  const { phone } = props;
  return (
    <div className="max-w-[1166px] h-[500px] flex flex-col bigTablet:flex-row items-center justify-center gap-[40px] bigTablet:gap-[100px] mx-auto mt-[220px] mobile2:mt-[240px] bigTablet:mt-[50px] desktop:mt-[148px] px-5">
      <div
        data-aos="zoom-in"
        className="font-[manrope] mt-[15px] mobile2:mt-[25px]  bigTablet:mt-0 bigTablet:p-0  mx-auto bigTablet:mx-[initial] max-w-[700px] bigTablet:w-[350px] desktop:w-[450px] desktop:h-[469px]"
      >
        <p className="text-[14px] text-[#3734A9] font-[700]">Why Choose Us</p>
        <h4 className="text-[26px] desktop:text-[40px] font-[800] mt-[13px] leading-[30px] desktop:leading-[50px] ">
          Save money with proper transaction
        </h4>
        <p className="mt-[18px] desktop:mt-[29px] text-[14px] desktop:text-[18px] font-[500]">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className="relative font-[manrope] font-[600] px-5 py-5 mt-[35px] desktop:w-[479px] desktop:h-[152px] bg-[#C4C4C4] flex flex-col items-center justify-center rounded-[20px]">
          <img
            src={mark}
            alt=""
            className="absolute w-[30px] h-[30px] desktop:w-[initial] desktop:h-[initial] left-[30px] top-[-15px] desktop:left-[30px] desktop:top-[-20px]"
          />
          <p className="text-center">
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income. The expense windows .
          </p>
          <p className="mt-[14px] text-[14px]">- Mike Taylor, Web Designer</p>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="relative bigTablet:mt-[0] w-[290px] desktop:w-[450px] desktop:h-[464px]"
      >
        <div className="w-[220px] h-[300px] desktop:w-[400px] desktop:h-[410px] bg-[#DBF1FA] ml-[50px] mt-[54px] rounded-md"></div>
        <img
          src={`${phone === "green" ? phones2 : phones}`}
          alt="phone"
          className="absolute  top-[-15px] right-[-5px] desktop:left-[50px]"
        />
        <div className=" bg-[white] w-[200px] h-[130px] desktop:w-[300px] desktop:h-[236px] pt-[10px] absolute bottom-[30px] left-0 font-[manrope]">
          <p className="text-[16px] desktop:text-[20px] font-[500] ml-[20px]">
            Total Balance
          </p>
          <p className="text-[16px] desktop:text-[22px] font-[700] ml-[20px]">
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
