import React from "react";
import QRCode from "react-qr-code";

function Qrcode() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  return (
    // <div style={{ background: "#FFA500", padding: "16px" }}>
    <div className="flex bg-TigerColor p-10 justify-center sm:w-full flex-col">
      <h3 className="text-center text-5xl font-semibold font-Attendence">
        Attendence
      </h3>
      <h4 className="text-center text-3xl pb-8">
        Scan the QR code to get the Attendence
      </h4>
      <QRCode
        className="flex md:w-full w-auto"
        size={250}
        // style={{ height: "auto", maxWidth: "20%", width: "50%" }}
        value={formattedDate}
        viewBox={`0 0 10 10`}
        bgColor="#FFA500"
      />
    </div>
  );
}

export default Qrcode;
