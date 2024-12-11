import React, { useState } from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api";

const LocationMap = ({ onLocationChange }) => {
  const [location, setLocation] = useState({ lat: -34.397, lng: 150.644 });

  const handleDragEnd = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setLocation(newLocation);
    onLocationChange(newLocation);
  };

  return (
    <GoogleMap center={location} zoom={8} mapContainerStyle={{ width: '100%', height: '400px' }}>
      <Marker position={location} draggable={true} onDragEnd={handleDragEnd} />
    </GoogleMap>
  );
};

export default LocationMap;
