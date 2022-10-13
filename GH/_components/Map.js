import { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import InfoWindowCard from "./InfoWindowCard";

function Map({
  typeMarker,
  direction,
  institutions,
  zoom,
  center,
  mapContainerClassName,
}) {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName={mapContainerClassName}
    >
      {typeMarker === "all" ? (
        institutions.map((institution) => (
          <Marker
            key={institution.id}
            position={institution.direction}
            onClick={() => handleActiveMarker(institution.id)}
          >
            {activeMarker === institution.id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <InfoWindowCard institution={institution} />
              </InfoWindow>
            ) : null}
          </Marker>
        ))
      ) : (
        <Marker position={direction} />
      )}
    </GoogleMap>
  );
}

export default Map;
