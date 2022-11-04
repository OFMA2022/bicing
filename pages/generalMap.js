import PreviousPage_Button from "../components/PreviousPage_Button";
import { useState, useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Description_Map from "../components/Description_Map";
import classnames from "classnames";
import Search_Map from "../components/Search_Map";
import MyMap from "../components/MyMap";
import Button from "../components/Button";
import NavBar from "../components/NavBar/NavBar";

/* EXTERNAL DATA API : DATA INFORMATION */
const API_URL_DATA_INFO = process.env.API_URL_DATA_INFO;
/* EXTERNAL DATA API : DATA STATUS */
const API_URL_DATA_STATUS = process.env.API_URL_DATA_STATUS;

function generalMap({ stations, data_status }) {
  /* DECLARED TO SAVE ARRAY DATA */
  const [stations_status, setStations_status] = useState([]);
  const [directions, setDirections] = useState([]);

  /* CENTER OF BARCELONA */
  const center = useMemo(() => ({ lat: 41.3986526, lng: 2.1613738 }), []);

  /* NECESSARY TO BE ABLE TO LOAD THE MAP */
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  /* SAVING DATA BY 'if CONDITION' AND DIRECTIONS IN A SINGLE ARRAY CONST */
  data_status.data.stations.filter((station_status) => {
    stations.data.stations.map((station) => {
      if (station.station_id == station_status.station_id) {
        stations_status.push(station_status);
        directions.push({ address: { lat: station.lat, lng: station.lon } });
      }
    });
  });

  /* DETAILS FOR GENERAL MAP*/
  /*let typeMarker = "all";
  let zoom = 13;
  const mapContainerClassName = classnames("map-container");*/

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

      <div>
        {/* FORM */}
        {/*         <form
          action="/api/form"
          method="post"
          className="flex justify-center items-center gap-4 mb-5"
        >
          <div className="search-box">
            <input
              id="num_estacion"
              name="num_estacion"
              type="text"
              className="input-search"
              placeholder="Número de estación..."
              required
            />
          </div>
          <div>
            <Button type="submit" variant="quaternary">
              Buscar
            </Button>
          </div>
        </form> */}
      </div>

      <div className="w-full flex items-center justify-center">
        {/* MAP */}
        {!loadError && isLoaded != "" ? (
          <MyMap
            typeMarker="all"
            direction={directions}
            zoom={13}
            center={center}
            mapContainerClassName="map-container"
            stations={stations.data.stations}
            stations_status={stations_status}
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

export const getStaticProps = async () => {
  /* FETCHING DATA FROM EXTERNAL API */
  const res = await fetch(API_URL_DATA_INFO);
  const stations = await res.json();

  /* FETCHING DATA FROM EXTERNAL API */
  const res_status = await fetch(API_URL_DATA_STATUS);
  const data_status = await res_status.json();

  return {
    props: {
      stations,
      data_status,
    },
  };
};
