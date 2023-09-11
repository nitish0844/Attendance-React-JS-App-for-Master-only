import React from "react";
import MapContainer from "../components/Contact/Map";
import DetailCard from "../components/Contact/DetailCard";

const Contact = () => {
  return (
    <div id="contact-section" className="flex flex-col md:flex-row">
      {/* Map */}
      <div className="md:w-1/2 w-full">
        <MapContainer />
      </div>
      {/* Detail Card */}
      <div className="md:w-1/2 w-full md:flex">
        <DetailCard />
      </div>
    </div>
  );
};

export default Contact;
