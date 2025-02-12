import React from "react";
import GoogleMapReact from "google-map-react"; // Remove the Props import, as it's not needed
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "./map.css";

// Define the Location interface
interface Location {
  lat: number;
  lng: number;
  address: string;
}

// Define the LocationPinProps interface
interface LocationPinProps {
  text: string;
  lat: number;
  lng: number;
}

// LocationPin component
const LocationPin: React.FC<LocationPinProps> = ({ text }) => (
  <div className="pin flex flex-col">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

// Define the MapProps interface
interface MapProps {
  location: Location;
  zoomLevel: number;
  height: string;
}

// Define the waterStyle for the map
const waterStyle = [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#502a64",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry.all",
    stylers: [
      {
        color: "#180b1f",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#81519b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        saturation: 25,
      },
      {
        lightness: 25,
      },
      {
        weight: "0.01",
      },
    ],
  },
];

// Map component
const Map: React.FC<MapProps> = ({ location, zoomLevel, height }) => (
  <div className="map">
    <div className={`google-map ${height}`}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA3AGV5YZtd34P8K9WRnuDKTs44M-LUBLU" }} // Replace with your actual API key
        defaultCenter={location}
        defaultZoom={zoomLevel}
        options={{ styles: waterStyle }}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
