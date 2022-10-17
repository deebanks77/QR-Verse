import React from "react";
import manImage from "../../images/youtubeImage.png";
import youtubeIcon from "../../images/youtube.png";
import graph from "../../images/graph.png";
import Steps from "./Steps";

function CaseStudy() {
  const steps = [
    { num: "01", type: "Create", color: "#4361EE" },
    { num: " 02", type: "Share", color: "#FF7F5C" },
    { num: "03", type: "Profit", color: "#FDBC64" },
  ];
  return (
    <div>
      <div className="w-[1200px] h-[900px] mx-auto mt-[120px] px-[88px] py-[60px] text-[white] bg-gradient-to-r from-[#7060EF] to-[#1FBAEA] relative font-[manrope] rounded-[20px]">
        <h4 data-aos="zoom-out" className="text-[55px] font-[800]">
          CASE STUDY
        </h4>
        <p
          data-aos="zoom-out"
          className="text-[30px] font-[700] mt-[21px] w-[835px]"
        >
          Prabir A Beta tester Used QRverse To Easily{" "}
          <span className="text-[#FFB865]">
            PROFIT $1,245/ Month Offering QR Code Services To Local Businesses
          </span>{" "}
          In India At A Monthly Subscription Fee...
        </p>
        <div
          data-aos="zoom-out"
          className="relative w-[385px] h-[465px] mt-[121px]"
        >
          <img src={manImage} alt="man" className="w-[100%] h-[100%]" />
          <img
            src={youtubeIcon}
            alt="youtube"
            className="w-[72px] h-[50px] absolute top-[40%] left-[40%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <img
          data-aos="fade-left"
          data-aos-delay="300"
          src={graph}
          alt="graph"
          className="absolute top-[380px] left-[500px] w-[800px] h-[400px] object-contain"
        />
      </div>

      <div className="font-[manrope] ">
        <h4
          // data-aos="zoom-in"
          className="w-[868px] mt-[187px] mx-auto text-[24px] text-center"
        >
          Generate The Fastest Profit Ever By Providing To Businesses With 20+
          Types Of Profit Making QR Codes ,{" "}
          <span className="font-bold">In 3 Simple Steps…</span>
        </h4>
        <div className="max-w-[1200px] mx-auto mt-[100px] flex items-center gap-10">
          {steps.map((step, index) => (
            <Steps
              index={index}
              num={step.num}
              color={step.color}
              type={step.type}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
