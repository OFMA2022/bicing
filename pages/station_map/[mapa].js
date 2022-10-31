import PreviousPage_Button from "../../components/PreviousPage_Button";
import Description_Map from "../../components/Description_Map";
import { useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import Search_Map from "../../components/Search_Map";
import NavBar from "../../components/NavBar/NavBar";

/* EXTERNAL DATA API : DATA INFORMATION */
const API_URL_DATA_INFO = process.env.API_URL_DATA_INFO;
/* EXTERNAL DATA API : DATA STATUS */
const API_URL_DATA_STATUS = process.env.API_URL_DATA_STATUS;

function Mapa({ stationData, data_status }) {
  /* DECLARED TO BE ABLE TO SAVE DATA COMPARED OF STATION_ID */
  const [stations_status, setStations_status] = useState([]);

  /* GET THE LATITUDE AND LONGITUDE IN A SINGLE CONST */
  const LatLon = {
    direction: { lat: stationData.lat, lng: stationData.lon },
  };

  /* NECESSARY TO BE ABLE TO LOAD THE MAP */
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  /* I DECALRED THIS FOR GETTING THE REST OF DETAILS IN THE SECOND API URL BY COMPARING THEM WITH 'STATION_ID'OF THE FIRST API URL */
  data_status.data.stations.filter((station_status) => {
    if (stationData.station_id == station_status.station_id) {
      stations_status.push(station_status);
    }
  });

  return (
    <div className="max-w-[1400px] ml-auto mr-auto items-center">
      <div className="w-full overflow-x-hidden overflow-y-hidden mb-5">
        {/* NAVBAR */}
        <NavBar />
      </div>
      <div>
        {/* BACKWARD BUTTON */}
        <PreviousPage_Button />
      </div>
      <div>
        {/* DESCRIPTION */}
        <Description_Map />
      </div>

      <div className="flex items-center justify-center">
        {/* MAP */}
        <Search_Map
          loadError={loadError}
          isLoaded={isLoaded}
          typeMarker="unique"
          directions={LatLon.direction}
          zoom={20}
          center={LatLon.direction}
          mapContainerClassName="map-container-station"
          stations={stationData}
          stations_status={stations_status[0]}
        />
      </div>
    </div>
  );
}
export default Mapa;

export const getStaticPaths = async () => {
  /* FETCHING DATA FROM EXTERNAL API */
  const res = await fetch(API_URL_DATA_INFO);
  const data_info = await res.json();

  const stationsUrl = data_info.data.stations.map(
    (station) => `/station_map/${station.station_id}`
  );

  return {
    paths: stationsUrl,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  {
    /* GET THE station_id BY THE PARAMS */
  }
  const station_id = params.mapa;

  /* FETCHING DATA FROM EXTERNAL API */
  const res = await fetch(API_URL_DATA_INFO);
  const data_info = await res.json();

  {
    /* OBTAIN FULL DATA FROM JSON FILE BY COMPARING WITH station_id */
  }
  let getStation = data_info.data.stations.find(
    (station) => station.station_id == station_id
  );

  {
    /* CONVERTERS: DATA TO STRING - STRING TO JSON  */
  }
  let jsonString = JSON.stringify(getStation);
  const stationData = JSON.parse(jsonString);

  if (!stationData) {
    return {
      notFound: true,
    };
  }

  /* FETCHING DATA FROM EXTERNAL API */
  const res_status = await fetch(API_URL_DATA_STATUS);
  const data_status = await res_status.json();

  return {
    props: {
      stationData,
      data_status,
    },
  };
};
