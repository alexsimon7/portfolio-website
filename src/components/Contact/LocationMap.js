import React from "react";

function LocationMap() {
  return(
    <div>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Midtown+Manhattan,+Manhattan,+New+York,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        title="my location"
        width="300"
        height="300"
      ></iframe>
    </div>
  );
}

export default LocationMap;
