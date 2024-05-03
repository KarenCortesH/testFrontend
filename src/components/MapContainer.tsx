import React from "react";
import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";

const MapContainer = ({ latitude, longitude }) => {
  const containerStyle = {
    //Estilo del Contenedor
    margin: "200px",
    width: "1000px",
    height: "500px",
  };
  // centro de mi mapa CALI
  const center = {
    lat: 3.4516,
    lng: -76.532,
  };
  //crear marcador en centro de mapa
  const MarkerPositionCali = {
    lat: 3.4516,
    lng: -76.532,
  };

  //Creacion Poligono Barrio Salomia
  const PoligonoSalomia = [
    { lat: 3.430397, lng: -76.546433 },
    { lat: 3.430888, lng: -76.544178 },
    { lat: 3.4292, lng: -76.543899 },
    { lat: 3.429092, lng: -76.546158 },
    { lat: 3.430397, lng: -76.546433 },
  ];

  //New Marcador hecho por el user
  const newMarkerUser = {
    lat: Number(latitude),
    lng: Number(longitude),
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCfaV_uJuYmbhpbUd8CbU9njW-6nFrwOeM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={MarkerPositionCali} />
        <Polygon
          paths={PoligonoSalomia}
          options={{
            fillColor: "red",
            fillOpacity: 0.5,
            strokeColor: "blue",
            strokeWeight: 3,
          }}
        />
        <Marker
          position={newMarkerUser}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
