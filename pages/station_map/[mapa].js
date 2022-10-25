import NavBar from "../../components/NavBar/NavBar";
import MyMap from "../../components/MyMap";
import { useLoadScript } from "@react-google-maps/api";
import data_information from "../../data_information.json";
import data_status from "../../data_status.json";
import PreviousPage_Button from "../../components/PreviousPage_Button";
import Description_Map from "../../components/Description_Map";
import { useState } from "react";

function Mapa({ stationData }) {
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

  /* I DECALRED THIS FOR GETTING THE REST OF DETAILS IN THE SECOND JSON FILE BY COMPARING THEM WITH 'STATION_ID'OF THE FIRST JSON FILE */
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
        {!loadError && isLoaded != "" ? (
          <MyMap
            typeMarker="unique"
            direction={LatLon.direction}
            zoom={20}
            center={LatLon.direction}
            mapContainerClassName="map-container-station"
            stations={stationData}
            stations_status={stations_status[0]}
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
export default Mapa;

export const getStaticPaths = async () => {
  {
    /* FETCH METHOD: IN CASE WE ARE GETTING DATA FROM OUR DATABASE (OUR BACK-END)*/
  }
  /*const getInstitutions = () =>
    fetch(API_URL)
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error", error);
      })
      .then((data) => {
        return data.data;
      });

  //PART OF GETTING DATA FROM OUR DATABASE: OBTAINING/SAVING THE DATA TO A CONST.
  const receivedInstitutions = await getInstitutions();*/
  const stationsUrl = data_information.data.stations.map(
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

  {
    /* OBTAIN FULL DATA FROM JSON FILE BY COMPARING WITH station_id */
  }
  let getStation = data_information.data.stations.find(
    (station) => station.station_id == station_id
  );

  {
    /* CONVERTERS: DATA TO STRING - STRING TO JSON  */
  }
  let jsonString = JSON.stringify(getStation);
  const stationData = JSON.parse(jsonString);

  {
    /* FETCH METHOD: IN CASE WE ARE GETTING DATA FROM OUR DATABASE (OUR BACK-END)*/
  }
  /*const getInstitutionData = () =>
    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error", error);
      })
      .then((data) => data.data);

  const institutionData = await getInstitutionData();*/

  if (!stationData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      stationData,
    },
  };
};
