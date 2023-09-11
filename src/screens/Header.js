import React from "react";
import TigerImage from "../Images/Tiger.jpg";

const Header = () => {
  return (
    <header
      id="home-section"
      className="flex bg-Tiger-black h-screen-80 md:flex"
    >
      <div className="w-full flex flex-col md:flex-row">
        {/* Title */}
        <div className="mt-10 md:w-1/2 flex items-center justify-center flex-col text-center md:text-center px-6 md:px-16">
          <h1 className="text-TigerColor font-TigerTitle text-3xl md:text-5xl mb-4 md:mb-0">
            Tiger Gym
          </h1>
          <h4 className="text-white font-TitleDes pt-4 text-xl md:text-2xl mb-10">
            It's hard to beat a person who never gives up.
          </h4>
        </div>

        <div className="w-full md:w-1/2 relative h-1/2 md:h-screen-80">
          <img
            src={TigerImage}
            className="h-full md:h-full w-full object-cover md:w-auto min-h-80vh"
            alt="Tiger"
          />
          {/* <div className="absolute inset-0 bg-black opacity-60 md:w-full"></div> */}
          <div className="absolute inset-0 bg-black h-auto opacity-60 md:w-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
