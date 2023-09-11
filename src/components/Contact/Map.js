import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  const gymLocation = {
    lat: 10.749706948421789,
    lng: 78.82245065464416,
  };

  return (
    <div className="md:h-96 h-72 w-full relative pb-48">
      {/* <div className="relative"> */}
      <Map
        google={props.google}
        zoom={15}
        style={{ width: "100%", height: "400px" }}
        initialCenter={gymLocation}
      >
        <Marker position={gymLocation} name={"Gym"} />
        {/* Add polylines or route here */}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBDDOr5YH_yg0l3PBdFT4aC33khrAsW_j8", // Replace with your Google Maps API key
})(MapContainer);
