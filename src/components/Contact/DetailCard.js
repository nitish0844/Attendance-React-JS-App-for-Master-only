import React from "react";
import Custom from "./custom.png";

const DetailCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-Tiger-black">
      {/* Photo */}
      <div className="md:w-1/2 w-full p-4 flex justify-center items-center">
        <div className="w-36 h-36 rounded-full bg-TigerColor">
          {/* Place the gym master's photo here */}
          <img
            src={Custom}
            alt="Gym Master"
            className="w-32 h-32 rounded-full ml-2 mt-2"
          />
        </div>
      </div>
      {/* Information */}
      <div className="md:w-1/2 w-full p-4 items-center">
        <h2 className="text-xl text-TigerColor font-semibold mb-2 text-center">
          Master Ravi
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
