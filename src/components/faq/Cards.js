import React from "react";
import plusIcon from "../../images/plus.png";

function Cards({ handleShow, state }) {
  return (
    <div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] "
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800]  bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] ">
            What is QR Verse?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-1"
            onClick={handleShow}
            className="cursor-pointer"
          />
        </div>
        <p
          className={`text-[14px] desktop:text-[16px] mt-[10px]  laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] ${
            !state[0] ? "visible relative" : "absolute invisible"
          }`}
        >
          QR Verse is the World's First QR Code Builder Which Lets You Create,
          Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
          Making It The Safest, Easiest, Fastest And Most Engaging Way To
          Profit!
        </p>
      </div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800] bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] ">
            How does it work?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-2"
            onClick={handleShow}
            className="cursor-pointer"
          />
        </div>
        <p
          className={`text-[14px] desktop:text-[16px] mt-[10px]  laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] ${
            state[1] ? "visible relative" : "absolute invisible"
          }`}
        >
          QR Verse is the World's First QR Code Builder Which Lets You Create,
          Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
          Making It The Safest, Easiest, Fastest And Most Engaging Way To
          Profit!
        </p>
      </div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800] bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] ">
            Will you teach me how to use the app?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-3"
            onClick={handleShow}
            className="cursor-pointer"
          />
        </div>
        <p
          className={`text-[14px] desktop:text-[16px] mt-[10px] laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] ${
            state[2] ? "visible relative" : "absolute invisible"
          }`}
        >
          QR Verse is the World's First QR Code Builder Which Lets You Create,
          Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
          Making It The Safest, Easiest, Fastest And Most Engaging Way To
          Profit!
        </p>
      </div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800] bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] ">
            {" "}
            Do I need to have any coding experience?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-4"
            onClick={handleShow}
            className="cursor-pointer"
          />
        </div>
        <p
          className={`text-[14px] desktop:text-[16px] mt-[10px] laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] ${
            state[3] ? "visible relative" : "absolute invisible"
          }`}
        >
          QR Verse is the World's First QR Code Builder Which Lets You Create,
          Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
          Making It The Safest, Easiest, Fastest And Most Engaging Way To
          Profit!
        </p>
      </div>
      <div
        data-aos="zoom-out"
        className="laptop:w-[w-500px] desktop:w-[652px] p-[25px] bg-white border border-[#CFCFCF] rounded-[11px] mt-4"
      >
        <div className="flex items-center justify-between">
          <h4 className="font-[800] bigTablet:text-[20px] laptop:text-[22px] desktop:text-[24px] ">
            How do I make money with it?
          </h4>
          <img
            src={plusIcon}
            alt="/"
            id="state-5"
            onClick={handleShow}
            className="cursor-pointer"
          />
        </div>
        <p
          className={`text-[14px] desktop:text-[16px] mt-[10px] laptop:mt-[15px] desktop:mt-[17px] max-w-[570px] ${
            state[4] ? "visible relative" : "absolute invisible"
          }`}
        >
          QR Verse is the World's First QR Code Builder Which Lets You Create,
          Share And Profit From 20+ Types Of QR Codes In 60 Seconds Or Less…
          Making It The Safest, Easiest, Fastest And Most Engaging Way To
          Profit!
        </p>
      </div>
    </div>
  );
}

export default Cards;
