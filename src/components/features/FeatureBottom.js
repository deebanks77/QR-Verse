import React from "react";
import checkIcon from "../../images/check.png";
import phones from "../../images/2phone.png";
import phones2 from "../../images/2phone2.png";
import barChart from "../../images/Group.png";
import mark from "../../images/mark.png";

function FeatureBottom(props) {
  const { phone } = props;
  return (
    <div className="max-w-[1166px] h-[500px] flex items-center justify-between gap-[100px] mx-auto mt-[148px]">
      <div data-aos="fade-right" className="font-[manrope] w-[490px] h-[469px]">
        <p className="text-[14px] text-[#3734A9] font-[700]">Why Choose Us</p>
        <h4 className="text-[45px] font-[800] mt-[13px] leading-[50px] ">
          Save money with proper transaction
        </h4>
        <p className="mt-[29px] text-[18px] font-[500] w-[456px]">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className="relative font-[manrope] font-[600] mt-[35px] w-[479px] h-[152px] bg-[#C4C4C4] flex flex-col items-center justify-center rounded-[20px]">
          <img src={mark} alt="" className="absolute left-[30px] top-[-20px]" />
          <p className="text-center">
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income. The expense windows .
          </p>
          <p className="mt-[14px] text-[14px]">- Mike Taylor, Web Designer</p>
        </div>
      </div>

      <div data-aos="fade-left" className="relative w-[598px] h-[594px]">
        <div className="w-[486px] h-[540px] bg-[#DBF1FA] ml-[112px] mt-[54px]"></div>
        <img
          src={`${phone === "green" ? phones2 : phones}`}
          alt="phone"
          className="absolute top-[-15px] left-[150px]"
        />
        <div className="bg-[white] w-[300px] h-[236px] pt-[10px] absolute bottom-[30px] left-0 font-[manrope]">
          <p className="text-[20px] font-[500] ml-[20px]">Total Balance</p>
          <p className="text-[22px] font-[700] ml-[20px]">
            $4,200 <span className="text-[#00E1F0] text-[18px]">+10%</span>
          </p>
          <img
            src={barChart}
            alt="/"
            className="absolute top-[90px] left-[30px]"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureBottom;
