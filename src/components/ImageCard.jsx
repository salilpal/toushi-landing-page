import React from "react";

const ImageCard = ({ image, text }) => {
  return (
    <div class="bg-white h-[50vh] w-[21%] flex flex-col items-center max-xss:w-[90%] xss:max-xs:w-[90%] xs:max-sm:w-[80%] sm:max-md:h-[48vh] sm:max-md:w-[40%] md:max-lg:h-[35vh] lg:max-xl:h-[47vh] lg:max-xl:mt-[1vh]">
      <img
        class="h-[40vh] w-full transition-all duration-500 filter grayscale hover:grayscale-0 sm:max-md:h-[40vh] md:max-lg:h-[30vh] lg:max-xl:h-[40vh]"
        src={image}
        alt=""
      />
      <div class="text-2xl mt-[3vh] md:max-lg:text-lg md:max-lg:mt-[1vh] lg:max-xl:text-xl lg:max-xl:mt-[1vh]">
        {text}
      </div>
    </div>
  );
};

export default ImageCard;
