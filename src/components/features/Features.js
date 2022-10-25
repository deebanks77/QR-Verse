import React from "react";
import FeatureTop from "./FeatureTop";
import FeatureBottom from "./FeatureBottom";
import robotHandIcon from "../../images/rightrobot.png";
import icon3 from "../../images/pic3.png";
import icon4 from "../../images/pic4.png";

function Features() {
  return (
    <div className="relative w-full">
      <h2 className="font-[poppins] text-[28px] bigTablet:text-[34px] desktop:text-[40px] font-[700] text-center mt-[154px]">
        Features that blows mind
      </h2>
      <img
        data-aos="zoom-out"
        src={robotHandIcon}
        alt="/"
        className="hidden tablet:inline-block absolute top-[-30px] tablet:top-[-60px] desktop:top-[-120px] right-[-40px] w-[222px] h-[230px]  desktop:w-[372px] desktop:h-[390px] object-contain"
      />
      <FeatureTop />
      <FeatureBottom />
      <FeatureTop background="black" />
      <FeatureBottom phone="green" />
    </div>
  );
}

export default Features;
