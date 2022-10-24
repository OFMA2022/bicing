import data_information from "../data_information.json";
import data_status from "../data_status.json";
import MyMap from "../components/MyMap";
import NavBar from "../components/NavBar/NavBar";
import Description_Map from "../components/Description_Map";
import { useLoadScript, LoadScript } from "@react-google-maps/api";
import { useState, useMemo } from "react";
import PreviousPage_Button from "../components/PreviousPage_Button";

function generalMap({ stations }) {
  const [value, setValues] = useState([]);
  const [directions, setDirections] = useState([]);

  const center = useMemo(() => ({ lat: 41.3986526, lng: 2.1613738 }), []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  data_status.data.stations.filter((station_status) => {
    stations.data.stations.map((station) => {
      if (station.station_id == station_status.station_id) {
        value.push(station_status);
        directions.push({ address: { lat: station.lat, lng: station.lon } });
      }
    });
  });

  return (
    <div className="max-w-[1400px] ml-auto mr-auto items-center">
      <div className="w-full overflow-x-hidden overflow-y-hidden">
        {/* NAVBAR */}
        <NavBar />
      </div>
      <div className="mr-auto">
        {/* BACKWARD BUTTON */}
        <PreviousPage_Button />
      </div>
      <div>
        {/* DESCRIPTION */}
        <Description_Map />
      </div>
      <div>{/* FORM */}</div>
      <div className="w-full flex items-center justify-center">
        {/* MAP */}
        {!loadError && isLoaded != "" ? (
          <MyMap
            typeMarker="all"
            direction={directions}
            zoom={14}
            center={center}
            mapContainerClassName="map-container"
            stations={stations.data.stations}
            stations_status={value}
          />
        ) : (
          <div className="text-5xl text-center mt-40">
            Por favor actualice la página para recargar la mapa.
          </div>
        )}
      </div>
    </div>
  );
}

export default generalMap;

{
  /* GETTING DATA FROM JSON FILE */
}
export const getStaticProps = () => {
  return {
    props: {
      stations: data_information,
    },
  };
};
