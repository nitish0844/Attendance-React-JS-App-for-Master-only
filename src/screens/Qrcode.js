import React from "react";
import QRCode from "react-qr-code";

function Qrcode() {
  const currentDate = new Date();
  // const formattedDate = currentDate.toISOString().split("T")[0];

  // Get options for formatting the date with the Asia/Kolkata timezone
  const options = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  };

  // Format the date with the specified options
  const formattedDate = currentDate.toLocaleString("en-IN", options);

  console.log(formattedDate);

  return (
    // <div style={{ background: "#FFA500", padding: "16px" }}>
    <div
      id="attendance-section"
      className="flex bg-TigerColor p-10 justify-center flex-col md:h-screen-80"
    >
      <h3 className="text-center text-3xl md:text-5xl font-semibold font-Attendence">
        Attendence
      </h3>
      <h4 className="text-center text-2xl pb-8 pt-3 font-semibold">
        Scan the QR code to get the Attendence
      </h4>
      <QRCode
        className="flex md:w-full w-auto"
        size={280}
        // style={{ height: "auto", maxWidth: "20%", width: "50%" }}
        value={formattedDate}
        viewBox={`0 0 10 10`}
        bgColor="#FFA500"
      />
    </div>
  );
}

export default Qrcode;
