import React from "react";
import Container from "react-bootstrap/Container";

function LocationMap() {
  return(
    <Container>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Midtown+Manhattan,+Manhattan,+New+York,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        title="my location"
        width="500"
        height="500"
      ></iframe>
    </Container>
  );
}

export default LocationMap;
