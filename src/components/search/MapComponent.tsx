import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Hotel from "../../models/Hotel";

interface MapComponentProps {
  hotel: Hotel
}

const MapComponent = (props: MapComponentProps) => {
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.hotel) {
      fetch(
        `https://nominatim.openstreetmap.org/search?city=${props.hotel.address.city}&street=${props.hotel.address.street}+${props.hotel.address.houseNumber}&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            setPosition([data[0].lat, data[0].lon]);
            setLoaded(true);
          }
        });
    }
  }, [props.hotel]);

  let map = <div className="h-52 w-full">Konnte nicht geladen werden</div>;
  if (loaded) {
    map = (
      <MapContainer className="z-0 h-52 w-full" center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
        </Marker>
      </MapContainer>
    );
  }

  return <div>{map}</div>;
};

export default MapComponent;
