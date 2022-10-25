import { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import InfoWindowMapCard from "./InfoWindowMapCard";

{
  /* MAP: DEPENDS ON 'typeMarker' THE MAP FUNCTION RETURN ALL MARKERS OR A SINGLR MARKER */
}

function Map({
  typeMarker,
  direction,
  stations,
  stations_status,
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
      {typeMarker == "all" ? (
        stations.map((station, i) => (
          <Marker
            key={station.station_id}
            position={direction[i].address}
            onClick={() => handleActiveMarker(station.station_id)}
          >
            {activeMarker == station.station_id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <InfoWindowMapCard
                  stations={station}
                  stations_status={stations_status[i]}
                />
              </InfoWindow>
            ) : null}
          </Marker>
        ))
      ) : (
        <Marker
          key={stations.station_id}
          position={direction}
          onClick={() => handleActiveMarker(stations.station_id)}
        >
          {activeMarker == stations.station_id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <InfoWindowMapCard
                stations={stations}
                stations_status={stations_status}
              />
            </InfoWindow>
          ) : null}
        </Marker>
      )}
    </GoogleMap>
  );
}
export default Map;
