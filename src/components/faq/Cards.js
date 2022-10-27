import React from "react";
import plusIcon from "../../images/plus.png";

function Cards({ handleShow, state }) {
  return (
    <div className="basis-[60%]">
      <div
        data-aos="zoom-out"
        className={`laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] `}
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800]  bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] leading-[24px]">
            What is QR Verse?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-1"
            onClick={(e) => handleShow(e)}
            className="cursor-pointer"
          />
        </div>
        {!state[0] && (
          <p
            className={`text-[14px] desktop:text-[16px] mt-[10px]  laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] leading-[28px] animate-opacity`}
          >
            QR Verse is the World's First QR Code Builder Which Lets You Create,
            Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
            Making It The Safest, Easiest, Fastest And Most Engaging Way To
            Profit!
          </p>
        )}
      </div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800] bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] leading-[24px]">
            How does it work?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-2"
            onClick={(e) => handleShow(e)}
            className="cursor-pointer"
          />
        </div>
        {state[1] && (
          <p
            className={`text-[14px] desktop:text-[16px] mt-[10px]  laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] leading-[28px] animate-opacity`}
          >
            QR Verse is the World's First QR Code Builder Which Lets You Create,
            Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
            Making It The Safest, Easiest, Fastest And Most Engaging Way To
            Profit!
          </p>
        )}
      </div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800] bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] leading-[24px]">
            Will you teach me how to use the app?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-3"
            onClick={(e) => handleShow(e)}
            className="cursor-pointer"
          />
        </div>
        {state[2] && (
          <p
            className={`text-[14px] desktop:text-[16px] mt-[10px] laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] leading-[28px] animate-opacity`}
          >
            QR Verse is the World's First QR Code Builder Which Lets You Create,
            Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
            Making It The Safest, Easiest, Fastest And Most Engaging Way To
            Profit!
          </p>
        )}
      </div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800] bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] leading-[24px]">
            {" "}
            Do I need to have any coding experience?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-4"
            onClick={(e) => handleShow(e)}
            className="cursor-pointer"
          />
        </div>
        {state[3] && (
          <p
            className={`text-[14px] desktop:text-[16px] mt-[10px] laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] leading-[28px] animate-opacity`}
          >
            QR Verse is the World's First QR Code Builder Which Lets You Create,
            Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
            Making It The Safest, Easiest, Fastest And Most Engaging Way To
            Profit!
          </p>
        )}
      </div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800] bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] leading-[24px] ">
            How do I make money with it?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-5"
            onClick={(e) => handleShow(e)}
            className="cursor-pointer"
          />
        </div>
        {state[4] && (
          <p
            className={`text-[14px] desktop:text-[16px] mt-[10px] laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] leading-[28px] animate-opacity`}
          >
            QR Verse is the World's First QR Code Builder Which Lets You Create,
            Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
            Making It The Safest, Easiest, Fastest And Most Engaging Way To
            Profit!
          </p>
        )}
      </div>
    </div>
  );
}

export default Cards;
