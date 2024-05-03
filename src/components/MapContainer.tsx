import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, Polygon } from "@react-google-maps/api";

const MapContainer = ({ latitude, longitude }) => {
  const containerStyle = {
    // Estilo del Contenedor
    margin: "200px",
    width: "1000px",
    height: "500px",
  };

  // Centro de mi mapa CALI
  const center = {
    lat: 3.4516,
    lng: -76.532,
  };

  // Coordenadas iniciales del marcador en el centro del mapa (Cali)
  const markerPositionCali = {
    lat: 3.4516,
    lng: -76.532,
  };

  // Coordenadas del polígono del Barrio Salomia
  const poligonoSalomia = [
    { lat: 3.430397, lng: -76.546433 },
    { lat: 3.430888, lng: -76.544178 },
    { lat: 3.4292, lng: -76.543899 },
    { lat: 3.429092, lng: -76.546158 },
    { lat: 3.430397, lng: -76.546433 },
  ];

  // Lista de marcadores adicionales agregados desde el mapa
  const [additionalMarkers, setAdditionalMarkers] = useState([]);

  // Nuevo Marcador hecho por el usuario
  const [newMarkerUser, setNewMarkerUser] = useState(null);

  const handleMapClick = (event) => {
    const clickedLatLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    // Agrego el nuevo marcador a la lista de marcadores adicionales
    setAdditionalMarkers([...additionalMarkers, clickedLatLng]);

    // Actualiza el estado del nuevo marcador hecho por el usuario
    setNewMarkerUser(clickedLatLng);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCfaV_uJuYmbhpbUd8CbU9njW-6nFrwOeM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick} // Agregar el evento de clic al mapa
      >
        {/* Marcador en el centro del mapa (Cali) */}
        <Marker position={markerPositionCali} />

        {/* Polígono del Barrio Salomia */}
        <Polygon
          paths={poligonoSalomia}
          options={{
            fillColor: "red",
            fillOpacity: 0.5,
            strokeColor: "blue",
            strokeWeight: 3,
          }}
        />

        {/* Marcador del usuario */}
        {newMarkerUser && (
          <Marker
            position={newMarkerUser}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png",
            }}
          />
        )}

        {/* Marcadores adicionales agregados desde el mapa */}
        {additionalMarkers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
