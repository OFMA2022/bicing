import MyMap from "../components/MyMap";

export default function Search_Map({
  loadError,
  isLoaded,
  typeMarker,
  directions,
  zoom,
  center,
  mapContainerClassName,
  stations,
  stations_status,
}) {
  if (!loadError && isLoaded != "") {
    return (
      <MyMap
        typeMarker={typeMarker}
        direction={directions}
        zoom={zoom}
        center={center}
        mapContainerClassName={mapContainerClassName}
        stations={stations}
        stations_status={stations_status}
      />
    );
  } else {
    return (
      <div className="text-5xl text-center mt-40">
        Por favor actualice la página para recargar la mapa.
      </div>
    );
  }
}
