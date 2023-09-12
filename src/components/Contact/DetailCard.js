import React from "react";
import Custom from "./custom.png";

const DetailCard = () => {
  return (
    <div className="flex md:flex-col items-center justify-center w-full bg-Tiger-black h-screen-50 md:pt-0 pt-32 md:space-x-0 space-x-[-20%] pr-6">
      {/* Photo */}
      <div className="md:w-1/2 w-full p-4 flex justify-center items-center">
        <div className="md:w-36 md:h-36 h-28 w-28 rounded-full bg-TigerColor">
          {/* Place the gym master's photo here */}
          <img
            src={Custom}
            alt="Gym Master"
            className="md:w-32 md:h-32 h-24 w-24 rounded-full ml-2 mt-2"
          />
        </div>
      </div>
      {/* Information */}
      <div className="md:w-1/2 w-full p-4 items-center">
        <h2 className="text-xl text-TigerColor font-semibold mb-2 text-center ">
          Gym Master's Name
        </h2>
        <p className="text-TigerColor text-center">Mobile: +1234567890</p>
        <p className="text-TigerColor text-center">
          Email: gymmaster@example.com
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
