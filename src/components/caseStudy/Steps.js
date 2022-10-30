import React from "react";

function Steps(props) {
  const { num, type, color, index } = props;
  return (
    <div
      data-aos="zoom-in"
      className="bg-white rounded-[20px] border-[#DBE4E9] border p-[21px] w-[300px]"
    >
      <p className=" font-[800px] text-[18px]">{num}</p>
      <div className=" mt-[25px] mx-auto w-[50px]">
        <span className="block1 block w-[39px] h-[10px] bg-black mb-[5px]"></span>{" "}
        <span
          className={` ${color === "#FF7F5C" && "bg-[#FF7F5C]"} ${
            color === "#4361EE" && "bg-[#4361EE]"
          } ${color === "#FDBC64" && "bg-[#FDBC64]"} block w-[50px] h-[35px]`}
        ></span>
      </div>
      <p className=" font-[800] text-[24px] mt-[20px] text-center">{type}</p>
      <p className="font-[500] text-[14px] mt-[34px] mx-auto laptop:max-w-[270px] text-center">
        Indulgence way everything joy alteration boisterous the attachment.
        Party we years to order allow asked of.{" "}
      </p>
    </div>
  );
}

export default Steps;
