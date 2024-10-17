import React from "react";

function SupporterStep({ step, text, highlitedText }) {
  return (
    <div className="mt-10">
      <div className="w-20 h-20 text-[32px] font-bold text-headingColor flex items-center justify-center scroll-mb-80 bg-primaryLight rounded-full mx-auto mb-8" data-aos="zoom-in" data-aos-delay="100">{step}</div>
      <h4 className="text-[32px] text-center font-semibold leading-[43px]" data-aos="fade-In" data-aos-delay="200">
        {text}
        <br /> <span className="text-headingColor2">{highlitedText}</span>
      </h4>
    </div>
  );
}

export default SupporterStep;
