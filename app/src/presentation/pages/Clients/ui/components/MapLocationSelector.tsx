// components/MapWithMarker.tsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import proj4 from 'proj4';

// Definição das projeções
proj4.defs([
  [
    'EPSG:4326', // WGS84
    '+proj=longlat +datum=WGS84 +no_defs',
  ],
  [
    'EPSG:3857', // Web Mercator (usado por muitos mapas online)
    '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
  ],
]);

const sourceProjection = 'EPSG:4326'; // Latitude/Longitude (WGS84)
const targetProjection = 'EPSG:3857'; // Coordenadas Cartesianas (Web Mercator)

const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapLocationSelector: React.FC = () => {
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null);
  const [cartesianCoords, setCartesianCoords] = useState<[number, number] | null>(null);

  const MapClickHandler = () => {
    useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        setMarkerPosition([lat, lng]);

        // Convertendo para coordenadas cartesianas
        const [x, y] = proj4(sourceProjection, targetProjection, [lng, lat]);
        setCartesianCoords([x, y]);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[-23.55052, -46.633308]} // Initial position: São Paulo, Brazil
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
      maxBounds={[
        [-90, -180], // South-West corner
        [90, 180]    // North-East corner
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler />
      {markerPosition && (
        <Marker position={markerPosition} icon={customIcon}>
          <Popup>
            <strong>Selected Location</strong>
            <br />
            Latitude: {markerPosition[0].toFixed(5)}
            <br />
            Longitude: {markerPosition[1].toFixed(5)}
            {cartesianCoords && (
              <>
                <br />
                X: {cartesianCoords[0].toFixed(2)} meters
                <br />
                Y: {cartesianCoords[1].toFixed(2)} meters
              </>
            )}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapLocationSelector;

