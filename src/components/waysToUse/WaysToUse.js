import React from "react";
import Box from "./Box";

function WaysToUse() {
  return (
    <div className="w-full">
      <h2
        // data-aos="zoom-out"
        className="font-[poppins] font-[700] text-[40px] mt-[182px] mx-auto w-[776px] text-center"
      >
        There Are A Few Other Dozen Ways You Could Use{" "}
        <span className="text-[#0490EC]">QR Codes</span> For ...
      </h2>
      <div className="grid grid-cols-3 gap-12 max-w-[1200px] mx-auto mt-[85px]">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default WaysToUse;
