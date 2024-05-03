import React, { useState } from "react";
import MapContainer from "./components/MapContainer";
import { FormData } from "./components/FormData";

const App: React.FC = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleFormSubmit = (latitude: string, longitude: string) => {
    console.log("lat", latitude);
    console.log("lng", longitude);
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <FormData onFormSubmit={handleFormSubmit} />
      <MapContainer latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default App;
