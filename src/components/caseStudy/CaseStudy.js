import React, { useState } from "react";
import manImage from "../../images/youtubeImage.png";
import youtubeIcon from "../../images/youtube.png";
import graph from "../../images/graph.png";
import Steps from "./Steps";
import "./CaseStudy.css";

function CaseStudy() {
  const steps = [
    { num: "01", type: "Create", color: "#4361EE" },
    { num: " 02", type: "Share", color: "#FF7F5C" },
    { num: "03", type: "Profit", color: "#FDBC64" },
  ];

  const [embedVideo, setEmbedVideo] = useState("");
  const handlePlay = () => {
    setEmbedVideo("G4syHs3M82E");
  };
  const handleStop = () => {
    setEmbedVideo("");
  };

  return (
    <div className="px-[10px] tablet:px-[80px] relative">
      <div className="max-w-[1000px] mx-auto mt-[120px] px-[30px] py-[10px] laptop:px-[88px] laptop:py-[20px] text-[white] bg-gradient-to-r from-[#7060EF] to-[#1FBAEA] relative font-[manrope] rounded-[20px]">
        <h4
          data-aos="zoom-out"
          className="text-[24px] tablet:text-[30px] midTablet:text-[34px] bigTablet:text-[38px] laptop:text-[40px] desktop:text-[45px] font-[800]"
        >
          CASE STUDY
        </h4>
        <p
          data-aos="zoom-out"
          className="tablet:text-[18px] midTablet:text-[20px] desktop:text-[26px] font-[500] tablet:font-[700] mt-[21px]"
        >
          Prabir A Beta tester Used QRverse To Easily{" "}
          <span className="text-[#FFB865]">
            PROFIT $1,245/ Month Offering QR Code Services To Local Businesses
          </span>{" "}
          In India At A Monthly Subscription Fee...
        </p>
        <div
          data-aos="zoom-out"
          className="relative w-[325px] h-[325px] tablet:w-[225px] tablet:h-[305px] midTablet:w-[275px] midTablet:h-[325px] laptop:w-[325px] laptop:h-[405px] mt-[40px] tablet:mt-[80px] mx-auto tablet:mx-[initial]"
        >
          <img
            src={manImage}
            alt="man"
            className="w-[100%] h-[100%] object-contain"
          />
          <img
            src={youtubeIcon}
            onClick={handlePlay}
            alt="youtube"
            className="w-[72px] h-[50px] absolute top-[40%] left-[40%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
          />
        </div>
        <img
          data-aos="fade-left"
          data-aos-delay="300"
          src={graph}
          alt="graph"
          className="absolute mobile:invisible tablet:visible top-[300px] right-[-60px] w-[300px] midTablet:w-[400px] laptop:top-[260px] laptop:right-[-30px] desktop:top-[330px] desktop:right-[-150px] laptop:w-[450px] laptop:h-[300px] desktop:w-[700px] desktop:h-[300px] object-contain"
        />
      </div>

      <div className="font-[manrope] ">
        <h4
          // data-aos="zoom-in"
          className="max-w-[868px] mt-[120px] tablet:mt-[187px] mx-auto text-[24px] text-center"
        >
          Generate The Fastest Profit Ever By Providing To Businesses With 20+
          Types Of Profit Making QR Codes ,{" "}
          <span className="font-bold">In 3 Simple Steps…</span>
        </h4>
        <div className="max-w-[1200px] mx-auto mt-[70px] tablet:mt-[100px] flex flex-wrap items-center justify-center gap-10">
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
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedVideo}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}

export default CaseStudy;

{
  /* <iframe width="697" height="392" src="https://www.youtube.com/embed/G4syHs3M82E" title="Data Analyst vs Business Analyst | Which Is Right For You?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
