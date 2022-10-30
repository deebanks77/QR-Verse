import React from "react";
import Box from "./Box";

function WaysToUse() {
  return (
    <div className="w-full">
      <h2
        // data-aos="zoom-out"
        className="font-[poppins] font-[700] text-[22px] tablet:text-[30px] laptop:text-[36px] mt-[280px] bigTablet:mt-[122px] px-5 tablet:px-10 bigTablet:px-16 mx-auto  laptop:w-[776px] text-center"
      >
        There Are A Few Other Dozen Ways You Could Use{" "}
        <span className="text-[#0490EC]">QR Codes</span> For ...
      </h2>
      <div
        className={`grid grid-cols-2 tablet:grid-cols-3 gap-12 max-w-[1000px] px-10 mx-auto mt-[85px]`}
      >
        <Box />
        <Box />
        <div className="hidden tablet:inline-block">
          <Box />
        </div>
      </div>
    </div>
  );
}

export default WaysToUse;
